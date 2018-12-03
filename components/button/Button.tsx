import * as React from "react";
import './Button.scss'
import cn from 'classnames';

interface Props {
    children: string;
    mode?: "danger";
    isDisabled?: boolean
    test: (value: string) => void;
}

export class Button extends React.Component<Props> {
    public render() {
        const { children, mode, isDisabled } = this.props
        return (
            <button className={
                cn({
                    [`button_${mode}`]: mode,
                    [`button_isDisabled`]: isDisabled,
                }, 
                'button'
                )}>
                {children}
            </button>
        );
    }
}