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

// tslint:disable-next-line: no-namespace
export namespace Width {
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
	};
}
