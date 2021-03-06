import { Days, Months } from "../DateField";

export interface IDateRange {
	dateTo?: Date
	dateFrom?: Date
}

export enum DateRangeValueTypes {
	NoFilter = "no-filter",
	Concrete = "concrete",
	Last = "last"
}

export interface INoFilterDateRangeValue {
	type: DateRangeValueTypes.NoFilter;
}

export interface IConcreteDateRangeValue {
	type: DateRangeValueTypes.Concrete;
	dateFrom: Date;
	dateTo: Date;
}

export enum LastPeriods {
	Week = "week",
	Month = "month",
	Year = "year"
}

export interface ILastDateRangeValue {
	type: DateRangeValueTypes.Last;
	period: LastPeriods;
}

export type DateRangeValue =
	| INoFilterDateRangeValue
	| IConcreteDateRangeValue
	| ILastDateRangeValue;

export interface IDateRangeCaption {
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
	months: Months;
	days: Days;
	periodPlaceholder: string;
}
