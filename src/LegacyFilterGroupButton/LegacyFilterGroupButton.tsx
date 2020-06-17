import cn from "classnames";
import * as React from "react";

import { IconSvg, IconSvgTypes } from "../IconSvg";

import "./LegacyFilterGroupButton.scss";

interface Props {
  className?: string;
  children: string;
  disabled?: boolean;
  icon?: IconSvgTypes;
  onClick?: (e: React.MouseEvent) => void;
}

export class LegacyFilterGroupButton extends React.Component<Props> {
  public render() {
    const {
      disabled,
      children,
      className,
      icon,
      onClick = () => { },
    } = this.props;

    return (
      <button
        className={cn("kit-legacy-filter-group-button", className)}
        disabled={disabled}
        type="button"
        onClick={onClick}
      >
        {icon && <IconSvg type={icon} />}
        {children}
      </button>
    );
  }
}
