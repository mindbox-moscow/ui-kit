import * as React from "react";

import { ISvgProps } from "./index";

export const Favorite = ({ className }: ISvgProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="38"
		height="39"
		viewBox="0 0 38 39"
		className={className}
	>
		<defs>
			<filter
				id="a"
				width="107.6%"
				height="113.9%"
				x="-3.8%"
				y="-6.9%"
				filterUnits="objectBoundingBox"
			>
				<feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
				<feComposite
					in="shadowBlurOuter1"
					in2="SourceAlpha"
					operator="out"
					result="shadowBlurOuter1"
				/>
				<feColorMatrix
					in="shadowBlurOuter1"
					result="shadowMatrixOuter1"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
				/>
				<feMerge>
					<feMergeNode in="shadowMatrixOuter1" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>
		<path
			fill="currentColor"
			fill-rule="evenodd"
			stroke="#C5D6E1"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M8 0l2.472 5.266 5.528.85-4 4.096.944 5.788L8 13.266 3.056 16 4 10.212 0 6.116l5.528-.85z"
			filter="url(#a)"
			transform="translate(11 11)"
		/>
	</svg>
);
