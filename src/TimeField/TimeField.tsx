import * as React from "react";
import cn from "classnames";

import "./TimeField.scss";

const timeRange = (value: number, min: number, max: number) => {
	let result = value;
	if (result > max) {
		result = max;
	}
	if (result < min) {
		result = min;
	}
	return result;
};

const formatTime = (value: number, min: number, max: number) => {
	const result = timeRange(value, min, max);
	if (result < 10) {
		return `0${result}`;
	}
	return `${result}`;
};

interface Props {
	hours?: number;
	minutes?: number;
	disabled?: boolean;
	onChange?: (hours: number, minutes: number) => void;
	noShadow?: boolean;
	error?: boolean;
}

export class TimeField extends React.Component<Props> {
	public dropDown: HTMLDivElement;
	public hoursList: HTMLUListElement;
	public minutesList: HTMLUListElement;
	public input: HTMLInputElement;
	public selection: Array<number | null> = [0, 5];

	public state = {
		hours: this.props.hours || 0,
		minutes: this.props.minutes || 0,
		isOpen: false,
		allowScroll: false
	};

	public componentDidMount() {
		document.addEventListener("click", this.handleClickOutside);
	}

	public componentWillUnmount() {
		document.removeEventListener("click", this.handleClickOutside);
	}

	// componentDidUpdate = () => {
	//     const { allowScroll, isOpen, hours, minutes, selection } = this.state;

	//     if (this.hoursList && isOpen && allowScroll) {
	//         this.hoursList.scrollTo(0, 24 * hours - 144);
	//     }

	//     if (this.minutesList && isOpen && allowScroll) {
	//         this.minutesList.scrollTo(0, 24 * minutes - 144);
	//     }
	//     this.input.setSelectionRange(selection[0], selection[1]);

	// }

	public handleMinutesListRef = (ref: HTMLUListElement) =>
		(this.minutesList = ref);

	public handleHoursListRef = (ref: HTMLUListElement) =>
		(this.hoursList = ref);

	public handleInputRef = (ref: HTMLInputElement) => (this.input = ref);

	public handleDropDownRef = (ref: HTMLDivElement) => (this.dropDown = ref);

	public handleKeyDown = (event: any) => {
		const { selectionStart, selectionEnd } = this.input;
		const { onChange = () => {} } = this.props;
		const { hours, minutes } = this.state;
		let newHours = hours;
		let newMinutes = minutes;
		let newSelection = [selectionStart, selectionEnd];
		const { key } = event;
		const numberField = parseInt(key, 10);

		if (key === "Backspace") {
			if (selectionStart === 1) {
				newHours = hours % 10;
				newSelection = [0, 0];
			}
			if (selectionStart === 2 || selectionStart === 3) {
				newHours = Math.floor(hours / 10) * 10;
				newSelection = [1, 1];
			}
			if (selectionStart === 4) {
				newMinutes = minutes % 10;
				newSelection = [3, 3];
			}
			if (selectionStart === 5) {
				newMinutes = Math.floor(minutes / 10) * 10;
				newSelection = [4, 4];
			}
		} else if (key === "Delete") {
			if (selectionStart === 0) {
				newHours = hours % 10;
				newSelection = [1, 1];
			}
			if (selectionStart === 1) {
				newHours = Math.floor(hours / 10) * 10;
				newSelection = [2, 2];
			}
			if (selectionStart === 2 || selectionStart === 3) {
				newMinutes = minutes % 10;
				newSelection = [4, 4];
			}
			if (selectionStart === 4) {
				newMinutes = Math.floor(minutes / 10) * 10;
				newSelection = [5, 5];
			}
		} else if (!isNaN(numberField)) {
			if (selectionStart === 0) {
				newHours = numberField * 10 + (hours % 10);
				newSelection = [1, 1];
				if (newHours > 23) {
					newHours = numberField;
					newSelection = [2, 2];
				}
			}
			if (selectionStart === 1) {
				newHours = Math.floor(hours / 10) * 10 + numberField;
				newSelection = [2, 2];
				if (newHours > 23) {
					newHours = 23;
				}
			}
			if (selectionStart === 2 || selectionStart === 3) {
				newMinutes = numberField * 10 + (minutes % 10);
				newSelection = [4, 4];
				if (newMinutes > 59) {
					newMinutes = numberField;
					newSelection = [5, 5];
				}
			}
			if (selectionStart === 4) {
				newMinutes = Math.floor(minutes / 10) * 10 + numberField;
				newSelection = [5, 5];
				if (newMinutes > 59) {
					newMinutes = 59;
				}
			}
		} else if (key === "ArrowUp") {
			this.handleUp();
			return;
		} else if (key === "ArrowDown") {
			this.handleDown();
			return;
		} else if (key === "ArrowLeft") {
			const s = selectionStart ? selectionStart - 1 : 0;
			newSelection = [s, s];
		} else if (key === "ArrowRight") {
			const s =
				selectionStart !== null && selectionStart < 5
					? selectionStart + 1
					: 5;
			newSelection = [s, s];
		}

		this.setState(
			{
				hours: newHours,
				minutes: newMinutes
			},
			() => {
				this.input.setSelectionRange(
					newSelection[0] || 0,
					newSelection[1] || 0
				);
			}
		);
		this.selection = newSelection;
		onChange(newHours, newMinutes);

		event.preventDefault();
	};

