import * as React from "react";

import { ISvgProps } from "./index";

export const Close = ({ className }: ISvgProps) => (
	<svg
		height={12}
		width={12}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
	>
		<g fill="#666">
			<path d="M11.367 9.726L2.417.776C2.043.402 1.469.37 1.134.706s-.303.908.07 1.282l8.95 8.95c.375.374.949.406 1.283.07s.304-.908-.07-1.282z" />
			<path d="M1.204 9.726l8.95-8.95c.375-.374.949-.405 1.283-.07s.304.908-.07 1.282l-8.95 8.95c-.374.374-.948.406-1.283.07s-.303-.908.07-1.282z" />
		</g>
	</svg>
);
