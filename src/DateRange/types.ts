export enum DateRangeValueTypes {
	NoFilter = "no-filter",
	Concrete = "concrete",
	Last = "last"
}

export interface NoFilterDateRangeValue {
	type: DateRangeValueTypes.NoFilter;
}

export interface ConcreteDateRangeValue {
	type: DateRangeValueTypes.Concrete;
	dateFrom: Date;
	dateTo: Date;
}

export enum LastPeriods {
	Week = "week",
	Month = "month",
	Year = "year"
}

export interface LastDateRangeValue {
	type: DateRangeValueTypes.Last;
	period: LastPeriods;
}

export type DateRangeValue =
	| NoFilterDateRangeValue
	| ConcreteDateRangeValue
	| LastDateRangeValue;

export interface DateRangeSelectorStateProps {
	value: DateRangeValue;
}

export interface DateRangeSelectorCallbackProps {
	onChange: (newValue: DateRangeValue) => void;
}

export interface IDateRange {
	dateFrom: Date;
	dateTo: Date;
}

export interface Props {
	caption: Caption;
	dataRangeValue: DateRangeValue;
	onChange: (value: DateRangeValue) => void;
}

export interface Caption {
	labelNoFilter: string;
	radioTextNoFilter: string;
	labelConcrete: string;
	radioConcreteFromText: string;
	radioConcreteToText: string;
	labelLast: string;
	radioTextWeek: string;
	radioTextMonth: string;
	radioTextYear: string;
	helpCaption: string;
	addFilterButtonCaption: string;
	cancelFilterButtonCaption: string;
	tooltipContent: React.ReactNode;
}
