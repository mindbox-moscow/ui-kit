import cn from "classnames";
import * as React from "react";
import "./Tooltip.scss";

type IProps = {
	title: string;
} & Partial<DefaultProps>;
interface IState {
	isVisible: boolean;
}

interface DefaultProps {
	position: "top" | "bottom";
	textDecoration: boolean;
}

type ToolTipProps = IState & IProps;

export const Tooltip: React.FC<ToolTipProps> = ({
	textDecoration,
	position,
	title,
	children
}) => {
	return (
		<span className="kit-tooltip">
			<span
				className={cn("kit-tooltip__title", {
					"kit-tooltip__title_text-transform": textDecoration
				})}
			>
				{title}
			</span>
			<span
				className={cn(
					"kit-tooltip__content",
					`kit-tooltip__content_${position}`
				)}
			>
				{children}
			</span>
		</span>
	);
};

Tooltip.defaultProps = {
	position: "bottom",
	textDecoration: true
};
