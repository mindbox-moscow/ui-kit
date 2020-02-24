import * as React from "react";

import { ISvgProps } from "./index";

export const Move = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 24 * 1.5 : 24}
		height={size === "large" ? 24 * 1.5 : 24}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 90 90"
		className={className}
	>
		<path d="M 45,0 29.8125,15.1875 h 9.0625 v 16.90625 h 12.25 V 15.1875 h 9.0625 z M 15.1875,29.8125 0,45 15.1875,60.1875 V 51.125 H 32.09375 V 38.875 H 15.1875 Z m 59.625,0 V 38.875 H 57.90625 v 12.25 H 74.8125 v 9.0625 L 90,45 Z m -29.625,8.625 a 6.560172,6.560172 0 0 0 -6.75,6.5625 6.5625,6.5625 0 0 0 13.125,0 6.560172,6.560172 0 0 0 -6.375,-6.5625 z M 38.875,57.90625 V 74.8125 H 29.8125 L 45,90 60.1875,74.8125 H 51.125 V 57.90625 Z" />
	</svg>
);
