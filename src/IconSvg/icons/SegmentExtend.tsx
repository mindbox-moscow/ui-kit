import * as React from "react";

import { ISvgProps } from "./index";

export const SegmentExtend = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 10 * 1.5 : 10}
		height={size === "large" ? 10 * 1.5 : 10}
		viewBox="0 0 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<g opacity="0.75">
			<path
				opacity="0.75"
				d="M2 6L5 8L8 6M2 2L5 4L8 2"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
	</svg>
);
