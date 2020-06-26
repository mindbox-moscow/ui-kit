import * as React from "react";

import { ISvgProps } from "./index";

export const Add = ({ className }: ISvgProps) => (
	<svg
		className={className}
		width="18"
		height="18"
		viewBox="0 0 18 18"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g transform="translate(1 1)" fill="none" fillRule="evenodd">
			<rect
				stroke="#6A98E1"
				opacity=".75"
				width="16"
				height="16"
				rx="3"
			/>
			<g
				stroke="#6A98E1"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<path d="M8 4v8M4 8h8" />
			</g>
		</g>
	</svg>
);
