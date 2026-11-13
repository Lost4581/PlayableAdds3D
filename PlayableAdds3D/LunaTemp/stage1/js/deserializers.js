var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointSpring' )
  var i479 = data
  i478.spring = i479[0]
  i478.damper = i479[1]
  i478.targetPosition = i479[2]
  return i478
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointMotor' )
  var i481 = data
  i480.m_TargetVelocity = i481[0]
  i480.m_Force = i481[1]
  i480.m_FreeSpin = i481[2]
  return i480
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointLimits' )
  var i483 = data
  i482.m_Min = i483[0]
  i482.m_Max = i483[1]
  i482.m_Bounciness = i483[2]
  i482.m_BounceMinVelocity = i483[3]
  i482.m_ContactDistance = i483[4]
  i482.minBounce = i483[5]
  i482.maxBounce = i483[6]
  return i482
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointDrive' )
  var i485 = data
  i484.m_PositionSpring = i485[0]
  i484.m_PositionDamper = i485[1]
  i484.m_MaximumForce = i485[2]
  i484.m_UseAcceleration = i485[3]
  return i484
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i487 = data
  i486.m_Spring = i487[0]
  i486.m_Damper = i487[1]
  return i486
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i489 = data
  i488.m_Limit = i489[0]
  i488.m_Bounciness = i489[1]
  i488.m_ContactDistance = i489[2]
  return i488
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i491 = data
  i490.m_ExtremumSlip = i491[0]
  i490.m_ExtremumValue = i491[1]
  i490.m_AsymptoteSlip = i491[2]
  i490.m_AsymptoteValue = i491[3]
  i490.m_Stiffness = i491[4]
  return i490
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i493 = data
  i492.m_LowerAngle = i493[0]
  i492.m_UpperAngle = i493[1]
  return i492
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i495 = data
  i494.m_MotorSpeed = i495[0]
  i494.m_MaximumMotorTorque = i495[1]
  return i494
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i497 = data
  i496.m_DampingRatio = i497[0]
  i496.m_Frequency = i497[1]
  i496.m_Angle = i497[2]
  return i496
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i499 = data
  i498.m_LowerTranslation = i499[0]
  i498.m_UpperTranslation = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i501 = data
  i500.position = new pc.Vec3( i501[0], i501[1], i501[2] )
  i500.scale = new pc.Vec3( i501[3], i501[4], i501[5] )
  i500.rotation = new pc.Quat(i501[6], i501[7], i501[8], i501[9])
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'sharedMesh')
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'additionalVertexStreams')
  i504.enabled = !!i505[2]
  request.r(i505[3], i505[4], 0, i504, 'sharedMaterial')
  var i507 = i505[5]
  var i506 = []
  for(var i = 0; i < i507.length; i += 2) {
  request.r(i507[i + 0], i507[i + 1], 2, i506, '')
  }
  i504.sharedMaterials = i506
  i504.receiveShadows = !!i505[6]
  i504.shadowCastingMode = i505[7]
  i504.sortingLayerID = i505[8]
  i504.sortingOrder = i505[9]
  i504.lightmapIndex = i505[10]
  i504.lightmapSceneIndex = i505[11]
  i504.lightmapScaleOffset = new pc.Vec4( i505[12], i505[13], i505[14], i505[15] )
  i504.lightProbeUsage = i505[16]
  i504.reflectionProbeUsage = i505[17]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i511 = data
  i510.center = new pc.Vec3( i511[0], i511[1], i511[2] )
  i510.radius = i511[3]
  i510.height = i511[4]
  i510.direction = i511[5]
  i510.enabled = !!i511[6]
  i510.isTrigger = !!i511[7]
  request.r(i511[8], i511[9], 0, i510, 'material')
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i513 = data
  i512.mass = i513[0]
  i512.drag = i513[1]
  i512.angularDrag = i513[2]
  i512.useGravity = !!i513[3]
  i512.isKinematic = !!i513[4]
  i512.constraints = i513[5]
  i512.maxAngularVelocity = i513[6]
  i512.collisionDetectionMode = i513[7]
  i512.interpolation = i513[8]
  return i512
}

