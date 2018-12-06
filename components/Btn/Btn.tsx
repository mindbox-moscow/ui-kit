import * as React from "react";
import './Btn.scss';
import { Icon } from '../Icon/Icon';
import cn from 'classnames';

interface Props {
    children: string;
    className?: string;
    mode?: "danger";
    icon?: "play" | "pause";
    size: "small" | "medium" | "large";
    color: "gray" | "lightgray";
    hasUnderline?: boolean;
    isDisabled?: boolean;
    hasBorder?: boolean;
    test?: (value: string) => void;
}

export class Btn extends React.Component<Props> {
    public render() {
        const { children, className, mode, icon, size, color, hasUnderline, isDisabled, hasBorder } = this.props
        return (
            <button className={
                cn('button', className, {
                    [`button_${mode}`]: mode,
                    [`button_size-${size}`]: size,
                    [`button_color-${color}`]: color,
                    [`button_isDisabled`]: isDisabled,
                    [`button_hasBorder`]: hasBorder,
                }
                )
            }>
                {icon && <Icon className="button__icon" icon={icon} />}
                <span className={
                    cn('button__text', {
                        [`button__text_hasUnderline`]: hasUnderline,
                    }
                    )
                }>
                    {children}
                </span>
            </button>
        );
    }
}