import * as React from "react";
import { IconSvg } from "../IconSvg";
import { SegmentContentProps } from "./types";

import "./SegmentContent.scss";

export const SegmentContent: React.FC<SegmentContentProps> = ({ content }) => {
	return (
		<span className="kit-segment-edit">
			<IconSvg type="segment-content" />
			<span className="kit-segment-edit__count">{content}</span>
		</span>
	);
};
