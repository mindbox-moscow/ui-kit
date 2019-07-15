import * as React from "react";

import { ISvgProps } from "./index";

export const Drop = ({ className }: ISvgProps) => (
	<svg
		className={className}
		width="10"
		height="14"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g fill="#8AACC2" fill-rule="evenodd" opacity=".5">
			<circle cx="1" cy="1" r="1" />
			<circle cx="5" cy="1" r="1" />
			<circle cx="9" cy="1" r="1" />
			<circle cx="1" cy="5" r="1" />
			<circle cx="5" cy="5" r="1" />
			<circle cx="9" cy="5" r="1" />
			<circle cx="1" cy="9" r="1" />
			<circle cx="5" cy="9" r="1" />
			<circle cx="9" cy="9" r="1" />
			<circle cx="1" cy="13" r="1" />
			<circle cx="5" cy="13" r="1" />
			<circle cx="9" cy="13" r="1" />
		</g>
	</svg>
);
