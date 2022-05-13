// @flow strict

import {useMemo} from 'react';

import {DOG_CLOTHES_LIST} from './types/DogClothesList';
import {DOG_HAT_LIST} from './types/DogHatList';

type Props = $ReadOnly<{
	clothes: string,
	clothesColor: string,
	hat: string,
	hatColor: string,
	// hair: string,
	skinColor: string,
}>;

export default function DogChicorobotCode(props: Props): React$Node {
	// Clothes
	const clothesInfo = useMemo(() => {
		return DOG_CLOTHES_LIST.find((clothes) => {
			return props.clothes === clothes.internalName;
		});
	}, [props.clothes]);

	if (!clothesInfo) {
		throw new Error('Invalid clothes ' + props.clothes);
	}

	// Hat
	const hatInfo = useMemo(() => {
		return DOG_HAT_LIST.find((hat) => {
			return props.hat === hat.internalName;
		});
	}, [props.hat]);

	if (!hatInfo) {
		throw new Error('Invalid hat ' + props.hat);
	}

	return (
		<>
			Chicorobot:{' '}
			<code>
				/dog expression:normal clothes:{clothesInfo.chicorobotName} hat:
				{hatInfo.chicorobotName} body_col:{props.skinColor} clothes_col:
				{props.clothesColor} hat_col:{props.hatColor}
			</code>
		</>
	);
}
