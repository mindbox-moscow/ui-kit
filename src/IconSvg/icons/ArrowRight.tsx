import * as React from "react";

import { ISvgProps } from "./index";

export const ArrowRight = ({ className, size }: ISvgProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		width={size === "large" ? 4 * 1.5 : 4}
		height={size === "large" ? 7 * 1.5 : 7}
		viewBox="0 0 4 7"
	>
		<path
			fill="none"
			fillRule="evenodd"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M.5 6.5l3-3-3-3"
		/>
	</svg>
);
