import * as React from "react";
import "./TimeField.scss";
import cn from "classnames";

const timeRange = (value: number, min: number, max: number) => {
    let result = value;
    if (result > max) {
        result = max;
    }
    if (result < min) {
        result = min;
    }
    return result;
}

const formatTime = (value: number, min: number, max: number) => {
    let result = timeRange(value, min, max);
    if (result < 10) {
        return `0${result}`;
    }
    return `${result}`;
};

const stringTime = (hours: number | undefined, minutes: number | undefined) => {
    return `${formatTime(hours || 0, 0, 23)}:${formatTime(minutes || 0, 0, 59)}`;
};

interface Props {
    hours?: number;
    minutes?: number;
    disabled?: boolean;
    onChange?: (hours: number, minutes: number) => void;
}

export class TimeField extends React.Component<Props> {
    dropDown: HTMLDivElement;
    hoursList: HTMLUListElement;
    minutesList: HTMLUListElement;
    input: HTMLInputElement;

    state = {
        hours: this.props.hours || 0,
        minutes: this.props.minutes || 0,
        isOpen: false,
        allowScroll: false,
        stringValue: stringTime(this.props.hours, this.props.minutes),
    };

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    componentDidUpdate = () => {
        const { allowScroll, isOpen, hours, minutes } = this.state;

        if (this.hoursList && isOpen && allowScroll) {
            this.hoursList.scrollTo(0, 24 * hours - 144);
        }

        if (this.minutesList && isOpen && allowScroll) {
            this.minutesList.scrollTo(0, 24 * minutes - 144);
        }
    }

    handleMinutesListRef = (ref: HTMLUListElement) => (this.minutesList = ref);

    handleHoursListRef = (ref: HTMLUListElement) => (this.hoursList = ref);

    handleInputRef = (ref: HTMLInputElement) => (this.input = ref);

    handleDropDownRef = (ref: HTMLDivElement) => (this.dropDown = ref);

    handleInputChange = (event: any) => {
        const { onChange = () => { } } = this.props;
        const { value } = event.target;
        const newValue = value.length > 5 ? value.substr(0, 5) : value;
        const { hours, minutes } = this.state;
        let newHours = hours;
        let newMinutes = minutes;

        if (newValue.indexOf(':')) {
            const times = newValue.split(':');
            newHours = parseInt(times[0], 10);
            newMinutes = parseInt(times[1], 10);
        } else {
            newHours = parseInt(newValue, 10);
        }
        newHours = isNaN(newHours) ? 0 : timeRange(newHours, 0, 23);
        newMinutes = isNaN(newMinutes) ? 0 : timeRange(newMinutes, 0, 59);

        this.setState({
            stringValue: newValue,
            hours: newHours,
            minutes: newMinutes,
            allowScroll: true,
        })
        onChange(newHours, newMinutes);
    }

    handleInputFocus = () => {
        if (!this.state.isOpen) {
            this.setState({ isOpen: true, allowScroll: false });
            this.input.setSelectionRange(0, 5);
        }
    }

    handleClickOutside = (event: MouseEvent) => {
        const target: any = event.target;
        if (!this.dropDown || !this.dropDown.contains(target)) {
            this.setState({ isOpen: false, allowScroll: false });
        }
    };

    selectHours = (event: any) => {
        const { onChange = () => { } } = this.props;
        const { minutes } = this.state;
        const num = parseInt(event.target.innerText);
        this.setState({
            hours: num,
            stringValue: stringTime(num, minutes),
            allowScroll: false,
        });
        onChange(num, minutes);
    };

    selectMinutes = (event: any) => {
        const { onChange = () => { } } = this.props;
        const { hours } = this.state;
        const num = parseInt(event.target.innerText);
        this.setState({
            minutes: num,
            stringValue: stringTime(hours, num),
            allowScroll: false,
        });
        onChange(hours, num);
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
        const { onChange = () => { } } = this.props;

        if (minutes >= 30) {
            const h = hours === 23 ? 0 : hours + 1;
            this.setState({
                hours: h,
                minutes: 0,
                stringValue: stringTime(h, 0),
                allowScroll: true,
            });
            onChange(h, 0);
        } else {
            this.setState({
                hours,
                minutes: 30,
                stringValue: stringTime(hours, 30),
                allowScroll: true,
            });
            onChange(hours, 30);
        }
    };

    handleDown = () => {
        const { minutes, hours } = this.state;
        const { onChange = () => { } } = this.props;

        if (minutes < 30) {
            const h = hours === 0 ? 23 : hours - 1;
            this.setState({
                hours: h,
                minutes: 30,
                stringValue: stringTime(h, 30),
                allowScroll: true,
            });
            onChange(h, 30);
        } else {
            this.setState({
                hours,
                minutes: 0,
                stringValue: stringTime(hours, 0),
                allowScroll: true,
            });
            onChange(hours, 0);
        }
    };

    handleWheel = (event: any) => {
        event.preventDefault();
        const { minutes, hours } = this.state;
        const { onChange = () => { } } = this.props;

        if (event.deltaY < 0) {
            const newMinutes = minutes === 59 || minutes === undefined ? 0 : minutes + 1;
            const newHours = minutes === 59 && hours !== undefined ? hours + 1 : hours;
            const h = newHours === 24 ? 0 : newHours;
            this.setState({
                minutes: newMinutes,
                hours: h,
                stringValue: stringTime(h, newMinutes),
                allowScroll: true,
            });
            onChange(h, newMinutes);
        } else {
            const newMinutes = minutes === 0 || minutes === undefined ? 59 : minutes - 1;
            const newHours = minutes === 0 && hours !== undefined ? hours - 1 : hours;
            const h = newHours < 0 ? 23 : newHours;
            this.setState({
                minutes: newMinutes,
                hours: h,
                stringValue: stringTime(h, newMinutes),
                allowScroll: true,
            });
            onChange(h, newMinutes);
        }
    }

    handleStopScroll = () => (event: MouseEvent) => event.preventDefault();

    handleMouseEnter = () => document.addEventListener('mousewheel', this.handleStopScroll)
    handleMouseLeave = () => document.removeEventListener('mousewheel', this.handleStopScroll)

    public render() {
        const { hours, minutes, isOpen, stringValue } = this.state;
        const { disabled } = this.props;
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
                        <input
                            type="text"
                            ref={this.handleInputRef}
                            value={stringValue}
                            disabled={disabled}
                            onChange={this.handleInputChange}
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
