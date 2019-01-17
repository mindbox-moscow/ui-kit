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
            size,
            color,
            hasUnderline,
            hasBorder,
            onClick = () => { }
        } = this.props;
        return (
            <button
                onClick={onClick}
                className={cn("button", className, {
                    [`button_${mode}`]: mode,
                    [`button_size-${size}`]: size,
                    [`button_color-${color}`]: color,
                    [`button_hasBorder`]: hasBorder,
                    [`button_has-icon`]: icon
                })}
                disabled={disabled}
            >
                {icon && <Icon className="button__icon" icon={icon} />}
                <span
                    className={cn("button__text", {
                        [`button__text_hasUnderline`]: hasUnderline
                    })}
                >
                    {children}
                </span>
            </button>
        );
    }
}
