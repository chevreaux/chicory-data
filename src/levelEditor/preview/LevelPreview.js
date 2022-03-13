// @flow strict

import GeoPreview from '../common/GeoPreview';
import {GEO_WIDTH, SCREEN_WIDTH} from '../GeoConstants';
import type {GameObjectEntityType} from '../types/GameObjectEntityType';
import type {LevelInspectorUiView} from '../types/LevelInspectorUiView';
import type {LevelType} from '../types/LevelType';

import LevelInGamePreview from './LevelInGamePreview';
import styles from './LevelPreview.module.css';
import LevelPreviewObjects from './LevelPreviewObjects';

type Props = $ReadOnly<{
	addingObjectEntity: ?GameObjectEntityType,
	currentCoordinates: [number, number, number],
	level: LevelType,
	mapMouseMoveCoordinates: ?[number, number],
	objectIndexHover: ?number,
	onMapMouseClick: (ev: SyntheticMouseEvent<HTMLDivElement>) => mixed,
	onMapMouseLeave: (ev: SyntheticMouseEvent<HTMLDivElement>) => mixed,
	onMapMouseMove: (ev: SyntheticMouseEvent<HTMLDivElement>) => mixed,
	onObjectClick: (objectIndex: number) => mixed,
	onObjectHover: (objectIndex: ?number) => mixed,
	uiView: LevelInspectorUiView,
}>;

export default function LevelPreview(props: Props): React$Node {
	const objects = props.level.objects;

	// Some objects can be bit off-screen
	let offscreenX = -8;
	let offscreenY = -8;
	objects?.forEach((obj) => {
		offscreenX = Math.min(offscreenX, obj.x - 8);
		offscreenY = Math.min(offscreenY, obj.y - 8);
	});

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			className={styles.root}
			data-testid="levelpreview-root"
			onClick={props.onMapMouseClick}
			onMouseMove={props.onMapMouseMove}
			onMouseLeave={props.onMapMouseLeave}
			style={{
				left: -offscreenX,
				top: -offscreenY,
			}}
		>
			<LevelPreviewObjects
				level={props.level}
				objectIndexHover={props.objectIndexHover}
				onMapMouseLeave={props.onMapMouseLeave}
				onMapMouseMove={props.onMapMouseMove}
				onObjectClick={props.onObjectClick}
				onObjectHover={props.onObjectHover}
			/>

			{props.addingObjectEntity != null &&
			props.mapMouseMoveCoordinates != null ? (
				<div
					className={styles.addingObjectItem}
					style={{
						left: props.mapMouseMoveCoordinates[0],
						top: props.mapMouseMoveCoordinates[1],
					}}
				>
					{props.addingObjectEntity.slice('obj'.length)}
				</div>
			) : null}

			<div className={styles.canvas}>
				{props.uiView === 'GEO' ? (
					<GeoPreview
						level={props.level}
						mapMouseMoveCoordinates={null}
						scale={SCREEN_WIDTH / GEO_WIDTH}
						useDevicePixelRatio={true}
					/>
				) : props.uiView === 'INGAME' ? (
					<LevelInGamePreview currentCoordinates={props.currentCoordinates} />
				) : null}
			</div>
		</div>
	);
}
