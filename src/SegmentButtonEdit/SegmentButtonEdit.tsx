import * as React from "react";
import { IconSvg } from "../IconSvg";
import { SegmentButtonEditProps as Props } from "./types";

import "./SegmentButtonEdit.scss";

export const SegmentButtonEdit: React.FC<Props> = ({ onClick }) => {
	return (
		<button
			className="kit-segment-button-edit"
			type="button"
			onClick={event => {
				event.preventDefault();
				onClick();
			}}
		>
			<IconSvg type="segment-edit" />
		</button>
	);
};
