using UnityEngine;
using UnityEngine.UI;
using GameAnalyticsSDK;

public class GameManager : MonoBehaviour
{
    [SerializeField] private SpawnManager spawner;

    public enum GameState { Intro, GamePlay, Win, Lose }

    public GameState State { get; private set; } = GameState.Intro;

    public static GameManager Instance { get; private set; }

    [SerializeField] private Text counterText;
    [SerializeField] private Text clicksText;

    public GameObject IntroScreen;
    public GameObject GameScreen;
    public GameObject WinScreen;
    public GameObject LoseScreen;

    public int clicksToWin = 20;
    public int scoreToLose = 10;
    private int objectInScene;

    public int Clicks;

    private void Awake()
    {
        Instance = this;
        GameAnalytics.Initialize();
    }

    void Start()
    {
        EnterIntroScreen();
    }

    void Update()
    {
        if (State == GameState.Intro && Input.GetMouseButtonDown(0))
        {
            StartGamePlay();

            GameAnalytics.NewDesignEvent("game:start");
        }

        if (Input.GetKeyDown(KeyCode.E)) GameAnalytics.NewErrorEvent(GAErrorSeverity.Warning, "Manual test error");
    }

    void EnterIntroScreen()
    {
        State = GameState.Intro;
        Clicks = 0;
        if (IntroScreen != null) IntroScreen.SetActive(true);
        if (GameScreen != null) GameScreen.SetActive(false);
        if (WinScreen != null) WinScreen.SetActive(false);
        if (LoseScreen != null) LoseScreen.SetActive(false);
    }

    public void OnTargetClick()
    {
        Clicks++;

        clicksText.text = Clicks + "/" + clicksToWin;

        if (Clicks >= clicksToWin)
        {
            EnterWinScreen();
        }
    }
    public void AddPoint()
    {
        objectInScene++;

        counterText.text = "Objects:" + objectInScene + "/" + scoreToLose;

        if (objectInScene >= scoreToLose) EnterLoseScreen();

    }

    public void RemovePoint()
    {
        objectInScene--;

        counterText.text = "Objects:" + objectInScene + "/" + scoreToLose;

    }

    public void StartGamePlay()
    {
        State = GameState.GamePlay;
        if (IntroScreen != null) IntroScreen.SetActive(false);
        if (GameScreen != null) GameScreen.SetActive(true);
        if (WinScreen != null) WinScreen.SetActive(false);
        if (LoseScreen != null) LoseScreen.SetActive(false);
        clicksText.text = Clicks + "/" + clicksToWin;
        counterText.text = "Objects:" + objectInScene + "/" + scoreToLose;
        StartSpawn();

        GameAnalytics.NewProgressionEvent(GAProgressionStatus.Start, "Round");
    }

    private void StartSpawn() 
    { 
        if (spawner != null)
        { 
            spawner.StartSpawning();
        }
    }
    private void StopSpawn()
    {
        if (spawner != null)
        {
            spawner.StopSpawning();
        }
    }

    private void EnterWinScreen()
    {
        State = GameState.Win;
        if (IntroScreen != null) IntroScreen.SetActive(false);
        if (GameScreen != null) GameScreen.SetActive(false);
        if (WinScreen != null) WinScreen.SetActive(true);
        if (LoseScreen != null) LoseScreen.SetActive(false);
        StopSpawn();

        GameAnalytics.NewProgressionEvent(GAProgressionStatus.Complete, "Round", Clicks);
    }

    private void EnterLoseScreen()
    {
        State = GameState.Lose;
        if (IntroScreen != null) IntroScreen.SetActive(false);
        if (GameScreen != null) GameScreen.SetActive(false);
        if (WinScreen != null) WinScreen.SetActive(false);
        if (LoseScreen != null) LoseScreen.SetActive(true);
        StopSpawn();

        GameAnalytics.NewProgressionEvent(GAProgressionStatus.Fail, "Round", Clicks);
    }
}
