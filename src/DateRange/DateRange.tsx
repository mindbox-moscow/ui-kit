import * as React from "react";
import {
	DateRangeValueTypes,
	IDateRange,
	LastPeriods,
	Props,
	Time
} from "./types";

import { DateField } from "../DateField";
import { FilterConditionEditorComponent } from "../FilterConditionEditorComponent";
import { FilterDetails } from "../FilterDetails";
import { IconSvg } from "../IconSvg";
import { RadioButton } from "../RadioButton";
import { TimeField } from "../TimeField";
import { Tooltip } from "../Tooltip";
import {
	getMinutes,
	getNow,
	getWeekBeforeNow,
	parseDateToString
} from "../utils/helpers";

import { withOutsideClick } from "../HOCs";

import "./DateRange.scss";

const WithOutsideClickFilterDetails = withOutsideClick(FilterDetails);

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
	const minutesFrom = getMinutes(weekBeforeNow);
	const minutesTo = getMinutes(dateNow);

	const [dateFrom, setDateFrom] = React.useState<Date>(weekBeforeNow);
	const [dateTo, setDateTo] = React.useState<Date>(dateNow);
	const [timeFrom, setTimeFrom] = React.useState<Time>(minutesFrom);
	const [timeTo, setTimeTo] = React.useState<Time>(minutesTo);
	const [value, setValue] = React.useState<DateRangeValueTypes | LastPeriods>(
		DateRangeValueTypes.NoFilter
	);
	const [isError, setError] = React.useState<boolean>(false);

	const [dateRange, setDateRange] = React.useState<IDateRange>({
		dateFrom,
		dateTo
	});

	const [prevValue, setPrevValue] = React.useState<
		DateRangeValueTypes | LastPeriods
	>(DateRangeValueTypes.NoFilter);
	const [isShowFilter, setShowFilter] = React.useState<boolean>(false);

	const handleSelectedNoFilter = () => {
		setPrevValue(value);
		setValue(DateRangeValueTypes.NoFilter);
		onChange({ type: DateRangeValueTypes.NoFilter });
	};

	const handleSelectedLast = (currentValue: LastPeriods) => () => {
		setPrevValue(value);
		setValue(currentValue);
		onChange({ type: DateRangeValueTypes.Last, period: currentValue });
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

	const handleChangeDateFrom = (currentDateFrom: Date) => {
		currentDateFrom.setHours(timeFrom.hours);
		currentDateFrom.setMinutes(timeFrom.minutes);
		setDateFrom(currentDateFrom);
	};

	const handleChangeDateTo = (currentDateTo: Date) => {
		currentDateTo.setHours(timeTo.hours);
		currentDateTo.setMinutes(timeTo.minutes);
		setDateTo(currentDateTo);
	};

	const handleChangeTimeFrom = (hours: number, minutes: number) => {
		setTimeFrom({ hours, minutes });
	};

	const handleChangeTimeTo = (hours: number, minutes: number) => {
		setTimeTo({ hours, minutes });
	};

	React.useEffect(
		() => {
			handleChangeDateFrom(dateFrom);
		},
		[timeFrom]
	);

	React.useEffect(
		() => {
			handleChangeDateTo(dateTo);
		},
		[timeTo]
	);

	React.useEffect(
		() => {
			setError(dateFrom >= dateTo);
		},
		[dateFrom, dateTo, timeFrom, timeTo]
	);

	const InnerEditorComponent = () => (
		<div className="kit-date-range__popup">
			<div className="kit-date-range__popup-dates">
				<span className="kit-date-range__popup-date-text">
					{radioConcreteFromText}
				</span>
				<div className="kit-date-range__popup-fields">
					<div className="kit-date-range__popup-date">
						<DateField
							error={isError}
							defaultDate={dateFrom}
							onChange={handleChangeDateFrom}
						/>
					</div>
					<div className="kit-date-range__popup-date">
						<TimeField
							error={isError}
							hours={timeFrom.hours}
							minutes={timeFrom.minutes}
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
							error={isError}
							defaultDate={dateTo}
							onChange={handleChangeDateTo}
						/>
					</div>
					<div className="kit-date-range__popup-date">
						<TimeField
							error={isError}
							hours={timeTo.hours}
							minutes={timeTo.minutes}
							onChange={handleChangeTimeTo}
						/>
					</div>
				</div>
			</div>
			{isError && (
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
									disabledSaveButton={isError}
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
