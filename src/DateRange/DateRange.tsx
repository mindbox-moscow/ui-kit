import * as React from "react";
import {
	DateRangeValue,
	DateRangeValueTypes,
	IDateRange,
	LastPeriods,
	Props
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

const DateRange: React.FC<Props> = ({ onChange, caption, dataRangeValue }) => {
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

	const weekBeforeNow = getWeekBeforeNow();
	const dateNow = getNow();
	const defaultValue = { type: DateRangeValueTypes.NoFilter };

	const [dateFrom, setDateFrom] = React.useState<Date>(weekBeforeNow);
	const [dateTo, setDateTo] = React.useState<Date>(dateNow);
	const [value, setValue] = React.useState<DateRangeValue>(
		dataRangeValue || defaultValue
	);
	const [prevValue, setPrevValue] = React.useState<DateRangeValue>(
		dataRangeValue || defaultValue
	);

	const [hasError, setHasError] = React.useState<boolean>(false);

	const [dateRange, setDateRange] = React.useState<IDateRange>({
		dateFrom,
		dateTo
	});

	const [isShowFilter, setShowFilter] = React.useState<boolean>(false);

	const hoursFrom = dateFrom.getHours();
	const minutesFrom = dateFrom.getMinutes();
	const hoursTo = dateTo.getHours();
	const minutesTo = dateTo.getMinutes();

	const handleSelectedNoFilter = () => {
		setPrevValue(value);
		setValue({ type: DateRangeValueTypes.NoFilter });
		onChange({ type: DateRangeValueTypes.NoFilter });
	};

	const handleSelectedLast = (period: LastPeriods) => () => {
		setPrevValue(value);
		setValue({ type: DateRangeValueTypes.Last, period });
		onChange({ type: DateRangeValueTypes.Last, period });
	};

	const onCloseFilter = () => {
		setShowFilter(false);
		setValue(prevValue);

		setDateFrom(dateRange.dateFrom);
		setDateTo(dateRange.dateTo);
	};

	const handleToggleFilter = () => {
		setPrevValue(value);
		setValue({ type: DateRangeValueTypes.Concrete, dateFrom, dateTo });
		setShowFilter(prev => !prev);
	};

	const handleApplyFilter = () => {
		setShowFilter(false);
		setDateRange({ dateFrom, dateTo });
		onChange({ type: DateRangeValueTypes.Concrete, dateFrom, dateTo });
	};

	const handleChangeDateFrom = (newDateFrom: Date) => {
		const newDate = makeNewDate(newDateFrom, hoursFrom, minutesFrom);
		setDateFrom(newDate);
		setHasError(newDate >= dateTo);
	};

	const handleChangeDateTo = (newDateTo: Date) => {
		const newDate = makeNewDate(newDateTo, hoursTo, minutesTo);
		setDateTo(newDate);
		setHasError(dateFrom >= newDate);
	};

	const handleChangeTimeFrom = (hours: number, minutes: number) => {
		const newDate = makeNewDate(dateFrom, hours, minutes);
		setDateFrom(newDate);
		setHasError(newDate >= dateTo);
	};

	const handleChangeTimeTo = (hours: number, minutes: number) => {
		const newDate = makeNewDate(dateTo, hours, minutes);
		setDateTo(newDate);
		setHasError(dateFrom >= newDate);
	};

	const isLastPeriod = value.type === DateRangeValueTypes.Last;

	console.log(value, "VALUE");

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
						// checked={value.type === DateRangeValueTypes.Concrete}
					>
						{`${radioConcreteFromText} ${parseDateToString(
							dateRange.dateFrom
						)}
					${radioConcreteToText} ${parseDateToString(dateRange.dateTo)}`}
					</RadioButton>

					{isShowFilter && (
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
					checked={isLastPeriod && value.period === LastPeriods.Week}
				>
					{radioTextWeek}
				</RadioButton>
				&nbsp;/&nbsp;
				<RadioButton
					name="date"
					onSelected={handleSelectedLast(LastPeriods.Month)}
					// checked={value.period === LastPeriods.Month}
				>
					{radioTextMonth}
				</RadioButton>
				&nbsp;/&nbsp;
				<RadioButton
					name="date"
					onSelected={handleSelectedLast(LastPeriods.Year)}
					// checked={value.period === LastPeriods.Year}
				>
					{radioTextYear}
				</RadioButton>
			</div>
		</div>
	);
};

export default DateRange;
