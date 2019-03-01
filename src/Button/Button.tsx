import * as React from "react";
import "./Button.scss";
import { Icon } from "../Icon/Icon";
import cn from "classnames";

interface Props {
    children: string;
    className?: string;
    disabled?: boolean;
    inheritFont?: boolean;
    mode?: "danger";
    icon?: "play" | "pause";
    arrow?: "left" | "right";
    size: "small" | "medium" | "large" | "xs" | "normal";
    color: "gray" | "lightgray";
    hasUnderline?: boolean;
    hasBorder?: boolean;
    test?: (value: string) => void;
    onClick?: () => void;
}

export class Button extends React.Component<Props> {
    public render() {
        const {
            disabled,
            children,
            className,
            mode,
            icon,
            arrow,
            size,
            color,
            hasUnderline,
            hasBorder,
            inheritFont,
            onClick = () => { }
        } = this.props;
        return (
            <button
                onClick={onClick}
                className={cn("kit-button", className, {
                    [`kit-button_${mode}`]: mode,
                    [`kit-button_size-${size}`]: size,
                    [`kit-button_color-${color}`]: color,
                    [`kit-button_hasBorder`]: hasBorder,
                    [`kit-button_has-icon`]: icon,
                    [`kit-button_inherit-font`]: inheritFont,
                    [`kit-button_whith-arrow`]: arrow,
                    [`kit-button_whith-arrow_${arrow}`]: arrow,
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
