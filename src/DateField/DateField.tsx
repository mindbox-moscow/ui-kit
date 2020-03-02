import cn from "classnames";
import * as React from "react";
import { Icon } from "../Icon/Icon";
import { parseDateToString } from "../utils/helpers";
import { controledKeys } from "./consts";
import "./DateField.scss";

export type Months = [string, string, string, string, string, string, string, string, string, string, string, string];
export type Days = [string, string, string, string, string, string, string];

enum DateType {
	Month,
	Year,
};

enum Direction {
	Next = 1,
	Prev  = -1,
};

interface IProps {
	disabled?: boolean;
	value?: Date;
	months: Months;
	days: Days;
	onChange: (date: Date) => void;
	noShadow?: boolean;
	error?: boolean;
}

interface IState {
	isOpenCalendar: boolean;
	showedDate: Date;
	dateString: string;
}

export class DateField extends React.Component<IProps, IState> {
	public wrapper: HTMLElement;

	constructor(props: IProps) {
		super(props);
		const { value } = props;

		this.state = {
			dateString: value ? parseDateToString(value) : '',
			isOpenCalendar: false,
			showedDate: value ? new Date(value) : new Date(),
		};
	}

	public componentDidMount() {
		document.addEventListener("click", this.handleClickOutside);
	}

	public componentWillUnmount() {
		document.removeEventListener("click", this.handleClickOutside);
	}

	public handleWrapperRef = (ref: HTMLDivElement) => (this.wrapper = ref);

	public handleClickOutside = (event: MouseEvent) => {
		const target: any = event.target;
		if (!this.wrapper || !this.wrapper.contains(target)) {
			this.setState({ isOpenCalendar: false });
		}
	};

	public handleOpen = () => {
		if (!this.props.disabled) {
			this.setState({ isOpenCalendar: true })
		}
	};

	public handleChangeCurrentMonth = (direction: Direction) => () => {
		const oldDate = new Date(this.state.showedDate);
		oldDate.setMonth(oldDate.getMonth() + direction);
		this.setState({ showedDate: oldDate });
	};

	public handleSelectDate = (type: DateType) => (event: React.ChangeEvent<HTMLSelectElement>) => {
		const oldDate = new Date(this.state.showedDate);
		const value = parseInt(event.target.value, 10);
		if (type === DateType.Month) {
			oldDate.setMonth(value);
		} else {
			oldDate.setFullYear(value);
		}
		this.setState({ showedDate: oldDate });
	};

	public changeActiveDate = (
		year: number,
		month: number,
		date: number
	) => () => {
		const { onChange } = this.props;
		const newDate = new Date(year, month, date);
		this.setState({
			dateString: parseDateToString(newDate),
		});
		onChange(newDate);
	};

