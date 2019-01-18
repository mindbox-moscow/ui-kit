import * as React from "react";
import "./TimeField.scss";
import cn from "classnames";

const formatTime = (value: number, min: number, max: number) => {
    let result = value;
    if (result > max) {
        result = min;
    }
    if (result < min) {
        result = max;
    }
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
}

export class TimeField extends React.Component<Props> {
    dropDown: HTMLDivElement;
    minutesInput: HTMLInputElement;
    hoursInput: HTMLInputElement;

    state = {
        hours: this.props.hours || 0,
        minutes: this.props.minutes || 0,
        activeNumber: 0,
        isOpen: false
    };

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleDropDownRef = (ref: HTMLDivElement) => (this.dropDown = ref);

    handleInputKeyDown = (event: any) => {
        const value = parseInt(event.key, 10);
        if (isNaN(value)) {
            return
        }
        const { activeNumber, hours, minutes } = this.state;
        let newMinutes = minutes;
        let newHours = hours;
        let newActiveNumber = activeNumber + 1;

        switch (activeNumber) {
            case 0:
                if (value > 2) {
                    newHours = value;
                    newActiveNumber = 2;
                } else {
                    newHours = value * 10;
                }
                break;

            case 1:
                newHours = hours + value;
                break;

            case 2:
                if (value > 5) {
                    newMinutes = value;
                    newActiveNumber = 0;
                } else {
                    newMinutes = value * 10;
                }
                break;

            case 3:
                newMinutes = minutes + value;
                newActiveNumber = 0

            default:
                break;
        }

        this.setState({
            minutes: newMinutes,
            hours: newHours,
            activeNumber: newActiveNumber,
        });
    }

    handleInputFocus = () => {
        this.setState({ isOpen: true });
    }

    handleClickOutside = (event: MouseEvent) => {
        const target: any = event.target;
        if (!this.dropDown || !this.dropDown.contains(target)) {
            this.setState({ isOpen: false });
        }
    };

    selectHours = (event: any) => {
        const num = parseInt(event.target.innerText);
        this.setState({ isSecondHourActive: true, hours: num });
    };

    selectMinutes = (event: any) => {
        const num = parseInt(event.target.innerText);
        this.setState({ isSecondMinuteActive: true, minutes: num });
    };

    createArrayTime = (value: any) => {
        const numbers = [];
        for (let i = 0; i <= value; i++) {
            if (i < 10) {
                numbers.push(`0${i}`);
            } else numbers.push(`${i}`);
        }

        return numbers;
    };

    handleUp = () => {
        const { minutes, hours } = this.state;

        if (minutes >= 30) {
            this.setState({
                hours: hours === 23 ? 0 : hours + 1,
                minutes: 0,
                activeNumber: 0
            });
        } else {
            this.setState({
                hours,
                minutes: 30,
                activeNumber: 0
            });
        }
    };

    handleDown = () => {
        const { minutes, hours } = this.state;

        if (minutes < 30) {
            this.setState({
                hours: hours === 0 ? 23 : hours - 1,
                minutes: 30,
                activeNumber: 0
            });
        } else {
            this.setState({
                hours,
                minutes: 0,
                activeNumber: 0
            });
        }
    };

    handleWheel = (event: any) => {
        event.preventDefault();
        const { minutes, hours } = this.state;

        if (event.deltaY < 0) {
            const newMinutes = minutes === 59 || minutes === undefined ? 0 : minutes + 1;
            const newHours = minutes === 59 && hours !== undefined ? hours + 1 : hours;
            this.setState({
                minutes: newMinutes,
                hours: newHours === 24 ? 0 : newHours
            });
        } else {
            const newMinutes = minutes === 0 || minutes === undefined ? 59 : minutes - 1;
            const newHours = minutes === 0 && hours !== undefined ? hours - 1 : hours;
            this.setState({
                minutes: newMinutes,
                hours: newHours < 0 ? 23 : newHours
            });
        }
    }

    handleStopScroll = () => (event: MouseEvent) => event.preventDefault();

    handleMouseEnter = () => document.addEventListener('mousewheel', this.handleStopScroll)
    handleMouseLeave = () => document.removeEventListener('mousewheel', this.handleStopScroll)

    public render() {
        const { hours, minutes, isOpen } = this.state;
        const { disabled } = this.props;
        const hoursValue = formatTime(hours, 0, 23);
        const minutesValue = formatTime(minutes, 0, 59);
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
                        className={cn(
                            "kit-time-field",
                            disabled && "kit-time-field_disabled"
                        )}
                        onWheel={this.handleWheel}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    >
                        <div
                            className={cn({
                                "kit-time-field__select": true,
                                "kit-time-field__select_show": isOpen
                            })}
                        />
                        <input
                            type="text"
                            readOnly
                            value={`${hoursValue}:${minutesValue}`}
                            disabled={disabled}
                            onKeyDown={this.handleInputKeyDown}
                            onFocus={this.handleInputFocus}
                            className={cn({
                                "kit-time-field__input": true,
                                "kit-time-field__input_selected": isOpen
                            })}
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
                                                parseInt(item) === hours
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
                                                parseInt(item) === minutes
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
