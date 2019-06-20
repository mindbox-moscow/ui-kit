import * as React from "react";
import "./Icon.scss";

import cn from "classnames";

export type IconsTypes =
	| "help"
	| "play"
	| "pause"
	| "search"
	| "calendar"
	| "remove"
	| "edit"
	| "arrowDown"
	| "percentRound"
	| "coins";

interface IProps {
	className?: string;
	icon: IconsTypes;
}

export class Icon extends React.Component<IProps> {
	public render() {
		const { icon, className } = this.props;
		return (
			<span
				className={cn(
					"kit-icon",
					{
						[`kit-icon_${icon}`]: icon
					},
					className
				)}
			/>
		);
	}
}
