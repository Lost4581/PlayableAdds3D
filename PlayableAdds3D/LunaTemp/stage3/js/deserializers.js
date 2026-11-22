var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointSpring' )
  var i483 = data
  i482.spring = i483[0]
  i482.damper = i483[1]
  i482.targetPosition = i483[2]
  return i482
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointMotor' )
  var i485 = data
  i484.m_TargetVelocity = i485[0]
  i484.m_Force = i485[1]
  i484.m_FreeSpin = i485[2]
  return i484
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointLimits' )
  var i487 = data
  i486.m_Min = i487[0]
  i486.m_Max = i487[1]
  i486.m_Bounciness = i487[2]
  i486.m_BounceMinVelocity = i487[3]
  i486.m_ContactDistance = i487[4]
  i486.minBounce = i487[5]
  i486.maxBounce = i487[6]
  return i486
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointDrive' )
  var i489 = data
  i488.m_PositionSpring = i489[0]
  i488.m_PositionDamper = i489[1]
  i488.m_MaximumForce = i489[2]
  i488.m_UseAcceleration = i489[3]
  return i488
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i491 = data
  i490.m_Spring = i491[0]
  i490.m_Damper = i491[1]
  return i490
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i493 = data
  i492.m_Limit = i493[0]
  i492.m_Bounciness = i493[1]
  i492.m_ContactDistance = i493[2]
  return i492
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i495 = data
  i494.m_ExtremumSlip = i495[0]
  i494.m_ExtremumValue = i495[1]
  i494.m_AsymptoteSlip = i495[2]
  i494.m_AsymptoteValue = i495[3]
  i494.m_Stiffness = i495[4]
  return i494
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i497 = data
  i496.m_LowerAngle = i497[0]
  i496.m_UpperAngle = i497[1]
  return i496
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i499 = data
  i498.m_MotorSpeed = i499[0]
  i498.m_MaximumMotorTorque = i499[1]
  return i498
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i501 = data
  i500.m_DampingRatio = i501[0]
  i500.m_Frequency = i501[1]
  i500.m_Angle = i501[2]
  return i500
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i503 = data
  i502.m_LowerTranslation = i503[0]
  i502.m_UpperTranslation = i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i505 = data
  i504.position = new pc.Vec3( i505[0], i505[1], i505[2] )
  i504.scale = new pc.Vec3( i505[3], i505[4], i505[5] )
  i504.rotation = new pc.Quat(i505[6], i505[7], i505[8], i505[9])
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'sharedMesh')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'additionalVertexStreams')
  i508.enabled = !!i509[2]
  request.r(i509[3], i509[4], 0, i508, 'sharedMaterial')
  var i511 = i509[5]
  var i510 = []
  for(var i = 0; i < i511.length; i += 2) {
  request.r(i511[i + 0], i511[i + 1], 2, i510, '')
  }
  i508.sharedMaterials = i510
  i508.receiveShadows = !!i509[6]
  i508.shadowCastingMode = i509[7]
  i508.sortingLayerID = i509[8]
  i508.sortingOrder = i509[9]
  i508.lightmapIndex = i509[10]
  i508.lightmapSceneIndex = i509[11]
  i508.lightmapScaleOffset = new pc.Vec4( i509[12], i509[13], i509[14], i509[15] )
  i508.lightProbeUsage = i509[16]
  i508.reflectionProbeUsage = i509[17]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i515 = data
  i514.center = new pc.Vec3( i515[0], i515[1], i515[2] )
  i514.radius = i515[3]
  i514.height = i515[4]
  i514.direction = i515[5]
  i514.enabled = !!i515[6]
  i514.isTrigger = !!i515[7]
  request.r(i515[8], i515[9], 0, i514, 'material')
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i517 = data
  i516.mass = i517[0]
  i516.drag = i517[1]
  i516.angularDrag = i517[2]
  i516.useGravity = !!i517[3]
  i516.isKinematic = !!i517[4]
  i516.constraints = i517[5]
  i516.maxAngularVelocity = i517[6]
  i516.collisionDetectionMode = i517[7]
  i516.interpolation = i517[8]
  return i516
}

Deserializers["ClickTarget"] = function (request, data, root) {
  var i518 = root || request.c( 'ClickTarget' )
  var i519 = data
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i521 = data
  i520.name = i521[0]
  i520.tagId = i521[1]
  i520.enabled = !!i521[2]
  i520.isStatic = !!i521[3]
  i520.layer = i521[4]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i523 = data
  i522.name = i523[0]
  i522.halfPrecision = !!i523[1]
  i522.useSimplification = !!i523[2]
  i522.useUInt32IndexFormat = !!i523[3]
  i522.vertexCount = i523[4]
  i522.aabb = i523[5]
  var i525 = i523[6]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( !!i525[i + 0] );
  }
  i522.streams = i524
  i522.vertices = i523[7]
  var i527 = i523[8]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i527[i + 0]) );
  }
  i522.subMeshes = i526
  var i529 = i523[9]
  var i528 = []
  for(var i = 0; i < i529.length; i += 16) {
    i528.push( new pc.Mat4().setData(i529[i + 0], i529[i + 1], i529[i + 2], i529[i + 3],  i529[i + 4], i529[i + 5], i529[i + 6], i529[i + 7],  i529[i + 8], i529[i + 9], i529[i + 10], i529[i + 11],  i529[i + 12], i529[i + 13], i529[i + 14], i529[i + 15]) );
  }
  i522.bindposes = i528
  var i531 = i523[10]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i531[i + 0]) );
  }
  i522.blendShapes = i530
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i537 = data
  i536.triangles = i537[0]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i543 = data
  i542.name = i543[0]
  var i545 = i543[1]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i545[i + 0]) );
  }
  i542.frames = i544
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i546 = root || new pc.UnityMaterial()
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'shader')
  i546.renderQueue = i547[3]
  i546.enableInstancing = !!i547[4]
  var i549 = i547[5]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i549[i + 0]) );
  }
  i546.floatParameters = i548
  var i551 = i547[6]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i551[i + 0]) );
  }
  i546.colorParameters = i550
  var i553 = i547[7]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i553[i + 0]) );
  }
  i546.vectorParameters = i552
  var i555 = i547[8]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i555[i + 0]) );
  }
  i546.textureParameters = i554
  var i557 = i547[9]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i557[i + 0]) );
  }
  i546.materialFlags = i556
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = new pc.Color(i565[1], i565[2], i565[3], i565[4])
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = new pc.Vec4( i569[1], i569[2], i569[3], i569[4] )
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i573 = data
  i572.name = i573[0]
  request.r(i573[1], i573[2], 0, i572, 'value')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i577 = data
  i576.name = i577[0]
  i576.enabled = !!i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i579 = data
  i578.center = new pc.Vec3( i579[0], i579[1], i579[2] )
  i578.size = new pc.Vec3( i579[3], i579[4], i579[5] )
  i578.enabled = !!i579[6]
  i578.isTrigger = !!i579[7]
  request.r(i579[8], i579[9], 0, i578, 'material')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i581 = data
  i580.center = new pc.Vec3( i581[0], i581[1], i581[2] )
  i580.radius = i581[3]
  i580.enabled = !!i581[4]
  i580.isTrigger = !!i581[5]
  request.r(i581[6], i581[7], 0, i580, 'material')
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i583 = data
  i582.name = i583[0]
  i582.width = i583[1]
  i582.height = i583[2]
  i582.mipmapCount = i583[3]
  i582.anisoLevel = i583[4]
  i582.filterMode = i583[5]
  i582.hdr = !!i583[6]
  i582.format = i583[7]
  i582.wrapMode = i583[8]
  i582.alphaIsTransparency = !!i583[9]
  i582.alphaSource = i583[10]
  i582.graphicsFormat = i583[11]
  i582.sRGBTexture = !!i583[12]
  i582.desiredColorSpace = i583[13]
  i582.wrapU = i583[14]
  i582.wrapV = i583[15]
  return i582
}

