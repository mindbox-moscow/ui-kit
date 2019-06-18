import cn from "classnames";
import * as React from "react";

import { assets, IconType } from "./assets";
import "./IconSvg.scss";

interface IProps {
	type: IconType;
	className?: string;
}

const IconSvg = ({ type, className }: IProps) => {
	const Icon = assets[type];

	return (
		<span className={cn("kit-icon-svg", className)}>
			<Icon />
		</span>
	);
};

export { IconSvg };
