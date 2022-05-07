// @flow strict

import {ENABLE_OBJ_CUSTOM_DOG} from '../../FeatureFlags';

import type {GameObjectEntityType} from './GameObjectEntityType';

// I know it's duplicated :(
export const GAME_OBJECT_ENTITIES: $ReadOnlyArray<GameObjectEntityType> = [
	'objAchiote',
	'objAdult',
	'objAllium',
	'objArdisia',
	'objAudioparamsetter',
	'objBarber',
	'objBard',
	'objBarley',
	'objBasil',
	'objBeachline',
	'objBeans',
	'objBeanshouse',
	'objBeanssign',
	'objBellLine',
	'objBench',
	'objBiscuitsnGravy',
	'objBlackberry',
	'objBlackooze',
	'objBlacksolid',
	'objBloomflower',
	'objBombsticky',
	'objBoss1',
	'objBoss2',
	'objBoss2return',
	'objBoss3',
	'objBoss3encounter',
	'objBoss3return',
	'objBoss4',
	'objBoss4return',
	'objBoss5',
	'objBoss6',
	'objBossSteal',
	'objBosstree',
	'objBossZone',
	'objBounceshroom',
	'objBroccoli',
	'objBrushflower',
	'objBrushmissscenes',
	'objBrushprop',
	'objBrusselsprout',
	'objBubblehole',
	'objBuglamp',
	'objButterfly',
	'objButterscotch',
	'objCantaloupe',
	'objCanyonmusic',
	'objCaramel',
	'objCardamom',
	'objCardamomcurtain',
	'objCashew',
	'objCastleexithint',
	'objCastleportrait',
	'objCaveblocker',
	'objCheese',
	'objChickpea',
	'objChicory',
	'objChicorydoor',
	'objChicorytent',
	'objChili',
	'objChips',
	'objCinnamon',
	'objClementine',
	'objClothingswapper',
	'objCloud',
	'objCoffee',
	'objCola',
	'objCollider',
	'objCordia',
	'objCouscous',
	'objCrackrock',
	'objCredits',
	'objCrinum',
	'objCurry',
	'objCustard',
	'objDad',
	'objDarkness',
	'objDessertplate',
	'objDessertsign',
	'objDog',
	'objDotlock',
	'objDotlockdata',
	'objDotlockline',
	'objEaterhive',
	'objEgg',
	'objElevationfloodfill',
	'objEventlocation',
	'objExitstopper',
	'objFeastbug1',
	'objFeastbug2',
	'objFeastbugs_gen',
	'objFennel',
	'objFinalboss',
	'objFinaltree_arm',
	'objFinaltree',
	'objFishspawner',
	'objFlame',
	'objFlammable',
	'objFlinger',
	'objFloat',
	'objFog',
	'objFoleyzone',
	'objFootsteps',
	'objForestedge1',
	'objFound_animal',
	'objFritillaria',
	'objFritter',
	'objFrogDetective',
	'objFurniturepile',
	'objGallerypainting',
	'objGameIntro',
	'objGardener',
	'objGarlic',
	'objGatheringEvent',
	'objGelato_photo',
	'objGelato',
	'objGentalker',
	'objGeyser',
	'objGift',
	'objGinger',
	'objGlowcrystal',
	'objGlowgoo',
	'objGlowshroom',
	'objGranita',
	'objGravy',
	'objGrewia',
	'objGrits',
	'objGrowflower',
	'objGrubdeepmusic',
	'objGuac',
	'objHermitcrab',
	'objHiddentext',
	'objHoleyboy',
	'objHoleysign',
	'objHouseboat',
	'objHummingmoth',
	'objInsidetent',
	'objIntro',
	'objIxora',
	'objJaffle',
	'objJicama',
	'objJoeshopentrance',
	'objLandingZone',
	'objLemon',
	'objLetterbugs',
	'objLevelLooper',
	'objLicorice',
	'objLightbox',
	'objLightbug',
	'objLitter',
	'objLockblock',
	'objLost_animal',
	'objLostmouse',
	'objMacaroon',
	'objMalvaceae',
	'objMangrovetree',
	'objMap_interact',
	'objMarzipan',
	'objMelaleuca',
	'objMiconia',
	'objMiso',
	'objMom',
	'objMomo',
	'objMomodoor',
	'objMountainsong',
	'objMouserecord',
	'objMusic_temp_transition',
	'objMyhouse_sign',
	'objMyhouse',
	'objNearest_deco',
	'objNewgame',
	'objNode',
	'objOats',
	'objOlive',
	'objOnion',
	'objOyster',
	'objPainttube',
	'objPancake',
	'objPapaya',
	'objPea',
	'objPepper',
	'objPeppermint',
	'objPhonebooth',
	'objPhoto_capture',
	'objPickle',
	'objPizzaguy',
	'objPizzasign',
	'objPlantbuy',
	'objPlantgirl',
	'objPlum',
	'objPortal',
	'objPostboss1',
	'objPostman',
	'objPotato',
	'objPrologueBed',
	'objPrologueCouch',
	'objPrologueDresser',
	'objPrologueTable',
	'objPumpernickel',
	'objQueen',
	'objQuercus',
	'objQuince',
	'objQuinoa',
	'objRaddish',
	'objRain',
	'objRaisin',
	'objResort_elevator',
	'objRice',
	'objRidermanager',
	'objRiser',
	'objRiserblock',
	'objRiserpath',
	'objRiserreset',
	'objRiverlady',
	'objRiverladycurtain',
	'objRockbug_attractor',
	'objRockbug',
	'objRooffolk',
	'objRooffolk2',
	'objRooftopguy',
	'objSelfportrait',
	'objShallowwater',
	'objShroom',
	'objSign',
	'objSit',
	'objSky',
	'objSlushie',
	'objSmalltreedeleter',
	'objSolidflower',
	'objSonggame',
	'objSparrowbug',
	'objSpookytree',
	'objSpotsound',
	'objStampgift',
	'objStevia',
	'objSteviatag',
	'objSwamptree_big',
	'objSwimzone',
	'objTaiyaki',
	'objTamarind',
	'objTelescope',
	'objTemple_music',
	'objTempleentrance_hint',
	'objThyme',
	'objTitle',
	'objTrailer2',
	'objTransitgate',
	'objTranslatormeet',
	'objTrashfinder',
	'objTreacle',
	'objTreebig',
	'objTreegrow',
	'objTreesmall',
	'objVine_ride',
	'objWahlenbergia',
	'objWallcrack',
	'objWallflower',
	'objWaterfall',
	'objWavemaker',
	'objWeepingwillow',
	'objWhitearrow',
	'objWind',
	'objWisteria',
	'objWoodssign',
	'objYuzu',
	'objZoomdisable',
	'objZucchini',

	ENABLE_OBJ_CUSTOM_DOG ? 'objCustomDog' : undefined,
].filter(Boolean);

