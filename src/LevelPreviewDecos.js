// @flow strict

import {memo} from 'react';

import styles from './LevelPreviewDecos.module.css';
import type {LevelType} from './types/LevelType';

type Props = $ReadOnly<{
	level: LevelType,
	objectIndexHover: ?number,
	onMapMouseLeave: (ev: SyntheticMouseEvent<HTMLDivElement>) => mixed,
	onMapMouseMove: (ev: SyntheticMouseEvent<HTMLDivElement>) => mixed,
	onObjectHover: (objectIndex: ?number) => mixed,
    sprites: ?{[name: string]: string},
}>;

function LevelPreviewDecos(props: Props): React$Node {
	const decos = props.level.decos;

	if (decos == null) {
		return null;
	}

	return decos.map((dec, index) => {
		return (
			<div
				className={
					styles.item +
					' ' +
					(props.objectIndexHover === index ? styles.itemHover : '')
				}
				key={index}
				onMouseEnter={() => props.onObjectHover(index)}
				onMouseLeave={() => props.onObjectHover(null)}
				style={{
					left: dec.x,
					top: dec.y,
				}}
			>
				<img src={props.sprites ? props.sprites[dec.spr] : ""} alt=""/>
			</div>
		);
	});
}

export default (memo<Props>(LevelPreviewDecos): React$AbstractComponent<
	Props,
	mixed
>);
