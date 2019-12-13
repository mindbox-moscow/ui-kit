import { Height, Width } from "../../../utils";

// tslint:disable-next-line:interface-name
export interface DropdownProps {
	id?: string;
	placeholder?: string;
	headerInfo?: string | JSX.Element | null;
	height?: Height;
	width?: Width;
	isNested?: boolean;
	widthOverride?: number;
	onSelectionClear?: (() => void);
	disabled?: boolean;
	className?: string;
	closedClassName?: string;
	openedClassName?: string;
	panelClass?: string;
	style?: React.CSSProperties;
	onAdaptive?: () => boolean;
}

// tslint:disable-next-line:interface-name
export interface DropdownState {
	show: boolean;
	isInBottomOfScreen: boolean;
	dropdownId: string;
}

// tslint:disable-next-line: interface-name
export interface DropdownClientRect extends ClientRect {
	widthOverride?: number;
}
