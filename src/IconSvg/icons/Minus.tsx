import * as React from "react";

import { ISvgProps } from "./index";

export const Minus = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 24 * 1.5 : 24}
		height={size === "large" ? 24 * 1.5 : 24}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 390 390"
		className={className}
	>
		<path d="m 373,162 c 10,0 17,8 17,17 v 32 c 0,10 -7,17 -17,17 -356,0 -78.99849,0 -356,0 -9,0 -17,-7 -17,-17 v -32 c 0,-9 8,-17 17,-17 356,0 71.974671,0 356,0 z" />
	</svg>
);
