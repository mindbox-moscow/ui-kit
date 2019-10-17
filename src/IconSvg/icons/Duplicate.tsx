import * as React from "react";

import { ISvgProps } from "./index";

export const Duplicate = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 16 * 1.5 : 16}
		height={size === "large" ? 16 * 1.5 : 16}
		className={className}
		viewBox="0 0 16 16"
		version="1.1"
	>
		<g
			id="Page-1"
			stroke="none"
			strokeWidth="1"
			fill="none"
			fillRule="evenodd"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<g
				id="Group-4"
				transform="translate(1.000000, 1.000000)"
				stroke="currentColor"
				strokeWidth="2"
			>
				<rect
					id="Rectangle"
					x="4.9"
					y="4.9"
					width="9.1"
					height="9.1"
					rx="2"
				/>
				<path
					d="M2.1,9.1 L1.4,9.1 C0.62680135,9.1 1.82076576e-13,8.47319865 1.82076576e-13,7.7 L1.82076576e-13,1.4 C1.82076576e-13,0.62680135 0.62680135,1.82076576e-13 1.4,1.82076576e-13 L7.7,1.82076576e-13 C8.47319865,1.82076576e-13 9.1,0.62680135 9.1,1.4 L9.1,2.1"
					id="Path"
				/>
			</g>
		</g>
	</svg>
);
