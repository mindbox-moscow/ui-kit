import { Height, Width } from "../utils";

export type SelectedItemKey = string | number | Array<string | number>;

// tslint:disable-next-line: interface-name
export interface SelectItem<TValue> {
	text: string;
	value: TValue;
	key: string | number;
	title?: string | JSX.Element;
	disabled?: boolean;
	children?: Array<SelectItem<TValue>>;
	className?: string;
}

// tslint:disable-next-line: interface-name
export interface SelectPropsBase<TValue, TSelection> {
	id?: string;
	selectedValue: TSelection;
	items: TValue[];
	itemFormatter: (value: TValue) => SelectItem<TValue>;
	selectedItemFormatter?: (values: TSelection) => string | JSX.Element;
	isLoading?: boolean;
	allowNull?: boolean;
	disabled?: boolean;
	placeholder?: string;
	width?: Width;
	height?: Height;
	className?: string;
	headerInfo?: string | JSX.Element;
	selectElementCaption: ({}) => string;
	loadListCaption?: string;
	isFixedDropdown?: boolean;
}

// tslint:disable-next-line: interface-name
export interface SelectProps<TValue>
	extends SelectPropsBase<TValue, TValue | TValue[]> {
	onChange: (newSelectedValue: TValue | null) => void;
}

// tslint:disable-next-line: interface-name
export interface AsyncSelectProps<TEntity, TSelection>
	extends SelectPropsBase<TEntity, TSelection> {
	searchText: string;
	isLoading: boolean;
	hasMoreData: boolean;
	disabled?: boolean;
	overrideHeaderInfo?: boolean;
	placeholder?: string;
	onSearchChange: (newSearchTerm: string) => void;
	onClearFilter: () => void;
	onLoadNextPortion: () => void;
	onSelectionChange: (newSelectedValues: TSelection) => void;
	resetFilterCaption?: string;
	closeCaption?: string;
	captionSearchLoader: string;
	captionNothingFound: string;
}