Deserializers["GameAnalyticsSDK.Events.GA_SpecialEvents"] = function (request, data, root) {
  var i584 = root || request.c( 'GameAnalyticsSDK.Events.GA_SpecialEvents' )
  var i585 = data
  return i584
}

Deserializers["GameAnalyticsSDK.GameAnalytics"] = function (request, data, root) {
  var i586 = root || request.c( 'GameAnalyticsSDK.GameAnalytics' )
  var i587 = data
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i589 = data
  i588.name = i589[0]
  i588.atlasId = i589[1]
  i588.mipmapCount = i589[2]
  i588.hdr = !!i589[3]
  i588.size = i589[4]
  i588.anisoLevel = i589[5]
  i588.filterMode = i589[6]
  var i591 = i589[7]
  var i590 = []
  for(var i = 0; i < i591.length; i += 4) {
    i590.push( UnityEngine.Rect.MinMaxRect(i591[i + 0], i591[i + 1], i591[i + 2], i591[i + 3]) );
  }
  i588.rects = i590
  i588.wrapU = i589[8]
  i588.wrapV = i589[9]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i595 = data
  i594.name = i595[0]
  i594.index = i595[1]
  i594.startup = !!i595[2]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i597 = data
  i596.aspect = i597[0]
  i596.orthographic = !!i597[1]
  i596.orthographicSize = i597[2]
  i596.backgroundColor = new pc.Color(i597[3], i597[4], i597[5], i597[6])
  i596.nearClipPlane = i597[7]
  i596.farClipPlane = i597[8]
  i596.fieldOfView = i597[9]
  i596.depth = i597[10]
  i596.clearFlags = i597[11]
  i596.cullingMask = i597[12]
  i596.rect = i597[13]
  request.r(i597[14], i597[15], 0, i596, 'targetTexture')
  i596.usePhysicalProperties = !!i597[16]
  i596.focalLength = i597[17]
  i596.sensorSize = new pc.Vec2( i597[18], i597[19] )
  i596.lensShift = new pc.Vec2( i597[20], i597[21] )
  i596.gateFit = i597[22]
  i596.commandBufferCount = i597[23]
  i596.cameraType = i597[24]
  i596.enabled = !!i597[25]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i599 = data
  i598.type = i599[0]
  i598.color = new pc.Color(i599[1], i599[2], i599[3], i599[4])
  i598.cullingMask = i599[5]
  i598.intensity = i599[6]
  i598.range = i599[7]
  i598.spotAngle = i599[8]
  i598.shadows = i599[9]
  i598.shadowNormalBias = i599[10]
  i598.shadowBias = i599[11]
  i598.shadowStrength = i599[12]
  i598.shadowResolution = i599[13]
  i598.lightmapBakeType = i599[14]
  i598.renderMode = i599[15]
  request.r(i599[16], i599[17], 0, i598, 'cookie')
  i598.cookieSize = i599[18]
  i598.shadowNearPlane = i599[19]
  i598.occlusionMaskChannel = i599[20]
  i598.isBaked = !!i599[21]
  i598.mixedLightingMode = i599[22]
  i598.enabled = !!i599[23]
  return i598
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'm_FirstSelected')
  i600.m_sendNavigationEvents = !!i601[2]
  i600.m_DragThreshold = i601[3]
  return i600
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i603 = data
  i602.m_MoveRepeatDelay = i603[0]
  i602.m_MoveRepeatRate = i603[1]
  request.r(i603[2], i603[3], 0, i602, 'm_XRTrackingOrigin')
  request.r(i603[4], i603[5], 0, i602, 'm_ActionsAsset')
  request.r(i603[6], i603[7], 0, i602, 'm_PointAction')
  request.r(i603[8], i603[9], 0, i602, 'm_MoveAction')
  request.r(i603[10], i603[11], 0, i602, 'm_SubmitAction')
  request.r(i603[12], i603[13], 0, i602, 'm_CancelAction')
  request.r(i603[14], i603[15], 0, i602, 'm_LeftClickAction')
  request.r(i603[16], i603[17], 0, i602, 'm_MiddleClickAction')
  request.r(i603[18], i603[19], 0, i602, 'm_RightClickAction')
  request.r(i603[20], i603[21], 0, i602, 'm_ScrollWheelAction')
  request.r(i603[22], i603[23], 0, i602, 'm_TrackedDevicePositionAction')
  request.r(i603[24], i603[25], 0, i602, 'm_TrackedDeviceOrientationAction')
  i602.m_DeselectOnBackgroundClick = !!i603[26]
  i602.m_PointerBehavior = i603[27]
  i602.m_CursorLockBehavior = i603[28]
  i602.m_ScrollDeltaPerTick = i603[29]
  i602.m_SendPointerHoverToParent = !!i603[30]
  return i602
}

