// @flow strict

import {useEffect, useRef} from 'react';

import ConsoleNoJest from '../util/ConsoleNoJest';

import {useWorldDataNullable} from './WorldDataContext';

type Props = $ReadOnly<{
	children: React$Node,
}>;

export default function LevelEditorDataLoader(props: Props): React$Node {
	const {worldData, dispatch} = useWorldDataNullable();
	const consoleMessageShownRef = useRef(false);

	useEffect(() => {
		window.levelsData = worldData;
	}, [worldData]);

	useEffect(() => {
		if (!consoleMessageShownRef.current) {
			ConsoleNoJest.log('Use `window.levelsData` for your custom queries!');

			consoleMessageShownRef.current = true;
		}
	}, []);

	// Do first load
	useEffec
					});

					dispatch({
						type: 'clearUndoHistory',
					});
				})
				.catch((ex) => {
					console.error(ex);
					alert('There was a problem loading the original level data.');
				});
		}
	}, [dispatch, worldData]);

	return props.children;
}
