export interface SelectSearchListProps {
	onInputChange: (changedValue: string) => void;
	className?: string;
	searchTextValue: string;
	shouldSearchTextBeSelected?: boolean;
	onScroll?: (element: Element) => () => void;
	selectionMode?: SelectionMode;
	headerInfo?: string | JSX.Element;
	clearFilterHandler?: React.MouseEventHandler<{}>;
	makeSelectedComponents?: () => JSX.Element[];
}

export interface SelectSearchListState {
	minimized: boolean;
}

export enum SelectionMode {
	Single,
	Multiple
}
