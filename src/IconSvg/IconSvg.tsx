import cn from "classnames";
import * as React from "react";

import { icons, IconType } from "./icons";
import { IconsProps } from "./types";
import "./IconSvg.scss";

type IconSvgTypes = {
	type: IconType;
	className?: string;
} & Partial<IconsProps>;

class IconSvg extends React.PureComponent<IconSvgTypes> {
	public render() {
		const { type, className, ...props } = this.props;
		const Svg = icons[type];

		return <Svg className={cn("kit-icon-svg", className)} {...props} />;
	}
}

export { IconSvg, IconType as IconSvgTypes };
