import * as React from "react";
import './Button.scss'
import cn from 'classnames';

interface Props {
    children: string;
    mode?: "danger";
    size: "small" | "medium" | "large";
    color: "gray" | "lightgray";
    hasUnderline?: boolean;
    isDisabled?: boolean;
    hasBorder?: boolean;
    test: (value: string) => void;
}

export class Button extends React.Component<Props> {
    public render() {
        const { children, mode, size, color, hasUnderline, isDisabled, hasBorder } = this.props
        return (
            <button className={
                cn({
                    [`button_${mode}`]: mode,
                    [`button_size-${size}`]: size,
                    [`button_color-${color}`]: color,
                    [`button_isDisabled`]: isDisabled,
                    [`button_hasBorder`]: hasBorder,
                }, 'button'
                )
            }>
                <span className={
                    cn({
                        [`button__text_hasUnderline`]: hasUnderline,
                    }, 'button__text'
                    )
                }>
                    {children}
                </span>
            </button>
        );
    }
}