// @flow strict

import {useCallback, useMemo, useRef} from 'react';

import CustomSelect from '../../common/CustomSelect';
import type {LevelType} from '../types/LevelType';
import convertCoordinatesToLevelId from '../util/convertCoordinatesToLevelId';
import convertLevelIdToCoordinates from '../util/convertLevelIdToCoordinates';
import getLevelLabel from '../util/getLevelLabel';
import sortCompareCoordinates from '../util/sortCompareCoordinates';

type Props = $ReadOnly<{
	levels: {+[levelId: string]: ?LevelType},
	onNewCoordinatesSet: (newCoordinates: [number, number, number]) => mixed,
	selectedCoordinates: [number, number, number],
}>;

export default function LevelLayerDropdownSelect(props: Props): React$Node {
	const {onNewCoordinatesSet} = props;

	const currentLevelId = convertCoordinatesToLevelId(props.selectedCoordinates);
	let currentSelectOption = useRef();

	const levelIds = useMemo(() => {
		return Object.keys(props.levels).sort((a, b) => {
			return sortCompareCoordinates(
				convertLevelIdToCoordinates(a),
				convertLevelIdToCoordinates(b)
			);
		});
	}, [props.levels]);

	const layersGrouped = useMemo(() => {
		const map = new Map();

		levelIds.forEach((id) => {
			const coordinates = convertLevelIdToCoordinates(id);
			const layer = coordinates[0];

			if (!map.has(layer)) {
				map.set(layer, {
					label: 'Layer ' + layer,
					options: [],
				});
			}

			const option = {
				value: id,
				label: getLevelLabel(coordinates, props.levels[id]),
			};

			map.get(layer)?.options.push(option);

			if (option.value === currentLevelId) {
				currentSelectOption.current = option;
			}
		});

		return Array.from(map.values());
	}, [currentLevelId, levelIds, props.levels]);

	const onOptionChange = useCallback(
		(newOption) => {
			onNewCoordinatesSet(convertLevelIdToCoordinates(newOption.value));
		},
		[onNewCoordinatesSet]
	);

	return (
		<CustomSelect
			value={currentSelectOption.current}
			maxMenuHeight={1000}
			onChange={onOptionChange}
			options={layersGrouped}
		/>
	);
}
