import * as React from "react";
import { IconSvg } from "../IconSvg";

import "./SegmentButtonEdit.scss";

export const SegmentButtonEdit: React.FC = () => {
	return (
		<button className="kit-segment-button-edit" type="button">
			<IconSvg type="segment-edit" />
		</button>
	);
};
