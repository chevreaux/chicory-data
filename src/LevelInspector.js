// @flow strict

import {useCallback, useEffect, useState} from 'react';

import ErrorBoundary from './ErrorBoundary';
import styles from './LevelInspector.module.css';
import LevelPreview from './LevelPreview';
import LevelSidebar from './sidebar/LevelSidebar';
import type {GameObjectEntityType} from './types/GameObjectEntityType';
import type {LevelType} from './types/LevelType';

type Props = $ReadOnly<{
	level: LevelType,
	setSingleLevelData: (LevelType) => mixed,
	sprites: {[name: string]: string},
}>;

export default function LevelInspector({
	level,
	setSingleLevelData,
	sprites,
}: Props): React$Node {
	useEffect(() => {
		console.log(level);
	}, [level]);

	const [addingObjectEntity, setAddingObjectEntity] =
		useState<?GameObjectEntityType>(null);

	const [mapMouseMoveCoordinates, setMapMouseMoveCoordinates] =
		useState<?[number, number]>(null);

	const [objectIndexHover, setObjectIndexHover] = useState<?number>(null);
	function onMapMouseClick(ev: SyntheticMouseEvent<>) {
		console.log(sprites);
		if (addingObjectEntity == null || mapMouseMoveCoordinates == null) {
			return;
		}

		setSingleLevelData({
			...level,
			objects: (level.objects ?? []).concat({
				obj: addingObjectEntity,
				x: mapMouseMoveCoordinates[0],
				y: mapMouseMoveCoordinates[1],
			}),
		});

		if (!ev.shiftKey) {
			setAddingObjectEntity(null);
		}
	}

	const onMapMouseLeave = useCallback(
		(ev: SyntheticMouseEvent<>) => {
			setMapMouseMoveCoordinates(null);
		},
		[setMapMouseMoveCoordinates]
	);

	const onMapMouseMove = useCallback(
		(ev: SyntheticMouseEvent<HTMLDivElement>) => {
			const rect = ev.currentTarget.getBoundingClientRect();

			setMapMouseMoveCoordinates([
				parseInt(ev.clientX - rect.left, 10),
				parseInt(ev.clientY - rect.top, 10),
			]);
		},
		[setMapMouseMoveCoordinates]
	);

	const onObjectDelete = useCallback(
		(objectIndex: number) => {
			const levelObjects = level.objects;
			if (levelObjects == null) {
				return;
			}

			setSingleLevelData({
				...level,
				objects: levelObjects
					.slice(0, objectIndex)
					.concat(levelObjects.slice(objectIndex + 1)),
			});
		},
		[level, setSingleLevelData]
	);

	return (
		<div className={styles.root}>
			<div className={styles.preview}>
				<ErrorBoundary>
					<LevelPreview
						addingObjectEntity={addingObjectEntity}
						level={level}
						mapMouseMoveCoordinates={mapMouseMoveCoordinates}
						objectIndexHover={objectIndexHover}
						onMapMouseClick={onMapMouseClick}
						onMapMouseLeave={onMapMouseLeave}
						onMapMouseMove={onMapMouseMove}
						onObjectHover={setObjectIndexHover}
						sprites={sprites}
					/>
				</ErrorBoundary>
			</div>

			<ErrorBoundary>
				<LevelSidebar
					level={level}
					mapMouseMoveCoordinates={mapMouseMoveCoordinates}
					objectIndexHover={objectIndexHover}
					onAddingObjectEntity={setAddingObjectEntity}
					onObjectDelete={onObjectDelete}
					onObjectHover={setObjectIndexHover}
				/>
			</ErrorBoundary>
		</div>
	);
}
