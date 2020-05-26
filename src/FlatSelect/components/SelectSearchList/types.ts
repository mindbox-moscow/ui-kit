// tslint:disable-next-line: interface-name
export interface SelectSearchListProps {
	onInputChange: (changedValue: string) => void;
	className?: string;
	searchTextValue: string;
	shouldSearchTextBeSelected?: boolean;
	selectionMode?: SelectionMode;
	headerInfo?: string | JSX.Element;
	clearFilterHandler?: React.MouseEventHandler;
	makeSelectedComponents?: () => JSX.Element[];
	resetFilterCaption?: string;
	closeCaption?: string;
	children?: React.ReactNode;
}

export enum SelectionMode {
	Single,
	Multiple
}
