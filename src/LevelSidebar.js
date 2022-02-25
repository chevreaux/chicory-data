// @flow strict

import type {LevelType} from './types/LevelType';

// $FlowFixMe[nonstrict-import]
import GeoPreview from './GeoPreview';
import React from 'react';
import SidebarMouseMoveCoordinates from './SidebarMouseMoveCoordinates';
import SidebarObjectText from './SidebarObjectText';

import styles from './LevelSidebar.module.css';

function withoutObjectsAndDecos(
	level: LevelType
): $Diff<LevelType, {geo: string}> {
	const {objects, decos, geo, ...otherProps} = level;
	return otherProps;
}

type Props = {
	level: LevelType,
	mapMouseMoveCoordinates: ?[number, number],
	objectIndexHover: ?number,
	onObjectHover: (objectIndex: ?number) => mixed,
};

export default function LevelSidebar(props: Props): React$Node {
	const levelObjects = props.level.objects;

	return (
		<div className={styles.sidebar}>
			<GeoPreview
				level={props.level}
				mapMouseMoveCoordinates={props.mapMouseMoveCoordinates}
			/>

			<div className={styles.group + ' ' + styles.properties}>
				<div>
					{levelObjects != null && props.objectIndexHover != null
						? 'Object properties'
						: 'Level properties'}
				</div>

				<code>
					{levelObjects != null && props.objectIndexHover != null
						? JSON.stringify(levelObjects[props.objectIndexHover], null, 2)
						: JSON.stringify(withoutObjectsAndDecos(props.level), null, 2)}
				</code>
			</div>

			{levelObjects != null ? (
				<details className={styles.group + ' ' + styles.objectsBox} open>
					<summary>Objects ({levelObjects.length}):</summary>

					<ul className={styles.objectsList}>
						{levelObjects.map((obj, index) => {
							return (
								<li key={index}>
									<button
										className={
											styles.objectItem +
											' ' +
											(props.objectIndexHover === index
												? styles.objectHighlight
												: '')
										}
										onMouseEnter={() => props.onObjectHover(index)}
										onMouseLeave={() => props.onObjectHover(null)}
									>
										<SidebarObjectText obj={obj} />
									</button>
								</li>
							);
						})}
					</ul>
				</details>
			) : null}

			<div className={styles.group}>
				<SidebarMouseMoveCoordinates
					mapMouseMoveCoordinates={props.mapMouseMoveCoordinates}
				/>
			</div>
		</div>
	);
}
