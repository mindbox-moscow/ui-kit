import * as React from "react";

import { ISvgProps } from "./index";

export const Warning = ({ className }: ISvgProps) => (
	<svg
		width={16}
		height={16}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<circle cx="8" cy="8" r="8" fill="#FFEEEB" />
		<path
			d="M7.168 4H8.776V7.948L8.464 9.904H7.48L7.168 7.948V4ZM7 11.608C7 11.328 7.088 11.106 7.264 10.942C7.44 10.778 7.672 10.696 7.96 10.696C8.264 10.696 8.504 10.778 8.68 10.942C8.856 11.106 8.944 11.328 8.944 11.608C8.944 11.888 8.856 12.112 8.68 12.28C8.504 12.448 8.264 12.532 7.96 12.532C7.672 12.532 7.44 12.448 7.264 12.28C7.088 12.112 7 11.888 7 11.608Z"
			fill="#9F2D1D"
		/>
	</svg>
);