	public handleKeyUp = (event: any) => {
		event.target.setSelectionRange(this.selection[0], this.selection[1]);
	};

	public handleInputFocus = () => {
		if (!this.state.isOpen) {
			this.setState({ isOpen: true, allowScroll: false });
		}
	};

	public handleClickOutside = (event: MouseEvent) => {
		const target: any = event.target;
		if (!this.dropDown || !this.dropDown.contains(target)) {
			this.setState({ isOpen: false, allowScroll: false });
		}
	};

	public selectHours = (event: any) => {
		const { onChange = () => {} } = this.props;
		const { minutes } = this.state;
		const num = parseInt(event.target.innerText, 10);
		this.setState({
			hours: num,
			allowScroll: false
		});
		onChange(num, minutes);
	};

	public selectMinutes = (event: any) => {
		const { onChange = () => {} } = this.props;
		const { hours } = this.state;
		const num = parseInt(event.target.innerText, 10);
		this.setState({
			minutes: num,
			allowScroll: false
		});
		onChange(hours, num);
	};

	public createArrayTime = (value: any) => {
		const numbers = [];
		for (let i = 0; i <= value; i++) {
			if (i < 10) {
				numbers.push(`0${i}`);
			} else {
				numbers.push(`${i}`);
			}
		}

		return numbers;
	};

	public handleUp = () => {
		const { minutes, hours } = this.state;
		const { onChange = () => {} } = this.props;

		if (minutes >= 30) {
			const h = hours === 23 ? 0 : hours + 1;
			this.setState({
				hours: h,
				minutes: 0,
				allowScroll: true
			});
			onChange(h, 0);
		} else {
			this.setState({
				hours,
				minutes: 30,
				allowScroll: true
			});
			onChange(hours, 30);
		}
	};

	public handleDown = () => {
		const { minutes, hours } = this.state;
		const { onChange = () => {} } = this.props;

		if (minutes < 30) {
			const h = hours === 0 ? 23 : hours - 1;
			this.setState({
				hours: h,
				minutes: 30,
				allowScroll: true
			});
			onChange(h, 30);
		} else {
			this.setState({
				hours,
				minutes: 0,
				allowScroll: true
			});
			onChange(hours, 0);
		}
	};