Deserializers["GameManager"] = function (request, data, root) {
  var i604 = root || request.c( 'GameManager' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'IntroScreen')
  request.r(i605[2], i605[3], 0, i604, 'GameScreen')
  request.r(i605[4], i605[5], 0, i604, 'WinScreen')
  request.r(i605[6], i605[7], 0, i604, 'LoseScreen')
  i604.clicksToWin = i605[8]
  i604.scoreToLose = i605[9]
  i604.Clicks = i605[10]
  request.r(i605[11], i605[12], 0, i604, 'spawner')
  request.r(i605[13], i605[14], 0, i604, 'counterText')
  request.r(i605[15], i605[16], 0, i604, 'clicksText')
  return i604
}

Deserializers["SpawnManager"] = function (request, data, root) {
  var i606 = root || request.c( 'SpawnManager' )
  var i607 = data
  var i609 = i607[0]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 1, i608, '')
  }
  i606.objects = i608
  i606.spawnInterval = i607[1]
  i606.spawnAreaCenter = new pc.Vec3( i607[2], i607[3], i607[4] )
  i606.spawnAreaSize = new pc.Vec3( i607[5], i607[6], i607[7] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'sharedMesh')
  i612.convex = !!i613[2]
  i612.enabled = !!i613[3]
  i612.isTrigger = !!i613[4]
  request.r(i613[5], i613[6], 0, i612, 'material')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i615 = data
  i614.pivot = new pc.Vec2( i615[0], i615[1] )
  i614.anchorMin = new pc.Vec2( i615[2], i615[3] )
  i614.anchorMax = new pc.Vec2( i615[4], i615[5] )
  i614.sizeDelta = new pc.Vec2( i615[6], i615[7] )
  i614.anchoredPosition3D = new pc.Vec3( i615[8], i615[9], i615[10] )
  i614.rotation = new pc.Quat(i615[11], i615[12], i615[13], i615[14])
  i614.scale = new pc.Vec3( i615[15], i615[16], i615[17] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i617 = data
  i616.planeDistance = i617[0]
  i616.referencePixelsPerUnit = i617[1]
  i616.isFallbackOverlay = !!i617[2]
  i616.renderMode = i617[3]
  i616.renderOrder = i617[4]
  i616.sortingLayerName = i617[5]
  i616.sortingOrder = i617[6]
  i616.scaleFactor = i617[7]
  request.r(i617[8], i617[9], 0, i616, 'worldCamera')
  i616.overrideSorting = !!i617[10]
  i616.pixelPerfect = !!i617[11]
  i616.targetDisplay = i617[12]
  i616.overridePixelPerfect = !!i617[13]
  i616.enabled = !!i617[14]
  return i616
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i619 = data
  i618.m_UiScaleMode = i619[0]
  i618.m_ReferencePixelsPerUnit = i619[1]
  i618.m_ScaleFactor = i619[2]
  i618.m_ReferenceResolution = new pc.Vec2( i619[3], i619[4] )
  i618.m_ScreenMatchMode = i619[5]
  i618.m_MatchWidthOrHeight = i619[6]
  i618.m_PhysicalUnit = i619[7]
  i618.m_FallbackScreenDPI = i619[8]
  i618.m_DefaultSpriteDPI = i619[9]
  i618.m_DynamicPixelsPerUnit = i619[10]
  i618.m_PresetInfoIsWorld = !!i619[11]
  return i618
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i621 = data
  i620.m_IgnoreReversedGraphics = !!i621[0]
  i620.m_BlockingObjects = i621[1]
  i620.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i621[2] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i623 = data
  i622.cullTransparentMesh = !!i623[0]
  return i622
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.Image' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'm_Sprite')
  i624.m_Type = i625[2]
  i624.m_PreserveAspect = !!i625[3]
  i624.m_FillCenter = !!i625[4]
  i624.m_FillMethod = i625[5]
  i624.m_FillAmount = i625[6]
  i624.m_FillClockwise = !!i625[7]
  i624.m_FillOrigin = i625[8]
  i624.m_UseSpriteMesh = !!i625[9]
  i624.m_PixelsPerUnitMultiplier = i625[10]
  request.r(i625[11], i625[12], 0, i624, 'm_Material')
  i624.m_Maskable = !!i625[13]
  i624.m_Color = new pc.Color(i625[14], i625[15], i625[16], i625[17])
  i624.m_RaycastTarget = !!i625[18]
  i624.m_RaycastPadding = new pc.Vec4( i625[19], i625[20], i625[21], i625[22] )
  return i624
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.Text' )
  var i627 = data
  i626.m_FontData = request.d('UnityEngine.UI.FontData', i627[0], i626.m_FontData)
  i626.m_Text = i627[1]
  request.r(i627[2], i627[3], 0, i626, 'm_Material')
  i626.m_Maskable = !!i627[4]
  i626.m_Color = new pc.Color(i627[5], i627[6], i627[7], i627[8])
  i626.m_RaycastTarget = !!i627[9]
  i626.m_RaycastPadding = new pc.Vec4( i627[10], i627[11], i627[12], i627[13] )
  return i626
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.FontData' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_Font')
  i628.m_FontSize = i629[2]
  i628.m_FontStyle = i629[3]
  i628.m_BestFit = !!i629[4]
  i628.m_MinSize = i629[5]
  i628.m_MaxSize = i629[6]
  i628.m_Alignment = i629[7]
  i628.m_AlignByGeometry = !!i629[8]
  i628.m_RichText = !!i629[9]
  i628.m_HorizontalOverflow = i629[10]
  i628.m_VerticalOverflow = i629[11]
  i628.m_LineSpacing = i629[12]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i631 = data
  i630.ambientIntensity = i631[0]
  i630.reflectionIntensity = i631[1]
  i630.ambientMode = i631[2]
  i630.ambientLight = new pc.Color(i631[3], i631[4], i631[5], i631[6])
  i630.ambientSkyColor = new pc.Color(i631[7], i631[8], i631[9], i631[10])
  i630.ambientGroundColor = new pc.Color(i631[11], i631[12], i631[13], i631[14])
  i630.ambientEquatorColor = new pc.Color(i631[15], i631[16], i631[17], i631[18])
  i630.fogColor = new pc.Color(i631[19], i631[20], i631[21], i631[22])
  i630.fogEndDistance = i631[23]
  i630.fogStartDistance = i631[24]
  i630.fogDensity = i631[25]
  i630.fog = !!i631[26]
  request.r(i631[27], i631[28], 0, i630, 'skybox')
  i630.fogMode = i631[29]
  var i633 = i631[30]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i633[i + 0]) );
  }
  i630.lightmaps = i632
  i630.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i631[31], i630.lightProbes)
  i630.lightmapsMode = i631[32]
  i630.mixedBakeMode = i631[33]
  i630.environmentLightingMode = i631[34]
  i630.ambientProbe = new pc.SphericalHarmonicsL2(i631[35])
  request.r(i631[36], i631[37], 0, i630, 'customReflection')
  request.r(i631[38], i631[39], 0, i630, 'defaultReflection')
  i630.defaultReflectionMode = i631[40]
  i630.defaultReflectionResolution = i631[41]
  i630.sunLightObjectId = i631[42]
  i630.pixelLightCount = i631[43]
  i630.defaultReflectionHDR = !!i631[44]
  i630.hasLightDataAsset = !!i631[45]
  i630.hasManualGenerate = !!i631[46]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'lightmapColor')
  request.r(i637[2], i637[3], 0, i636, 'lightmapDirection')
  request.r(i637[4], i637[5], 0, i636, 'shadowMask')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i638 = root || new UnityEngine.LightProbes()
  var i639 = data
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i647 = data
  var i649 = i647[0]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i649[i + 0]));
  }
  i646.ShaderCompilationErrors = i648
  i646.name = i647[1]
  i646.guid = i647[2]
  var i651 = i647[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i646.shaderDefinedKeywords = i650
  var i653 = i647[4]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i653[i + 0]) );
  }
  i646.passes = i652
  var i655 = i647[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i655[i + 0]) );
  }
  i646.usePasses = i654
  var i657 = i647[6]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i657[i + 0]) );
  }
  i646.defaultParameterValues = i656
  request.r(i647[7], i647[8], 0, i646, 'unityFallbackShader')
  i646.readDepth = !!i647[9]
  i646.hasDepthOnlyPass = !!i647[10]
  i646.isCreatedByShaderGraph = !!i647[11]
  i646.disableBatching = !!i647[12]
  i646.compiled = !!i647[13]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i661 = data
  i660.shaderName = i661[0]
  i660.errorMessage = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i666 = root || new pc.UnityShaderPass()
  var i667 = data
  i666.id = i667[0]
  i666.subShaderIndex = i667[1]
  i666.name = i667[2]
  i666.passType = i667[3]
  i666.grabPassTextureName = i667[4]
  i666.usePass = !!i667[5]
  i666.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[6], i666.zTest)
  i666.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[7], i666.zWrite)
  i666.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[8], i666.culling)
  i666.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i667[9], i666.blending)
  i666.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i667[10], i666.alphaBlending)
  i666.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[11], i666.colorWriteMask)
  i666.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[12], i666.offsetUnits)
  i666.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[13], i666.offsetFactor)
  i666.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[14], i666.stencilRef)
  i666.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[15], i666.stencilReadMask)
  i666.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[16], i666.stencilWriteMask)
  i666.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[17], i666.stencilOp)
  i666.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[18], i666.stencilOpFront)
  i666.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[19], i666.stencilOpBack)
  var i669 = i667[20]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i669[i + 0]) );
  }
  i666.tags = i668
  var i671 = i667[21]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i666.passDefinedKeywords = i670
  var i673 = i667[22]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i673[i + 0]) );
  }
  i666.passDefinedKeywordGroups = i672
  var i675 = i667[23]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i675[i + 0]) );
  }
  i666.variants = i674
  var i677 = i667[24]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i677[i + 0]) );
  }
  i666.excludedVariants = i676
  i666.hasDepthReader = !!i667[25]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i679 = data
  i678.val = i679[0]
  i678.name = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i681 = data
  i680.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[0], i680.src)
  i680.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[1], i680.dst)
  i680.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[2], i680.op)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i683 = data
  i682.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[0], i682.pass)
  i682.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[1], i682.fail)
  i682.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[2], i682.zFail)
  i682.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[3], i682.comp)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i687 = data
  i686.name = i687[0]
  i686.value = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i691 = data
  var i693 = i691[0]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( i693[i + 0] );
  }
  i690.keywords = i692
  i690.hasDiscard = !!i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i697 = data
  i696.passId = i697[0]
  i696.subShaderIndex = i697[1]
  var i699 = i697[2]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i696.keywords = i698
  i696.vertexProgram = i697[3]
  i696.fragmentProgram = i697[4]
  i696.exportedForWebGl2 = !!i697[5]
  i696.readDepth = !!i697[6]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'shader')
  i702.pass = i703[2]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i707 = data
  i706.name = i707[0]
  i706.type = i707[1]
  i706.value = new pc.Vec4( i707[2], i707[3], i707[4], i707[5] )
  i706.textureValue = i707[6]
  i706.shaderPropertyFlag = i707[7]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i709 = data
  i708.name = i709[0]
  request.r(i709[1], i709[2], 0, i708, 'texture')
  i708.aabb = i709[3]
  i708.vertices = i709[4]
  i708.triangles = i709[5]
  i708.textureRect = UnityEngine.Rect.MinMaxRect(i709[6], i709[7], i709[8], i709[9])
  i708.packedRect = UnityEngine.Rect.MinMaxRect(i709[10], i709[11], i709[12], i709[13])
  i708.border = new pc.Vec4( i709[14], i709[15], i709[16], i709[17] )
  i708.transparency = i709[18]
  i708.bounds = i709[19]
  i708.pixelsPerUnit = i709[20]
  i708.textureWidth = i709[21]
  i708.textureHeight = i709[22]
  i708.nativeSize = new pc.Vec2( i709[23], i709[24] )
  i708.pivot = new pc.Vec2( i709[25], i709[26] )
  i708.textureRectOffset = new pc.Vec2( i709[27], i709[28] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i711 = data
  i710.name = i711[0]
  i710.ascent = i711[1]
  i710.originalLineHeight = i711[2]
  i710.fontSize = i711[3]
  var i713 = i711[4]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i713[i + 0]) );
  }
  i710.characterInfo = i712
  request.r(i711[5], i711[6], 0, i710, 'texture')
  i710.originalFontSize = i711[7]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i717 = data
  i716.index = i717[0]
  i716.advance = i717[1]
  i716.bearing = i717[2]
  i716.glyphWidth = i717[3]
  i716.glyphHeight = i717[4]
  i716.minX = i717[5]
  i716.maxX = i717[6]
  i716.minY = i717[7]
  i716.maxY = i717[8]
  i716.uvBottomLeftX = i717[9]
  i716.uvBottomLeftY = i717[10]
  i716.uvBottomRightX = i717[11]
  i716.uvBottomRightY = i717[12]
  i716.uvTopLeftX = i717[13]
  i716.uvTopLeftY = i717[14]
  i716.uvTopRightX = i717[15]
  i716.uvTopRightY = i717[16]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i719 = data
  i718.name = i719[0]
  i718.bytes64 = i719[1]
  i718.data = i719[2]
  return i718
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i721 = data
  var i723 = i721[0]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('UnityEngine.InputSystem.InputActionMap', i723[i + 0]) );
  }
  i720.m_ActionMaps = i722
  var i725 = i721[1]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('UnityEngine.InputSystem.InputControlScheme', i725[i + 0]) );
  }
  i720.m_ControlSchemes = i724
  i720.m_IsProjectWide = !!i721[2]
  return i720
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i729 = data
  i728.m_Name = i729[0]
  i728.m_Id = i729[1]
  request.r(i729[2], i729[3], 0, i728, 'm_Asset')
  var i731 = i729[4]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('UnityEngine.InputSystem.InputAction', i731[i + 0]) );
  }
  i728.m_Actions = i730
  var i733 = i729[5]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('UnityEngine.InputSystem.InputBinding', i733[i + 0]) );
  }
  i728.m_Bindings = i732
  return i728
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i737 = data
  i736.m_Name = i737[0]
  i736.m_Type = i737[1]
  i736.m_ExpectedControlType = i737[2]
  i736.m_Id = i737[3]
  i736.m_Processors = i737[4]
  i736.m_Interactions = i737[5]
  var i739 = i737[6]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('UnityEngine.InputSystem.InputBinding', i739[i + 0]) );
  }
  i736.m_SingletonActionBindings = i738
  i736.m_Flags = i737[7]
  i736.m_Priority = i737[8]
  return i736
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i743 = data
  i742.m_Name = i743[0]
  i742.m_Id = i743[1]
  i742.m_Path = i743[2]
  i742.m_Interactions = i743[3]
  i742.m_Processors = i743[4]
  i742.m_Groups = i743[5]
  i742.m_Action = i743[6]
  i742.m_Flags = i743[7]
  return i742
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i747 = data
  i746.m_Name = i747[0]
  i746.m_BindingGroup = i747[1]
  var i749 = i747[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i749[i + 0]) );
  }
  i746.m_DeviceRequirements = i748
  return i746
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i753 = data
  i752.m_ControlPath = i753[0]
  i752.m_Flags = i753[1]
  return i752
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_Asset')
  i754.m_ActionId = i755[2]
  return i754
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i756 = root || request.c( 'TMPro.TMP_Settings' )
  var i757 = data
  i756.assetVersion = i757[0]
  i756.m_TextWrappingMode = i757[1]
  i756.m_enableKerning = !!i757[2]
  var i759 = i757[3]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(i759[i + 0]);
  }
  i756.m_ActiveFontFeatures = i758
  i756.m_enableExtraPadding = !!i757[4]
  i756.m_enableTintAllSprites = !!i757[5]
  i756.m_enableParseEscapeCharacters = !!i757[6]
  i756.m_EnableRaycastTarget = !!i757[7]
  i756.m_GetFontFeaturesAtRuntime = !!i757[8]
  i756.m_missingGlyphCharacter = i757[9]
  i756.m_ClearDynamicDataOnBuild = !!i757[10]
  i756.m_warningsDisabled = !!i757[11]
  request.r(i757[12], i757[13], 0, i756, 'm_defaultFontAsset')
  i756.m_defaultFontAssetPath = i757[14]
  i756.m_defaultFontSize = i757[15]
  i756.m_defaultAutoSizeMinRatio = i757[16]
  i756.m_defaultAutoSizeMaxRatio = i757[17]
  i756.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i757[18], i757[19] )
  i756.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i757[20], i757[21] )
  i756.m_autoSizeTextContainer = !!i757[22]
  i756.m_IsTextObjectScaleStatic = !!i757[23]
  var i761 = i757[24]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 1, i760, '')
  }
  i756.m_fallbackFontAssets = i760
  i756.m_matchMaterialPreset = !!i757[25]
  i756.m_HideSubTextObjects = !!i757[26]
  request.r(i757[27], i757[28], 0, i756, 'm_defaultSpriteAsset')
  i756.m_defaultSpriteAssetPath = i757[29]
  i756.m_enableEmojiSupport = !!i757[30]
  i756.m_MissingCharacterSpriteUnicode = i757[31]
  var i763 = i757[32]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i756.m_EmojiFallbackTextAssets = i762
  i756.m_defaultColorGradientPresetsPath = i757[33]
  request.r(i757[34], i757[35], 0, i756, 'm_defaultStyleSheet')
  i756.m_StyleSheetsResourcePath = i757[36]
  request.r(i757[37], i757[38], 0, i756, 'm_leadingCharacters')
  request.r(i757[39], i757[40], 0, i756, 'm_followingCharacters')
  i756.m_UseModernHangulLineBreakingRules = !!i757[41]
  return i756
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i770 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i771 = data
  i770.normalStyle = i771[0]
  i770.normalSpacingOffset = i771[1]
  i770.boldStyle = i771[2]
  i770.boldSpacing = i771[3]
  i770.italicStyle = i771[4]
  i770.tabSize = i771[5]
  request.r(i771[6], i771[7], 0, i770, 'atlas')
  i770.m_SourceFontFileGUID = i771[8]
  i770.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i771[9], i770.m_CreationSettings)
  request.r(i771[10], i771[11], 0, i770, 'm_SourceFontFile')
  i770.m_SourceFontFilePath = i771[12]
  i770.m_AtlasPopulationMode = i771[13]
  i770.InternalDynamicOS = !!i771[14]
  var i773 = i771[15]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('UnityEngine.TextCore.Glyph', i773[i + 0]));
  }
  i770.m_GlyphTable = i772
  var i775 = i771[16]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('TMPro.TMP_Character', i775[i + 0]));
  }
  i770.m_CharacterTable = i774
  var i777 = i771[17]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i770.m_AtlasTextures = i776
  i770.m_AtlasTextureIndex = i771[18]
  i770.m_IsMultiAtlasTexturesEnabled = !!i771[19]
  i770.m_GetFontFeatures = !!i771[20]
  i770.m_ClearDynamicDataOnBuild = !!i771[21]
  i770.m_AtlasWidth = i771[22]
  i770.m_AtlasHeight = i771[23]
  i770.m_AtlasPadding = i771[24]
  i770.m_AtlasRenderMode = i771[25]
  var i779 = i771[26]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('UnityEngine.TextCore.GlyphRect', i779[i + 0]));
  }
  i770.m_UsedGlyphRects = i778
  var i781 = i771[27]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('UnityEngine.TextCore.GlyphRect', i781[i + 0]));
  }
  i770.m_FreeGlyphRects = i780
  i770.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i771[28], i770.m_FontFeatureTable)
  i770.m_ShouldReimportFontFeatures = !!i771[29]
  var i783 = i771[30]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i770.m_FallbackFontAssetTable = i782
  var i785 = i771[31]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('TMPro.TMP_FontWeightPair', i785[i + 0]) );
  }
  i770.m_FontWeightTable = i784
  var i787 = i771[32]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('TMPro.TMP_FontWeightPair', i787[i + 0]) );
  }
  i770.fontWeights = i786
  i770.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i771[33], i770.m_fontInfo)
  var i789 = i771[34]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('TMPro.TMP_Glyph', i789[i + 0]));
  }
  i770.m_glyphInfoList = i788
  i770.m_KerningTable = request.d('TMPro.KerningTable', i771[35], i770.m_KerningTable)
  var i791 = i771[36]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 1, i790, '')
  }
  i770.fallbackFontAssets = i790
  i770.m_Version = i771[37]
  i770.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i771[38], i770.m_FaceInfo)
  request.r(i771[39], i771[40], 0, i770, 'm_Material')
  return i770
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i793 = data
  i792.sourceFontFileName = i793[0]
  i792.sourceFontFileGUID = i793[1]
  i792.faceIndex = i793[2]
  i792.pointSizeSamplingMode = i793[3]
  i792.pointSize = i793[4]
  i792.padding = i793[5]
  i792.paddingMode = i793[6]
  i792.packingMode = i793[7]
  i792.atlasWidth = i793[8]
  i792.atlasHeight = i793[9]
  i792.characterSetSelectionMode = i793[10]
  i792.characterSequence = i793[11]
  i792.referencedFontAssetGUID = i793[12]
  i792.referencedTextAssetGUID = i793[13]
  i792.fontStyle = i793[14]
  i792.fontStyleModifier = i793[15]
  i792.renderMode = i793[16]
  i792.includeFontFeatures = !!i793[17]
  return i792
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i797 = data
  i796.m_Index = i797[0]
  i796.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i797[1], i796.m_Metrics)
  i796.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i797[2], i796.m_GlyphRect)
  i796.m_Scale = i797[3]
  i796.m_AtlasIndex = i797[4]
  i796.m_ClassDefinitionType = i797[5]
  return i796
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i799 = data
  i798.m_Width = i799[0]
  i798.m_Height = i799[1]
  i798.m_HorizontalBearingX = i799[2]
  i798.m_HorizontalBearingY = i799[3]
  i798.m_HorizontalAdvance = i799[4]
  return i798
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i801 = data
  i800.m_X = i801[0]
  i800.m_Y = i801[1]
  i800.m_Width = i801[2]
  i800.m_Height = i801[3]
  return i800
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i804 = root || request.c( 'TMPro.TMP_Character' )
  var i805 = data
  i804.m_ElementType = i805[0]
  i804.m_Unicode = i805[1]
  i804.m_GlyphIndex = i805[2]
  i804.m_Scale = i805[3]
  return i804
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i810 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('TMPro.MultipleSubstitutionRecord', i813[i + 0]));
  }
  i810.m_MultipleSubstitutionRecords = i812
  var i815 = i811[1]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('TMPro.LigatureSubstitutionRecord', i815[i + 0]));
  }
  i810.m_LigatureSubstitutionRecords = i814
  var i817 = i811[2]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i817[i + 0]));
  }
  i810.m_GlyphPairAdjustmentRecords = i816
  var i819 = i811[3]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i819[i + 0]));
  }
  i810.m_MarkToBaseAdjustmentRecords = i818
  var i821 = i811[4]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i821[i + 0]));
  }
  i810.m_MarkToMarkAdjustmentRecords = i820
  return i810
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i825 = data
  i824.m_TargetGlyphID = i825[0]
  i824.m_SubstituteGlyphIDs = i825[1]
  return i824
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i828 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i829 = data
  i828.m_ComponentGlyphIDs = i829[0]
  i828.m_LigatureGlyphID = i829[1]
  return i828
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i833 = data
  i832.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i833[0], i832.m_FirstAdjustmentRecord)
  i832.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i833[1], i832.m_SecondAdjustmentRecord)
  i832.m_FeatureLookupFlags = i833[2]
  return i832
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i835 = data
  i834.m_GlyphIndex = i835[0]
  i834.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i835[1], i834.m_GlyphValueRecord)
  return i834
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i837 = data
  i836.m_XPlacement = i837[0]
  i836.m_YPlacement = i837[1]
  i836.m_XAdvance = i837[2]
  i836.m_YAdvance = i837[3]
  return i836
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i841 = data
  i840.m_BaseGlyphID = i841[0]
  i840.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i841[1], i840.m_BaseGlyphAnchorPoint)
  i840.m_MarkGlyphID = i841[2]
  i840.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i841[3], i840.m_MarkPositionAdjustment)
  return i840
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i845 = data
  i844.m_BaseMarkGlyphID = i845[0]
  i844.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i845[1], i844.m_BaseMarkGlyphAnchorPoint)
  i844.m_CombiningMarkGlyphID = i845[2]
  i844.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i845[3], i844.m_CombiningMarkPositionAdjustment)
  return i844
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'regularTypeface')
  request.r(i849[2], i849[3], 0, i848, 'italicTypeface')
  return i848
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i851 = data
  i850.Name = i851[0]
  i850.PointSize = i851[1]
  i850.Scale = i851[2]
  i850.CharacterCount = i851[3]
  i850.LineHeight = i851[4]
  i850.Baseline = i851[5]
  i850.Ascender = i851[6]
  i850.CapHeight = i851[7]
  i850.Descender = i851[8]
  i850.CenterLine = i851[9]
  i850.SuperscriptOffset = i851[10]
  i850.SubscriptOffset = i851[11]
  i850.SubSize = i851[12]
  i850.Underline = i851[13]
  i850.UnderlineThickness = i851[14]
  i850.strikethrough = i851[15]
  i850.strikethroughThickness = i851[16]
  i850.TabWidth = i851[17]
  i850.Padding = i851[18]
  i850.AtlasWidth = i851[19]
  i850.AtlasHeight = i851[20]
  return i850
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.TMP_Glyph' )
  var i855 = data
  i854.id = i855[0]
  i854.x = i855[1]
  i854.y = i855[2]
  i854.width = i855[3]
  i854.height = i855[4]
  i854.xOffset = i855[5]
  i854.yOffset = i855[6]
  i854.xAdvance = i855[7]
  i854.scale = i855[8]
  return i854
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.KerningTable' )
  var i857 = data
  var i859 = i857[0]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('TMPro.KerningPair', i859[i + 0]));
  }
  i856.kerningPairs = i858
  return i856
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.KerningPair' )
  var i863 = data
  i862.xOffset = i863[0]
  i862.m_FirstGlyph = i863[1]
  i862.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i863[2], i862.m_FirstGlyphAdjustments)
  i862.m_SecondGlyph = i863[3]
  i862.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i863[4], i862.m_SecondGlyphAdjustments)
  i862.m_IgnoreSpacingAdjustments = !!i863[5]
  return i862
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i865 = data
  i864.m_FaceIndex = i865[0]
  i864.m_FamilyName = i865[1]
  i864.m_StyleName = i865[2]
  i864.m_PointSize = i865[3]
  i864.m_Scale = i865[4]
  i864.m_UnitsPerEM = i865[5]
  i864.m_LineHeight = i865[6]
  i864.m_AscentLine = i865[7]
  i864.m_CapLine = i865[8]
  i864.m_MeanLine = i865[9]
  i864.m_Baseline = i865[10]
  i864.m_DescentLine = i865[11]
  i864.m_SuperscriptOffset = i865[12]
  i864.m_SuperscriptSize = i865[13]
  i864.m_SubscriptOffset = i865[14]
  i864.m_SubscriptSize = i865[15]
  i864.m_UnderlineOffset = i865[16]
  i864.m_UnderlineThickness = i865[17]
  i864.m_StrikethroughOffset = i865[18]
  i864.m_StrikethroughThickness = i865[19]
  i864.m_TabWidth = i865[20]
  return i864
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'spriteSheet')
  var i869 = i867[2]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(request.d('TMPro.TMP_Sprite', i869[i + 0]));
  }
  i866.spriteInfoList = i868
  var i871 = i867[3]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 1, i870, '')
  }
  i866.fallbackSpriteAssets = i870
  var i873 = i867[4]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('TMPro.TMP_SpriteCharacter', i873[i + 0]));
  }
  i866.m_SpriteCharacterTable = i872
  var i875 = i867[5]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('TMPro.TMP_SpriteGlyph', i875[i + 0]));
  }
  i866.m_GlyphTable = i874
  i866.m_Version = i867[6]
  i866.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i867[7], i866.m_FaceInfo)
  request.r(i867[8], i867[9], 0, i866, 'm_Material')
  return i866
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_Sprite' )
  var i879 = data
  i878.name = i879[0]
  i878.hashCode = i879[1]
  i878.unicode = i879[2]
  i878.pivot = new pc.Vec2( i879[3], i879[4] )
  request.r(i879[5], i879[6], 0, i878, 'sprite')
  i878.id = i879[7]
  i878.x = i879[8]
  i878.y = i879[9]
  i878.width = i879[10]
  i878.height = i879[11]
  i878.xOffset = i879[12]
  i878.yOffset = i879[13]
  i878.xAdvance = i879[14]
  i878.scale = i879[15]
  return i878
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i885 = data
  i884.m_Name = i885[0]
  i884.m_ElementType = i885[1]
  i884.m_Unicode = i885[2]
  i884.m_GlyphIndex = i885[3]
  i884.m_Scale = i885[4]
  return i884
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'sprite')
  i888.m_Index = i889[2]
  i888.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i889[3], i888.m_Metrics)
  i888.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i889[4], i888.m_GlyphRect)
  i888.m_Scale = i889[5]
  i888.m_AtlasIndex = i889[6]
  i888.m_ClassDefinitionType = i889[7]
  return i888
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i891 = data
  var i893 = i891[0]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('TMPro.TMP_Style', i893[i + 0]));
  }
  i890.m_StyleList = i892
  return i890
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_Style' )
  var i897 = data
  i896.m_Name = i897[0]
  i896.m_HashCode = i897[1]
  i896.m_OpeningDefinition = i897[2]
  i896.m_ClosingDefinition = i897[3]
  i896.m_OpeningTagArray = i897[4]
  i896.m_ClosingTagArray = i897[5]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i901[i + 0]) );
  }
  i898.files = i900
  i898.componentToPrefabIds = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i905 = data
  i904.path = i905[0]
  request.r(i905[1], i905[2], 0, i904, 'unityObject')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i909[i + 0]) );
  }
  i906.scriptsExecutionOrder = i908
  var i911 = i907[1]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i911[i + 0]) );
  }
  i906.sortingLayers = i910
  var i913 = i907[2]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i913[i + 0]) );
  }
  i906.cullingLayers = i912
  i906.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i907[3], i906.timeSettings)
  i906.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i907[4], i906.physicsSettings)
  i906.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i907[5], i906.physics2DSettings)
  i906.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i907[6], i906.qualitySettings)
  i906.enableRealtimeShadows = !!i907[7]
  i906.enableAutoInstancing = !!i907[8]
  i906.enableStaticBatching = !!i907[9]
  i906.enableDynamicBatching = !!i907[10]
  i906.usePreservativeDynamicBatching = !!i907[11]
  i906.lightmapEncodingQuality = i907[12]
  i906.desiredColorSpace = i907[13]
  var i915 = i907[14]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i906.allTags = i914
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i919 = data
  i918.name = i919[0]
  i918.value = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i923 = data
  i922.id = i923[0]
  i922.name = i923[1]
  i922.value = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i927 = data
  i926.id = i927[0]
  i926.name = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i929 = data
  i928.fixedDeltaTime = i929[0]
  i928.maximumDeltaTime = i929[1]
  i928.timeScale = i929[2]
  i928.maximumParticleTimestep = i929[3]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i931 = data
  i930.gravity = new pc.Vec3( i931[0], i931[1], i931[2] )
  i930.defaultSolverIterations = i931[3]
  i930.bounceThreshold = i931[4]
  i930.autoSyncTransforms = !!i931[5]
  i930.autoSimulation = !!i931[6]
  var i933 = i931[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i933[i + 0]) );
  }
  i930.collisionMatrix = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i937 = data
  i936.enabled = !!i937[0]
  i936.layerId = i937[1]
  i936.otherLayerId = i937[2]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'material')
  i938.gravity = new pc.Vec2( i939[2], i939[3] )
  i938.positionIterations = i939[4]
  i938.velocityIterations = i939[5]
  i938.velocityThreshold = i939[6]
  i938.maxLinearCorrection = i939[7]
  i938.maxAngularCorrection = i939[8]
  i938.maxTranslationSpeed = i939[9]
  i938.maxRotationSpeed = i939[10]
  i938.baumgarteScale = i939[11]
  i938.baumgarteTOIScale = i939[12]
  i938.timeToSleep = i939[13]
  i938.linearSleepTolerance = i939[14]
  i938.angularSleepTolerance = i939[15]
  i938.defaultContactOffset = i939[16]
  i938.autoSimulation = !!i939[17]
  i938.queriesHitTriggers = !!i939[18]
  i938.queriesStartInColliders = !!i939[19]
  i938.callbacksOnDisable = !!i939[20]
  i938.reuseCollisionCallbacks = !!i939[21]
  i938.autoSyncTransforms = !!i939[22]
  var i941 = i939[23]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i941[i + 0]) );
  }
  i938.collisionMatrix = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i945 = data
  i944.enabled = !!i945[0]
  i944.layerId = i945[1]
  i944.otherLayerId = i945[2]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i949[i + 0]) );
  }
  i946.qualityLevels = i948
  var i951 = i947[1]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.names = i950
  i946.shadows = i947[2]
  i946.anisotropicFiltering = i947[3]
  i946.antiAliasing = i947[4]
  i946.lodBias = i947[5]
  i946.shadowCascades = i947[6]
  i946.shadowDistance = i947[7]
  i946.shadowmaskMode = i947[8]
  i946.shadowProjection = i947[9]
  i946.shadowResolution = i947[10]
  i946.softParticles = !!i947[11]
  i946.softVegetation = !!i947[12]
  i946.activeColorSpace = i947[13]
  i946.desiredColorSpace = i947[14]
  i946.masterTextureLimit = i947[15]
  i946.maxQueuedFrames = i947[16]
  i946.particleRaycastBudget = i947[17]
  i946.pixelLightCount = i947[18]
  i946.realtimeReflectionProbes = !!i947[19]
  i946.shadowCascade2Split = i947[20]
  i946.shadowCascade4Split = new pc.Vec3( i947[21], i947[22], i947[23] )
  i946.streamingMipmapsActive = !!i947[24]
  i946.vSyncCount = i947[25]
  i946.asyncUploadBufferSize = i947[26]
  i946.asyncUploadTimeSlice = i947[27]
  i946.billboardsFaceCameraPosition = !!i947[28]
  i946.shadowNearPlaneOffset = i947[29]
  i946.streamingMipmapsMemoryBudget = i947[30]
  i946.maximumLODLevel = i947[31]
  i946.streamingMipmapsAddAllCameras = !!i947[32]
  i946.streamingMipmapsMaxLevelReduction = i947[33]
  i946.streamingMipmapsRenderersPerFrame = i947[34]
  i946.resolutionScalingFixedDPIFactor = i947[35]
  i946.streamingMipmapsMaxFileIORequests = i947[36]
  i946.currentQualityLevel = i947[37]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i957 = data
  i956.weight = i957[0]
  i956.vertices = i957[1]
  i956.normals = i957[2]
  i956.tangents = i957[3]
  return i956
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i959 = data
  i958.m_XCoordinate = i959[0]
  i958.m_YCoordinate = i959[1]
  return i958
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i961 = data
  i960.m_XPositionAdjustment = i961[0]
  i960.m_YPositionAdjustment = i961[1]
  return i960
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i963 = data
  i962.xPlacement = i963[0]
  i962.yPlacement = i963[1]
  i962.xAdvance = i963[2]
  i962.yAdvance = i963[3]
  return i962
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[14],"52":[6],"53":[6],"54":[6],"55":[6],"56":[6],"57":[6],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[14],"73":[3],"74":[75],"76":[75],"28":[27],"13":[12],"19":[18],"77":[28],"78":[27],"79":[31,27],"80":[3],"81":[31,27],"82":[27],"83":[27],"84":[3,27],"85":[27,31],"86":[87],"88":[87],"89":[87],"90":[27],"91":[27],"30":[28],"32":[31,27],"92":[27],"29":[28],"93":[27],"94":[27],"95":[27],"96":[27],"97":[27],"98":[27],"99":[27],"100":[27],"101":[27],"102":[31,27],"103":[27],"104":[27],"105":[27],"106":[27],"25":[31,27],"107":[27],"108":[18],"109":[18],"110":[18],"111":[18],"112":[14],"113":[14]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","ClickTarget","UnityEngine.Shader","UnityEngine.BoxCollider","UnityEngine.SphereCollider","GameAnalyticsSDK.Events.GA_SpecialEvents","GameAnalyticsSDK.GameAnalytics","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","GameManager","UnityEngine.GameObject","SpawnManager","UnityEngine.UI.Text","UnityEngine.MeshCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Font","UnityEngine.Cubemap","UnityEngine.Texture2D","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.85f2";

Deserializers.productName = "PlayableAdds3D";

Deserializers.lunaInitializationTime = "11/13/2026 22:25:25";

Deserializers.lunaDaysRunning = "8.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "bf3d04b4af7c36449a00bc1fc638d2c5";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.20.0\ncom.unity.timeline: 1.8.13\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1756";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3592";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "c9938a6d-b0ef-4637-845a-db2adc56f864";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","PlayerInput","InitializeGlobalPlayerState"],["UnityEngine","InputSystem","InputSystem","RuntimeInitialize"],["UnityEngine","InputSystem","InputActionState","InitializeGlobalActionState"],["GameAnalyticsSDK","Utilities","GA_MainThreadDispatcher","Capture"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","EnhancedTouch","Touch","InitializeGlobalTouchState"],["UnityEngine","InputSystem","Users","InputUser","InitializeGlobalUserState"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

