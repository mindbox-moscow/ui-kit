import { Width } from "../../../utils";

// tslint:disable-next-line: interface-name
export interface IProps {
	isNested?: boolean;
	className?: string;
	width: Width;
	allowedClickTargetClasses?: string[];
	parentRef?: React.RefObject<HTMLElement>;
	onCLose: () => void;
}

// tslint:disable-next-line: interface-name
export interface DropdownClientRect extends ClientRect {
	widthOverride?: number;
}
