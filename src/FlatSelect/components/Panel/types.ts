import { Width } from "../../../utils";

// tslint:disable-next-line: interface-name
export interface IProps {
	isNested?: boolean;
	className?: string;
	width: Width;
	allowedClickTargetClasses?: string[];
	parentRef?: React.RefObject<HTMLElement>;
	children?: React.ReactNode;
}

// tslint:disable-next-line: interface-name
export interface DropdownClientRect extends ClientRect {
	widthOverride?: number;
}
