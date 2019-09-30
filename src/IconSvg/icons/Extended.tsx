import * as React from "react";

import { ISvgProps } from "./index";

export const Extended = ({ className, size }: ISvgProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size === "large" ? 9 * 1.5 : 9}
		height={size === "large" ? 10 * 1.5 : 10}
		viewBox="0 0 9 10"
		className={className}
	>
		<path
			fill="#B4C3D0"
			fillRule="nonzero"
			d="M7.35 5.24a1 1 0 1 1 1.3 1.52l-3.5 3a1 1 0 0 1-1.3 0l-3.5-3a1 1 0 1 1 1.3-1.52L4.5 7.684zM4.5 7.684l-.65.558h1.3l-.65-.558zM7.35.24a1 1 0 1 1 1.3 1.518l-3.5 3a1 1 0 0 1-1.3 0l-3.5-3A1 1 0 0 1 1.65.241L4.5 2.683z"
		/>
	</svg>
);
