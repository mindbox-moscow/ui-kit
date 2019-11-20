// tslint:disable-next-line: interface-name
export interface TypeWithIsValid {
	isValid?: boolean;
}

// tslint:disable-next-line: interface-name
export interface UtilsEvent extends Event {
	eventType?: string;
	eventName?: string;
}

export interface IDictionary<TValue> {
	[index: string]: TValue;
}
