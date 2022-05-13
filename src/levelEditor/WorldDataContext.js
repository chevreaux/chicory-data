// @flow strict

import {createContext, useContext, useMemo} from 'react';

import type {UndoReducerAction} from '../util/useUndoRedoReducer';
import useUndoRedoReducer from '../util/useUndoRedoReducer';

import type {GameObjectEntityType} from './types/GameObjectEntityType';
import type {LevelType} from './types/LevelType';
import convertCoordinatesToLevelId from './util/convertCoordinatesToLevelId';

const WorldDataContext = createContext();

type WorldType = {[levelId: string]: LevelType};

function getNonNullableLevel(
	state: ?WorldType,
	coordinates: [number, number, number]
) {
	if (state == null) {
		throw new Error('No world data');
	}

	const levelId = convertCoordinatesToLevelId(coordinates);
	const level: ?LevelType = state[levelId];
	if (level == null) {
		throw new Error(
			`Can't set property for level ${levelId} because the level doesn't exist`
		);
	}

	return [level, levelId];
}

type ReducerAction =
	| UndoReducerAction
	| {type: 'setWorldData', worldData: ?WorldType}
	| {type: 'newBlankLevel', coordinates: [number, number, number]}
	| {
			type: 'setLevelProperty',
			coordinates: [number, number, number],
			key: string,
			value: string | number | null,
	  }
	| {
			type: 'addObjectToLevel',
			coordinates: [number, number, number],
			objectEntity: GameObjectEntityType,
			x: number,
			y: number,
	  }
	| {
			type: 'editObjectPropertyOnLevel',
			coordinates: [number, number, number],
			objectIndex: number,
			key: string,
			value: string | number | null,
	  }
	| {
			type: 'deleteObjectOnLevel',
			coordinates: [number, number, number],
			objectIndex: number,
	  }
	| {
			type: 'duplicateLevel',
			from: [number, number, number],
			to: [number, number, number],
	  }
	| {
			type: 'setRawLevel',
			coordinates: [number, number, number],
			level: LevelType,
	  }
	| {type: 'deleteLevel', coordinates: [number, number, number]};

function reducer(state: ?WorldType, action: ReducerAction): ?WorldType {
	switch (action.type) {
		case 'setWorldData':
			return action.worldData;

		case 'newBlankLevel':
			return {
				...state,
				[convertCoordinatesToLevelId(action.coordinates)]: {
					ambiance: '-1',
					objects: [],
					geo: 'eJztwTEBAAAAwqD1T20LL6AAAADgbQ6OAAE=',
					foley: '0 ',
					palette: '',
					area: '',
					transition: '0',
					music: '-1',
					decos: [],
					object_id: '',
					name: '',
				},
			};

		case 'setLevelProperty': {
			const [level, levelId] = getNonNullableLevel(state, action.coordinates);

			if (
				level[action.key] === action.value ||
				(action.value === '' && level[action.key] == null)
			) {
				// If old and new values are the same, do nothing
				return state;
			}

			const newProperties = {...level};
			if (action.value !== null) {
				newProperties[action.key] = action.value;
			} else {
				delete newProperties[action.key];
			}

			return {
				...state,
				[levelId]: newProperties,
			};
		}

		case 'addObjectToLevel': {
			const [level, levelId] = getNonNullableLevel(state, action.coordinates);

			return {
				...state,
				[levelId]: {
					...level,
					objects: (level.objects ?? []).concat({
						obj: action.objectEntity,
						x: action.x,
						y: action.y,
					}),
				},
			};
		}

		case 'editObjectPropertyOnLevel': {
			const [level, levelId] = getNonNullableLevel(state, action.coordinates);

			const levelObjects = level.objects;
			if (levelObjects == null || levelObjects.length === 0) {
				return state;
			}

			if (
				levelObjects[action.objectIndex][action.key] === action.value ||
				(action.value === '' &&
					levelObjects[action.objectIndex][action.key] == null)
			) {
				// If old and new values are the same, do nothing
				return state;
			}

			const newProperties = {...levelObjects[action.objectIndex]};
			if (action.value !== null) {
				newProperties[action.key] = action.value;
			} else {
				delete newProperties[action.key];
			}

			return {
				...state,
				[levelId]: {
					...level,
					objects: levelObjects
						.slice(0, action.objectIndex)
						.concat(newProperties)
						.concat(levelObjects.slice(action.objectIndex + 1)),
				},
			};
		}

		case 'deleteObjectOnLevel': {
			const [level, levelId] = getNonNullableLevel(state, action.coordinates);

			const levelObjects = level.objects;
			if (levelObjects == null || levelObjects.length === 0) {
				return state;
			}

			return {
				...state,
				[levelId]: {
					...level,
					objects: levelObjects
						.slice(0, action.objectIndex)
						.concat(levelObjects.slice(action.objectIndex + 1)),
				},
			};
		}

		case 'duplicateLevel':
			if (state == null) {
				throw new Error('No world data');
			}

			return {
				...state,
				[convertCoordinatesToLevelId(action.to)]:
					state[convertCoordinatesToLevelId(action.from)],
			};

		case 'setRawLevel':
			if (state == null) {
				throw new Error('No world data');
			}

			return {
				...state,
				[convertCoordinatesToLevelId(action.coordinates)]: action.level,
			};

		case 'deleteLevel': {
			const newLevels = {...state};
			delete newLevels[convertCoordinatesToLevelId(action.coordinates)];
			return newLevels;
		}

		default:
			throw new Error('Unknown WorldData reducer action ' + action.type);
	}
}

type ContextValue = $ReadOnly<{
	worldData: ?WorldType,
	dispatch: (action: ReducerAction) => void,
	canUndo: boolean,
	canRedo: boolean,
}>;

type Props = $ReadOnly<{
	children: React$Node,
}>;

export function WorldDataProvider({children}: Props): React$Node {
	const {
		currentState: worldData,
		dispatch,
		canUndo,
		canRedo,
	} = useUndoRedoReducer(reducer, null);

	const contextValue: ContextValue = useMemo(() => {
		return {worldData, dispatch, canUndo, canRedo};
	}, [worldData, dispatch, canUndo, canRedo]);

	return (
		<WorldDataContext.Provider value={contextValue}>
			{children}
		</WorldDataContext.Provider>
	);
}

export function useWorldDataNullable(): ContextValue {
	const context = useContext(WorldDataContext);

	if (!context) {
		throw new Error('useWorldData must be used within a WorldDataProvider');
	}

	return context;
}

export function useWorldDataNonNullable(): $ReadOnly<{
	...ContextValue,
	worldData: WorldType,
}> {
	const hook = useWorldDataNullable();

	if (hook.worldData == null) {
		throw new Error('worldData is null');
	}

	// $FlowFixMe[incompatible-return] we don't want to construct yet another object for performance
	return hook;
}
