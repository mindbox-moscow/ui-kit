import * as React from "react";

import { ISvgProps } from "./index";

export const Dots = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 4 * 1.5 : 4}
		height={size === "large" ? 16 * 1.5 : 16}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
	>
		<g fill="#8aacc2" fillRule="evenodd">
			<circle cx={2} cy={2} r={2} />
			<circle cx={2} cy={14} r={2} />
			<circle cx={2} cy={8} r={2} />
		</g>
	</svg>
);
