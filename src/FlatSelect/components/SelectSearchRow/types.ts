// tslint:disable-next-line:interface-name
export interface SelectSearchRowProps {
	text?: string | JSX.Element;
	title?: string | JSX.Element;
	unselectable?: boolean;
	disabled?: boolean;
	isSelected?: boolean;
	isForMultiSelect?: boolean;
	isLoader?: boolean;
	hasNested?: boolean;
	className?: string;
	onClickHandler?: React.MouseEventHandler;
}
