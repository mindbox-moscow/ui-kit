import * as React from "react";

import { ISvgProps } from "./index";

export const ArrowRight = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 6 * 1.5 : 6}
		height={size === "large" ? 10 * 1.5 : 10}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 9l4-4-4-4"
			stroke="#333"
			strokeWidth={2}
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
