import * as React from "react";
import { IconSvg } from "../IconSvg";

import "./SegmentButtonExtend.scss";

export const SegmentButtonExtend: React.FC = () => {
	return (
		<button className="kit-segment-button-extend" type="button">
			<IconSvg type="segment-extend" />
		</button>
	);
};
