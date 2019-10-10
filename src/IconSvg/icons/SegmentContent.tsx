import * as React from "react";

import { ISvgProps } from "./index";

export const SegmentContent = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 10 * 1.5 : 10}
		height={size === "large" ? 10 * 1.5 : 10}
		viewBox="0 0 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path
			d="M8.90906 6.45169C8.18062 8.17987 6.39055 9.20759 4.53578 8.96465C2.68013 8.72254 1.21363 7.26986 0.950408 5.41228C0.688064 3.55553 1.69372 1.75055 3.4077 1"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8.90902 5C8.91341 3.94906 8.49431 2.93656 7.7381 2.1712C7.37473 1.80328 6.9365 1.5097 6.45012 1.30834C5.96374 1.10698 5.4394 1.00207 4.90906 1V5H8.90902Z"
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