	public handleWheel = (event: any) => {
		event.preventDefault();
		const { minutes, hours } = this.state;
		const { onChange = () => {} } = this.props;

		if (event.deltaY < 0) {
			const newMinutes =
				minutes === 59 || minutes === undefined ? 0 : minutes + 1;
			const newHours =
				minutes === 59 && hours !== undefined ? hours + 1 : hours;
			const h = newHours === 24 ? 0 : newHours;
			this.setState({
				minutes: newMinutes,
				hours: h,
				allowScroll: true
			});
			onChange(h, newMinutes);
		} else {
			const newMinutes =
				minutes === 0 || minutes === undefined ? 59 : minutes - 1;
			const newHours =
				minutes === 0 && hours !== undefined ? hours - 1 : hours;
			const h = newHours < 0 ? 23 : newHours;
			this.setState({
				minutes: newMinutes,
				hours: h,
				allowScroll: true
			});
			onChange(h, newMinutes);
		}
	};

	public handleStopScroll = () => (event: MouseEvent) =>
		event.preventDefault();

	public handleMouseEnter = () =>
		document.addEventListener("mousewheel", this.handleStopScroll);
	public handleMouseLeave = () =>
		document.removeEventListener("mousewheel", this.handleStopScroll);

	public render() {
		const { hours, minutes, isOpen } = this.state;
		const { disabled, noShadow, error } = this.props;
		return (
			<div
				className="kit-time-field__outer"
				ref={this.handleDropDownRef}
				onClick={this.handleInputFocus}
			>
				<div
					className={cn(
						"kit-time-field_wrapper",
						isOpen && "kit-time-field_wrapper-open"
					)}
				>
					<div
						className={cn("kit-time-field", {
							"kit-time-field_disabled": disabled,
							"kit-time-field_no-shadow": noShadow,
							"kit-time-field_error": error
						})}
						onWheel={this.handleWheel}
						onMouseEnter={this.handleMouseEnter}
						onMouseLeave={this.handleMouseLeave}
					>
						<input
							type="text"
							ref={this.handleInputRef}
							onChange={() => {}}
							onKeyUp={this.handleKeyUp}
							value={`${formatTime(hours, 0, 23)}:${formatTime(
								minutes,
								0,
								59
							)}`}
							disabled={disabled}
							onKeyDown={this.handleKeyDown}
							onFocus={this.handleInputFocus}
							className="kit-time-field__input"
						/>
						<div className="kit-time-field__controls">
							<button
								className="kit-time-field__button"
								type="button"
								onClick={this.handleUp}
								disabled={disabled}
							>
								<span className="kit-time-field__arrow" />
							</button>
							<button
								className="kit-time-field__button"
								type="button"
								onClick={this.handleDown}
								disabled={disabled}
							>
								<span
									className={cn(
										"kit-time-field__arrow",
										"kit-time-field__arrow_down"
									)}
								/>
							</button>
						</div>
					</div>
				</div>
				{isOpen && (
					<div className="kit-time-field__drop-down">
						<ul
							onMouseEnter={this.handleMouseEnter}
							onMouseLeave={this.handleMouseLeave}
							className="kit-time-field__drop-down_list"
							ref={this.handleHoursListRef}
						>
							{this.createArrayTime(23).map((item, index) => (
								<li
									key={index}
									onClick={this.selectHours}
									className="kit-time-field__drop-wrapper"
								>
									<button
										className={cn({
											["kit-time-field__drop-down_item"]: true,
											["kit-time-field__drop-down_item-selected"]:
												parseInt(item, 10) === hours
										})}
									>
										{item}
									</button>
								</li>
							))}
						</ul>
						<ul
							className="kit-time-field__drop-down_list"
							onMouseEnter={this.handleMouseEnter}
							onMouseLeave={this.handleMouseLeave}
							ref={this.handleMinutesListRef}
						>
							{this.createArrayTime(59).map((item, index) => (
								<li
									key={index}
									onClick={this.selectMinutes}
									className="kit-time-field__drop-wrapper"
								>
									<button
										className={cn({
											["kit-time-field__drop-down_item"]: true,
											["kit-time-field__drop-down_item-selected"]:
												parseInt(item, 10) === minutes
										})}
									>
										{item}
									</button>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		);
	}
}
