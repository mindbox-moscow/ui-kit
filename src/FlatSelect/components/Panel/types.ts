import { Width } from "../../../utils";

// tslint:disable-next-line: interface-name
export interface PanelProps {
	isNested?: boolean;
	className?: string;
	width: Width;
	allowedClickTargetClasses?: string[];
}

// tslint:disable-next-line: interface-name
export interface DropdownClientRect extends ClientRect {
	widthOverride?: number;
}
