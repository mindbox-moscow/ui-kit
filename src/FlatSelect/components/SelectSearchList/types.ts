// tslint:disable-next-line: interface-name
export interface SelectSearchListProps {
	onInputChange: (changedValue: string) => void;
	className?: string;
	searchTextValue: string;
	shouldSearchTextBeSelected?: boolean;
	onScroll?: (element: Element) => () => void;
	selectionMode?: SelectionMode;
	headerInfo?: string | JSX.Element;
	clearFilterHandler?: React.MouseEventHandler;
	makeSelectedComponents?: () => JSX.Element[];
	resetFilterCaption?: string;
	closeCaption?: string;
	getChildRef?: (ref: React.RefObject<HTMLElement>) => void;
}

export enum SelectionMode {
	Single,
	Multiple
}
