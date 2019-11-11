// tslint:disable-next-line: interface-name
export interface TypeWithIsValid {
	isValid?: boolean;
}

// tslint:disable-next-line: interface-name
export interface DirectCrmError {
	errorMessage: string;
	errorId: string;
	httpStatusCode: number;
	status: string;
}

// tslint:disable-next-line: interface-name
export interface UtilsEvent extends Event {
	eventType?: string;
	eventName?: string;
}

// tslint:disable-next-line: interface-name
export interface QuantityFormDto {
	singularForm: string;
	dualForm: string;
	pluralForm: string;
	sevenEightForm?: string;
}

export interface IDictionary<TValue> {
	[index: string]: TValue;
}
