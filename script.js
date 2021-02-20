(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.syncPlaylists([this.DropDown_AE83DEC8_B5CB_5257_41E4_4312457CAF6C_playlist,this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist,this.mainPlayList]); this.DropDown_AE83DEC8_B5CB_5257_41E4_4312457CAF6C_playlist.set('selectedIndex', 0)",
 "children": [
  "this.MainViewer",
  "this.Container_BD97D3E3_B35B_337B_41D2_122E80886A12",
  "this.Container_BC0FE789_B359_D3B6_41D3_D9E53B4D1D06",
  "this.Container_BC08CB49_B34B_DCB6_41E6_4FE442812364",
  "this.Container_BDD81119_B34F_2CC9_41E0_C7FE83317472"
 ],
 "buttonToggleMute": "this.IconButton_A33A155B_B34E_D779_41E5_815C89264E42",
 "id": "rootPlayer",
 "layout": "absolute",
 "propagateClick": false,
 "overflow": "visible",
 "borderSize": 0,
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.21,
  "pitch": -10.05
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -159.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AD51832C_BD00_05D4_41D8_2D72053B49D9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.24,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AC2AC3AB_BD00_04D3_41D9_18530A81C513",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "buttonRestart": "this.IconButton_A33AC55A_B34E_D77B_41CB_790C7C00F30B",
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "buttonPause": "this.IconButton_A33AB55B_B34E_D779_41DC_3788F4E6C492"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Female Toilet (4)",
 "id": "panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 88.74,
   "class": "AdjacentPanorama",
   "yaw": 20.91,
   "distance": 1,
   "panorama": "this.panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38"
  },
  {
   "backwardYaw": -85.11,
   "class": "AdjacentPanorama",
   "yaw": -103.45,
   "distance": 1,
   "panorama": "this.panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_B398C6D2_A485_0919_41B0_8AFEA137DB54",
  "this.overlay_B3BED1EE_A49D_0B1E_41E3_18F788ADA7BC"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADED5384_BD00_04D4_41AC_B92BBB5C5663",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 19.79,
    "easing": "cubic_in_out",
    "targetYaw": -94.08,
    "targetPitch": -22.04,
    "yawSpeed": 38.75,
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 83.28,
    "targetPitch": -16.27,
    "yawSpeed": 33.25,
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 176.48,
    "targetPitch": -4.71,
    "yawSpeed": 33.25,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Female Toilet (5)",
 "id": "panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8",
   "x": 632.99,
   "class": "PanoramaMapLocation",
   "angle": -93.56,
   "y": 1635.88
  }
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -103.45,
   "class": "AdjacentPanorama",
   "yaw": -85.11,
   "distance": 1,
   "panorama": "this.panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_B39AB54D_A49D_0B1D_41E1_655AE73C0D6F"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.31,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AD1AA2EE_BD00_0454_41A3_24A32C3E43E5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.13,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AC0B23C0_BD00_044D_41DC_78CFC314D94A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.9,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AC14A3CA_BD00_045C_41D5_B2194F55DD7B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 4.16,
    "easing": "cubic_in_out",
    "targetYaw": 4.27,
    "targetPitch": -14.82,
    "yawSpeed": 7.35,
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 92.83,
    "targetPitch": -17.02,
    "yawSpeed": 33.25,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.9,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADC86397_BD00_04F3_41D7_70F4D36957AB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 4.31,
    "easing": "cubic_in_out",
    "targetYaw": 94.21,
    "targetPitch": -13.82,
    "yawSpeed": 7.65,
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 26,
    "targetPitch": -10.49,
    "yawSpeed": 33.25,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Entrance (2)",
 "id": "panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8",
   "x": 1469.67,
   "class": "PanoramaMapLocation",
   "angle": 271.36,
   "y": 973.91
  }
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -83.1,
   "class": "AdjacentPanorama",
   "yaw": 79.69,
   "distance": 1,
   "panorama": "this.panorama_A919A752_A37F_08D7_41E3_AD725415E551"
  },
  {
   "backwardYaw": 92.76,
   "class": "AdjacentPanorama",
   "yaw": 177.17,
   "distance": 1,
   "panorama": "this.panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21"
  },
  {
   "backwardYaw": 92.76,
   "class": "AdjacentPanorama",
   "yaw": -3.96,
   "distance": 1,
   "panorama": "this.panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21"
  },
  {
   "backwardYaw": -32.87,
   "class": "AdjacentPanorama",
   "yaw": -87.87,
   "distance": 1,
   "panorama": "this.panorama_A91FA387_A37F_083D_41D3_095D0D14132F"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_AD6939C4_A383_7838_41E3_FF5EBD769A12",
  "this.overlay_AC890E78_A39D_18C8_41D1_CD1EACE740B9",
  "this.overlay_AC293B44_A39D_1839_41C8_B39736FB12E9",
  "this.overlay_BC9079C6_A483_1B18_41DD_E59CAFA6180A"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  "this.PanoramaPlayListItem_B2CE429A_BD00_04FC_41E5_82CAA24DE342",
  "this.PanoramaPlayListItem_B2CEB29A_BD00_04FC_41D8_287F533FCDD4",
  "this.PanoramaPlayListItem_B2CD129A_BD00_04FC_41D0_772CF36E8C82",
  {
   "media": "this.panorama_A91FA387_A37F_083D_41D3_095D0D14132F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91FA387_A37F_083D_41D3_095D0D14132F_camera"
  },
  {
   "media": "this.panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_camera"
  },
  {
   "media": "this.panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_camera"
  },
  "this.PanoramaPlayListItem_B2D3129B_BD00_04FC_419A_7994BD18FAE6",
  "this.PanoramaPlayListItem_B2D2729C_BD00_04F4_41D7_0220206AE986",
  {
   "media": "this.panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_camera"
  },
  {
   "media": "this.panorama_A91CE93C_A37D_184C_41E1_944F221C3F69",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_camera"
  },
  "this.PanoramaPlayListItem_B2D1E29C_BD00_04F4_41D8_84DA11F93210",
  {
   "media": "this.album_B20C4ED2_AB89_0266_4171_27B302650120",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.96,
  "pitch": -19.6
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "label": "Floor Plan 3D",
 "id": "album_B20C4ED2_AB89_0266_4171_27B302650120_0",
 "width": 2599,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_B20C4ED2_AB89_0266_4171_27B302650120_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_B20C4ED2_AB89_0266_4171_27B302650120_0_t.jpg",
 "duration": 5000,
 "height": 2147
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Male Toilet (2)",
 "id": "panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 80.45,
   "class": "AdjacentPanorama",
   "yaw": -2.71,
   "distance": 1,
   "panorama": "this.panorama_A919A752_A37F_08D7_41E3_AD725415E551"
  },
  {
   "backwardYaw": -76.32,
   "class": "AdjacentPanorama",
   "yaw": 95.27,
   "distance": 1,
   "panorama": "this.panorama_A91CE93C_A37D_184C_41E1_944F221C3F69"
  },
  {
   "backwardYaw": -67.54,
   "class": "AdjacentPanorama",
   "yaw": 175.1,
   "distance": 1,
   "panorama": "this.panorama_A91A921B_A37D_0854_41D2_52092A29C33E"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_BE83CAB2_A583_3952_41E0_799CC942D046",
  "this.overlay_86C4A1ED_A58D_0AB9_41DE_B1EB6F931F2A",
  "this.overlay_867DBCBA_A583_1A9C_41E2_83362EB4D4BB"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.7,
  "pitch": -10.05
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "buttonZoomOut": "this.IconButton_A33AD55A_B34E_D77B_41DD_E828682BEC08",
 "buttonMoveUp": "this.IconButton_A33A855A_B34E_D778_41D3_081B5F186BCE",
 "id": "MainViewerPanoramaPlayer",
 "buttonMoveDown": "this.IconButton_A33AA55B_B34E_D779_41E1_474ADCB39358",
 "buttonZoomIn": "this.IconButton_A33A355B_B34E_D779_41CA_01BF82F730E3",
 "buttonCardboardView": "this.IconButton_A35E7096_B53E_EEC0_41E5_2DCCF419F887",
 "buttonRestart": "this.IconButton_A33AC55A_B34E_D77B_41CB_790C7C00F30B",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonPause": "this.IconButton_A33AB55B_B34E_D779_41DC_3788F4E6C492",
 "displayPlaybackBar": true,
 "buttonMoveRight": "this.IconButton_A33A555B_B34E_D779_41E2_B4C0923C2D09",
 "buttonPlayRight": "this.IconButton_A33A755B_B34E_D779_41D0_F53AE4560B89",
 "mouseControlMode": "drag_acceleration",
 "buttonPlayLeft": "this.IconButton_A33AF55A_B34E_D77B_41B6_6D0880405734",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveLeft": "this.IconButton_A33AE55A_B34E_D77B_41E1_7B4FCB448F85"
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Female Toilet (1)",
 "id": "panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8",
   "x": 1490.73,
   "class": "PanoramaMapLocation",
   "angle": 86.65,
   "y": 1767.41
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A91FA387_A37F_083D_41D3_095D0D14132F"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_B11897C0_A3BD_1795_41DF_C19B2187414A",
  "this.overlay_B3194FCB_A48D_1709_41E0_3763049924FE"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.71,
  "pitch": -11.05
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.68,
  "pitch": -14.82
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "id": "DropDown_AE83DEC8_B5CB_5257_41E4_4312457CAF6C_playlist",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.27,
  "pitch": -14.82
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 92.83,
    "targetPitch": -17.02,
    "yawSpeed": 33.25,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.26,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AD2952AD_BD00_04D4_41B9_C9A891CFE3B1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.29,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AD02B2D0_BD00_044C_41DD_FAA404EEE540",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 32.46,
    "easing": "cubic_in_out",
    "targetYaw": 4.27,
    "targetPitch": -14.82,
    "yawSpeed": 64.22,
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 92.83,
    "targetPitch": -17.02,
    "yawSpeed": 33.25,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADA1933C_BD00_0434_41C0_86E9E980A561",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.44,
  "pitch": -6.53
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A91FA387_A37F_083D_41D3_095D0D14132F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AD75F30E_BD00_05D4_41E1_A37ADFFE3FCB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.35,
    "easing": "cubic_in_out",
    "targetYaw": 4.27,
    "targetPitch": -14.82,
    "yawSpeed": 33.85,
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 92.83,
    "targetPitch": -17.02,
    "yawSpeed": 33.25,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.24,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AC3AA3B5_BD00_0437_41D3_A24C35B908BE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.89,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AD3562C1_BD00_044C_41D6_4E99D2E49BE6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADB1134C_BD00_0454_41E4_C0250B3D945A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 46.66,
    "easing": "cubic_in_out",
    "targetYaw": 94.21,
    "targetPitch": -13.82,
    "yawSpeed": 92.74,
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 26,
    "targetPitch": -10.49,
    "yawSpeed": 33.25,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Entrance (1)",
 "id": "panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8",
   "x": 2222.1,
   "class": "PanoramaMapLocation",
   "angle": -179.28,
   "y": 980.87
  }
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.17,
   "class": "AdjacentPanorama",
   "yaw": 92.76,
   "distance": 1,
   "panorama": "this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_AE18368B_A383_084B_41D5_337FDB2D237E"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "id": "album_B20C4ED2_AB89_0266_4171_27B302650120",
 "class": "PhotoAlbum",
 "playList": "this.album_B20C4ED2_AB89_0266_4171_27B302650120_AlbumPlayList",
 "thumbnailUrl": "media/album_B20C4ED2_AB89_0266_4171_27B302650120_t.png",
 "label": "Photo Album Floor Plan 3D"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.08,
  "pitch": -22.04
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A91A921B_A37D_0854_41D2_52092A29C33E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 83.28,
    "targetPitch": -16.27,
    "yawSpeed": 33.25,
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 176.48,
    "targetPitch": -4.71,
    "yawSpeed": 33.25,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Male Toilet (3)",
 "id": "panorama_A91CE93C_A37D_184C_41E1_944F221C3F69",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 95.27,
   "class": "AdjacentPanorama",
   "yaw": -76.32,
   "distance": 1,
   "panorama": "this.panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A91A921B_A37D_0854_41D2_52092A29C33E"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_B850C43D_A58D_09BF_41DB_A49AECA5B3EF",
  "this.overlay_BA5D9525_A5BD_0B54_41D9_A34C16F07F9E"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Female Toilet (3)",
 "id": "panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 20.91,
   "class": "AdjacentPanorama",
   "yaw": 88.74,
   "distance": 1,
   "panorama": "this.panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_B3292BA0_A487_1FF1_41BB_EEC8786B485B",
  "this.overlay_BC55605C_A485_093C_41E4_63B17991BCFB"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Male Toilet (4)",
 "id": "panorama_A91A921B_A37D_0854_41D2_52092A29C33E",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8",
   "x": 460.91,
   "class": "PanoramaMapLocation",
   "angle": 274.08,
   "y": 574.47
  }
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 175.1,
   "class": "AdjacentPanorama",
   "yaw": -67.54,
   "distance": 1,
   "panorama": "this.panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A919A752_A37F_08D7_41E3_AD725415E551"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_840EEBC7_A59D_FEDC_41C8_95CCE9EB0F3C",
  "this.overlay_82630082_A587_0A82_41C0_BE76E5D1BF7F"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 103.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AD8C236B_BD00_045C_41CF_D0B445839686",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 98.73,
    "targetPitch": -22.61,
    "yawSpeed": 33.25,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist",
 "items": [
  {
   "media": "this.panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_camera"
  },
  {
   "media": "this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_camera"
  },
  {
   "media": "this.panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_camera"
  },
  {
   "media": "this.panorama_A91FA387_A37F_083D_41D3_095D0D14132F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91FA387_A37F_083D_41D3_095D0D14132F_camera"
  },
  {
   "media": "this.panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_camera"
  },
  {
   "media": "this.panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_camera"
  },
  {
   "media": "this.panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_camera"
  },
  {
   "media": "this.panorama_A919A752_A37F_08D7_41E3_AD725415E551",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A919A752_A37F_08D7_41E3_AD725415E551_camera"
  },
  {
   "media": "this.panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_camera"
  },
  {
   "media": "this.panorama_A91CE93C_A37D_184C_41E1_944F221C3F69",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_camera"
  },
  {
   "media": "this.panorama_A91A921B_A37D_0854_41D2_52092A29C33E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A91A921B_A37D_0854_41D2_52092A29C33E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist, 11, 0)",
   "media": "this.album_B20C4ED2_AB89_0266_4171_27B302650120",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "class": "MapPlayer",
 "movementMode": "constrained",
 "buttonZoomOut": "this.IconButton_A33AD55A_B34E_D77B_41DD_E828682BEC08",
 "id": "MapViewerMapPlayer",
 "viewerArea": "this.MapViewer",
 "buttonZoomIn": "this.IconButton_A33A355B_B34E_D779_41CA_01BF82F730E3"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.21,
  "pitch": -13.82
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A919A752_A37F_08D7_41E3_AD725415E551_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "targetYaw": 26,
    "targetPitch": -10.49,
    "yawSpeed": 33.25,
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.73,
  "pitch": -22.61
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_camera"
},
{
 "fieldOfViewOverlayRadiusScale": 0.3,
 "label": "Floor Plan 3D",
 "id": "map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8",
 "width": 2599,
 "class": "Map",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8.jpeg",
    "width": 2599,
    "class": "ImageResourceLevel",
    "height": 2147
   },
   {
    "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_lq.jpeg",
    "width": 281,
    "class": "ImageResourceLevel",
    "height": 233,
    "tags": "preload"
   }
  ]
 },
 "thumbnailUrl": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_t.jpg",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "maximumZoomFactor": 1.2,
 "height": 2147,
 "overlays": [
  "this.overlay_ACBF63AB_A387_0846_41D0_0F8CEF906FE1",
  "this.overlay_B345115F_A38F_08E9_41D1_BAD4832DB703",
  "this.overlay_B0965908_A38D_F87C_41BF_11CB4005B64B",
  "this.overlay_B14AA3C5_A387_0FF6_41DB_2960DAD2569B",
  "this.overlay_8CFEDF8C_A483_16BF_41D6_1D20B9B421A2",
  "this.overlay_A55D71B1_A889_3FB6_41E4_BEE33529F063"
 ],
 "initialZoomFactor": 1
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.13,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AC76B3DD_BD00_0474_41DD_4D94132B871C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.83,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AD64E2FE_BD00_0434_41DD_9AD19B9DE8EE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Male Toilet (1)",
 "id": "panorama_A919A752_A37F_08D7_41E3_AD725415E551",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_t.jpg",
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8",
   "x": 1514.05,
   "class": "PanoramaMapLocation",
   "angle": -91.44,
   "y": 509.52
  }
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.71,
   "class": "AdjacentPanorama",
   "yaw": 80.45,
   "distance": 1,
   "panorama": "this.panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B"
  },
  {
   "backwardYaw": 79.69,
   "class": "AdjacentPanorama",
   "yaw": -83.1,
   "distance": 1,
   "panorama": "this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_BE20DFEC_A583_16CA_41D7_A691BB7246BF",
  "this.overlay_BDBEEF34_A583_376C_41DC_AB808A5DD641"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.18,
  "pitch": -8.29
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "hfov": 360,
 "label": "Female Toilet (2)",
 "id": "panorama_A91FA387_A37F_083D_41D3_095D0D14132F",
 "class": "Panorama",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_t.jpg",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38"
  },
  {
   "backwardYaw": -87.87,
   "class": "AdjacentPanorama",
   "yaw": -32.87,
   "distance": 1,
   "panorama": "this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F"
  }
 ],
 "hfovMin": "120%",
 "partial": false,
 "overlays": [
  "this.overlay_B1009C61_A3BD_389B_41E0_2A213889AA07",
  "this.overlay_B33040EE_A483_0908_41DD_93899A273745"
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.87,
 "paddingLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "class": "ViewerArea",
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "shadow": false,
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "transparent",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "toolTipShadowVerticalLength": 0,
 "top": 0,
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "transitionMode": "blending",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "propagateClick": false,
 "id": "Container_BD97D3E3_B35B_337B_41D2_122E80886A12",
 "left": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minHeight": 1,
 "height": "100%",
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "FULL"
 },
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.HTMLText_BCD9F518_B347_D4C8_41CB_ADCF5B9273B1"
 ],
 "id": "Container_BC0FE789_B359_D3B6_41D3_D9E53B4D1D06",
 "left": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "borderSize": 0,
 "width": "75%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "paddingRight": 0,
 "bottom": "85%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "CONTAIN 01"
 },
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.Container_A7985D21_B2CF_5787_41CC_8E1A821CCF18",
  "this.Container_A124E5EC_B547_369A_41B5_87CD9DA671BA",
  "this.Container_A1DC1C15_B547_558B_41DB_85399D84BF5D",
  "this.Container_AF65A9AF_B5C6_DE2D_41B0_64E448626E9A"
 ],
 "id": "Container_BC08CB49_B34B_DCB6_41E6_4FE442812364",
 "layout": "absolute",
 "overflow": "scroll",
 "right": "0%",
 "borderSize": 0,
 "width": "25%",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minHeight": 1,
 "height": "100%",
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "container right "
 },
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.Container_A02FBFA6_B2DA_D281_41DD_61215F8DF26E",
  "this.Container_BDA5AD02_B347_D4BA_41DC_ACA78CD343CA",
  "this.Container_A7A78BFA_B2CB_F284_41B6_D2A33200B385"
 ],
 "id": "Container_BDD81119_B34F_2CC9_41E0_C7FE83317472",
 "left": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "borderSize": 0,
 "width": "75.03%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "bottom": "0.11%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minHeight": 1,
 "height": "84.918%",
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "contai"
 },
 "shadow": false
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33A155B_B34E_D779_41E5_815C89264E42",
 "width": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33A155B_B34E_D779_41E5_815C89264E42.png",
 "mode": "toggle",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 40,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33A155B_B34E_D779_41E5_815C89264E42_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43175"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "rollOverIconURL": "skin/IconButton_A33AC55A_B34E_D77B_41CB_790C7C00F30B_rollover.png",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33AC55A_B34E_D77B_41CB_790C7C00F30B",
 "width": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33AC55A_B34E_D77B_41CB_790C7C00F30B.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 40,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33AC55A_B34E_D77B_41CB_790C7C00F30B_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43166"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33AB55B_B34E_D779_41DC_3788F4E6C492",
 "width": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33AB55B_B34E_D779_41DC_3788F4E6C492.png",
 "mode": "toggle",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 40,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33AB55B_B34E_D779_41DC_3788F4E6C492_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43171"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.91,
   "hfov": 10.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.09
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0_HS_2_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -40.09,
   "yaw": 20.91
  }
 ],
 "id": "overlay_B398C6D2_A485_0919_41B0_8AFEA137DB54",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38, this.camera_AD2952AD_BD00_04D4_41B9_C9A891CFE3B1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.45,
   "hfov": 8.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -54.15
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1_0_HS_3_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -54.15,
   "yaw": -103.45
  }
 ],
 "id": "overlay_B3BED1EE_A49D_0B1E_41E3_18F788ADA7BC",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D, this.camera_AD3562C1_BD00_044C_41D6_4E99D2E49BE6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.11,
   "hfov": 6.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -64.45
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_0_HS_2_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -64.45,
   "yaw": -85.11
  }
 ],
 "id": "overlay_B39AB54D_A49D_0B1D_41E1_655AE73C0D6F",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1, this.camera_ADA1933C_BD00_0434_41C0_86E9E980A561); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.69,
   "hfov": 10.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.09
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0_HS_0_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -41.09,
   "yaw": 79.69
  }
 ],
 "id": "overlay_AD6939C4_A383_7838_41E3_FF5EBD769A12",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A919A752_A37F_08D7_41E3_AD725415E551, this.camera_ADC86397_BD00_04F3_41D7_70F4D36957AB); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.87,
   "hfov": 12.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.77
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0_HS_1_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -26.77,
   "yaw": -87.87
  }
 ],
 "id": "overlay_AC890E78_A39D_18C8_41D1_CD1EACE740B9",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A91FA387_A37F_083D_41D3_095D0D14132F, this.camera_AC0B23C0_BD00_044D_41DC_78CFC314D94A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.17,
   "hfov": 11.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.3
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0_HS_2_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -33.3,
   "yaw": 177.17
  }
 ],
 "id": "overlay_AC293B44_A39D_1839_41C8_B39736FB12E9",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21, this.camera_AC2AC3AB_BD00_04D3_41D9_18530A81C513); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.96,
   "hfov": 3.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -76.01
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_0_HS_3_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -76.01,
   "yaw": -3.96
  }
 ],
 "id": "overlay_BC9079C6_A483_1B18_41DD_E59CAFA6180A",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21, this.camera_AC3AA3B5_BD00_0437_41D3_A24C35B908BE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "media": "this.panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B2CE429A_BD00_04FC_41E5_82CAA24DE342, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_camera",
 "id": "PanoramaPlayListItem_B2CE429A_BD00_04FC_41E5_82CAA24DE342"
},
{
 "media": "this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B2CEB29A_BD00_04FC_41D8_287F533FCDD4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F_camera",
 "id": "PanoramaPlayListItem_B2CEB29A_BD00_04FC_41D8_287F533FCDD4"
},
{
 "media": "this.panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B2CD129A_BD00_04FC_41D0_772CF36E8C82, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_camera",
 "id": "PanoramaPlayListItem_B2CD129A_BD00_04FC_41D0_772CF36E8C82"
},
{
 "media": "this.panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B2D3129B_BD00_04FC_419A_7994BD18FAE6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A91BCE5F_A37F_18CD_41E0_6E677B19F60D_camera",
 "id": "PanoramaPlayListItem_B2D3129B_BD00_04FC_419A_7994BD18FAE6"
},
{
 "media": "this.panorama_A919A752_A37F_08D7_41E3_AD725415E551",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B2D2729C_BD00_04F4_41D7_0220206AE986, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A919A752_A37F_08D7_41E3_AD725415E551_camera",
 "id": "PanoramaPlayListItem_B2D2729C_BD00_04F4_41D7_0220206AE986"
},
{
 "media": "this.panorama_A91A921B_A37D_0854_41D2_52092A29C33E",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B2D1E29C_BD00_04F4_41D8_84DA11F93210, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A91A921B_A37D_0854_41D2_52092A29C33E_camera",
 "id": "PanoramaPlayListItem_B2D1E29C_BD00_04F4_41D8_84DA11F93210"
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.27,
   "hfov": 5.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -66.21
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0_HS_0_0.png",
      "width": 316,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ]
   },
   "pitch": -66.21,
   "yaw": 95.27
  }
 ],
 "id": "overlay_BE83CAB2_A583_3952_41E0_799CC942D046",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A91CE93C_A37D_184C_41E1_944F221C3F69, this.camera_AD8C236B_BD00_045C_41CF_D0B445839686); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.1,
   "hfov": 3.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -67.15
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0_HS_5_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 223
     }
    ]
   },
   "pitch": -67.15,
   "yaw": 175.1
  }
 ],
 "id": "overlay_86C4A1ED_A58D_0AB9_41DE_B1EB6F931F2A",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A91A921B_A37D_0854_41D2_52092A29C33E, this.camera_ADED5384_BD00_04D4_41AC_B92BBB5C5663); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.71,
   "hfov": 8.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -53.15
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B_0_HS_6_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -53.15,
   "yaw": -2.71
  }
 ],
 "id": "overlay_867DBCBA_A583_1A9C_41E2_83362EB4D4BB",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A919A752_A37F_08D7_41E3_AD725415E551, this.camera_ADB1134C_BD00_0454_41E4_C0250B3D945A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "rollOverIconURL": "skin/IconButton_A33AD55A_B34E_D77B_41DD_E828682BEC08_rollover.png",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33AD55A_B34E_D77B_41DD_E828682BEC08",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33AD55A_B34E_D77B_41DD_E828682BEC08.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 32,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33AD55A_B34E_D77B_41DD_E828682BEC08_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43165"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "rollOverIconURL": "skin/IconButton_A33A855A_B34E_D778_41D3_081B5F186BCE_rollover.png",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33A855A_B34E_D778_41D3_081B5F186BCE",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33A855A_B34E_D778_41D3_081B5F186BCE.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 32,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33A855A_B34E_D778_41D3_081B5F186BCE_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43170"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "rollOverIconURL": "skin/IconButton_A33AA55B_B34E_D779_41E1_474ADCB39358_rollover.png",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33AA55B_B34E_D779_41E1_474ADCB39358",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33AA55B_B34E_D779_41E1_474ADCB39358.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 32,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33AA55B_B34E_D779_41E1_474ADCB39358_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43172"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "rollOverIconURL": "skin/IconButton_A33A355B_B34E_D779_41CA_01BF82F730E3_rollover.png",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33A355B_B34E_D779_41CA_01BF82F730E3",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33A355B_B34E_D779_41CA_01BF82F730E3.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 32,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33A355B_B34E_D779_41CA_01BF82F730E3_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43176"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A35E7096_B53E_EEC0_41E5_2DCCF419F887",
 "width": 65,
 "maxWidth": 70,
 "borderSize": 0,
 "maxHeight": 70,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_A35E7096_B53E_EEC0_41E5_2DCCF419F887.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "click": "this.openLink('https://www.cmedcc.com/', '_blank')",
 "height": 70,
 "class": "IconButton",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A35E7096_B53E_EEC0_41E5_2DCCF419F887_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "URL"
 },
 "borderRadius": 0,
 "visible": false,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "rollOverIconURL": "skin/IconButton_A33A555B_B34E_D779_41E2_B4C0923C2D09_rollover.png",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33A555B_B34E_D779_41E2_B4C0923C2D09",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33A555B_B34E_D779_41E2_B4C0923C2D09.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 32,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33A555B_B34E_D779_41E2_B4C0923C2D09_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43173"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "rollOverIconURL": "skin/IconButton_A33A755B_B34E_D779_41D0_F53AE4560B89_rollover.png",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33A755B_B34E_D779_41D0_F53AE4560B89",
 "width": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33A755B_B34E_D779_41D0_F53AE4560B89.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 40,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33A755B_B34E_D779_41D0_F53AE4560B89_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43174"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "rollOverIconURL": "skin/IconButton_A33AF55A_B34E_D77B_41B6_6D0880405734_rollover.png",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33AF55A_B34E_D77B_41B6_6D0880405734",
 "width": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33AF55A_B34E_D77B_41B6_6D0880405734.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 40,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33AF55A_B34E_D77B_41B6_6D0880405734_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43167"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "rollOverIconURL": "skin/IconButton_A33AE55A_B34E_D77B_41E1_7B4FCB448F85_rollover.png",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A33AE55A_B34E_D77B_41E1_7B4FCB448F85",
 "width": 32,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "iconURL": "skin/IconButton_A33AE55A_B34E_D77B_41E1_7B4FCB448F85.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "height": 32,
 "class": "IconButton",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A33AE55A_B34E_D77B_41E1_7B4FCB448F85_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button43168"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.72,
   "hfov": 10.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.35
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0_HS_0_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -43.35,
   "yaw": 84.72
  }
 ],
 "id": "overlay_B11897C0_A3BD_1795_41DF_C19B2187414A",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.13,
   "hfov": 10.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.35
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F5AE9_A37F_19F5_41D9_3A3B28C83D66_0_HS_1_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -42.35,
   "yaw": -90.13
  }
 ],
 "id": "overlay_B3194FCB_A48D_1709_41E0_3763049924FE",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.76,
   "hfov": 10.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.83
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A0A89F_A37F_784D_41B6_CAD7FE93FA21_1_HS_0_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -38.83,
   "yaw": 92.76
  }
 ],
 "id": "overlay_AE18368B_A383_084B_41D5_337FDB2D237E",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F, this.camera_AD64E2FE_BD00_0434_41DD_9AD19B9DE8EE); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "PhotoPlayList",
 "id": "album_B20C4ED2_AB89_0266_4171_27B302650120_AlbumPlayList",
 "items": [
  {
   "media": "this.album_B20C4ED2_AB89_0266_4171_27B302650120_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "zoomFactor": 1,
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "easing": "linear",
    "duration": 5000,
    "targetPosition": {
     "zoomFactor": 1.1,
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "y": "0.44"
    }
   }
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.32,
   "hfov": 8.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -55.02
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0_HS_0_0.png",
      "width": 339,
      "class": "ImageResourceLevel",
      "height": 311
     }
    ]
   },
   "pitch": -55.02,
   "yaw": -76.32
  }
 ],
 "id": "overlay_B850C43D_A58D_09BF_41DB_A49AECA5B3EF",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B, this.camera_AD75F30E_BD00_05D4_41E1_A37ADFFE3FCB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.87,
   "hfov": 9.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.85
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91CE93C_A37D_184C_41E1_944F221C3F69_0_HS_1_0.png",
      "width": 294,
      "class": "ImageResourceLevel",
      "height": 295
     }
    ]
   },
   "pitch": -43.85,
   "yaw": -138.87
  }
 ],
 "id": "overlay_BA5D9525_A5BD_0B54_41D9_A34C16F07F9E",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.74,
   "hfov": 11.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.06
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0_HS_3_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -35.06,
   "yaw": 88.74
  }
 ],
 "id": "overlay_B3292BA0_A487_1FF1_41BB_EEC8786B485B",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A91BA56A_A37F_08F7_41C8_80A67DD8FBB1, this.camera_AD51832C_BD00_05D4_41D8_2D72053B49D9); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.7,
   "hfov": 7.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -56.67
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91F3C78_A37F_38D3_41B9_FE55AAEB9D38_0_HS_4_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -56.67,
   "yaw": -53.7
  }
 ],
 "id": "overlay_BC55605C_A485_093C_41E4_63B17991BCFB",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.54,
   "hfov": 1.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -83.53
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0_HS_2_0.png",
      "width": 293,
      "class": "ImageResourceLevel",
      "height": 294
     }
    ]
   },
   "pitch": -83.53,
   "yaw": -67.54
  }
 ],
 "id": "overlay_840EEBC7_A59D_FEDC_41C8_95CCE9EB0F3C",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B, this.camera_AC14A3CA_BD00_045C_41D5_B2194F55DD7B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.6,
   "hfov": 10.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.55
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91A921B_A37D_0854_41D2_52092A29C33E_0_HS_3_0.png",
      "width": 245,
      "class": "ImageResourceLevel",
      "height": 183
     }
    ]
   },
   "pitch": -21.55,
   "yaw": 174.6
  }
 ],
 "id": "overlay_82630082_A587_0A82_41C0_BE76E5D1BF7F",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "progressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "left": "3.59%",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "91.566%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "paddingLeft": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "class": "ViewerArea",
 "progressBarBorderSize": 0,
 "minWidth": 1,
 "playbackBarBorderRadius": 0,
 "height": "85.784%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "shadow": false,
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "bottom": "0%",
 "vrPointerColor": "#FFFFFF",
 "transitionMode": "blending",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "visible": false,
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "data": {
  "name": "MapViewer"
 }
},
{
 "map": {
  "width": 100,
  "x": 2173.52,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 36
    }
   ]
  },
  "y": 866.09,
  "offsetY": 0,
  "height": 231.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_ACBF63AB_A387_0846_41D0_0F8CEF906FE1",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2172.1,
  "y": 864.89,
  "width": 100,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_0.png",
     "width": 100,
     "class": "ImageResourceLevel",
     "height": 231
    }
   ]
  },
  "height": 231.95
 }
},
{
 "map": {
  "width": 100,
  "x": 1419.86,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 36
    }
   ]
  },
  "y": 858.12,
  "offsetY": 0,
  "height": 231.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_B345115F_A38F_08E9_41D1_BAD4832DB703",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1419.67,
  "y": 857.93,
  "width": 100,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_1.png",
     "width": 100,
     "class": "ImageResourceLevel",
     "height": 231
    }
   ]
  },
  "height": 231.95
 }
},
{
 "map": {
  "width": 100,
  "x": 412.79,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 38
    }
   ]
  },
  "y": 456.42,
  "offsetY": 0,
  "height": 239.47,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_B0965908_A38D_F87C_41BF_11CB4005B64B",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 410.91,
  "y": 454.73,
  "width": 100,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_6.png",
     "width": 99,
     "class": "ImageResourceLevel",
     "height": 239
    }
   ]
  },
  "height": 239.47
 }
},
{
 "map": {
  "width": 100,
  "x": 584.87,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_10_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 37
    }
   ]
  },
  "y": 1521.79,
  "offsetY": 0,
  "height": 231.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_B14AA3C5_A387_0FF6_41DB_2960DAD2569B",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 582.99,
  "y": 1519.91,
  "width": 100,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_10.png",
     "width": 99,
     "class": "ImageResourceLevel",
     "height": 231
    }
   ]
  },
  "height": 231.95
 }
},
{
 "map": {
  "width": 100,
  "x": 1466.12,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_12_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 468.27,
  "offsetY": 0,
  "height": 86.63,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8CFEDF8C_A483_16BF_41D6_1D20B9B421A2",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1464.05,
  "y": 466.2,
  "width": 100,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_12.png",
     "width": 99,
     "class": "ImageResourceLevel",
     "height": 86
    }
   ]
  },
  "height": 86.63
 }
},
{
 "map": {
  "width": 100,
  "x": 1442.8,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_13_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 31
    }
   ]
  },
  "y": 1673.18,
  "offsetY": 0,
  "height": 192.23,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A55D71B1_A889_3FB6_41E4_BEE33529F063",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1440.73,
  "y": 1671.3,
  "width": 100,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_ACA8DF4F_A387_38DF_41E0_8E9C72C6E1F8_HS_13.png",
     "width": 99,
     "class": "ImageResourceLevel",
     "height": 192
    }
   ]
  },
  "height": 192.23
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.1,
   "hfov": 8.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.65
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0_HS_1_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -52.65,
   "yaw": -83.1
  }
 ],
 "id": "overlay_BE20DFEC_A583_16CA_41D7_A691BB7246BF",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F, this.camera_AD1AA2EE_BD00_0454_41A3_24A32C3E43E5); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.45,
   "hfov": 5.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -64.71
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A919A752_A37F_08D7_41E3_AD725415E551_0_HS_0_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -64.71,
   "yaw": 80.45
  }
 ],
 "id": "overlay_BDBEEF34_A583_376C_41DC_AB808A5DD641",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A91D500C_A37D_0833_418E_95BFDAFF1C9B, this.camera_AD02B2D0_BD00_044C_41DD_FAA404EEE540); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.83,
   "hfov": 10.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.6
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0_HS_0_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 318
     }
    ]
   },
   "pitch": -43.6,
   "yaw": 107.83
  }
 ],
 "id": "overlay_B1009C61_A3BD_389B_41E0_2A213889AA07",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.87,
   "hfov": 1.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -84.28
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A91FA387_A37F_083D_41D3_095D0D14132F_0_HS_1_0.png",
      "width": 259,
      "class": "ImageResourceLevel",
      "height": 260
     }
    ]
   },
   "pitch": -84.28,
   "yaw": -32.87
  }
 ],
 "id": "overlay_B33040EE_A483_0908_41DD_93899A273745",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A922D1C2_A37F_0834_4175_9CFF9ABE5B6F, this.camera_AC76B3DD_BD00_0474_41DD_4D94132B871C); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true
},
{
 "propagateClick": false,
 "id": "HTMLText_BCD9F518_B347_D4C8_41CB_ADCF5B9273B1",
 "left": "0.08%",
 "borderSize": 3,
 "width": "63.826%",
 "scrollBarWidth": 10,
 "borderColor": "#000000",
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "height": "79.964%",
 "class": "HTMLText",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.93vh;\"><B>HATTHA KAKSEKAR LIMITED </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#003399;font-size:2.62vh;\"><B><I>Toilet (Core)</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.62vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.31vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText1580"
 },
 "borderRadius": 0,
 "paddingBottom": 10,
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.Button_A3532BFB_B3C7_730A_41DD_8C04069188F9",
  "this.Button_A328AA9A_B3C9_DD09_41E0_033731F29BBC"
 ],
 "id": "Container_A7985D21_B2CF_5787_41CC_8E1A821CCF18",
 "left": "0%",
 "layout": "horizontal",
 "overflow": "hidden",
 "borderSize": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "bottom": "0.33%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "height": "20%",
 "verticalAlign": "middle",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 40,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container20258"
 },
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.Image_A72BE303_B546_F38E_41DE_54F34B520AE6"
 ],
 "id": "Container_A124E5EC_B547_369A_41B5_87CD9DA671BA",
 "left": "0%",
 "layout": "horizontal",
 "overflow": "scroll",
 "borderSize": 0,
 "width": "86.506%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "bottom": "20.44%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "height": "26.23%",
 "verticalAlign": "middle",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container20923"
 },
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.Image_AE897C89_B549_76C1_41D3_DF0C8FDC37F6",
  "this.IconButton_A35E7096_B53E_EEC0_41E5_2DCCF419F887",
  "this.IconButton_AC4DDB95_B53A_D2C0_41E6_62044AE8D987",
  "this.IconButton_A34104B3_B539_36C0_41DF_89D1C2CF722C"
 ],
 "id": "Container_A1DC1C15_B547_558B_41DB_85399D84BF5D",
 "layout": "vertical",
 "overflow": "hidden",
 "right": "0.24%",
 "borderSize": 0,
 "width": "17.591%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "bottom": "20.33%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "height": "26.452%",
 "verticalAlign": "middle",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container20934"
 },
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.DropDown_AE83DEC8_B5CB_5257_41E4_4312457CAF6C",
  "this.MapViewer"
 ],
 "id": "Container_AF65A9AF_B5C6_DE2D_41B0_64E448626E9A",
 "left": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "borderSize": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minHeight": 1,
 "height": "53.005%",
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container40718"
 },
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.Image_BCF4ECA5_B347_35CF_41C3_89BD9EA198D2"
 ],
 "id": "Container_A02FBFA6_B2DA_D281_41DD_61215F8DF26E",
 "left": "0%",
 "layout": "horizontal",
 "overflow": "scroll",
 "borderSize": 0,
 "width": "20%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "height": "25%",
 "verticalAlign": "middle",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "container logo"
 },
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.Container_A33A255B_B34E_D779_41C4_87290D502C89"
 ],
 "id": "Container_BDA5AD02_B347_D4BA_41DC_ACA78CD343CA",
 "layout": "horizontal",
 "overflow": "scroll",
 "right": "0%",
 "borderSize": 0,
 "width": "75%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 1,
 "height": "23%",
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "CONTAINER 02"
 },
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463"
 ],
 "id": "Container_A7A78BFA_B2CB_F284_41B6_D2A33200B385",
 "left": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "borderSize": 0,
 "width": "17.122%",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minHeight": 1,
 "height": "74.775%",
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "gap": 10,
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "data": {
  "name": "conrainer view control"
 },
 "shadow": false
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#0066FF"
 ],
 "iconWidth": 0,
 "id": "Button_A3532BFB_B3C7_730A_41DD_8C04069188F9",
 "rollOverShadow": false,
 "pressedBackgroundColor": [
  "#0066FF"
 ],
 "propagateClick": false,
 "width": 150,
 "rollOverBackgroundOpacity": 0.8,
 "shadowColor": "#000000",
 "fontSize": "18px",
 "borderSize": 2,
 "layout": "horizontal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "borderColor": "#CCCCCC",
 "paddingRight": 0,
 "fontColor": "#FFFFFF",
 "iconHeight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "label": "CONTACT US",
 "minHeight": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "height": 40,
 "fontStyle": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.26,
 "click": "if(!this.Image_A72BE303_B546_F38E_41DE_54F34B520AE6.get('visible')){ this.setComponentVisibility(this.Image_A72BE303_B546_F38E_41DE_54F34B520AE6, true, 0, null, null, false) } else { this.setComponentVisibility(this.Image_A72BE303_B546_F38E_41DE_54F34B520AE6, false, 0, null, null, false) }; if(!this.IconButton_A35E7096_B53E_EEC0_41E5_2DCCF419F887.get('visible')){ this.setComponentVisibility(this.IconButton_A35E7096_B53E_EEC0_41E5_2DCCF419F887, true, 0, null, null, false) } else { this.setComponentVisibility(this.IconButton_A35E7096_B53E_EEC0_41E5_2DCCF419F887, false, 0, null, null, false) }; if(!this.IconButton_AC4DDB95_B53A_D2C0_41E6_62044AE8D987.get('visible')){ this.setComponentVisibility(this.IconButton_AC4DDB95_B53A_D2C0_41E6_62044AE8D987, true, 0, null, null, false) } else { this.setComponentVisibility(this.IconButton_AC4DDB95_B53A_D2C0_41E6_62044AE8D987, false, 0, null, null, false) }; if(!this.IconButton_A34104B3_B539_36C0_41DF_89D1C2CF722C.get('visible')){ this.setComponentVisibility(this.IconButton_A34104B3_B539_36C0_41DF_89D1C2CF722C, true, 0, null, null, false) } else { this.setComponentVisibility(this.IconButton_A34104B3_B539_36C0_41DF_89D1C2CF722C, false, 0, null, null, false) }",
 "gap": 5,
 "paddingTop": 0,
 "data": {
  "name": "CONTACT US "
 },
 "borderRadius": 5,
 "textDecoration": "none",
 "cursor": "hand",
 "paddingBottom": 0,
 "fontWeight": "bold",
 "shadow": false
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#0066FF"
 ],
 "iconWidth": 0,
 "id": "Button_A328AA9A_B3C9_DD09_41E0_033731F29BBC",
 "rollOverShadow": false,
 "pressedBackgroundColor": [
  "#0066FF"
 ],
 "propagateClick": false,
 "width": 150,
 "rollOverBackgroundOpacity": 0.8,
 "shadowColor": "#000000",
 "fontSize": "18px",
 "borderSize": 2,
 "layout": "horizontal",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "iconBeforeLabel": true,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontColor": "#FFFFFF",
 "iconHeight": 0,
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "label": "FLOOR PLAN ",
 "minHeight": 1,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "class": "Button",
 "minWidth": 1,
 "height": 40,
 "fontStyle": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.26,
 "click": "if(!this.DropDown_AE83DEC8_B5CB_5257_41E4_4312457CAF6C.get('visible')){ this.setComponentVisibility(this.DropDown_AE83DEC8_B5CB_5257_41E4_4312457CAF6C, true, 0, null, null, false) } else { this.setComponentVisibility(this.DropDown_AE83DEC8_B5CB_5257_41E4_4312457CAF6C, false, 0, null, null, false) }; if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
 "gap": 5,
 "paddingTop": 0,
 "data": {
  "name": "FLOOR PLM"
 },
 "borderRadius": 5,
 "textDecoration": "none",
 "cursor": "hand",
 "paddingBottom": 0,
 "fontWeight": "bold",
 "shadow": false
},
{
 "propagateClick": false,
 "id": "Image_A72BE303_B546_F38E_41DE_54F34B520AE6",
 "borderSize": 0,
 "width": "90.368%",
 "maxHeight": 869,
 "maxWidth": 1380,
 "url": "skin/Image_A72BE303_B546_F38E_41DE_54F34B520AE6.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "height": "98.477%",
 "verticalAlign": "middle",
 "class": "Image",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "contact us"
 },
 "borderRadius": 0,
 "visible": false,
 "paddingBottom": 0,
 "shadow": false
},
{
 "propagateClick": false,
 "id": "Image_AE897C89_B549_76C1_41D3_DF0C8FDC37F6",
 "borderSize": 0,
 "width": "100%",
 "maxHeight": 921,
 "maxWidth": 1302,
 "url": "skin/Image_AE897C89_B549_76C1_41D3_DF0C8FDC37F6.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "height": "0.426%",
 "verticalAlign": "middle",
 "class": "Image",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image34970"
 },
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_AC4DDB95_B53A_D2C0_41E6_62044AE8D987",
 "width": 70,
 "maxWidth": 70,
 "borderSize": 0,
 "maxHeight": 70,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_AC4DDB95_B53A_D2C0_41E6_62044AE8D987.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "click": "this.openLink('https://www.google.com/maps/place/CMED+Construction+Company/@11.545053,104.9226728,17z/data=!4m5!3m4!1s0x3109511f5b8af5a9:0x7e215fce7b5af38c!8m2!3d11.5450478!4d104.9248668', '_blank')",
 "height": 70,
 "class": "IconButton",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_AC4DDB95_B53A_D2C0_41E6_62044AE8D987_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "MAP"
 },
 "borderRadius": 0,
 "visible": false,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_A34104B3_B539_36C0_41DF_89D1C2CF722C",
 "width": 71,
 "maxWidth": 70,
 "borderSize": 0,
 "maxHeight": 70,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_A34104B3_B539_36C0_41DF_89D1C2CF722C.png",
 "mode": "push",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "click": "this.openLink('https://www.linkedin.com/company/cmedcc', '_blank')",
 "height": 67,
 "class": "IconButton",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A34104B3_B539_36C0_41DF_89D1C2CF722C_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "LINKIN"
 },
 "borderRadius": 0,
 "visible": false,
 "cursor": "hand",
 "paddingBottom": 0,
 "shadow": false
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  1
 ],
 "popUpFontColor": "#000000",
 "id": "DropDown_AE83DEC8_B5CB_5257_41E4_4312457CAF6C",
 "left": "3.55%",
 "popUpShadowColor": "#000000",
 "propagateClick": false,
 "data": {
  "name": "DropDown1204"
 },
 "playList": "this.DropDown_AE83DEC8_B5CB_5257_41E4_4312457CAF6C_playlist",
 "borderSize": 0,
 "width": "90.843%",
 "popUpBorderRadius": 0,
 "popUpShadowBlurRadius": 6,
 "arrowBeforeLabel": false,
 "popUpShadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "popUpBackgroundColor": "#FFFFFF",
 "paddingLeft": 5,
 "paddingRight": 5,
 "fontColor": "#333333",
 "top": "5.98%",
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "minHeight": 20,
 "popUpBackgroundOpacity": 0.72,
 "popUpGap": 0,
 "backgroundColor": [
  "#00CCFF",
  "#0099FF"
 ],
 "fontSize": 14,
 "class": "DropDown",
 "minWidth": 200,
 "arrowColor": "#0066FF",
 "fontStyle": "normal",
 "backgroundOpacity": 0.72,
 "height": "6.186%",
 "selectedPopUpBackgroundColor": "#0066FF",
 "gap": 0,
 "popUpShadow": false,
 "paddingTop": 0,
 "selectedPopUpFontColor": "#FFFFFF",
 "borderRadius": 4,
 "textDecoration": "none",
 "visible": false,
 "popUpShadowOpacity": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "shadow": false
},
{
 "propagateClick": false,
 "id": "Image_BCF4ECA5_B347_35CF_41C3_89BD9EA198D2",
 "borderSize": 0,
 "width": "75%",
 "maxHeight": 85,
 "maxWidth": 214,
 "url": "skin/Image_BCF4ECA5_B347_35CF_41C3_89BD9EA198D2.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "height": "30%",
 "verticalAlign": "middle",
 "class": "Image",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Logo CMED"
 },
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false
},
{
 "propagateClick": false,
 "children": [
  "this.IconButton_A33AD55A_B34E_D77B_41DD_E828682BEC08",
  "this.IconButton_A33AC55A_B34E_D77B_41CB_790C7C00F30B",
  "this.IconButton_A33AF55A_B34E_D77B_41B6_6D0880405734",
  "this.IconButton_A33AE55A_B34E_D77B_41E1_7B4FCB448F85",
  "this.Container_A33A955A_B34E_D77B_41E2_F466A17EC4B3",
  "this.IconButton_A33A555B_B34E_D779_41E2_B4C0923C2D09",
  "this.IconButton_A33A755B_B34E_D779_41D0_F53AE4560B89",
  "this.IconButton_A33A155B_B34E_D779_41E5_815C89264E42",
  "this.IconButton_A33A355B_B34E_D779_41CA_01BF82F730E3"
 ],
 "id": "Container_A33A255B_B34E_D779_41C4_87290D502C89",
 "layout": "horizontal",
 "overflow": "hidden",
 "borderSize": 0,
 "width": "47.91%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.47,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 20,
 "height": "100%",
 "verticalAlign": "middle",
 "class": "Container",
 "minWidth": 381,
 "backgroundOpacity": 0,
 "gap": 4,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 9,
 "paddingBottom": 0,
 "data": {
  "name": "Bottom Control "
 },
 "shadow": false
},
{
 "layout": "vertical",
 "paddingTop": 10,
 "id": "ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463",
 "left": "0%",
 "itemBackgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarWidth": 10,
 "itemLabelGap": 6,
 "paddingLeft": 20,
 "itemThumbnailShadow": true,
 "itemThumbnailShadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "itemPaddingBottom": 3,
 "scrollBarVisible": "rollOver",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "horizontalAlign": "left",
 "scrollBarColor": "#FFFFFF",
 "minHeight": 1,
 "height": "72.461%",
 "verticalAlign": "top",
 "itemLabelFontFamily": "Arial",
 "class": "ThumbnailList",
 "minWidth": 1,
 "itemLabelHorizontalAlign": "center",
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemThumbnailShadowOpacity": 0.57,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "itemPaddingLeft": 3,
 "itemThumbnailOpacity": 1,
 "propagateClick": false,
 "itemThumbnailBorderRadius": 22,
 "itemThumbnailShadowSpread": 1,
 "shadow": false,
 "itemPaddingRight": 3,
 "playList": "this.ThumbnailList_A3403CCC_B34A_D567_4194_7268DDD66463_playlist",
 "borderSize": 0,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "selectedItemLabelFontColor": "#0066FF",
 "itemBackgroundColorRatios": [],
 "itemThumbnailShadowVerticalLength": 3,
 "paddingRight": 20,
 "itemBackgroundOpacity": 0,
 "top": "0%",
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailHeight": 65,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "itemThumbnailShadowBlurRadius": 8,
 "itemThumbnailScaleMode": "fit_outside",
 "itemOpacity": 1,
 "itemThumbnailWidth": 149,
 "scrollBarMargin": 2,
 "gap": 3,
 "itemLabelFontSize": 14,
 "selectedItemLabelFontWeight": "bold",
 "data": {
  "name": "view control"
 },
 "borderRadius": 5,
 "itemVerticalAlign": "middle",
 "paddingBottom": 10,
 "itemLabelFontColor": "#FFFFFF"
},
{
 "propagateClick": false,
 "children": [
  "this.IconButton_A33A855A_B34E_D778_41D3_081B5F186BCE",
  "this.IconButton_A33AB55B_B34E_D779_41DC_3788F4E6C492",
  "this.IconButton_A33AA55B_B34E_D779_41E1_474ADCB39358"
 ],
 "id": "Container_A33A955A_B34E_D77B_41E2_F466A17EC4B3",
 "layout": "vertical",
 "width": 40,
 "overflow": "hidden",
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minHeight": 20,
 "height": "100%",
 "verticalAlign": "middle",
 "class": "Container",
 "minWidth": 20,
 "backgroundOpacity": 0,
 "gap": 4,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container43169"
 },
 "shadow": false
}],
 "defaultVRPointer": "laser",
 "desktopMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "class": "Player",
 "minWidth": 20,
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "downloadEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Player492"
 },
 "shadow": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
