import * as React from "react";
import './Button.scss'
import cn from 'classnames';

interface Props {
    children: string;
    mod?: string;
    isDisabled?: boolean
    test: (value: string) => void;
}

export class Button extends React.Component<Props> {
    public render() {
        const { children, mod, isDisabled } = this.props
        return (
            <button className={
                cn({
                    [`button_${mod}`]: mod,
                    [`button_isDisabled`]: isDisabled,
                }, 
                'button'
                )}>
                {children}
            </button>
        );
    }
}