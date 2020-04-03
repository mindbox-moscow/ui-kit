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
	onSelectionClear?: (() => void) | null;
	disabled?: boolean;
	className?: string;
	closedClassName?: string;
	openedClassName?: string;
	panelClass?: string;
	style?: React.CSSProperties;
	onAdaptive?: () => boolean;
	isFixedDropdown?: boolean;
	children?: React.ReactNode;
}

// tslint:disable-next-line: interface-name
export interface DropdownClientRect extends ClientRect {
	widthOverride?: number;
}
