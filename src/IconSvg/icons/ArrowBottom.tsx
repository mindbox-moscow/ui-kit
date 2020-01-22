import * as React from "react";

import { ISvgProps } from "./index";

export const ArrowBottom = ({ className }: ISvgProps) => (
	<svg
		className={className}
		width="8"
		height="10"
		viewBox="0 0 8 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3.646 9.354a.5.5 0 00.708 0l3.182-3.182a.5.5 0 10-.708-.708L4 8.293 1.172 5.464a.5.5 0 10-.708.708l3.182 3.182zM3.5 0v9h1V0h-1z"
			fill="#60C234"
		/>
	</svg>
);