Deserializers["ClickTarget"] = function (request, data, root) {
  var i514 = root || request.c( 'ClickTarget' )
  var i515 = data
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i517 = data
  i516.name = i517[0]
  i516.tagId = i517[1]
  i516.enabled = !!i517[2]
  i516.isStatic = !!i517[3]
  i516.layer = i517[4]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i519 = data
  i518.name = i519[0]
  i518.halfPrecision = !!i519[1]
  i518.useSimplification = !!i519[2]
  i518.useUInt32IndexFormat = !!i519[3]
  i518.vertexCount = i519[4]
  i518.aabb = i519[5]
  var i521 = i519[6]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( !!i521[i + 0] );
  }
  i518.streams = i520
  i518.vertices = i519[7]
  var i523 = i519[8]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i523[i + 0]) );
  }
  i518.subMeshes = i522
  var i525 = i519[9]
  var i524 = []
  for(var i = 0; i < i525.length; i += 16) {
    i524.push( new pc.Mat4().setData(i525[i + 0], i525[i + 1], i525[i + 2], i525[i + 3],  i525[i + 4], i525[i + 5], i525[i + 6], i525[i + 7],  i525[i + 8], i525[i + 9], i525[i + 10], i525[i + 11],  i525[i + 12], i525[i + 13], i525[i + 14], i525[i + 15]) );
  }
  i518.bindposes = i524
  var i527 = i519[10]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i527[i + 0]) );
  }
  i518.blendShapes = i526
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i533 = data
  i532.triangles = i533[0]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i539 = data
  i538.name = i539[0]
  var i541 = i539[1]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i541[i + 0]) );
  }
  i538.frames = i540
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i542 = root || new pc.UnityMaterial()
  var i543 = data
  i542.name = i543[0]
  request.r(i543[1], i543[2], 0, i542, 'shader')
  i542.renderQueue = i543[3]
  i542.enableInstancing = !!i543[4]
  var i545 = i543[5]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i545[i + 0]) );
  }
  i542.floatParameters = i544
  var i547 = i543[6]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i547[i + 0]) );
  }
  i542.colorParameters = i546
  var i549 = i543[7]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i549[i + 0]) );
  }
  i542.vectorParameters = i548
  var i551 = i543[8]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i551[i + 0]) );
  }
  i542.textureParameters = i550
  var i553 = i543[9]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i553[i + 0]) );
  }
  i542.materialFlags = i552
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i557 = data
  i556.name = i557[0]
  i556.value = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = new pc.Color(i561[1], i561[2], i561[3], i561[4])
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = new pc.Vec4( i565[1], i565[2], i565[3], i565[4] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i569 = data
  i568.name = i569[0]
  request.r(i569[1], i569[2], 0, i568, 'value')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i573 = data
  i572.name = i573[0]
  i572.enabled = !!i573[1]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i575 = data
  i574.center = new pc.Vec3( i575[0], i575[1], i575[2] )
  i574.size = new pc.Vec3( i575[3], i575[4], i575[5] )
  i574.enabled = !!i575[6]
  i574.isTrigger = !!i575[7]
  request.r(i575[8], i575[9], 0, i574, 'material')
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i577 = data
  i576.center = new pc.Vec3( i577[0], i577[1], i577[2] )
  i576.radius = i577[3]
  i576.enabled = !!i577[4]
  i576.isTrigger = !!i577[5]
  request.r(i577[6], i577[7], 0, i576, 'material')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i579 = data
  i578.name = i579[0]
  i578.width = i579[1]
  i578.height = i579[2]
  i578.mipmapCount = i579[3]
  i578.anisoLevel = i579[4]
  i578.filterMode = i579[5]
  i578.hdr = !!i579[6]
  i578.format = i579[7]
  i578.wrapMode = i579[8]
  i578.alphaIsTransparency = !!i579[9]
  i578.alphaSource = i579[10]
  i578.graphicsFormat = i579[11]
  i578.sRGBTexture = !!i579[12]
  i578.desiredColorSpace = i579[13]
  i578.wrapU = i579[14]
  i578.wrapV = i579[15]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i581 = data
  i580.name = i581[0]
  i580.atlasId = i581[1]
  i580.mipmapCount = i581[2]
  i580.hdr = !!i581[3]
  i580.size = i581[4]
  i580.anisoLevel = i581[5]
  i580.filterMode = i581[6]
  var i583 = i581[7]
  var i582 = []
  for(var i = 0; i < i583.length; i += 4) {
    i582.push( UnityEngine.Rect.MinMaxRect(i583[i + 0], i583[i + 1], i583[i + 2], i583[i + 3]) );
  }
  i580.rects = i582
  i580.wrapU = i581[8]
  i580.wrapV = i581[9]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i587 = data
  i586.name = i587[0]
  i586.index = i587[1]
  i586.startup = !!i587[2]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i589 = data
  i588.aspect = i589[0]
  i588.orthographic = !!i589[1]
  i588.orthographicSize = i589[2]
  i588.backgroundColor = new pc.Color(i589[3], i589[4], i589[5], i589[6])
  i588.nearClipPlane = i589[7]
  i588.farClipPlane = i589[8]
  i588.fieldOfView = i589[9]
  i588.depth = i589[10]
  i588.clearFlags = i589[11]
  i588.cullingMask = i589[12]
  i588.rect = i589[13]
  request.r(i589[14], i589[15], 0, i588, 'targetTexture')
  i588.usePhysicalProperties = !!i589[16]
  i588.focalLength = i589[17]
  i588.sensorSize = new pc.Vec2( i589[18], i589[19] )
  i588.lensShift = new pc.Vec2( i589[20], i589[21] )
  i588.gateFit = i589[22]
  i588.commandBufferCount = i589[23]
  i588.cameraType = i589[24]
  i588.enabled = !!i589[25]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i591 = data
  i590.type = i591[0]
  i590.color = new pc.Color(i591[1], i591[2], i591[3], i591[4])
  i590.cullingMask = i591[5]
  i590.intensity = i591[6]
  i590.range = i591[7]
  i590.spotAngle = i591[8]
  i590.shadows = i591[9]
  i590.shadowNormalBias = i591[10]
  i590.shadowBias = i591[11]
  i590.shadowStrength = i591[12]
  i590.shadowResolution = i591[13]
  i590.lightmapBakeType = i591[14]
  i590.renderMode = i591[15]
  request.r(i591[16], i591[17], 0, i590, 'cookie')
  i590.cookieSize = i591[18]
  i590.shadowNearPlane = i591[19]
  i590.occlusionMaskChannel = i591[20]
  i590.isBaked = !!i591[21]
  i590.mixedLightingMode = i591[22]
  i590.enabled = !!i591[23]
  return i590
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'm_FirstSelected')
  i592.m_sendNavigationEvents = !!i593[2]
  i592.m_DragThreshold = i593[3]
  return i592
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i595 = data
  i594.m_MoveRepeatDelay = i595[0]
  i594.m_MoveRepeatRate = i595[1]
  request.r(i595[2], i595[3], 0, i594, 'm_XRTrackingOrigin')
  request.r(i595[4], i595[5], 0, i594, 'm_ActionsAsset')
  request.r(i595[6], i595[7], 0, i594, 'm_PointAction')
  request.r(i595[8], i595[9], 0, i594, 'm_MoveAction')
  request.r(i595[10], i595[11], 0, i594, 'm_SubmitAction')
  request.r(i595[12], i595[13], 0, i594, 'm_CancelAction')
  request.r(i595[14], i595[15], 0, i594, 'm_LeftClickAction')
  request.r(i595[16], i595[17], 0, i594, 'm_MiddleClickAction')
  request.r(i595[18], i595[19], 0, i594, 'm_RightClickAction')
  request.r(i595[20], i595[21], 0, i594, 'm_ScrollWheelAction')
  request.r(i595[22], i595[23], 0, i594, 'm_TrackedDevicePositionAction')
  request.r(i595[24], i595[25], 0, i594, 'm_TrackedDeviceOrientationAction')
  i594.m_DeselectOnBackgroundClick = !!i595[26]
  i594.m_PointerBehavior = i595[27]
  i594.m_CursorLockBehavior = i595[28]
  i594.m_ScrollDeltaPerTick = i595[29]
  i594.m_SendPointerHoverToParent = !!i595[30]
  return i594
}

Deserializers["GameManager"] = function (request, data, root) {
  var i596 = root || request.c( 'GameManager' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'IntroScreen')
  request.r(i597[2], i597[3], 0, i596, 'GameScreen')
  request.r(i597[4], i597[5], 0, i596, 'WinScreen')
  request.r(i597[6], i597[7], 0, i596, 'LoseScreen')
  i596.clicksToWin = i597[8]
  i596.scoreToLose = i597[9]
  request.r(i597[10], i597[11], 0, i596, 'spawner')
  request.r(i597[12], i597[13], 0, i596, 'counterText')
  request.r(i597[14], i597[15], 0, i596, 'clicksText')
  return i596
}

