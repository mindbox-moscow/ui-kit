import cn from "classnames";
import * as React from "react";

import { assets, IconType } from "./assets";
import "./IconSvg.scss";

interface IProps {
	type: IconType;
	className?: string;
	ariaHidden?: boolean;
}

const Svg = ({ type }: { type: IconType }) => {
	const Asset = assets[type];

	return <Asset />;
};

class IconSvg extends React.PureComponent<IProps> {
	public render() {
		const { type, className, ariaHidden = true } = this.props;

		return (
			<span
				className={cn("kit-icon-svg", className)}
				aria-hidden={ariaHidden}
			>
				<Svg type={type} />
			</span>
		);
	}
}

export { IconSvg, IconType as IconSvgTypes };
