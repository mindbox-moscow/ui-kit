import cn from "classnames";
import * as React from "react";

import { assets, IconType } from "./assets";
import "./IconSvg.scss";

interface IProps {
	type: string | IconType;
	className?: string;
	ariaHidden?: boolean;
}

class IconSvg extends React.PureComponent<IProps> {
	public render() {
		const { type, className, ariaHidden = true } = this.props;
		const Svg = assets[type] as keyof JSX.IntrinsicElements;

		return (
			<Svg
				className={cn("kit-icon-svg", className)}
				aria-hidden={ariaHidden}
			/>
		);
	}
}

// @ts-ignore
export { IconSvg, IconType as IconSvgTypes };