Deserializers["SpawnManager"] = function (request, data, root) {
  var i598 = root || request.c( 'SpawnManager' )
  var i599 = data
  var i601 = i599[0]
  var i600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 1, i600, '')
  }
  i598.objects = i600
  i598.spawnInterval = i599[1]
  i598.spawnAreaCenter = new pc.Vec3( i599[2], i599[3], i599[4] )
  i598.spawnAreaSize = new pc.Vec3( i599[5], i599[6], i599[7] )
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'sharedMesh')
  i604.convex = !!i605[2]
  i604.enabled = !!i605[3]
  i604.isTrigger = !!i605[4]
  request.r(i605[5], i605[6], 0, i604, 'material')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i607 = data
  i606.pivot = new pc.Vec2( i607[0], i607[1] )
  i606.anchorMin = new pc.Vec2( i607[2], i607[3] )
  i606.anchorMax = new pc.Vec2( i607[4], i607[5] )
  i606.sizeDelta = new pc.Vec2( i607[6], i607[7] )
  i606.anchoredPosition3D = new pc.Vec3( i607[8], i607[9], i607[10] )
  i606.rotation = new pc.Quat(i607[11], i607[12], i607[13], i607[14])
  i606.scale = new pc.Vec3( i607[15], i607[16], i607[17] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i609 = data
  i608.planeDistance = i609[0]
  i608.referencePixelsPerUnit = i609[1]
  i608.isFallbackOverlay = !!i609[2]
  i608.renderMode = i609[3]
  i608.renderOrder = i609[4]
  i608.sortingLayerName = i609[5]
  i608.sortingOrder = i609[6]
  i608.scaleFactor = i609[7]
  request.r(i609[8], i609[9], 0, i608, 'worldCamera')
  i608.overrideSorting = !!i609[10]
  i608.pixelPerfect = !!i609[11]
  i608.targetDisplay = i609[12]
  i608.overridePixelPerfect = !!i609[13]
  i608.enabled = !!i609[14]
  return i608
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i611 = data
  i610.m_UiScaleMode = i611[0]
  i610.m_ReferencePixelsPerUnit = i611[1]
  i610.m_ScaleFactor = i611[2]
  i610.m_ReferenceResolution = new pc.Vec2( i611[3], i611[4] )
  i610.m_ScreenMatchMode = i611[5]
  i610.m_MatchWidthOrHeight = i611[6]
  i610.m_PhysicalUnit = i611[7]
  i610.m_FallbackScreenDPI = i611[8]
  i610.m_DefaultSpriteDPI = i611[9]
  i610.m_DynamicPixelsPerUnit = i611[10]
  i610.m_PresetInfoIsWorld = !!i611[11]
  return i610
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i613 = data
  i612.m_IgnoreReversedGraphics = !!i613[0]
  i612.m_BlockingObjects = i613[1]
  i612.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i613[2] )
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i615 = data
  i614.cullTransparentMesh = !!i615[0]
  return i614
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Image' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'm_Sprite')
  i616.m_Type = i617[2]
  i616.m_PreserveAspect = !!i617[3]
  i616.m_FillCenter = !!i617[4]
  i616.m_FillMethod = i617[5]
  i616.m_FillAmount = i617[6]
  i616.m_FillClockwise = !!i617[7]
  i616.m_FillOrigin = i617[8]
  i616.m_UseSpriteMesh = !!i617[9]
  i616.m_PixelsPerUnitMultiplier = i617[10]
  request.r(i617[11], i617[12], 0, i616, 'm_Material')
  i616.m_Maskable = !!i617[13]
  i616.m_Color = new pc.Color(i617[14], i617[15], i617[16], i617[17])
  i616.m_RaycastTarget = !!i617[18]
  i616.m_RaycastPadding = new pc.Vec4( i617[19], i617[20], i617[21], i617[22] )
  return i616
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Text' )
  var i619 = data
  i618.m_FontData = request.d('UnityEngine.UI.FontData', i619[0], i618.m_FontData)
  i618.m_Text = i619[1]
  request.r(i619[2], i619[3], 0, i618, 'm_Material')
  i618.m_Maskable = !!i619[4]
  i618.m_Color = new pc.Color(i619[5], i619[6], i619[7], i619[8])
  i618.m_RaycastTarget = !!i619[9]
  i618.m_RaycastPadding = new pc.Vec4( i619[10], i619[11], i619[12], i619[13] )
  return i618
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.FontData' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_Font')
  i620.m_FontSize = i621[2]
  i620.m_FontStyle = i621[3]
  i620.m_BestFit = !!i621[4]
  i620.m_MinSize = i621[5]
  i620.m_MaxSize = i621[6]
  i620.m_Alignment = i621[7]
  i620.m_AlignByGeometry = !!i621[8]
  i620.m_RichText = !!i621[9]
  i620.m_HorizontalOverflow = i621[10]
  i620.m_VerticalOverflow = i621[11]
  i620.m_LineSpacing = i621[12]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i623 = data
  i622.ambientIntensity = i623[0]
  i622.reflectionIntensity = i623[1]
  i622.ambientMode = i623[2]
  i622.ambientLight = new pc.Color(i623[3], i623[4], i623[5], i623[6])
  i622.ambientSkyColor = new pc.Color(i623[7], i623[8], i623[9], i623[10])
  i622.ambientGroundColor = new pc.Color(i623[11], i623[12], i623[13], i623[14])
  i622.ambientEquatorColor = new pc.Color(i623[15], i623[16], i623[17], i623[18])
  i622.fogColor = new pc.Color(i623[19], i623[20], i623[21], i623[22])
  i622.fogEndDistance = i623[23]
  i622.fogStartDistance = i623[24]
  i622.fogDensity = i623[25]
  i622.fog = !!i623[26]
  request.r(i623[27], i623[28], 0, i622, 'skybox')
  i622.fogMode = i623[29]
  var i625 = i623[30]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i625[i + 0]) );
  }
  i622.lightmaps = i624
  i622.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i623[31], i622.lightProbes)
  i622.lightmapsMode = i623[32]
  i622.mixedBakeMode = i623[33]
  i622.environmentLightingMode = i623[34]
  i622.ambientProbe = new pc.SphericalHarmonicsL2(i623[35])
  request.r(i623[36], i623[37], 0, i622, 'customReflection')
  request.r(i623[38], i623[39], 0, i622, 'defaultReflection')
  i622.defaultReflectionMode = i623[40]
  i622.defaultReflectionResolution = i623[41]
  i622.sunLightObjectId = i623[42]
  i622.pixelLightCount = i623[43]
  i622.defaultReflectionHDR = !!i623[44]
  i622.hasLightDataAsset = !!i623[45]
  i622.hasManualGenerate = !!i623[46]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'lightmapColor')
  request.r(i629[2], i629[3], 0, i628, 'lightmapDirection')
  request.r(i629[4], i629[5], 0, i628, 'shadowMask')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i630 = root || new UnityEngine.LightProbes()
  var i631 = data
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i639 = data
  var i641 = i639[0]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i641.length; i += 1) {
    i640.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i641[i + 0]));
  }
  i638.ShaderCompilationErrors = i640
  i638.name = i639[1]
  i638.guid = i639[2]
  var i643 = i639[3]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( i643[i + 0] );
  }
  i638.shaderDefinedKeywords = i642
  var i645 = i639[4]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i645[i + 0]) );
  }
  i638.passes = i644
  var i647 = i639[5]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i647[i + 0]) );
  }
  i638.usePasses = i646
  var i649 = i639[6]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i649[i + 0]) );
  }
  i638.defaultParameterValues = i648
  request.r(i639[7], i639[8], 0, i638, 'unityFallbackShader')
  i638.readDepth = !!i639[9]
  i638.hasDepthOnlyPass = !!i639[10]
  i638.isCreatedByShaderGraph = !!i639[11]
  i638.disableBatching = !!i639[12]
  i638.compiled = !!i639[13]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i653 = data
  i652.shaderName = i653[0]
  i652.errorMessage = i653[1]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i658 = root || new pc.UnityShaderPass()
  var i659 = data
  i658.id = i659[0]
  i658.subShaderIndex = i659[1]
  i658.name = i659[2]
  i658.passType = i659[3]
  i658.grabPassTextureName = i659[4]
  i658.usePass = !!i659[5]
  i658.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[6], i658.zTest)
  i658.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[7], i658.zWrite)
  i658.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[8], i658.culling)
  i658.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i659[9], i658.blending)
  i658.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i659[10], i658.alphaBlending)
  i658.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[11], i658.colorWriteMask)
  i658.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[12], i658.offsetUnits)
  i658.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[13], i658.offsetFactor)
  i658.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[14], i658.stencilRef)
  i658.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[15], i658.stencilReadMask)
  i658.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[16], i658.stencilWriteMask)
  i658.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i659[17], i658.stencilOp)
  i658.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i659[18], i658.stencilOpFront)
  i658.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i659[19], i658.stencilOpBack)
  var i661 = i659[20]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i661[i + 0]) );
  }
  i658.tags = i660
  var i663 = i659[21]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( i663[i + 0] );
  }
  i658.passDefinedKeywords = i662
  var i665 = i659[22]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i665[i + 0]) );
  }
  i658.passDefinedKeywordGroups = i664
  var i667 = i659[23]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i667[i + 0]) );
  }
  i658.variants = i666
  var i669 = i659[24]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i669[i + 0]) );
  }
  i658.excludedVariants = i668
  i658.hasDepthReader = !!i659[25]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i671 = data
  i670.val = i671[0]
  i670.name = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i673 = data
  i672.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[0], i672.src)
  i672.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[1], i672.dst)
  i672.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[2], i672.op)
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i675 = data
  i674.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[0], i674.pass)
  i674.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[1], i674.fail)
  i674.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[2], i674.zFail)
  i674.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[3], i674.comp)
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i679 = data
  i678.name = i679[0]
  i678.value = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i683 = data
  var i685 = i683[0]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i682.keywords = i684
  i682.hasDiscard = !!i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i689 = data
  i688.passId = i689[0]
  i688.subShaderIndex = i689[1]
  var i691 = i689[2]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( i691[i + 0] );
  }
  i688.keywords = i690
  i688.vertexProgram = i689[3]
  i688.fragmentProgram = i689[4]
  i688.exportedForWebGl2 = !!i689[5]
  i688.readDepth = !!i689[6]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'shader')
  i694.pass = i695[2]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i699 = data
  i698.name = i699[0]
  i698.type = i699[1]
  i698.value = new pc.Vec4( i699[2], i699[3], i699[4], i699[5] )
  i698.textureValue = i699[6]
  i698.shaderPropertyFlag = i699[7]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i701 = data
  i700.name = i701[0]
  request.r(i701[1], i701[2], 0, i700, 'texture')
  i700.aabb = i701[3]
  i700.vertices = i701[4]
  i700.triangles = i701[5]
  i700.textureRect = UnityEngine.Rect.MinMaxRect(i701[6], i701[7], i701[8], i701[9])
  i700.packedRect = UnityEngine.Rect.MinMaxRect(i701[10], i701[11], i701[12], i701[13])
  i700.border = new pc.Vec4( i701[14], i701[15], i701[16], i701[17] )
  i700.transparency = i701[18]
  i700.bounds = i701[19]
  i700.pixelsPerUnit = i701[20]
  i700.textureWidth = i701[21]
  i700.textureHeight = i701[22]
  i700.nativeSize = new pc.Vec2( i701[23], i701[24] )
  i700.pivot = new pc.Vec2( i701[25], i701[26] )
  i700.textureRectOffset = new pc.Vec2( i701[27], i701[28] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i703 = data
  i702.name = i703[0]
  i702.ascent = i703[1]
  i702.originalLineHeight = i703[2]
  i702.fontSize = i703[3]
  var i705 = i703[4]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i705[i + 0]) );
  }
  i702.characterInfo = i704
  request.r(i703[5], i703[6], 0, i702, 'texture')
  i702.originalFontSize = i703[7]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i709 = data
  i708.index = i709[0]
  i708.advance = i709[1]
  i708.bearing = i709[2]
  i708.glyphWidth = i709[3]
  i708.glyphHeight = i709[4]
  i708.minX = i709[5]
  i708.maxX = i709[6]
  i708.minY = i709[7]
  i708.maxY = i709[8]
  i708.uvBottomLeftX = i709[9]
  i708.uvBottomLeftY = i709[10]
  i708.uvBottomRightX = i709[11]
  i708.uvBottomRightY = i709[12]
  i708.uvTopLeftX = i709[13]
  i708.uvTopLeftY = i709[14]
  i708.uvTopRightX = i709[15]
  i708.uvTopRightY = i709[16]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i711 = data
  i710.name = i711[0]
  i710.bytes64 = i711[1]
  i710.data = i711[2]
  return i710
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i713 = data
  var i715 = i713[0]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('UnityEngine.InputSystem.InputActionMap', i715[i + 0]) );
  }
  i712.m_ActionMaps = i714
  var i717 = i713[1]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('UnityEngine.InputSystem.InputControlScheme', i717[i + 0]) );
  }
  i712.m_ControlSchemes = i716
  i712.m_IsProjectWide = !!i713[2]
  return i712
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i721 = data
  i720.m_Name = i721[0]
  i720.m_Id = i721[1]
  request.r(i721[2], i721[3], 0, i720, 'm_Asset')
  var i723 = i721[4]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('UnityEngine.InputSystem.InputAction', i723[i + 0]) );
  }
  i720.m_Actions = i722
  var i725 = i721[5]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('UnityEngine.InputSystem.InputBinding', i725[i + 0]) );
  }
  i720.m_Bindings = i724
  return i720
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i729 = data
  i728.m_Name = i729[0]
  i728.m_Type = i729[1]
  i728.m_ExpectedControlType = i729[2]
  i728.m_Id = i729[3]
  i728.m_Processors = i729[4]
  i728.m_Interactions = i729[5]
  var i731 = i729[6]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('UnityEngine.InputSystem.InputBinding', i731[i + 0]) );
  }
  i728.m_SingletonActionBindings = i730
  i728.m_Flags = i729[7]
  i728.m_Priority = i729[8]
  return i728
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i735 = data
  i734.m_Name = i735[0]
  i734.m_Id = i735[1]
  i734.m_Path = i735[2]
  i734.m_Interactions = i735[3]
  i734.m_Processors = i735[4]
  i734.m_Groups = i735[5]
  i734.m_Action = i735[6]
  i734.m_Flags = i735[7]
  return i734
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i739 = data
  i738.m_Name = i739[0]
  i738.m_BindingGroup = i739[1]
  var i741 = i739[2]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i741[i + 0]) );
  }
  i738.m_DeviceRequirements = i740
  return i738
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i745 = data
  i744.m_ControlPath = i745[0]
  i744.m_Flags = i745[1]
  return i744
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_Asset')
  i746.m_ActionId = i747[2]
  return i746
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i748 = root || request.c( 'TMPro.TMP_Settings' )
  var i749 = data
  i748.assetVersion = i749[0]
  i748.m_TextWrappingMode = i749[1]
  i748.m_enableKerning = !!i749[2]
  var i751 = i749[3]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(i751[i + 0]);
  }
  i748.m_ActiveFontFeatures = i750
  i748.m_enableExtraPadding = !!i749[4]
  i748.m_enableTintAllSprites = !!i749[5]
  i748.m_enableParseEscapeCharacters = !!i749[6]
  i748.m_EnableRaycastTarget = !!i749[7]
  i748.m_GetFontFeaturesAtRuntime = !!i749[8]
  i748.m_missingGlyphCharacter = i749[9]
  i748.m_ClearDynamicDataOnBuild = !!i749[10]
  i748.m_warningsDisabled = !!i749[11]
  request.r(i749[12], i749[13], 0, i748, 'm_defaultFontAsset')
  i748.m_defaultFontAssetPath = i749[14]
  i748.m_defaultFontSize = i749[15]
  i748.m_defaultAutoSizeMinRatio = i749[16]
  i748.m_defaultAutoSizeMaxRatio = i749[17]
  i748.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i749[18], i749[19] )
  i748.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i749[20], i749[21] )
  i748.m_autoSizeTextContainer = !!i749[22]
  i748.m_IsTextObjectScaleStatic = !!i749[23]
  var i753 = i749[24]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 1, i752, '')
  }
  i748.m_fallbackFontAssets = i752
  i748.m_matchMaterialPreset = !!i749[25]
  i748.m_HideSubTextObjects = !!i749[26]
  request.r(i749[27], i749[28], 0, i748, 'm_defaultSpriteAsset')
  i748.m_defaultSpriteAssetPath = i749[29]
  i748.m_enableEmojiSupport = !!i749[30]
  i748.m_MissingCharacterSpriteUnicode = i749[31]
  var i755 = i749[32]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 1, i754, '')
  }
  i748.m_EmojiFallbackTextAssets = i754
  i748.m_defaultColorGradientPresetsPath = i749[33]
  request.r(i749[34], i749[35], 0, i748, 'm_defaultStyleSheet')
  i748.m_StyleSheetsResourcePath = i749[36]
  request.r(i749[37], i749[38], 0, i748, 'm_leadingCharacters')
  request.r(i749[39], i749[40], 0, i748, 'm_followingCharacters')
  i748.m_UseModernHangulLineBreakingRules = !!i749[41]
  return i748
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i762 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i763 = data
  i762.normalStyle = i763[0]
  i762.normalSpacingOffset = i763[1]
  i762.boldStyle = i763[2]
  i762.boldSpacing = i763[3]
  i762.italicStyle = i763[4]
  i762.tabSize = i763[5]
  request.r(i763[6], i763[7], 0, i762, 'atlas')
  i762.m_SourceFontFileGUID = i763[8]
  i762.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i763[9], i762.m_CreationSettings)
  request.r(i763[10], i763[11], 0, i762, 'm_SourceFontFile')
  i762.m_SourceFontFilePath = i763[12]
  i762.m_AtlasPopulationMode = i763[13]
  i762.InternalDynamicOS = !!i763[14]
  var i765 = i763[15]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('UnityEngine.TextCore.Glyph', i765[i + 0]));
  }
  i762.m_GlyphTable = i764
  var i767 = i763[16]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('TMPro.TMP_Character', i767[i + 0]));
  }
  i762.m_CharacterTable = i766
  var i769 = i763[17]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i762.m_AtlasTextures = i768
  i762.m_AtlasTextureIndex = i763[18]
  i762.m_IsMultiAtlasTexturesEnabled = !!i763[19]
  i762.m_GetFontFeatures = !!i763[20]
  i762.m_ClearDynamicDataOnBuild = !!i763[21]
  i762.m_AtlasWidth = i763[22]
  i762.m_AtlasHeight = i763[23]
  i762.m_AtlasPadding = i763[24]
  i762.m_AtlasRenderMode = i763[25]
  var i771 = i763[26]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('UnityEngine.TextCore.GlyphRect', i771[i + 0]));
  }
  i762.m_UsedGlyphRects = i770
  var i773 = i763[27]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('UnityEngine.TextCore.GlyphRect', i773[i + 0]));
  }
  i762.m_FreeGlyphRects = i772
  i762.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i763[28], i762.m_FontFeatureTable)
  i762.m_ShouldReimportFontFeatures = !!i763[29]
  var i775 = i763[30]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 1, i774, '')
  }
  i762.m_FallbackFontAssetTable = i774
  var i777 = i763[31]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('TMPro.TMP_FontWeightPair', i777[i + 0]) );
  }
  i762.m_FontWeightTable = i776
  var i779 = i763[32]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('TMPro.TMP_FontWeightPair', i779[i + 0]) );
  }
  i762.fontWeights = i778
  i762.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i763[33], i762.m_fontInfo)
  var i781 = i763[34]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('TMPro.TMP_Glyph', i781[i + 0]));
  }
  i762.m_glyphInfoList = i780
  i762.m_KerningTable = request.d('TMPro.KerningTable', i763[35], i762.m_KerningTable)
  var i783 = i763[36]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i762.fallbackFontAssets = i782
  i762.m_Version = i763[37]
  i762.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i763[38], i762.m_FaceInfo)
  request.r(i763[39], i763[40], 0, i762, 'm_Material')
  return i762
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i784 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i785 = data
  i784.sourceFontFileName = i785[0]
  i784.sourceFontFileGUID = i785[1]
  i784.faceIndex = i785[2]
  i784.pointSizeSamplingMode = i785[3]
  i784.pointSize = i785[4]
  i784.padding = i785[5]
  i784.paddingMode = i785[6]
  i784.packingMode = i785[7]
  i784.atlasWidth = i785[8]
  i784.atlasHeight = i785[9]
  i784.characterSetSelectionMode = i785[10]
  i784.characterSequence = i785[11]
  i784.referencedFontAssetGUID = i785[12]
  i784.referencedTextAssetGUID = i785[13]
  i784.fontStyle = i785[14]
  i784.fontStyleModifier = i785[15]
  i784.renderMode = i785[16]
  i784.includeFontFeatures = !!i785[17]
  return i784
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i789 = data
  i788.m_Index = i789[0]
  i788.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i789[1], i788.m_Metrics)
  i788.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i789[2], i788.m_GlyphRect)
  i788.m_Scale = i789[3]
  i788.m_AtlasIndex = i789[4]
  i788.m_ClassDefinitionType = i789[5]
  return i788
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i791 = data
  i790.m_Width = i791[0]
  i790.m_Height = i791[1]
  i790.m_HorizontalBearingX = i791[2]
  i790.m_HorizontalBearingY = i791[3]
  i790.m_HorizontalAdvance = i791[4]
  return i790
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i793 = data
  i792.m_X = i793[0]
  i792.m_Y = i793[1]
  i792.m_Width = i793[2]
  i792.m_Height = i793[3]
  return i792
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i796 = root || request.c( 'TMPro.TMP_Character' )
  var i797 = data
  i796.m_ElementType = i797[0]
  i796.m_Unicode = i797[1]
  i796.m_GlyphIndex = i797[2]
  i796.m_Scale = i797[3]
  return i796
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i803 = data
  var i805 = i803[0]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('TMPro.MultipleSubstitutionRecord', i805[i + 0]));
  }
  i802.m_MultipleSubstitutionRecords = i804
  var i807 = i803[1]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('TMPro.LigatureSubstitutionRecord', i807[i + 0]));
  }
  i802.m_LigatureSubstitutionRecords = i806
  var i809 = i803[2]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i809[i + 0]));
  }
  i802.m_GlyphPairAdjustmentRecords = i808
  var i811 = i803[3]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i811[i + 0]));
  }
  i802.m_MarkToBaseAdjustmentRecords = i810
  var i813 = i803[4]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i813[i + 0]));
  }
  i802.m_MarkToMarkAdjustmentRecords = i812
  return i802
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i817 = data
  i816.m_TargetGlyphID = i817[0]
  i816.m_SubstituteGlyphIDs = i817[1]
  return i816
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i821 = data
  i820.m_ComponentGlyphIDs = i821[0]
  i820.m_LigatureGlyphID = i821[1]
  return i820
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i825 = data
  i824.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i825[0], i824.m_FirstAdjustmentRecord)
  i824.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i825[1], i824.m_SecondAdjustmentRecord)
  i824.m_FeatureLookupFlags = i825[2]
  return i824
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i827 = data
  i826.m_GlyphIndex = i827[0]
  i826.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i827[1], i826.m_GlyphValueRecord)
  return i826
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i829 = data
  i828.m_XPlacement = i829[0]
  i828.m_YPlacement = i829[1]
  i828.m_XAdvance = i829[2]
  i828.m_YAdvance = i829[3]
  return i828
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i833 = data
  i832.m_BaseGlyphID = i833[0]
  i832.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i833[1], i832.m_BaseGlyphAnchorPoint)
  i832.m_MarkGlyphID = i833[2]
  i832.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i833[3], i832.m_MarkPositionAdjustment)
  return i832
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i837 = data
  i836.m_BaseMarkGlyphID = i837[0]
  i836.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i837[1], i836.m_BaseMarkGlyphAnchorPoint)
  i836.m_CombiningMarkGlyphID = i837[2]
  i836.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i837[3], i836.m_CombiningMarkPositionAdjustment)
  return i836
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'regularTypeface')
  request.r(i841[2], i841[3], 0, i840, 'italicTypeface')
  return i840
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i843 = data
  i842.Name = i843[0]
  i842.PointSize = i843[1]
  i842.Scale = i843[2]
  i842.CharacterCount = i843[3]
  i842.LineHeight = i843[4]
  i842.Baseline = i843[5]
  i842.Ascender = i843[6]
  i842.CapHeight = i843[7]
  i842.Descender = i843[8]
  i842.CenterLine = i843[9]
  i842.SuperscriptOffset = i843[10]
  i842.SubscriptOffset = i843[11]
  i842.SubSize = i843[12]
  i842.Underline = i843[13]
  i842.UnderlineThickness = i843[14]
  i842.strikethrough = i843[15]
  i842.strikethroughThickness = i843[16]
  i842.TabWidth = i843[17]
  i842.Padding = i843[18]
  i842.AtlasWidth = i843[19]
  i842.AtlasHeight = i843[20]
  return i842
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_Glyph' )
  var i847 = data
  i846.id = i847[0]
  i846.x = i847[1]
  i846.y = i847[2]
  i846.width = i847[3]
  i846.height = i847[4]
  i846.xOffset = i847[5]
  i846.yOffset = i847[6]
  i846.xAdvance = i847[7]
  i846.scale = i847[8]
  return i846
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.KerningTable' )
  var i849 = data
  var i851 = i849[0]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('TMPro.KerningPair', i851[i + 0]));
  }
  i848.kerningPairs = i850
  return i848
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.KerningPair' )
  var i855 = data
  i854.xOffset = i855[0]
  i854.m_FirstGlyph = i855[1]
  i854.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i855[2], i854.m_FirstGlyphAdjustments)
  i854.m_SecondGlyph = i855[3]
  i854.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i855[4], i854.m_SecondGlyphAdjustments)
  i854.m_IgnoreSpacingAdjustments = !!i855[5]
  return i854
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i857 = data
  i856.m_FaceIndex = i857[0]
  i856.m_FamilyName = i857[1]
  i856.m_StyleName = i857[2]
  i856.m_PointSize = i857[3]
  i856.m_Scale = i857[4]
  i856.m_UnitsPerEM = i857[5]
  i856.m_LineHeight = i857[6]
  i856.m_AscentLine = i857[7]
  i856.m_CapLine = i857[8]
  i856.m_MeanLine = i857[9]
  i856.m_Baseline = i857[10]
  i856.m_DescentLine = i857[11]
  i856.m_SuperscriptOffset = i857[12]
  i856.m_SuperscriptSize = i857[13]
  i856.m_SubscriptOffset = i857[14]
  i856.m_SubscriptSize = i857[15]
  i856.m_UnderlineOffset = i857[16]
  i856.m_UnderlineThickness = i857[17]
  i856.m_StrikethroughOffset = i857[18]
  i856.m_StrikethroughThickness = i857[19]
  i856.m_TabWidth = i857[20]
  return i856
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'spriteSheet')
  var i861 = i859[2]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(request.d('TMPro.TMP_Sprite', i861[i + 0]));
  }
  i858.spriteInfoList = i860
  var i863 = i859[3]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 1, i862, '')
  }
  i858.fallbackSpriteAssets = i862
  var i865 = i859[4]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('TMPro.TMP_SpriteCharacter', i865[i + 0]));
  }
  i858.m_SpriteCharacterTable = i864
  var i867 = i859[5]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('TMPro.TMP_SpriteGlyph', i867[i + 0]));
  }
  i858.m_GlyphTable = i866
  i858.m_Version = i859[6]
  i858.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i859[7], i858.m_FaceInfo)
  request.r(i859[8], i859[9], 0, i858, 'm_Material')
  return i858
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_Sprite' )
  var i871 = data
  i870.name = i871[0]
  i870.hashCode = i871[1]
  i870.unicode = i871[2]
  i870.pivot = new pc.Vec2( i871[3], i871[4] )
  request.r(i871[5], i871[6], 0, i870, 'sprite')
  i870.id = i871[7]
  i870.x = i871[8]
  i870.y = i871[9]
  i870.width = i871[10]
  i870.height = i871[11]
  i870.xOffset = i871[12]
  i870.yOffset = i871[13]
  i870.xAdvance = i871[14]
  i870.scale = i871[15]
  return i870
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i877 = data
  i876.m_Name = i877[0]
  i876.m_ElementType = i877[1]
  i876.m_Unicode = i877[2]
  i876.m_GlyphIndex = i877[3]
  i876.m_Scale = i877[4]
  return i876
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'sprite')
  i880.m_Index = i881[2]
  i880.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i881[3], i880.m_Metrics)
  i880.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i881[4], i880.m_GlyphRect)
  i880.m_Scale = i881[5]
  i880.m_AtlasIndex = i881[6]
  i880.m_ClassDefinitionType = i881[7]
  return i880
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i883 = data
  var i885 = i883[0]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('TMPro.TMP_Style', i885[i + 0]));
  }
  i882.m_StyleList = i884
  return i882
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.TMP_Style' )
  var i889 = data
  i888.m_Name = i889[0]
  i888.m_HashCode = i889[1]
  i888.m_OpeningDefinition = i889[2]
  i888.m_ClosingDefinition = i889[3]
  i888.m_OpeningTagArray = i889[4]
  i888.m_ClosingTagArray = i889[5]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i891 = data
  var i893 = i891[0]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i893[i + 0]) );
  }
  i890.files = i892
  i890.componentToPrefabIds = i891[1]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i897 = data
  i896.path = i897[0]
  request.r(i897[1], i897[2], 0, i896, 'unityObject')
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i901[i + 0]) );
  }
  i898.scriptsExecutionOrder = i900
  var i903 = i899[1]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i903[i + 0]) );
  }
  i898.sortingLayers = i902
  var i905 = i899[2]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i905[i + 0]) );
  }
  i898.cullingLayers = i904
  i898.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i899[3], i898.timeSettings)
  i898.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i899[4], i898.physicsSettings)
  i898.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i899[5], i898.physics2DSettings)
  i898.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i899[6], i898.qualitySettings)
  i898.enableRealtimeShadows = !!i899[7]
  i898.enableAutoInstancing = !!i899[8]
  i898.enableStaticBatching = !!i899[9]
  i898.enableDynamicBatching = !!i899[10]
  i898.usePreservativeDynamicBatching = !!i899[11]
  i898.lightmapEncodingQuality = i899[12]
  i898.desiredColorSpace = i899[13]
  var i907 = i899[14]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i898.allTags = i906
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i911 = data
  i910.name = i911[0]
  i910.value = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i915 = data
  i914.id = i915[0]
  i914.name = i915[1]
  i914.value = i915[2]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i919 = data
  i918.id = i919[0]
  i918.name = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i921 = data
  i920.fixedDeltaTime = i921[0]
  i920.maximumDeltaTime = i921[1]
  i920.timeScale = i921[2]
  i920.maximumParticleTimestep = i921[3]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i923 = data
  i922.gravity = new pc.Vec3( i923[0], i923[1], i923[2] )
  i922.defaultSolverIterations = i923[3]
  i922.bounceThreshold = i923[4]
  i922.autoSyncTransforms = !!i923[5]
  i922.autoSimulation = !!i923[6]
  var i925 = i923[7]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i925[i + 0]) );
  }
  i922.collisionMatrix = i924
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i929 = data
  i928.enabled = !!i929[0]
  i928.layerId = i929[1]
  i928.otherLayerId = i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'material')
  i930.gravity = new pc.Vec2( i931[2], i931[3] )
  i930.positionIterations = i931[4]
  i930.velocityIterations = i931[5]
  i930.velocityThreshold = i931[6]
  i930.maxLinearCorrection = i931[7]
  i930.maxAngularCorrection = i931[8]
  i930.maxTranslationSpeed = i931[9]
  i930.maxRotationSpeed = i931[10]
  i930.baumgarteScale = i931[11]
  i930.baumgarteTOIScale = i931[12]
  i930.timeToSleep = i931[13]
  i930.linearSleepTolerance = i931[14]
  i930.angularSleepTolerance = i931[15]
  i930.defaultContactOffset = i931[16]
  i930.autoSimulation = !!i931[17]
  i930.queriesHitTriggers = !!i931[18]
  i930.queriesStartInColliders = !!i931[19]
  i930.callbacksOnDisable = !!i931[20]
  i930.reuseCollisionCallbacks = !!i931[21]
  i930.autoSyncTransforms = !!i931[22]
  var i933 = i931[23]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i933[i + 0]) );
  }
  i930.collisionMatrix = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i937 = data
  i936.enabled = !!i937[0]
  i936.layerId = i937[1]
  i936.otherLayerId = i937[2]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i939 = data
  var i941 = i939[0]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i941[i + 0]) );
  }
  i938.qualityLevels = i940
  var i943 = i939[1]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( i943[i + 0] );
  }
  i938.names = i942
  i938.shadows = i939[2]
  i938.anisotropicFiltering = i939[3]
  i938.antiAliasing = i939[4]
  i938.lodBias = i939[5]
  i938.shadowCascades = i939[6]
  i938.shadowDistance = i939[7]
  i938.shadowmaskMode = i939[8]
  i938.shadowProjection = i939[9]
  i938.shadowResolution = i939[10]
  i938.softParticles = !!i939[11]
  i938.softVegetation = !!i939[12]
  i938.activeColorSpace = i939[13]
  i938.desiredColorSpace = i939[14]
  i938.masterTextureLimit = i939[15]
  i938.maxQueuedFrames = i939[16]
  i938.particleRaycastBudget = i939[17]
  i938.pixelLightCount = i939[18]
  i938.realtimeReflectionProbes = !!i939[19]
  i938.shadowCascade2Split = i939[20]
  i938.shadowCascade4Split = new pc.Vec3( i939[21], i939[22], i939[23] )
  i938.streamingMipmapsActive = !!i939[24]
  i938.vSyncCount = i939[25]
  i938.asyncUploadBufferSize = i939[26]
  i938.asyncUploadTimeSlice = i939[27]
  i938.billboardsFaceCameraPosition = !!i939[28]
  i938.shadowNearPlaneOffset = i939[29]
  i938.streamingMipmapsMemoryBudget = i939[30]
  i938.maximumLODLevel = i939[31]
  i938.streamingMipmapsAddAllCameras = !!i939[32]
  i938.streamingMipmapsMaxLevelReduction = i939[33]
  i938.streamingMipmapsRenderersPerFrame = i939[34]
  i938.resolutionScalingFixedDPIFactor = i939[35]
  i938.streamingMipmapsMaxFileIORequests = i939[36]
  i938.currentQualityLevel = i939[37]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i949 = data
  i948.weight = i949[0]
  i948.vertices = i949[1]
  i948.normals = i949[2]
  i948.tangents = i949[3]
  return i948
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i951 = data
  i950.m_XCoordinate = i951[0]
  i950.m_YCoordinate = i951[1]
  return i950
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i953 = data
  i952.m_XPositionAdjustment = i953[0]
  i952.m_YPositionAdjustment = i953[1]
  return i952
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i955 = data
  i954.xPlacement = i955[0]
  i954.yPlacement = i955[1]
  i954.xAdvance = i955[2]
  i954.yAdvance = i955[3]
  return i954
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[12],"50":[6],"51":[6],"52":[6],"53":[6],"54":[6],"55":[6],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[12],"71":[3],"72":[73],"74":[73],"26":[25],"17":[16],"75":[26],"76":[25],"77":[29,25],"78":[3],"79":[29,25],"80":[25],"81":[25],"82":[3,25],"83":[25,29],"84":[85],"86":[85],"87":[85],"88":[25],"89":[25],"28":[26],"30":[29,25],"90":[25],"27":[26],"91":[25],"92":[25],"93":[25],"94":[25],"95":[25],"96":[25],"97":[25],"98":[25],"99":[25],"100":[29,25],"101":[25],"102":[25],"103":[25],"104":[25],"23":[29,25],"105":[25],"106":[16],"107":[16],"108":[16],"109":[16],"110":[12],"111":[12]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","ClickTarget","UnityEngine.Shader","UnityEngine.BoxCollider","UnityEngine.SphereCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","GameManager","UnityEngine.GameObject","SpawnManager","UnityEngine.UI.Text","UnityEngine.MeshCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Font","UnityEngine.Cubemap","UnityEngine.Texture2D","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.85f2";

