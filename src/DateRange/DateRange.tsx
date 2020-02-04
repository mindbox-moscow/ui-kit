import * as React from "react";
import { DateRangeValueTypes, IDateRange, LastPeriods, Props } from "./types";

import { DateField } from "../DateField";
import { FilterConditionEditorComponent } from "../FilterConditionEditorComponent";
import { FilterDetails } from "../FilterDetails";
import { IconSvg } from "../IconSvg";
import { RadioButton } from "../RadioButton";
import { TimeField } from "../TimeField";
import { Tooltip } from "../Tooltip";
import { getNow, getWeekBeforeNow, parseDateToString } from "../utils/helpers";

import { withOutsideClick } from "../HOCs";

import "./DateRange.scss";

const WithOutsideClickFilterDetails = withOutsideClick(FilterDetails);

const makeNewDate = (date: Date, hours: number, minutes: number) => {
	const newDate = new Date(date);
	newDate.setHours(hours);
	newDate.setMinutes(minutes);

	return newDate;
};

const DateRange: React.FC<Props> = ({
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
	onChange,
	addFilterButtonCaption,
	cancelFilterButtonCaption
}) => {
	const weekBeforeNow = getWeekBeforeNow();
	const dateNow = getNow();

	const [dateFrom, setDateFrom] = React.useState<Date>(weekBeforeNow);
	const [dateTo, setDateTo] = React.useState<Date>(dateNow);
	const [value, setValue] = React.useState<DateRangeValueTypes | LastPeriods>(
		DateRangeValueTypes.NoFilter
	);
	const [prevValue, setPrevValue] = React.useState<
		DateRangeValueTypes | LastPeriods
	>(DateRangeValueTypes.NoFilter);

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
		setValue(DateRangeValueTypes.NoFilter);
		onChange({ type: DateRangeValueTypes.NoFilter });
	};

	const handleSelectedLast = (period: LastPeriods) => () => {
		setPrevValue(value);
		setValue(period);
		onChange({ type: DateRangeValueTypes.Last, period });
	};

	const onCloseFilter = () => {
		setShowFilter(false);
		setValue(prevValue);

		setDateFrom(dateRange.dateFrom);
		setDateTo(dateRange.dateTo);
	};

	const handleToggleFilter = (currentValue: DateRangeValueTypes) => () => {
		setPrevValue(value);
		setValue(currentValue);
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

	const InnerEditorComponent = () => (
		<div className="kit-date-range__popup">
			<div className="kit-date-range__popup-dates">
				<span className="kit-date-range__popup-date-text">
					{radioConcreteFromText}
				</span>
				<div className="kit-date-range__popup-fields">
					<div className="kit-date-range__popup-date">
						<DateField
							error={hasError}
							defaultDate={dateFrom}
							onChange={handleChangeDateFrom}
						/>
					</div>
					<div className="kit-date-range__popup-date">
						<TimeField
							error={hasError}
							hours={hoursFrom}
							minutes={minutesFrom}
							onChange={handleChangeTimeFrom}
						/>
					</div>
				</div>
			</div>
			<div className="kit-date-range__popup-dates">
				<span className="kit-date-range__popup-date-text">
					{radioConcreteToText}
				</span>
				<div className="kit-date-range__popup-fields">
					<div className="kit-date-range__popup-date">
						<DateField
							error={hasError}
							defaultDate={dateTo}
							onChange={handleChangeDateTo}
						/>
					</div>
					<div className="kit-date-range__popup-date">
						<TimeField
							error={hasError}
							hours={hoursTo}
							minutes={minutesTo}
							onChange={handleChangeTimeTo}
						/>
					</div>
				</div>
			</div>
			{hasError && (
				<Tooltip
					title={<IconSvg type="warning" />}
					position="top"
					className="kit-date-range__popup-tooltip"
				>
					{tooltipContent}
				</Tooltip>
			)}
		</div>
	);

	return (
		<div className="kit-date-range">
			<div className="kit-date-range__content">
				<label className="kit-date-range__label">{labelNoFilter}</label>
				<RadioButton
					name="date"
					onSelected={handleSelectedNoFilter}
					checked={value === DateRangeValueTypes.NoFilter}
				>
					{radioTextNoFilter}
				</RadioButton>
			</div>
			<div className="kit-date-range__content">
				<label className="kit-date-range__label">{labelConcrete}</label>
				<div className="kit-date-range__radio-button">
					<RadioButton
						name="date"
						onClick={handleToggleFilter(
							DateRangeValueTypes.Concrete
						)}
						checked={value === DateRangeValueTypes.Concrete}
					>
						{`${radioConcreteFromText} ${parseDateToString(
							dateRange.dateFrom
						)}
					${radioConcreteToText} ${parseDateToString(dateRange.dateTo)}`}
					</RadioButton>

					{isShowFilter && (
						<WithOutsideClickFilterDetails
							editorComponent={
								<FilterConditionEditorComponent
									innerEditorComponent={
										<InnerEditorComponent />
									}
									viewMode="edit"
									addFilterButtonCaption={
										addFilterButtonCaption
									}
									cancelFilterButtonCaption={
										cancelFilterButtonCaption
									}
									isAddFilterButtonEnabled={true}
									disabledSaveButton={hasError}
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
					checked={value === LastPeriods.Week}
				>
					{radioTextWeek}
				</RadioButton>
				&nbsp;/&nbsp;
				<RadioButton
					name="date"
					onSelected={handleSelectedLast(LastPeriods.Month)}
					checked={value === LastPeriods.Month}
				>
					{radioTextMonth}
				</RadioButton>
				&nbsp;/&nbsp;
				<RadioButton
					name="date"
					onSelected={handleSelectedLast(LastPeriods.Year)}
					checked={value === LastPeriods.Year}
				>
					{radioTextYear}
				</RadioButton>
			</div>
		</div>
	);
};

export default DateRange;
