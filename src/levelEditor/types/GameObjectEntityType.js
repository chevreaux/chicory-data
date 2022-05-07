// @flow strict

export type GameObjectEntityType =
	| 'objAchiote'
	| 'objAdult'
	| 'objAllium'
	| 'objArdisia'
	| 'objAudioparamsetter'
	| 'objBarber'
	| 'objBard'
	| 'objBarley'
	| 'objBasil'
	| 'objBeachline'
	| 'objBeans'
	| 'objBeanshouse'
	| 'objBeanssign'
	| 'objBellLine'
	| 'objBench'
	| 'objBiscuitsnGravy'
	| 'objBlackberry'
	| 'objBlackooze'
	| 'objBlacksolid'
	| 'objBloomflower'
	| 'objBombsticky'
	| 'objBoss1'
	| 'objBoss2'
	| 'objBoss2return'
	| 'objBoss3'
	| 'objBoss3encounter'
	| 'objBoss3return'
	| 'objBoss4'
	| 'objBoss4return'
	| 'objBoss5'
	| 'objBoss6'
	| 'objBossSteal'
	| 'objBossZone'
	| 'objBosstree'
	| 'objBounceshroom'
	| 'objBroccoli'
	| 'objBrushflower'
	| 'objBrushmissscenes'
	| 'objBrushprop'
	| 'objBrusselsprout'
	| 'objBubblehole'
	| 'objBuglamp'
	| 'objButterfly'
	| 'objButterscotch'
	| 'objCantaloupe'
	| 'objCanyonmusic'
	| 'objCaramel'
	| 'objCardamom'
	| 'objCardamomcurtain'
	| 'objCashew'
	| 'objCastleexithint'
	| 'objCastleportrait'
	| 'objCaveblocker'
	| 'objCheese'
	| 'objChickpea'
	| 'objChicory'
	| 'objChicorydoor'
	| 'objChicorytent'
	| 'objChili'
	| 'objChips'
	| 'objCinnamon'
	| 'objClementine'
	| 'objClothingswapper'
	| 'objCloud'
	| 'objCoffee'
	| 'objCola'
	| 'objCollider'
	| 'objCordia'
	| 'objCouscous'
	| 'objCrackrock'
	| 'objCredits'
	| 'objCrinum'
	| 'objCurry'
	| 'objCustard'
	| 'objDad'
	| 'objDarkness'
	| 'objDessertplate'
	| 'objDessertsign'
	| 'objDog'
	| 'objDotlock'
	| 'objDotlockdata'
	| 'objDotlockline'
	| 'objEaterhive'
	| 'objEgg'
	| 'objElevationfloodfill'
	| 'objEventlocation'
	| 'objExitstopper'
	| 'objFeastbug1'
	| 'objFeastbug2'
	| 'objFeastbugs_gen'
	| 'objFennel'
	| 'objFinalboss'
	| 'objFinaltree'
	| 'objFinaltree_arm'
	| 'objFishspawner'
	| 'objFlame'
	| 'objFlammable'
	| 'objFlinger'
	| 'objFloat'
	| 'objFog'
	| 'objFoleyzone'
	| 'objFootsteps'
	| 'objForestedge1'
	| 'objFound_animal'
	| 'objFritillaria'
	| 'objFritter'
	| 'objFrogDetective'
	| 'objFurniturepile'
	| 'objGallerypainting'
	| 'objGameIntro'
	| 'objGardener'
	| 'objGarlic'
	| 'objGatheringEvent'
	| 'objGelato'
	| 'objGelato_photo'
	| 'objGentalker'
	| 'objGeyser'
	| 'objGift'
	| 'objGinger'
	| 'objGlowcrystal'
	| 'objGlowgoo'
	| 'objGlowshroom'
	| 'objGranita'
	| 'objGravy'
	| 'objGrewia'
	| 'objGrits'
	| 'objGrowflower'
	| 'objGrubdeepmusic'
	| 'objGuac'
	| 'objHermitcrab'
	| 'objHiddentext'
	| 'objHoleyboy'
	| 'objHoleysign'
	| 'objHouseboat'
	| 'objHummingmoth'
	| 'objInsidetent'
	| 'objIntro'
	| 'objIxora'
	| 'objJaffle'
	| 'objJicama'
	| 'objJoeshopentrance'
	| 'objLandingZone'
	| 'objLemon'
	| 'objLetterbugs'
	| 'objLevelLooper'
	| 'objLicorice'
	| 'objLightbox'
	| 'objLightbug'
	| 'objLitter'
	| 'objLockblock'
	| 'objLost_animal'
	| 'objLostmouse'
	| 'objMacaroon'
	| 'objMalvaceae'
	| 'objMangrovetree'
	| 'objMap_interact'
	| 'objMarzipan'
	| 'objMelaleuca'
	| 'objMiconia'
	| 'objMiso'
	| 'objMom'
	| 'objMomo'
	| 'objMomodoor'
	| 'objMountainsong'
	| 'objMouserecord'
	| 'objMusic_temp_transition'
	| 'objMyhouse'
	| 'objMyhouse_sign'
	| 'objNearest_deco'
	| 'objNewgame'
	| 'objNode'
	| 'objOats'
	| 'objOlive'
	| 'objOnion'
	| 'objOyster'
	| 'objPainttube'
	| 'objPancake'
	| 'objPapaya'
	| 'objPea'
	| 'objPepper'
	| 'objPeppermint'
	| 'objPhonebooth'
	| 'objPhoto_capture'
	| 'objPickle'
	| 'objPizzaguy'
	| 'objPizzasign'
	| 'objPlantbuy'
	| 'objPlantgirl'
	| 'objPlum'
	| 'objPortal'
	| 'objPostboss1'
	| 'objPostman'
	| 'objPotato'
	| 'objPrologueBed'
	| 'objPrologueCouch'
	| 'objPrologueDresser'
	| 'objPrologueTable'
	| 'objPumpernickel'
	| 'objQueen'
	| 'objQuercus'
	| 'objQuince'
	| 'objQuinoa'
	| 'objRaddish'
	| 'objRain'
	| 'objRaisin'
	| 'objResort_elevator'
	| 'objRice'
	| 'objRidermanager'
	| 'objRiser'
	| 'objRiserblock'
	| 'objRiserpath'
	| 'objRiserreset'
	| 'objRiverlady'
	| 'objRiverladycurtain'
	| 'objRockbug'
	| 'objRockbug_attractor'
	| 'objRooffolk'
	| 'objRooffolk2'
	| 'objRooftopguy'
	| 'objSelfportrait'
	| 'objShallowwater'
	| 'objShroom'
	| 'objSign'
	| 'objSit'
	| 'objSky'
	| 'objSlushie'
	| 'objSmalltreedeleter'
	| 'objSolidflower'
	| 'objSonggame'
	| 'objSparrowbug'
	| 'objSpookytree'
	| 'objSpotsound'
	| 'objStampgift'
	| 'objStevia'
	| 'objSteviatag'
	| 'objSwamptree_big'
	| 'objSwimzone'
	| 'objTaiyaki'
	| 'objTamarind'
	| 'objTelescope'
	| 'objTemple_music'
	| 'objTempleentrance_hint'
	| 'objThyme'
	| 'objTitle'
	| 'objTrailer2'
	| 'objTransitgate'
	| 'objTranslatormeet'
	| 'objTrashfinder'
	| 'objTreacle'
	| 'objTreebig'
	| 'objTreegrow'
	| 'objTreesmall'
	| 'objVine_ride'
	| 'objWahlenbergia'
	| 'objWallcrack'
	| 'objWallflower'
	| 'objWaterfall'
	| 'objWavemaker'
	| 'objWeepingwillow'
	| 'objWhitearrow'
	| 'objWind'
	| 'objWisteria'
	| 'objWoodssign'
	| 'objYuzu'
	| 'objZoomdisable'
	| 'objZucchini'
	| 'objAudioContainer'
	| 'objAudioEditorReturn'
	| 'objAudioEditor'
	| 'objAudio'
	| 'objAudiodebugnote'
	| 'objBell'
	| 'objBench_travel'
	| 'objBgcloud'
	| 'objBomb'
	| 'objBoss1spike'
	| 'objBoss2melt'
	| 'objBoss2vom'
	| 'objBoss3_horz'
	| 'objBoss3_vert'
	| 'objBoss3brush'
	| 'objBoss3preview'
	| 'objBoss4bg'
	| 'objBoss4bomb'
	| 'objBoss4followball'
	| 'objBoss4line'
	| 'objBoss4rotate'
	| 'objBoss5piece'
	| 'objBoss5swipe'
	| 'objBoss6diamond'
	| 'objBoss6line'
	| 'objBossEye'
	| 'objBossPaintpiece'
	| 'objBossgrab'
	| 'objBrush'
	| 'objBrushburst'
	| 'objBugshell'
	| 'objCamerazone'
	| 'objChicory_convo_fx'
	| 'objChicory_partner'
	| 'objChicory_partnerattack'
	| 'objClearTimelapseshroom'
	| 'objCoopshroom'
	| 'objDeco'
	| 'objDramaticslice'
	| 'objDrawingprompt'
	| 'objDrawingreplay'
	| 'objEditorpanel'
	| 'objEventstarfx'
	| 'objFboss_mirrorwave'
	| 'objFeastbug_fly'
	| 'objFeastbug_ground'
	| 'objFinalPaintpiece'
	| 'objFinalboss_abstract'
	| 'objFinalboss_bomb'
	| 'objFinalboss_curve'
	| 'objFinalboss_death'
	| 'objFinalboss_feather'
	| 'objFinalboss_flower'
	| 'objFinalboss_line'
	| 'objFinalboss_paintlayer'
	| 'objFish'
	| 'objFleebug'
	| 'objFloodbeam'
	| 'objFog_cloud'
	| 'objGameObject'
	| 'objGame'
	| 'objHighlightable'
	| 'objHitbox'
	| 'objImagedisplay'
	| 'objIntrocolor'
	| 'objIntrodog'
	| 'objIntrotelescopecam'
	| 'objKidgift'
	| 'objLevelEditor'
	| 'objLevel'
	| 'objLocationsound'
	| 'objMapreplay'
	| 'objMob'
	| 'objMusiccue'
	| 'objNameentry'
	| 'objOptionshroom'
	| 'objOverlay'
	| 'objPaintFXlayer'
	| 'objPaint'
	| 'objPaintdrop'
	| 'objPainteater'
	| 'objPaintsplash'
	| 'objPalettetester'
	| 'objPetal'
	| 'objPistachio'
	| 'objPizzabomb'
	| 'objPizzaring'
	| 'objPoolParent'
	| 'objPopup'
	| 'objProp'
	| 'objProp_placed'
	| 'objPropspritelayer'
	| 'objPudding'
	| 'objPushwave'
	| 'objQueen_leg'
	| 'objQueen_looker'
	| 'objQueen_mover'
	| 'objQueen_segment'
	| 'objQuitshroom'
	| 'objRadishart'
	| 'objRainforestmusic'
	| 'objRecord_player'
	| 'objRecordbuy'
	| 'objRider'
	| 'objRoomCapture'
	| 'objSceneManager'
	| 'objScenemusicreset'
	| 'objSnakeburst'
	| 'objSongNode'
	| 'objSonglayer2'
	| 'objSpatialObject'
	| 'objSpookfixer'
	| 'objSpookytreeaudio'
	| 'objStringchecker'
	| 'objTdraw_arm'
	| 'objTextfield'
	| 'objTimelapseshroom'
	| 'objTransitionfootage'
	| 'objTreebug'
	| 'objWater'
	| 'objWaterfall_cloud'
	| 'objWebshroom'
	| 'objWordcount'
	| 'objaeAudioloader'
	| 'objaeButton'
	| 'objaeParamEditor'
	| 'objCustomDog';
