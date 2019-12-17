import * as React from "react";
import { COLORS } from "../utils/constants";
import "./Badge.scss";

import cn from "classnames";

type Mode = "success" | "danger" | "warning" | "disabled" | "ghost";

const ModeColors = {
	danger: COLORS.Danger,
	disabled: COLORS.Disabled,
	ghost: "transparent",
	success: COLORS.Success,
	warning: COLORS.Warning
};

const ProgressColors = {
	warning: COLORS.WarningBackground
};

interface IProps {
	color?: COLORS | string;
	size?: string;
	mode?: Mode;
	progress?: number;
	progressColor?: COLORS | string;
}

export const Badge: React.FC<IProps> = props => {
	const {
		color = COLORS.Green,
		size,
		mode,
		progress,
		progressColor,
		children
	} = props;
	const isProgressBar = progress !== undefined && !isNaN(progress);
	let backgroundColor;

	if (isProgressBar) {
		backgroundColor = mode ? ProgressColors[mode] : progressColor;
	} else {
		backgroundColor = mode ? ModeColors[mode] : color;
	}

	return (
		<div
			className={cn("kit-badge", {
				[`kit-badge_size_${size}`]: size,
				[`kit-badge_mode_${mode}`]: mode
			})}
			style={{ backgroundColor: backgroundColor }}
		>
			{children}
			{isProgressBar && (
				<div
					className="kit_badge__progress-bar"
					style={{
						backgroundColor: mode ? ModeColors[mode] : color,
						width: `${progress}%`
					}}
				/>
			)}
		</div>
	);
};
