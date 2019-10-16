import * as React from "react";

import { ISvgProps } from "./index";

export const Filter = ({ className, size }: ISvgProps) => (
	<svg
		className={className}
		width={size === "large" ? 12 * 1.5 : 12}
		height={size === "large" ? 10 * 1.5 : 10}
		viewBox="0 0 12 10"
		version="1.1"
	>
		<g
			id="Page-1"
			stroke="none"
			strokeWidth="1"
			fill="none"
			fillRule="evenodd"
		>
			<g
				id="1-—-Several-conditions"
				transform="translate(-184.000000, -524.000000)"
				fill="currentColor"
				fillRule="nonzero"
			>
				<g id="Group-3" transform="translate(161.000000, 518.000000)">
					<g
						id="Add-filter"
						transform="translate(23.447344, 6.000000)"
					>
						<path
							d="M3.60193121,8.11111111 C3.60193121,8.49166712 3.81793292,8.83923854 4.1591509,9.00774124 L5.9591509,9.89663013 C6.62375146,10.2248279 7.40193121,9.74122042 7.40193121,9 L7.40193121,5.57407152 L10.7615278,1.65039453 C11.3170347,1.00161737 10.8560388,4.12114787e-13 10.0019312,4.12114787e-13 L1.00193121,4.12114787e-13 C0.147823677,4.12114787e-13 -0.31317223,1.00161737 0.242334641,1.65039453 L3.60193121,5.57407152 L3.60193121,8.11111111 Z M10.0019312,1 L6.40193121,5.20444444 L6.40193121,9 L4.60193121,8.11111111 L4.60193121,5.20444444 L1.00193121,1 L10.0019312,1 Z"
							id="Path-Copy"
						/>
					</g>
				</g>
			</g>
		</g>
	</svg>
);
