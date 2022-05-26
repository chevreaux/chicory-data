// @flow strict

// $FlowFixMe[untyped-import]
import Select from 'react-select';

export type OptionType<T> = {
	label: string,
	value: T,
};

type Props<T> = $ReadOnly<{
	components?: {
		Option?: React$AbstractComponent<
			{children: React$Node, data: OptionType<T>, isFocused: boolean},
			mixed
		>,
		SingleValue?: React$AbstractComponent<
			{children: React$Node, data: OptionType<T>},
			mixed
		>,
	},
	maxMenuHeight: number,
	onChange: (newOption: OptionType<T>) => mixed,
	onMenuClose?: () => void,
	options:
		| $ReadOnlyArray<OptionType<T>>
		| $ReadOnlyArray<{
				label: string,
				options: $ReadOnlyArray<OptionType<T>>,
		  }>,
	value: ?OptionType<T>,
}>;

const CUSTOM_STYLES = {
	control(provided, state) {
		return {
			...provided,
			background: 'var(--input-background-color)',
			borderColor: 'var(--input-border-color)',
			borderRadius: 0,
			cursor: 'pointer',
			transition: 'none',
			'&:hover': {
				borderColor: 'var(--input-border-hover-color)',
			},
		};
	},
	indicatorSeparator(provided, state) {
		return {
			...provided,
			backgroundColor: 'var(--input-border-color)',
		};
	},
	menuList(provided, state) {
		return {
			...provided,
			background: 'var(--input-background-color)',
		};
	},
	menuPortal(provided, state) {
		return {
			...provided,
			zIndex: 99,
		};
	},
	option(provided, state) {
		return {
			...provided,
			color: '',
			cursor: 'pointer',
		};
	},
	singleValue(provided, state) {
		return {
			...provided,
			color: 'var(--body-text-color)',
		};
	},
};

const CUSTOM_THEME = (theme) => {
	return {
		...theme,
		colors: {
			...theme.colors,
			primary: 'rgb(182, 154, 255)',
			primary25: 'rgb(255, 166, 148)',
			primary50: 'rgb(0, 243, 221)',
		},
	};
};

export default function CustomSelect<T>(props: Props<T>): React$Node {
	return (
		<Select
			components={props.components}
			maxMenuHeight={props.maxMenuHeight}
			menuPortalTarget={document.body}
			onChange={props.onChange}
			onMenuClose={props.onMenuClose}
			options={props.options}
			styles={CUSTOM_STYLES}
			theme={CUSTOM_THEME}
			value={props.value}
		/>
	);
}
