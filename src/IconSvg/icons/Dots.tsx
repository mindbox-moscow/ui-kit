import * as React from "react";

import { ISvgProps } from "./index";

export const Dots = ({ className }: ISvgProps) => (
	<svg
		className={className}
		height="16"
		viewBox="0 0 4 16"
		width="4"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g fill="#8aacc2" fill-rule="evenodd">
			<circle cx="2" cy="2" r="2" />
			<circle cx="2" cy="14" r="2" />
			<circle cx="2" cy="8" r="2" />
		</g>
	</svg>
);
