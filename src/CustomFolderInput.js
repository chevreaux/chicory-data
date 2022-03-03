// @flow strict

import {forwardRef} from 'react';

import styles from './CustomFolderInput.module.css';

type Props = $ReadOnly<{
	children: React$Node,
	onChange: (ev: SyntheticEvent<HTMLInputElement>) => mixed,
}>;

function CustomFolderInput(props: Props, ref): React$Node {
	return (
		<div className={styles.root}>
			<input
				className={styles.folderInput}
				onChange={props.onChange}
				ref={ref}
				type="file"
                webkitdirectory=""
                mozdirectory=""
                directory=""
			/>

			{props.children}
		</div>
	);
}

export default (forwardRef(CustomFolderInput): React$AbstractComponent<
	Props,
	HTMLInputElement
>);
