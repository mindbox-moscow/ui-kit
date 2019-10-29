export interface SelectorItem {
	key: string;
	text: string;
}

export interface FlatSelectorProps {
	value: string | string[];
	onChange: (value: string | string[]) => void;
	allowMultiple: boolean;
	items: SelectorItem[];
}
