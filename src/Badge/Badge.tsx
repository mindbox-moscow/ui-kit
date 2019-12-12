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
	title: string;
	color?: COLORS;
	date?: string;
	size?: string;
	mode?: Mode;
	progress?: Number;
}

export const Badge = (props: IProps) => {
	const { title, color = COLORS.Green, date, size, mode, progress } = props;
	const isProgressBar = progress && !isNaN(Number(progress));

	return (
		<div
			className={cn("kit-badge", {
				[`kit-badge_size_${size}`]: size,
				[`kit-badge_mode_${mode}`]: mode
			})}
			style={{
				backgroundColor: mode
					? isProgressBar
						? ProgressColors[mode]
						: ModeColors[mode]
					: color
			}}
		>
			<span
				className={cn("kit-badge__text", {
					"kit-badge__text_withPoint": date && !isProgressBar,
					"kit-badge__text_bold": isProgressBar
				})}
			>
				{title}
			</span>
			{isProgressBar ? (
				<>
					<span> {`${progress}%`}</span>
					{date && (
						<>
							{" - "}
							<span className="kit-badge__date">{date}</span>
						</>
					)}
					<div
						className="kit_badge__progressBar"
						style={{
							backgroundColor: mode ? ModeColors[mode] : color,
							width: `${progress}%`
						}}
					/>
				</>
			) : (
				date && (
					<>
						{"Запущен: "}
						<span className="kit-badge__date"> {date}</span>
					</>
				)
			)}
		</div>
	);
};
