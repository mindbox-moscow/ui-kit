import cn from "classnames";
import * as React from "react";

import { assets, IconType } from "./assets";
import "./IconSvg.scss";

interface IProps {
	type: IconType | string;
	className?: string;
	ariaHidden?: boolean;
}

const IconSvg = ({ type, className, ariaHidden = false }: IProps) => {
	const Icon = assets[type];

	return (
		<span
			className={cn("kit-icon-svg", className)}
			aria-hidden={ariaHidden}
		>
			<Icon />
		</span>
	);
};

export { IconSvg, IconType as IconSvgTypes };
