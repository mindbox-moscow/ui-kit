import { Height, InputType, Width } from "../../modules";

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
