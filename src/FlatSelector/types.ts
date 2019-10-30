export interface SelectorItem {
	key: string;
	text: string;
}

export interface FlatSelectorProps {
	value: string | string[];
	onChange: (value: string | string[] | null) => void;
	allowMultiple: boolean;
	items: SelectorItem[];
}
