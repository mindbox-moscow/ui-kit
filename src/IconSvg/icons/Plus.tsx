import * as React from "react";

import { ISvgProps } from "./index";

export const Plus = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 24 * 1.5 : 24}
		height={size === "large" ? 24 * 1.5 : 24}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 390 390"
		className={className}
	>
		<path d="m 179,0 h 32 c 10,0 17,8 17,17 v 145 h 145 c 10,0 17,8 17,17 v 32 c 0,10 -7,17 -17,17 H 228 v 145 c 0,10 -7,17 -17,17 h -32 c -9,0 -17,-7 -17,-17 V 228 H 17 C 8,228 0,221 0,211 v -32 c 0,-9 8,-17 17,-17 H 162 V 17 c 0,-9 8,-17 17,-17 z" />
	</svg>
);
