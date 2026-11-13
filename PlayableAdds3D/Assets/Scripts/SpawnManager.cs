using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnManager : MonoBehaviour
{
    [SerializeField] private List<GameObject> objects = new List<GameObject>();
    [SerializeField] private float spawnInterval = 2f;
    [SerializeField] private Vector3 spawnAreaCenter = Vector3.zero;
    [SerializeField] private Vector3 spawnAreaSize = new Vector3(10f, 1f, 10f);

    private Coroutine spawnProcess;

    public void StartSpawning()
    {
        if (spawnProcess != null) return;
        spawnProcess = StartCoroutine(Spawn());
    }

    public void StopSpawning()
    {
        if (spawnProcess != null)
        {
            StopCoroutine(spawnProcess);
            spawnProcess = null;
        }
    }

    private IEnumerator Spawn()
    {
        while (true)
        {
            if (objects.Count == 0) yield break;
            int randomIndex = Random.Range(0, objects.Count);
            GameObject prefabToSpawn = objects[randomIndex];

            if (prefabToSpawn == null) yield return null;

            float offsetX = spawnAreaSize.x / 2f + 0.001f;
            float offsetZ = spawnAreaSize.z / 2f + 0.001f;
            float offsetY = spawnAreaSize.y / 2f + 0.001f;

            Vector3 randomPos = new Vector3(
                Random.Range(spawnAreaCenter.x - offsetX, spawnAreaCenter.x + offsetX),
                Random.Range(spawnAreaCenter.y - offsetY, spawnAreaCenter.y + offsetY),
                Random.Range(spawnAreaCenter.z - offsetZ, spawnAreaCenter.z + offsetZ));

            Instantiate(prefabToSpawn, randomPos, Quaternion.identity, transform);

            GameManager.Instance.AddPoint();

            yield return new WaitForSeconds(spawnInterval);
        }
    }
}
