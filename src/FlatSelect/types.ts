export type SelectedItemKey = string | number | Array<string | number> | null;

// tslint:disable-next-line:interface-name
export interface SelectItem<TValue> {
	text: string;
	value: TValue;
	key: string | number;
	title?: string | JSX.Element;
	disabled?: boolean;
	children?: Array<SelectItem<TValue>>;
	className?: string;
}

// tslint:disable-next-line:interface-name
export interface SelectPropsBase<TValue, TSelection> {
	id?: string;
	selectedValue: TSelection;
	items: TValue[];
	itemFormatter: (value: TValue) => SelectItem<TValue>;
	selectedItemFormatter?: (values: TSelection) => string | JSX.Element;
	isLoading?: boolean;
	allowNull?: boolean;
	disabled?: boolean;
	placeholder?: string;
	width?: Width;
	height?: Height;
	className?: string;
	headerInfo?: string | JSX.Element;
	selectedCaption: string;
	loadingList: string;
	selectElementCaption: (parameters: object) => string;
	loadListCaption: string
}

// tslint:disable-next-line:interface-name
export interface SelectProps<TValue>
	extends SelectPropsBase<TValue, TValue | TValue[]> {
	onChange: (newSelectedValue: TValue | null) => void;
}

// tslint:disable-next-line:interface-name
export interface SelectState {
	searchTerm: string;
}

export enum Width {
	// Явно проставляем значения, чтобы не было Enum'а, соответствующего 0,
	// и можно было использовать !enumValue для проверки на заполненность поля.
	XxSmall = 1,
	XSmall,
	Small,
	Medium,
	Normal,
	Big,
	XBig,
	XxBig,
	Full,
	None
}

export const getClass = (width: Width) => {
	switch (width) {
		case Width.XxSmall:
			return "w50";
		case Width.XSmall:
			return "w100";
		case Width.Small:
			return "w150";
		case Width.Medium:
			return "w230";
		case Width.Normal:
			return "w260";
		case Width.Big:
			return "w330";
		case Width.XBig:
			return "w470";
		case Width.XxBig:
			return "w750";
		case Width.Full:
			return "form-control_all";
		case Width.None:
			return null;
		default:
			return "w260";
	}
}

export enum Height {
	// Явно проставляем значения, чтобы не было Enum'а, соответствующего 0,
	// и можно было использовать !enumValue для проверки на заполненность поля.
	Small = 1,
	Normal = 2,
	Large = 3
}
