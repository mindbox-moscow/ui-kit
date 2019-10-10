import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { SegmentButtonExpandProps as Props } from "./types";

import "./SegmentButtonExpand.scss";

export const SegmentButtonExpand: React.FC<Props> = ({
	children,
	onClick,
	isOpen
}) => {
	return (
		<button
			className="kit-segment-button-expand"
			type="button"
			onClick={onClick}
		>
			<IconSvg type="segment-expand" />
			<div
				className={cn("kit-segment-button-expand__popover", {
					"kit-segment-button-expand__popover_open": isOpen
				})}
			>
				{children}
			</div>
		</button>
	);
};
