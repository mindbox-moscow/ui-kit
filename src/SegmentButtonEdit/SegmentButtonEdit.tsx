import * as React from "react";
import { IconSvg } from "../IconSvg";
import { SegmentButtonEditProps as Props } from "./types";

import "./SegmentButtonEdit.scss";

export const SegmentButtonEdit: React.FC<Props> = ({ onClick, disabled }) => {
	return (
		<button
			className="kit-segment-button-edit"
			type="button"
			onClick={e => {
				if (!disabled) {
					e.stopPropagation();
					onClick();
				}
			}}
		>
			<IconSvg type="segment-edit" />
		</button>
	);
};
