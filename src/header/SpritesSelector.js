// @flow strict

import CustomFolderInput from '../CustomFolderInput';

import styles from './SpritesSelector.module.css';

type Props = $ReadOnly<{
	sprites: ?{[name: string]: string},
	onSpritesLoad: {[name: string]: string}=>mixed,
}>;

export default function SpritesSelector(props: Props): React$Node {

	function onChange(ev: SyntheticEvent<HTMLInputElement>) {
		const fileInput = ev.currentTarget;
		if (fileInput.files && fileInput.files[0]) {

			let file;
			for (let i=0; i<fileInput.files.length; i++) {

				let reader = new FileReader()
				file = fileInput.files[i]
				if (file.type && !file.type.startsWith('image/')){
					alert('The directory contains a file that is not an image.');
					return;
				}

				let name = file.name.substring(0, file.name.length - 4)
				if (name.endsWith("_0")) {
					name = name.substring(0, name.length-2)
				}

				reader.onloadend = ((name) => {
					return (buffer: ProgressEvent) => {
						const reader = buffer.currentTarget;
						if (
							!(reader instanceof FileReader) ||
							typeof reader.result !== 'string'
						) {
							throw new Error();
						}
						var obj = {}
						obj[name] = reader.result
						props.onSpritesLoad(prevSprites=> ({...prevSprites,...obj}))
					}
				}) (name)
				
				reader.onerror = (ex) => {
					console.error(ex);
					alert('There was a problem reading the file.');
				};

				reader.readAsDataURL(file);

			}
		}
	}

	return (
		<>
			<div className={styles.space}>
				<CustomFolderInput onChange={onChange}>
					<button type="submit" tabIndex={-1}>
						Load sprites
					</button>
				</CustomFolderInput>
			</div>
		</>
	);
}
