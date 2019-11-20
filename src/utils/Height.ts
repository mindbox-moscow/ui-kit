export enum Height {
	// Явно проставляем значения, чтобы не было Enum'а, соответствующего 0,
	// и можно было использовать !enumValue для проверки на заполненность поля.
	Small = 1,
	Normal = 2,
	Large = 3
}

// tslint:disable-next-line: no-namespace
export namespace Height {
	export const getClass = (height: Height) => {
		switch (height) {
			case Height.Small:
				return "form-control_small";
			case Height.Large:
				return "form-control_large";
			case Height.Normal:
				return null;
			default:
				return null;
		}
	};
}
