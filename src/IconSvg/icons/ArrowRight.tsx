import * as React from "react";

import { ISvgProps } from "./index";

export const ArrowRight = ({ className, size }: ISvgProps) => (
	<svg
		className={className}
		width={size === "large" ? 5 * 1.5 : 5}
		height={size === "large" ? 8 * 1.5 : 8}
		viewBox="0 0 5 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 7L4 4L1 1"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
