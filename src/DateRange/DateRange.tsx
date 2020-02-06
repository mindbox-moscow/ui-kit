import * as React from "react";
import {
	DateRangeValue,
	DateRangeValueTypes,
	IDateRange,
	IDateRangeCaption,
	LastPeriods
} from "./types";

import { ConditionEditorPopup } from "../ConditionEditorPopup";
import { FilterDetails } from "../FilterDetails";
import { RadioButton } from "../RadioButton";
import { getNow, getWeekBeforeNow, parseDateToString } from "../utils/helpers";
import { InnerEditorComponent } from "./components/InnerEditorComponent";

import { withOutsideClick } from "../HOCs";

import "./DateRange.scss";

const WithOutsideClickFilterDetails = withOutsideClick(FilterDetails);

const makeNewDate = (date: Date, hours: number, minutes: number) => {
	const newDate = new Date(date);
	newDate.setHours(hours);
	newDate.setMinutes(minutes);

	return newDate;
};

interface IProps {
	caption: IDateRangeCaption;
	value: DateRangeValue;
	onChange: (value: DateRangeValue) => void;
}

const DateRange = ({ onChange, caption, value }: IProps) => {
	const {
		labelNoFilter,
		radioTextNoFilter,
		labelConcrete,
		radioConcreteFromText,
		radioConcreteToText,
		labelLast,
		radioTextWeek,
		radioTextMonth,
		radioTextYear,
		helpCaption,
		tooltipContent,
		addFilterButtonCaption,
		cancelFilterButtonCaption
	} = caption;

	const dateFromInit =
		value.type === DateRangeValueTypes.Concrete
			? value.dateFrom
			: getWeekBeforeNow();
	const dateToInit =
		value.type === DateRangeValueTypes.Concrete ? value.dateTo : getNow();
	const [dateFrom, setDateFrom] = React.useState<Date>(dateFromInit);
	const [dateTo, setDateTo] = React.useState<Date>(dateToInit);
	const [hasError, setHasError] = React.useState<boolean>(false);
	const [dateRange, setDateRange] = React.useState<IDateRange>({
		dateFrom,
		dateTo
	});
	const [shouldShowFilter, setShouldShowFilter] = React.useState<boolean>(
		false
	);
	const hoursFrom = dateFrom.getHours();
	const minutesFrom = dateFrom.getMinutes();
	const hoursTo = dateTo.getHours();
	const minutesTo = dateTo.getMinutes();

	const handleSelectedNoFilter = () => {
		onChange({ type: DateRangeValueTypes.NoFilter });
	};

	const handleSelectedLast = (period: LastPeriods) => () => {
		onChange({ type: DateRangeValueTypes.Last, period });
	};

	const onCloseFilter = () => {
		setShouldShowFilter(false);
		setDateFrom(dateRange.dateFrom);
		setDateTo(dateRange.dateTo);
		setHasError(false);
	};

	const handleToggleFilter = () => {
		setShouldShowFilter(prev => !prev);
	};

	const handleApplyFilter = () => {
		setShouldShowFilter(false);
		setDateRange({ dateFrom, dateTo });
		onChange({ type: DateRangeValueTypes.Concrete, dateFrom, dateTo });
	};

	const handleChangeDateFrom = (newDateFrom: Date) => {
		const newDate = makeNewDate(newDateFrom, hoursFrom, minutesFrom);
		const isError = newDate >= dateTo;

		setHasError(isError);

		if (!isError) {
			setDateFrom(newDate);
		}
	};

	const handleChangeDateTo = (newDateTo: Date) => {
		const newDate = makeNewDate(newDateTo, hoursTo, minutesTo);
		const isError = dateFrom >= newDate;

		setHasError(isError);

		if (!isError) {
			setDateTo(newDate);
		}
	};

	const handleChangeTimeFrom = (hours: number, minutes: number) => {
		const newDate = makeNewDate(dateFrom, hours, minutes);
		const isError = newDate >= dateTo;

		setHasError(isError);

		if (!isError) {
			setDateFrom(newDate);
		}
	};

	const handleChangeTimeTo = (hours: number, minutes: number) => {
		const newDate = makeNewDate(dateTo, hours, minutes);
		const isError = dateFrom >= newDate;

		setHasError(isError);

		if (!isError) {
			setDateTo(newDate);
		}
	};

	return (
		<div className="kit-date-range">
			<div className="kit-date-range__content">
				<label className="kit-date-range__label">{labelNoFilter}</label>
				<RadioButton
					name="date"
					onSelected={handleSelectedNoFilter}
					checked={value.type === DateRangeValueTypes.NoFilter}
				>
					{radioTextNoFilter}
				</RadioButton>
			</div>
			<div className="kit-date-range__content">
				<label className="kit-date-range__label">{labelConcrete}</label>
				<div className="kit-date-range__radio-button">
					<RadioButton
						name="date"
						onClick={handleToggleFilter}
						checked={value.type === DateRangeValueTypes.Concrete}
					>
						{`${radioConcreteFromText} ${parseDateToString(
							dateRange.dateFrom
						)}
					${radioConcreteToText} ${parseDateToString(dateRange.dateTo)}`}
					</RadioButton>

					{shouldShowFilter && (
						<WithOutsideClickFilterDetails
							editorComponent={
								<ConditionEditorPopup
									innerEditorComponent={
										<InnerEditorComponent
											radioConcreteFromText={
												radioConcreteFromText
											}
											radioConcreteToText={
												radioConcreteToText
											}
											tooltipContent={tooltipContent}
											hasError={hasError}
											dateFrom={dateFrom}
											dateTo={dateTo}
											timeFrom={{
												hours: hoursFrom,
												minutes: minutesFrom
											}}
											timeTo={{
												hours: hoursTo,
												minutes: minutesTo
											}}
											onChangeDateFrom={
												handleChangeDateFrom
											}
											onChangeDateTo={handleChangeDateTo}
											onChangeTimeFrom={
												handleChangeTimeFrom
											}
											onChangeTimeTo={handleChangeTimeTo}
										/>
									}
									viewMode="edit"
									addFilterButtonCaption={
										addFilterButtonCaption
									}
									cancelFilterButtonCaption={
										cancelFilterButtonCaption
									}
									isAddFilterButtonEnabled={!hasError}
									onAddFilterButtonClick={handleApplyFilter}
									onCancelFilterButtonClick={onCloseFilter}
								/>
							}
							viewMode="edit"
							onClickOutside={onCloseFilter}
							helpCaption={helpCaption}
							onClose={onCloseFilter}
							horizontal="center"
							vertical="top"
						/>
					)}
				</div>
			</div>
			<div className="kit-date-range__content">
				<label className="kit-date-range__label">{labelLast}</label>
				<RadioButton
					name="date"
					onSelected={handleSelectedLast(LastPeriods.Week)}
					checked={
						value.type === DateRangeValueTypes.Last &&
						value.period === LastPeriods.Week
					}
				>
					{radioTextWeek}
				</RadioButton>
				&nbsp;/&nbsp;
				<RadioButton
					name="date"
					onSelected={handleSelectedLast(LastPeriods.Month)}
					checked={
						value.type === DateRangeValueTypes.Last &&
						value.period === LastPeriods.Month
					}
				>
					{radioTextMonth}
				</RadioButton>
				&nbsp;/&nbsp;
				<RadioButton
					name="date"
					onSelected={handleSelectedLast(LastPeriods.Year)}
					checked={
						value.type === DateRangeValueTypes.Last &&
						value.period === LastPeriods.Year
					}
				>
					{radioTextYear}
				</RadioButton>
			</div>
		</div>
	);
};

export { DateRange };
