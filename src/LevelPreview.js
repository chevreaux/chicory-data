// @flow strict

import GeoPreview, {GEO_WIDTH, SCREEN_WIDTH} from './GeoPreview';
import styles from './LevelPreview.module.css';
import LevelPreviewObjects from './LevelPreviewObjects';
import LevelPreviewDecos from './LevelPreviewDecos';
import type {GameObjectEntityType} from './types/GameObjectEntityType';
import type {LevelType} from './types/LevelType';

type Props = $ReadOnly<{
	addingObjectEntity: ?GameObjectEntityType,
	level: LevelType,
	mapMouseMoveCoordinates: ?[number, number],
	objectIndexHover: ?number,
	onMapMouseClick: (ev: SyntheticMouseEvent<HTMLDivElement>) => mixed,
	onMapMouseLeave: (ev: SyntheticMouseEvent<HTMLDivElement>) => mixed,
	onMapMouseMove: (ev: SyntheticMouseEvent<HTMLDivElement>) => mixed,
	onObjectHover: (objectIndex: ?number) => mixed,
	sprites: {[name: string]: string},
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

			<LevelPreviewDecos
				level={props.level}
				objectIndexHover={props.objectIndexHover}
				onMapMouseLeave={props.onMapMouseLeave}
				onMapMouseMove={props.onMapMouseMove}
				onObjectHover={props.onObjectHover}
				sprites={props.sprites}
			/>

			<div className={styles.canvas}>
				<GeoPreview
					level={props.level}
					mapMouseMoveCoordinates={null}
					scale={SCREEN_WIDTH / GEO_WIDTH}
				/>
			</div>
		</div>
	);
}
