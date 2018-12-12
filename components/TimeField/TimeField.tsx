import * as React from "react";
import './TimeField.scss';
import cn from 'classnames';

const formatTime = (value: number, min: number, max: number) => {
    let result = value;
    if (result > max) {
        result = min
    }
    if (result < min) {
        result = max
    }
    if (value < 10) {
        return `0${result}`
    }
    return `${result}`
}

interface Props {
    hours?: number;
    minutes?: number;
    disabled?: boolean;
    onChange?: (time: number) => void;
}

export class TimeField extends React.Component<Props> {
    minutesInput: HTMLInputElement;
    hoursInput: HTMLInputElement;
    state = {
        hours: this.props.hours || 0,
        minutes: this.props.minutes || 0,
        isSecondHourActive: false,
        isSecondMinuteActive: false,
        isActiveMinutes: false
    };

    handleMinutesRef = (ref: HTMLInputElement) => this.minutesInput = ref;
    handleHoursRef = (ref: HTMLInputElement) => this.hoursInput = ref;

    handleChange = (hours: number, minutes: number) => {
        if (this.props.onChange) {
            this.props.onChange(hours * 3600 + minutes * 60)
        }
    }

    handleChangeHours = (event: any) => {
        const { isSecondHourActive, hours, minutes } = this.state;
        const keyValue = parseInt(event.key, 10);
        if (isNaN(keyValue)) {
            return;
        }
        if (isSecondHourActive) {
            this.setState({
                hours: keyValue + hours * 10,
                isSecondHourActive: false,
                isSecondMinuteActive: false
            }, () => {
                this.handleChange(keyValue + hours * 10, minutes);
                this.minutesInput.focus();
            });
        } else {
            if (keyValue > 2) {
                this.setState({
                    hours: keyValue,
                    isSecondMinuteActive: false
                }, () => {
                    this.handleChange(keyValue, minutes);
                    this.minutesInput.focus();
                });
            } else {
                this.setState({
                    hours: keyValue,
                    isSecondHourActive: true,
                    isSecondMinuteActive: false
                }, () => {
                    this.handleChange(keyValue, minutes);
                    this.hoursInput.focus();
                });
            }
        }
    }

    handleChangeMinutes = (event: any) => {
        const { isSecondMinuteActive, minutes, hours } = this.state;
        const keyValue = parseInt(event.key, 10);
        if (isNaN(keyValue)) {
            return;
        }
        if (isSecondMinuteActive) {
            this.setState({
                minutes: keyValue + minutes * 10,
                isSecondMinuteActive: false,
                isSecondHourActive: false,
            }, () => {
                this.handleChange(hours, keyValue + minutes * 10);
                this.minutesInput.focus();
            });
        } else {
            if (keyValue > 5) {
                this.setState({
                    minutes: keyValue,
                    isSecondHourActive: false,
                }, () => {
                    this.handleChange(hours, keyValue);
                    this.minutesInput.focus();
                });
            } else {
                this.setState({
                    minutes: keyValue,
                    isSecondMinuteActive: true,
                    isSecondHourActive: false,
                }, () => {
                    this.handleChange(hours, keyValue);
                    this.minutesInput.focus();
                });
            }
        }
    }

    handleMinutesFocus = () => this.setState({isActiveMinutes: true})

    handleHoursFocus = () => this.setState({isActiveMinutes: false})

    handleUp = () => {
        const { isActiveMinutes, minutes, hours } = this.state;

        if (isActiveMinutes) {
            const newMinutes = minutes + 1 > 59 ? 0 : minutes + 1
            this.setState({ minutes: newMinutes })
        } else {
            const newHours = hours + 1 > 23 ? 0 : hours + 1
            this.setState({ hours: newHours })
        }
    }

    handleDown = () => {
        const { isActiveMinutes, minutes, hours } = this.state;

        if (isActiveMinutes) {
            const newMinutes = minutes <= 0 ? 59 : minutes - 1
            this.setState({ minutes: newMinutes })
        } else {
            const newHours = hours <= 0 ? 23 : hours - 1
            this.setState({ hours: newHours })
        }
    }

    public render() {
        const { hours, minutes } = this.state
        const { disabled } = this.props
        const hoursValue = formatTime(hours, 0, 23);
        const minutesValue = formatTime(minutes, 0, 59);
        return (
            <div className={cn('time-field', disabled && 'time-field_disabled')}>
                <input
                    onFocus={this.handleHoursFocus}
                    onChange={() => {}}
                    ref={this.handleHoursRef}
                    type='text'
                    className='time-field__input'
                    value={hoursValue}
                    disabled={disabled}
                    onKeyDown={this.handleChangeHours}
                />
                <span className='time-field__dots'>:</span>
                <input
                    onFocus={this.handleMinutesFocus}
                    onChange={() => {}}
                    ref={this.handleMinutesRef}
                    type='text'
                    disabled={disabled}
                    className={cn('time-field__input', 'time-field__input_minutes')}
                    value={minutesValue}
                    onKeyDown={this.handleChangeMinutes}
                />
                <div className='time-field__controls'>
                    <button
                        className='time-field__button'
                        type='button'
                        onClick={this.handleUp}
                        disabled={disabled}
                    >
                        <span className='time-field__arrow' />
                    </button>
                    <button
                        className='time-field__button'
                        type='button'
                        onClick={this.handleDown}
                        disabled={disabled}
                    >
                        <span className={cn('time-field__arrow', 'time-field__arrow_down')} />
                    </button>
                </div>
            </div>
        );
    }
}
