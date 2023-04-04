// @flow strict

import {memo} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';

import getCtrlKeyboardModifier from '../util/getCtrlKeyboardModifier';
import type {UndoReducerAction} from '../util/useUndoRedoReducer';

import styles from './AppHeaderUndoRedo.module.css';

type Props = $ReadOnly<{
	canRedo: boolean,
	canUndo: boolean,
	dispatch: (action: UndoReducerAction) => mixed,
}>;

function AppHeaderUndoRedo(props: Props): React$MixedElement {
	useHotkeys(getCtrlKeyboardModifier() + '+z', undo, {
		enabled: props.canUndo,
		preventDefault: true,
	});

	useHotkeys(
		`${getCtrlKeyboardModifier()}+y, ${getCtrlKeyboardModifier()}+shift+z`,
		redo,
		{
			enabled: props.canRedo,
			preventDefault: true,
		}
	);

	function undo() {
		props.dispatch({type: 'undo'});
	}

	function redo() {
		props.dispatch({type: 'redo'});
	}

	return (
		<div className={styles.root}>
			<button
				className={styles.space}
				disabled={!props.canUndo}
				onClick={undo}
				type="button"
			>
				Undo
			</button>

			<button disabled={!props.canRedo} onClick={redo} type="button">
				Redo
			</button>
		</div>
	);
}

export default (memo(AppHeaderUndoRedo): React$AbstractComponent<
	React$ElementConfig<typeof AppHeaderUndoRedo>,
	mixed
>);
