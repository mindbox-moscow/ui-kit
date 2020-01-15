import * as React from "react";

import { ISvgProps } from "./index";

export const Link = ({ className }: ISvgProps) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zM11 15H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2z"
			fill="#B3B3B3"
		/>
		<path d="M8 11h8v2H8v-2z" fill="#B3B3B3" />
	</svg>
);
