import * as React from "react";
import { COLORS } from "../utils/constants";
import "./Badge.scss";

import cn from "classnames";

const ModeColors = {
	danger: "#D0021B",
	disabled: "#999999",
	ghost: "transparent",
	warning: "#E7950F"
};

interface IProps {
	title: string;
	color?: COLORS;
	date?: string;
	size?: string;
	mode?: string;
}

export const Badge = (props: IProps) => {
	const { title, color = COLORS.Green, date, size, mode } = props;

	return (
		<div
			className={cn("kit-badge", {
				[`kit-badge_size_${size}`]: size,
				[`kit-badge_mode_${mode}`]: mode
			})}
			style={{ backgroundColor: mode ? ModeColors[mode] : color }}
		>
			<span
				className={cn("kit-badge__text", {
					"kit-badge__text_withPoint": date
				})}
			>
				{title}
			</span>
			{date && (
				<>
					Запущен:<span className="kit-badge__date"> {date}</span>
				</>
			)}
		</div>
	);
};
