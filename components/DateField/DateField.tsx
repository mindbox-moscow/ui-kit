import * as React from "react";
import './DateField.scss';
import cn from 'classnames';
import { Icon } from '../Icon/Icon';

interface Props {
    disabled?: boolean;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class DateField extends React.Component<Props> {
    minutesInput: HTMLInputElement;
    hoursInput: HTMLInputElement;
    state = {
        isSecondHourActive: false,
        isSecondMinuteActive: false,
        isActiveMinutes: false
    };

    public render() {
        const { disabled, value, onChange = () => {} } = this.props
        return (
            <div className={cn('date-field', disabled && 'date-field_disabled')}>
                <input
                    onChange={onChange}
                    type='text'
                    className='date-field__input'
                    disabled={disabled}
                    defaultValue={value}
                />
                <div className='date-field__icon'>
                    <Icon icon='calendar' />
                </div>
            </div>
        );
    }
}