Deserializers.productName = "PlayableAdds3D";

Deserializers.lunaInitializationTime = "11/13/2026 21:27:35";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3593";

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

Deserializers.buildID = "c086206a-07e9-4f78-97bd-38fd620773f7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","GraphReference","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","PlayerInput","InitializeGlobalPlayerState"],["UnityEngine","InputSystem","InputSystem","RuntimeInitialize"],["UnityEngine","InputSystem","InputActionState","InitializeGlobalActionState"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","VisualScripting","Dependencies","NCalc","Expression","ResetStaticsOnLoad"],["Unity","VisualScripting","Flow","ResetStaticsOnLoad"],["Unity","VisualScripting","GraphInstances","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsGlobalConfig","ResetStaticsOnLoad"],["Unity","VisualScripting","RuntimeCodebase","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsAotCompilationManager","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsSerializer","ResetStaticsOnLoad"],["Unity","VisualScripting","EventBus","ResetStaticsOnLoad"],["Unity","VisualScripting","Ensure","ResetStaticsOnLoad"],["Unity","VisualScripting","UnityThread","ResetStaticsOnLoad"],["Unity","VisualScripting","Recursion","ResetStaticsOnLoad"],["Unity","VisualScripting","SavedVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsMetaType","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","fsResult","ResetStaticsOnLoad"],["Unity","VisualScripting","ApplicationVariables","ResetStaticsOnLoad"],["Unity","VisualScripting","MessageListener","ResetStaticsOnLoad"],["Unity","VisualScripting","Serialization","ResetStaticsOnLoad"],["Unity","VisualScripting","ReferenceCollector","ResetStaticsOnLoad"],["Unity","VisualScripting","OptimizedReflection","ResetStaticsOnLoad"],["Unity","VisualScripting","EditorTimeBinding","ResetStaticsOnLoad"],["Unity","VisualScripting","ProfilingUtility","ResetStaticsOnLoad"],["Unity","VisualScripting","FullSerializer","Internal","fsPortableReflection","ResetStaticsOnLoad"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","EnhancedTouch","Touch","InitializeGlobalTouchState"],["UnityEngine","InputSystem","Users","InputUser","InitializeGlobalUserState"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

