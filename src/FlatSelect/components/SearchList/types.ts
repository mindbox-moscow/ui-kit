// tslint:disable-next-line:interface-name
export interface SearchListProps {
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

// tslint:disable-next-line:interface-name
export interface SearchListState {
	minimized: boolean;
}

export enum SelectionMode {
	Single,
	Multiple
}
