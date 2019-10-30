import * as React from "react";
import { SegmentContentProps } from "./types";

import "./SegmentContent.scss";

export const SegmentContent: React.FC<SegmentContentProps> = ({ content }) => {
	return (
		<span className="kit-segment-content">
			<span className="kit-segment-content__count">{content}</span>
		</span>
	);
};
