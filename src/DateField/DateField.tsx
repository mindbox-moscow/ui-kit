import * as React from "react";
import "./DateField.scss";
import cn from "classnames";
import { Icon } from "../Icon/Icon";

interface Props {
	disabled?: boolean;
	defaultDate: Date;
	onChange?: (date: Date) => void;
	noShadow: boolean;
}

interface State {
	isOpenCalendar: boolean;
	activeDate: Date;
	showedDate: Date;
	dateString: string;
}

const controledKeys = {
	arrowLeft: true,
	arrowRight: true,
	Delete: true,
	Backspace: true,
	Tab: true,
	".": true,
	"0": true,
	"1": true,
	"2": true,
	"3": true,
	"4": true,
	"5": true,
	"6": true,
	"7": true,
	"8": true,
	"9": true
};

const monthes = [
	"Янв",
	"Фев",
	"Мар",
	"Апр",
	"Май",
	"Июн",
	"Июл",
	"Авг",
	"Сен",
	"Окт",
	"Ноя",
	"Дек"
];

const formatValue = (value: number) => (value < 10 ? `0${value}` : `${value}`);

export class DateField extends React.Component<Props, State> {
	public wrapper: HTMLElement;
	public state: State;

	constructor(props: Props) {
		super(props);
		const { defaultDate } = props;

		this.state = {
			isOpenCalendar: false,
			activeDate: new Date(defaultDate),
			showedDate: new Date(defaultDate),
			dateString: `${formatValue(defaultDate.getDate())}.${formatValue(
				defaultDate.getMonth() + 1
			)}.${defaultDate.getFullYear()}`
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

	public handleOpen = () => this.setState({ isOpenCalendar: true });

	public handlePrevMonth = () => {
		const oldDate = this.state.showedDate;
		oldDate.setMonth(oldDate.getMonth() - 1);
		this.setState({ showedDate: oldDate });
	};

	public handleNextMonth = () => {
		const oldDate = this.state.showedDate;
		oldDate.setMonth(oldDate.getMonth() + 1);
		this.setState({ showedDate: oldDate });
	};

	public handleChangeYear = (event: any) => {
		const oldDate = this.state.showedDate;
		const value = parseInt(event.target.value, 10);
		oldDate.setFullYear(value);
		this.setState({ showedDate: oldDate });
	};

	public handleChangeMonth = (event: any) => {
		const oldDate = this.state.showedDate;
		const value = parseInt(event.target.value, 10);
		oldDate.setMonth(value);
		this.setState({ showedDate: oldDate });
	};

	public changeActiveDate = (
		year: number,
		month: number,
		date: number
	) => () => {
		const { onChange = () => {} } = this.props;
		const newDate = new Date(year, month, date);
		this.setState({
			dateString: `${formatValue(newDate.getDate())}.${formatValue(
				newDate.getMonth() + 1
			)}.${newDate.getFullYear()}`,
			activeDate: newDate
		});
		onChange(newDate);
	};

	public handleKeyDown = (event: any) => {
		if (!controledKeys[event.key]) {
			event.preventDefault();
		}
	};

	public handleChange = (event: any) => {
		const { onChange = () => {} } = this.props;

		const dateParser = /(\d{2})\.(\d{2})\.(\d{4})/;
		const match = event.target.value.match(dateParser);
		const parsedDate =
			match &&
			new Date(
				parseInt(match[3], 10),
				parseInt(match[2], 10) - 1,
				parseInt(match[1], 10)
			);

		const nowDate = parsedDate || Date.parse(event.target.value);
		const activeDate =
			!nowDate && isNaN(nowDate)
				? this.state.activeDate
				: new Date(nowDate);
		const showedDate =
			!nowDate && isNaN(nowDate)
				? this.state.showedDate
				: new Date(nowDate);

		onChange(activeDate);

		this.setState({
			dateString: event.target.value,
			activeDate,
			showedDate
		});
	};

	public render() {
		const {
			isOpenCalendar,
			activeDate,
			showedDate,
			dateString
		} = this.state;
		const { disabled } = this.props;
		const date = activeDate.getDate();
		const month = activeDate.getMonth();
		const year = activeDate.getFullYear();
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

		return (
			<div
				className={cn(
					"kit-date-field", {
					"kit-date-field_disabled": disabled,
					"kit-date-field_no-shadow": this.props.noShadow
					}
				)}
				onClick={disabled ? () => {} : this.handleOpen}
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
							onClick={this.handlePrevMonth}
							className="kit-date-field__nav"
						/>
						<div>
							<select
								value={nowMonth}
								className="kit-date-field__select"
								onChange={this.handleChangeMonth}
							>
								{monthes.map((item, index) => (
									<option key={index} value={index}>
										{item}
									</option>
								))}
							</select>
							<select
								value={nowYear}
								className="kit-date-field__select"
								onChange={this.handleChangeYear}
							>
								{yearsList.map(item => (
									<option key={item}>{item}</option>
								))}
							</select>
						</div>
						<button
							className="kit-date-field__nav kit-date-field__nav_next"
							type="button"
							onClick={this.handleNextMonth}
						/>
					</div>
					<div className="kit-date-field__calendar">
						<div className="kit-date-field__day">Пн</div>
						<div className="kit-date-field__day">Вт</div>
						<div className="kit-date-field__day">Ср</div>
						<div className="kit-date-field__day">Чт</div>
						<div className="kit-date-field__day">Пт</div>
						<div className="kit-date-field__day">Сб</div>
						<div className="kit-date-field__day">Вс</div>
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
									"kit-date-field__date_current":
										currentDay === day,
									"kit-date-field__date_active":
										activeDay === day
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
