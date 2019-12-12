import { Height, InputType, Width } from "../utils";

// tslint:disable-next-line: interface-name
export interface TextboxProps {
	onChange: (changedValue: string | number) => void;
	onEnterFinished?: (changedValue: string | number) => void;
	width?: Width;
	height?: Height;
	id?: string;
	placeholder?: string;
	disabled?: boolean;
	additionalClasses?: string;
	value: string | number;
	notFormControl?: boolean;
	shouldTextBeSelected?: boolean;
	shouldTextBeFocused?: boolean;
	style?: React.CSSProperties;
	onBlur?: () => void;
	type?: InputType;
	minValue?: number;
	maxValue?: number;
	isValid?: boolean;
	title?: string;
	precision?: number;
}

// tslint:disable-next-line: interface-name
export interface ClassDictionary {
	[id: string]: boolean | undefined | null;
}
