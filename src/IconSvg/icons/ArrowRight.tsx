import * as React from "react";

import { ISvgProps } from "./index";

export const ArrowRight = ({ className }: ISvgProps) => (
	<svg
		className={className}
		width="6"
		height="10"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 9l4-4-4-4"
			stroke="#333"
			stroke-width="2"
			fill="none"
			fill-rule="evenodd"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
