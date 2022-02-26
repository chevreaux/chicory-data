// @flow strict

import React from 'react';

import type {GameObjectType} from '../types/GameObjectType';

import styles from './SidebarObjectsList.module.css';
import SidebarObjectText from './SidebarObjectText';

type Props = $ReadOnly<{
	levelObjects: Array<GameObjectType>,
	objectIndexHover: ?number,
	onObjectHover: (objectIndex: ?number) => mixed,
}>;

export default function SidebarObjectsList(props: Props): React$Node {
	return (
		<details className={styles.root} open>
			<summary>
				{props.levelObjects.length > 0
					? 'Objects (' + props.levelObjects.length + ')'
					: 'No objects'}
			</summary>

			<ul className={styles.list}>
				{props.levelObjects.map((obj, index) => {
					return (
						<li key={index}>
							<span
								className={
									styles.item +
									' ' +
									(props.objectIndexHover === index ? styles.highlight : '')
								}
								onMouseEnter={() => props.onObjectHover(index)}
								onMouseLeave={() => props.onObjectHover(null)}
							>
								<SidebarObjectText obj={obj} />
							</span>
						</li>
					);
				})}
			</ul>
		</details>
	);
}
