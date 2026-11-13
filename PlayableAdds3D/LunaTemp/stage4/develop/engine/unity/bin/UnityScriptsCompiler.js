if ( TRACE ) { TRACE( JSON.parse( '["ClickTarget#Awake","ClickTarget#Update","GameManager#init","GameManager#Awake","GameManager#Start","GameManager#Update","GameManager#EnterIntroScreen","GameManager#OnTargetClick","GameManager#AddPoint","GameManager#RemovePoint","GameManager#StartGamePlay","GameManager#StartSpawn","GameManager#StopSpawn","GameManager#EnterWinScreen","GameManager#EnterLoseScreen","SpawnManager#init","SpawnManager#StartSpawning","SpawnManager#StopSpawning","SpawnManager#Spawn"]' ) ); }
/**
 * @version 1.0.9814.850
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*ClickTarget start.*/
    Bridge.define("ClickTarget", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _cam: null
        },
        methods: {
            /*ClickTarget.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ClickTarget#Awake", this ); }

                this._cam = UnityEngine.Camera.main;
                var col = { };

                if (this.TryGetComponent$1(UnityEngine.Collider, col) === false) {
                    this.enabled = false;
                }
            },
            /*ClickTarget.Awake end.*/

            /*ClickTarget.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ClickTarget#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.Instance, null) || GameManager.Instance.State !== GameManager.GameState.GamePlay) {
                    return;
                }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    var ray = this._cam.ScreenPointToRay(UnityEngine.Input.mousePosition);
                    var clickableLayerMask = UnityEngine.LayerMask.GetMask(["Object"]);
                    var hit = { v : new UnityEngine.RaycastHit() };
                    if (UnityEngine.Physics.Raycast$1(ray, hit, window.Infinity, clickableLayerMask)) {
                        if (UnityEngine.GameObject.op_Equality(hit.v.collider.gameObject, this.gameObject)) {
                            GameManager.Instance.OnTargetClick();
                            GameManager.Instance.RemovePoint();
                            UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                        }
                    }
                }
            },
            /*ClickTarget.Update end.*/


        }
    });
    /*ClickTarget end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            spawner: null,
            State: 0,
            counterText: null,
            clicksText: null,
            IntroScreen: null,
            GameScreen: null,
            WinScreen: null,
            LoseScreen: null,
            clicksToWin: 0,
            scoreToLose: 0,
            objectInScene: 0,
            clicks: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.State = GameManager.GameState.Intro;
                this.clicksToWin = 20;
                this.scoreToLose = 10;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                GameManager.Instance = this;
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                this.EnterIntroScreen();
            },
            /*GameManager.Start end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }

                if (this.State === GameManager.GameState.Intro && UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.StartGamePlay();
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.EnterIntroScreen start.*/
            EnterIntroScreen: function () {
if ( TRACE ) { TRACE( "GameManager#EnterIntroScreen", this ); }

                this.State = GameManager.GameState.Intro;
                this.clicks = 0;
                if (UnityEngine.GameObject.op_Inequality(this.IntroScreen, null)) {
                    this.IntroScreen.SetActive(true);
                }
                if (UnityEngine.GameObject.op_Inequality(this.GameScreen, null)) {
                    this.GameScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.WinScreen, null)) {
                    this.WinScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.LoseScreen, null)) {
                    this.LoseScreen.SetActive(false);
                }
            },
            /*GameManager.EnterIntroScreen end.*/

            /*GameManager.OnTargetClick start.*/
            OnTargetClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnTargetClick", this ); }

                this.clicks = (this.clicks + 1) | 0;

                this.clicksText.text = this.clicks + "/" + this.clicksToWin;

                if (this.clicks >= this.clicksToWin) {
                    this.EnterWinScreen();
                }
            },
            /*GameManager.OnTargetClick end.*/

            /*GameManager.AddPoint start.*/
            AddPoint: function () {
if ( TRACE ) { TRACE( "GameManager#AddPoint", this ); }

                this.objectInScene = (this.objectInScene + 1) | 0;

                this.counterText.text = "Objects:" + this.objectInScene + "/" + this.scoreToLose;

                if (this.objectInScene >= this.scoreToLose) {
                    this.EnterLoseScreen();
                }

            },
            /*GameManager.AddPoint end.*/

            /*GameManager.RemovePoint start.*/
            RemovePoint: function () {
if ( TRACE ) { TRACE( "GameManager#RemovePoint", this ); }

                this.objectInScene = (this.objectInScene - 1) | 0;

                this.counterText.text = "Objects:" + this.objectInScene + "/" + this.scoreToLose;

            },
            /*GameManager.RemovePoint end.*/

            /*GameManager.StartGamePlay start.*/
            StartGamePlay: function () {
if ( TRACE ) { TRACE( "GameManager#StartGamePlay", this ); }

                this.State = GameManager.GameState.GamePlay;
                if (UnityEngine.GameObject.op_Inequality(this.IntroScreen, null)) {
                    this.IntroScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.GameScreen, null)) {
                    this.GameScreen.SetActive(true);
                }
                if (UnityEngine.GameObject.op_Inequality(this.WinScreen, null)) {
                    this.WinScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.LoseScreen, null)) {
                    this.LoseScreen.SetActive(false);
                }
                this.clicksText.text = this.clicks + "/" + this.clicksToWin;
                this.counterText.text = "Objects:" + this.objectInScene + "/" + this.scoreToLose;
                this.StartSpawn();
            },
            /*GameManager.StartGamePlay end.*/

            /*GameManager.StartSpawn start.*/
            StartSpawn: function () {
if ( TRACE ) { TRACE( "GameManager#StartSpawn", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.spawner, null)) {
                    this.spawner.StartSpawning();
                }
            },
            /*GameManager.StartSpawn end.*/

            /*GameManager.StopSpawn start.*/
            StopSpawn: function () {
if ( TRACE ) { TRACE( "GameManager#StopSpawn", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.spawner, null)) {
                    this.spawner.StopSpawning();
                }
            },
            /*GameManager.StopSpawn end.*/

            /*GameManager.EnterWinScreen start.*/
            EnterWinScreen: function () {
if ( TRACE ) { TRACE( "GameManager#EnterWinScreen", this ); }

                this.State = GameManager.GameState.Win;
                if (UnityEngine.GameObject.op_Inequality(this.IntroScreen, null)) {
                    this.IntroScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.GameScreen, null)) {
                    this.GameScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.WinScreen, null)) {
                    this.WinScreen.SetActive(true);
                }
                if (UnityEngine.GameObject.op_Inequality(this.LoseScreen, null)) {
                    this.LoseScreen.SetActive(false);
                }
                this.StopSpawn();
            },
            /*GameManager.EnterWinScreen end.*/

            /*GameManager.EnterLoseScreen start.*/
            EnterLoseScreen: function () {
if ( TRACE ) { TRACE( "GameManager#EnterLoseScreen", this ); }

                this.State = GameManager.GameState.Lose;
                if (UnityEngine.GameObject.op_Inequality(this.IntroScreen, null)) {
                    this.IntroScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.GameScreen, null)) {
                    this.GameScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.WinScreen, null)) {
                    this.WinScreen.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.LoseScreen, null)) {
                    this.LoseScreen.SetActive(true);
                }
                this.StopSpawn();
            },
            /*GameManager.EnterLoseScreen end.*/


        }
    });
    /*GameManager end.*/

    /*GameManager+GameState start.*/
    Bridge.define("GameManager.GameState", {
        $kind: 1006,
        statics: {
            fields: {
                Intro: 0,
                GamePlay: 1,
                Win: 2,
                Lose: 3
            }
        }
    });
    /*GameManager+GameState end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*SpawnManager start.*/
    Bridge.define("SpawnManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            objects: null,
            spawnInterval: 0,
            spawnAreaCenter: null,
            spawnAreaSize: null,
            spawnProcess: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SpawnManager#init", this ); }

                this.spawnAreaCenter = new UnityEngine.Vector3();
                this.spawnAreaSize = new UnityEngine.Vector3();
                this.objects = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.spawnInterval = 2.0;
                this.spawnAreaCenter = pc.Vec3.ZERO.clone();
                this.spawnAreaSize = new pc.Vec3( 10.0, 1.0, 10.0 );
            }
        },
        methods: {
            /*SpawnManager.StartSpawning start.*/
            StartSpawning: function () {
if ( TRACE ) { TRACE( "SpawnManager#StartSpawning", this ); }

                if (this.spawnProcess != null) {
                    return;
                }
                this.spawnProcess = this.StartCoroutine$1(this.Spawn());
            },
            /*SpawnManager.StartSpawning end.*/

            /*SpawnManager.StopSpawning start.*/
            StopSpawning: function () {
if ( TRACE ) { TRACE( "SpawnManager#StopSpawning", this ); }

                if (this.spawnProcess != null) {
                    this.StopCoroutine$2(this.spawnProcess);
                    this.spawnProcess = null;
                }
            },
            /*SpawnManager.StopSpawning end.*/

            /*SpawnManager.Spawn start.*/
            Spawn: function () {
if ( TRACE ) { TRACE( "SpawnManager#Spawn", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    randomIndex,
                    prefabToSpawn,
                    offsetX,
                    offsetZ,
                    offsetY,
                    randomPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 1: {
                                    if (this.objects.Count === 0) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 2: {
                                    return false;
                                }
                                case 3: {
                                    randomIndex = UnityEngine.Random.Range(0, this.objects.Count);
                                        prefabToSpawn = this.objects.getItem(randomIndex);

                                        if (UnityEngine.GameObject.op_Equality(prefabToSpawn, null)) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    offsetX = this.spawnAreaSize.x / 2.0 + 0.001;
                                        offsetZ = this.spawnAreaSize.z / 2.0 + 0.001;
                                        offsetY = this.spawnAreaSize.y / 2.0 + 0.001;

                                        randomPos = new pc.Vec3( UnityEngine.Random.Range$1(this.spawnAreaCenter.x - offsetX, this.spawnAreaCenter.x + offsetX), UnityEngine.Random.Range$1(this.spawnAreaCenter.y - offsetY, this.spawnAreaCenter.y + offsetY), UnityEngine.Random.Range$1(this.spawnAreaCenter.z - offsetZ, this.spawnAreaCenter.z + offsetZ) );

                                        UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, prefabToSpawn, randomPos, pc.Quat.IDENTITY.clone(), this.transform);

                                        GameManager.Instance.AddPoint();

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.spawnInterval);
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SpawnManager.Spawn end.*/


        }
    });
    /*SpawnManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.UI","System.Collections","System.Collections.Generic"];

    /*ClickTarget start.*/
    $m("ClickTarget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_cam","t":4,"rt":$n[1].Camera,"sn":"_cam"}]}; }, $n);
    /*ClickTarget end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"nested":[GameManager.GameState],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddPoint","t":8,"sn":"AddPoint","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EnterIntroScreen","t":8,"sn":"EnterIntroScreen","rt":$n[0].Void},{"a":1,"n":"EnterLoseScreen","t":8,"sn":"EnterLoseScreen","rt":$n[0].Void},{"a":1,"n":"EnterWinScreen","t":8,"sn":"EnterWinScreen","rt":$n[0].Void},{"a":2,"n":"OnTargetClick","t":8,"sn":"OnTargetClick","rt":$n[0].Void},{"a":2,"n":"RemovePoint","t":8,"sn":"RemovePoint","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartGamePlay","t":8,"sn":"StartGamePlay","rt":$n[0].Void},{"a":1,"n":"StartSpawn","t":8,"sn":"StartSpawn","rt":$n[0].Void},{"a":1,"n":"StopSpawn","t":8,"sn":"StopSpawn","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GameManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"State","t":16,"rt":GameManager.GameState,"g":{"a":2,"n":"get_State","t":8,"rt":GameManager.GameState,"fg":"State","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}},"s":{"a":1,"n":"set_State","t":8,"p":[GameManager.GameState],"rt":$n[0].Void,"fs":"State"},"fn":"State"},{"a":2,"n":"GameScreen","t":4,"rt":$n[1].GameObject,"sn":"GameScreen"},{"a":2,"n":"IntroScreen","t":4,"rt":$n[1].GameObject,"sn":"IntroScreen"},{"a":2,"n":"LoseScreen","t":4,"rt":$n[1].GameObject,"sn":"LoseScreen"},{"a":2,"n":"WinScreen","t":4,"rt":$n[1].GameObject,"sn":"WinScreen"},{"a":1,"n":"__Property__Initializer__State","t":4,"rt":GameManager.GameState,"sn":"__Property__Initializer__State","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}},{"a":1,"n":"clicks","t":4,"rt":$n[0].Int32,"sn":"clicks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clicksText","t":4,"rt":$n[2].Text,"sn":"clicksText"},{"a":2,"n":"clicksToWin","t":4,"rt":$n[0].Int32,"sn":"clicksToWin","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"counterText","t":4,"rt":$n[2].Text,"sn":"counterText"},{"a":1,"n":"objectInScene","t":4,"rt":$n[0].Int32,"sn":"objectInScene","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"scoreToLose","t":4,"rt":$n[0].Int32,"sn":"scoreToLose","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawner","t":4,"rt":SpawnManager,"sn":"spawner"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"a":1,"backing":true,"n":"<State>k__BackingField","t":4,"rt":GameManager.GameState,"sn":"State","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}}]}; }, $n);
    /*GameManager end.*/

    /*GameManager+GameState start.*/
    $m("GameManager.GameState", function () { return {"td":GameManager,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GamePlay","is":true,"t":4,"rt":GameManager.GameState,"sn":"GamePlay","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}},{"a":2,"n":"Intro","is":true,"t":4,"rt":GameManager.GameState,"sn":"Intro","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}},{"a":2,"n":"Lose","is":true,"t":4,"rt":GameManager.GameState,"sn":"Lose","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}},{"a":2,"n":"Win","is":true,"t":4,"rt":GameManager.GameState,"sn":"Win","box":function ($v) { return Bridge.box($v, GameManager.GameState, System.Enum.toStringFn(GameManager.GameState));}}]}; }, $n);
    /*GameManager+GameState end.*/

    /*SpawnManager start.*/
    $m("SpawnManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Spawn","t":8,"sn":"Spawn","rt":$n[3].IEnumerator},{"a":2,"n":"StartSpawning","t":8,"sn":"StartSpawning","rt":$n[0].Void},{"a":2,"n":"StopSpawning","t":8,"sn":"StopSpawning","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"objects","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"objects"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnAreaCenter","t":4,"rt":$n[1].Vector3,"sn":"spawnAreaCenter"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnAreaSize","t":4,"rt":$n[1].Vector3,"sn":"spawnAreaSize"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnInterval","t":4,"rt":$n[0].Single,"sn":"spawnInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"spawnProcess","t":4,"rt":$n[1].Coroutine,"sn":"spawnProcess"}]}; }, $n);
    /*SpawnManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
