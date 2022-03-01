// @flow strict

import {memo} from 'react';

import GeoPreview, {GEO_WIDTH, SCREEN_WIDTH} from './GeoPreview';
import styles from './LevelPreview.module.css';
import type {LevelType} from './types/LevelType';

type Props = $ReadOnly<{
	level: LevelType,
	objectIndexHover: ?number,
	onMapMouseLeave: (ev: SyntheticMouseEvent<HTMLDivElement>) => mixed,
	onMapMouseMove: (ev: SyntheticMouseEvent<HTMLDivElement>) => mixed,
	onObjectHover: (objectIndex: ?number) => mixed,
}>;

function LevelPreview(props: Props): React$Node {
	const objects = props.level.objects;

	// Some objects can be bit off-screen
	let offscreenX = -8;
	let offscreenY = -8;
	objects?.forEach((obj) => {
		offscreenX = Math.min(offscreenX, obj.x - 8);
		offscreenY = Math.min(offscreenY, obj.y - 8);
	});

	return (
		<div
			className={styles.root}
			onMouseMove={props.onMapMouseMove}
			onMouseLeave={props.onMapMouseLeave}
			style={{
				left: -offscreenX,
				top: -offscreenY,
			}}
		>
			{objects?.map((obj, index) => {
				return (
					<div
						className={
							styles.objectItem +
							' ' +
							(props.objectIndexHover === index ? styles.objectItemHover : '')
						}
						key={index}
						onMouseEnter={() => props.onObjectHover(index)}
						onMouseLeave={() => props.onObjectHover(null)}
						style={{
							left: obj.x,
							top: obj.y,
						}}
					>
						{obj.obj.slice('obj'.length)}
					</div>
				);
			})}

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

export default (memo<Props>(LevelPreview): React$AbstractComponent<
	Props,
	mixed
>);