	public handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
		if (!controledKeys[evt.key]) {
			evt.preventDefault();
		}
	};

	public handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { value, onChange } = this.props;

		const dateParser = /(\d{2})\.(\d{2})\.(\d{4})/;
		const match = evt.target.value.match(dateParser);
		const parsedDate =
			match &&
			new Date(
				parseInt(match[3], 10),
				parseInt(match[2], 10) - 1,
				parseInt(match[1], 10)
			);

		const nowDate = parsedDate || Date.parse(evt.target.value);
		const activeDate =
			!nowDate && isNaN(nowDate)
				? value && new Date(value)
				: new Date(nowDate);
		const showedDate =
			!nowDate && isNaN(nowDate)
				? new Date(this.state.showedDate)
				: new Date(nowDate);

		onChange(activeDate || showedDate);

		this.setState({
			dateString: evt.target.value,
			showedDate
		});
	};


	public render() {
		const {
			isOpenCalendar,
			showedDate,
			dateString,
		} = this.state;
		const { disabled, value, noShadow, error, months, days } = this.props;
		const date = value && value.getDate();
		const month = value && value.getMonth();
		const year = value && value.getFullYear();
		const nowYear = showedDate.getFullYear();
		const nowMonth = showedDate.getMonth();
		const lastShow = new Date(nowYear, nowMonth, 32);
		const lastDate = 32 - lastShow.getDate();
		const yearsList = [];
		const daysList = [];
		const beforeDaysList = [];
		const afterDaysList = [];
		const firstDay = new Date(nowYear, nowMonth, 0).getDay();
		const lastDay = new Date(nowYear, nowMonth, lastDate).getDay();
		const firstDayFormat = firstDay === 0 ? 6 : firstDay - 1;
		const lastDayFormat = lastDay === 0 ? 6 : lastDay - 1;
		const lastDateBefore =
			32 - new Date(nowYear, nowMonth - 1, 32).getDate();
		const today = new Date();
		const todayYear = today.getFullYear();

		const activeDay = year === nowYear && month === nowMonth && date;
		const currentDay =
			todayYear === nowYear &&
			today.getMonth() === nowMonth &&
			today.getDate();

		for (let y = todayYear - 50; y <= todayYear + 50; y++) {
			yearsList.push(y);
		}

		for (let d = 1; d <= lastDate; d++) {
			daysList.push(d);
		}

		if (firstDayFormat !== 6) {
			for (let d = firstDayFormat; d >= 0; d--) {
				beforeDaysList.push(lastDateBefore - d);
			}
		}

		for (let d = 1; d < 7 - lastDayFormat; d++) {
			afterDaysList.push(d);
		}
		const handleNextMonth = this.handleChangeCurrentMonth(Direction.Next);
		const handlePrevMonth = this.handleChangeCurrentMonth(Direction.Prev);

		const handleChangeMonth = this.handleSelectDate(DateType.Month);
		const handleChangeYear = this.handleSelectDate(DateType.Year);

		return (
			<div
				className={cn("kit-date-field", {
					"kit-date-field_disabled": disabled,
					"kit-date-field_error": error,
					"kit-date-field_no-shadow": noShadow,
				})}
				onClick={this.handleOpen}
				ref={this.handleWrapperRef}
			>
				<input
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
					type="text"
					className="kit-date-field__input"
					disabled={disabled}
					value={dateString}
				/>
				<div className="kit-date-field__icon">
					<Icon icon="calendar" />
				</div>

				<div
					className={cn(
						"kit-date-field__drop",
						isOpenCalendar && "kit-date-field__drop_open"
					)}
				>
					<div className="kit-date-field__head">
						<button
							type="button"
							onClick={handlePrevMonth}
							className="kit-date-field__nav"
						/>
						<div>
							<select
								value={nowMonth}
								className="kit-date-field__select"
								onChange={handleChangeMonth}
							>
								{months.map((item, index) => (
									<option key={index} value={index}>
										{item}
									</option>
								))}
							</select>
							<select
								value={nowYear}
								className="kit-date-field__select"
								onChange={handleChangeYear}
							>
								{yearsList.map(item => (
									<option key={item}>{item}</option>
								))}
							</select>
						</div>
						<button
							className="kit-date-field__nav kit-date-field__nav_next"
							type="button"
							onClick={handleNextMonth}
						/>
					</div>
					<div className="kit-date-field__calendar">
						{days.map(item => <div className="kit-date-field__day" key={item}>{item}</div>)}
						{beforeDaysList.map((day, index) => (
							<div
								key={index}
								className="kit-date-field__date date-field__date_old"
							>
								{day}
							</div>
						))}
						{daysList.map((day, index) => (
							<div
								key={index}
								className={cn("kit-date-field__date", {
									"kit-date-field__date_active":
										activeDay === day,
									"kit-date-field__date_current":
										currentDay === day,
								})}
								onClick={this.changeActiveDate(
									nowYear,
									nowMonth,
									day
								)}
							>
								{day}
							</div>
						))}
						{afterDaysList.map((day, index) => (
							<div
								key={index}
								className="kit-date-field__date date-field__date_old"
							>
								{day}
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
