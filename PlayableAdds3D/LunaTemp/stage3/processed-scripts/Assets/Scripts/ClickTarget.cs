using UnityEngine;
using GameAnalyticsSDK;

public class ClickTarget : MonoBehaviour
{
    Camera _cam;

    private void Awake()
    {
        _cam = Camera.main;

        if (TryGetComponent<Collider>(out var col) == false)
        {
            enabled = false;}
        }

    void Update()
    {
        if (GameManager.Instance == null || GameManager.Instance.State != GameManager.GameState.GamePlay) return;

        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = _cam.ScreenPointToRay(Input.mousePosition);
            int clickableLayerMask = LayerMask.GetMask("Object");
            if (Physics.Raycast(ray, out RaycastHit hit, Mathf.Infinity, clickableLayerMask))
            {
                if (hit.collider.gameObject == gameObject)
                {
                    GameManager.Instance.OnTargetClick();
                    GameManager.Instance.RemovePoint();
                    Destroy(gameObject);

                    GameAnalytics.NewDesignEvent("click:target_hit");
                    GameAnalytics.NewDesignEvent("click:target_hit_total", GameManager.Instance.Clicks);
                }
            }
        }
    }
}
