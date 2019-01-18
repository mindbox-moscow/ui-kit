import * as React from "react";
import "./Button.scss";
import { Icon } from "../Icon/Icon";
import cn from "classnames";

interface Props {
    children: string;
    className?: string;
    disabled?: boolean;
    mode?: "danger";
    icon?: "play" | "pause";
    size: "small" | "medium" | "large" | "xs" | "normal";
    color: "gray" | "lightgray";
    hasUnderline?: boolean;
    hasBorder?: boolean;
    test?: (value: string) => void;
}

export class Button extends React.Component<Props> {
    public render() {
        const {
            disabled,
            children,
            className,
            mode,
            icon,
            size,
            color,
            hasUnderline,
            hasBorder
        } = this.props;
        return (
            <button
                className={cn("kit-button", className, {
                    [`kit-button_${mode}`]: mode,
                    [`kit-button_size-${size}`]: size,
                    [`kit-button_color-${color}`]: color,
                    [`kit-button_hasBorder`]: hasBorder,
                    [`kit-button_has-icon`]: icon
                })}
                disabled={disabled}
            >
                {icon && <Icon className="kit-button__icon" icon={icon} />}
                <span
                    className={cn({
                        "kit-button__text": true,
                        "kit-button__text_hasUnderline": hasUnderline
                    })}
                >
                    {children}
                </span>
            </button>
        );
    }
}