// Other game objects scrapped from the game scripts
// Some don't really work properly when placed standalone on a level
export const GAME_OBJECT_ENTITIES_ADVANCED: $ReadOnlyArray<GameObjectEntityType> =
	[
		'objAudio',
		'objAudiodebugnote',
		'objAudioEditor', // can crash game, use objAudioEditorReturn instead
		'objAudioEditorReturn',
		'objBell',
		'objBgcloud',
		'objBomb',
		'objBoss1spike',
		'objBoss2melt',
		'objBoss2vom',
		'objBoss3_horz',
		'objBoss3_vert',
		'objBoss3brush',
		'objBoss4bg',
		'objBoss4line',
		'objBoss5swipe',
		'objBoss6diamond',
		'objBoss6line',
		'objBossgrab',
		'objBossPaintpiece',
		'objBrush',
		'objBugshell',
		'objCamerazone',
		'objChicory_convo_fx',
		'objChicory_partner',
		'objClearTimelapseshroom',
		'objCoopshroom',
		'objDeco',
		'objEventstarfx',
		'objFboss_mirrorwave',
		'objFeastbug_fly',
		'objFeastbug_ground',
		'objFinalboss_abstract',
		'objFinalboss_bomb',
		'objFinalboss_death',
		'objFinalboss_flower',
		'objFinalboss_line',
		'objFinalboss_paintlayer',
		'objFinalPaintpiece',
		'objFish',
		'objFleebug',
		'objFloodbeam',
		'objFog_cloud',
		'objGameObject',
		'objHighlightable',
		'objHitbox',
		'objImagedisplay',
		'objIntrocolor',
		'objIntrodog',
		'objIntrotelescopecam',
		'objKidgift',
		'objLocationsound',
		'objMapreplay',
		'objMob',
		'objMusiccue',
		'objNameentry',
		'objOptionshroom',
		'objOverlay',
		'objPaintdrop',
		'objPaintsplash',
		'objPalettetester',
		'objPetal',
		'objPistachio',
		'objPizzabomb',
		'objPizzaring',
		'objPoolParent',
		'objProp',
		'objPudding',
		'objPushwave',
		'objQueen_leg',
		'objQueen_looker',
		'objQueen_mover',
		'objQueen_segment',
		'objQuitshroom',
		'objRadishart',
		'objRainforestmusic',
		'objRecord_player',
		'objRecordbuy',
		'objRoomCapture',
		'objSceneManager',
		'objScenemusicreset',
		'objSonglayer2',
		'objSpatialObject',
		'objSpookfixer',
		'objSpookytreeaudio',
		'objStringchecker',
		'objTdraw_arm',
		'objTimelapseshroom',
		'objTransitionfootage',
		'objTreebug',
		'objWater',
		'objWaterfall_cloud',
		'objWebshroom',
	];

// These objects crash the game, hiding from the editor GUI as they're unlikely to be useful
export const GAME_OBJECT_ENTITIES_CRASH: $ReadOnlyArray<GameObjectEntityType> =
	[
		'objaeAudioloader',
		'objaeButton',
		'objaeParamEditor',
		'objAudioContainer',
		'objBench_travel',
		'objBoss3preview',
		'objBoss4bomb',
		'objBoss4followball',
		'objBoss4rotate',
		'objBoss5piece',
		'objBossEye',
		'objBrushburst',
		'objChicory_partnerattack',
		'objDramaticslice',
		'objDrawingprompt',
		'objDrawingreplay',
		'objEditorpanel',
		'objFinalboss_curve',
		'objFinalboss_feather',
		'objGame',
		'objLevel', // hard crashes the game
		'objLevelEditor',
		'objPaint',
		'objPainteater',
		'objPaintFXlayer',
		'objPopup',
		'objProp_placed',
		'objPropspritelayer',
		'objRider',
		'objSnakeburst',
		'objSongNode',
		'objTextfield',
		'objWordcount',
	];
