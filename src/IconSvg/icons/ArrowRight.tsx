import * as React from "react";

import { ISvgProps } from "./index";

export const ArrowRight = ({ className }: ISvgProps) => (
	<svg
		width={6}
		height={10}
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
