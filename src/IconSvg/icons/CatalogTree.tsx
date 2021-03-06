import * as React from "react";

import { ISvgProps } from "./index";

export const CatalogTree = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 11 * 1.5 : 11}
		height={size === "large" ? 16 * 1.5 : 16}
		fill="#323232"
		className={className}
		viewBox="0 0 11 16"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M2.803 8.875h3.958c.315 1.058 1.332 1.72 2.393 1.556C10.215 10.266 11 9.326 11 8.218s-.785-2.048-1.846-2.212c-1.06-.165-2.078.497-2.393 1.556H2.803V4.376C3.83 4.05 4.47 3 4.311 1.906 4.15.81 3.24 0 2.167 0S.183.81.024 1.905C-.135 3 .506 4.051 1.531 4.375v9.388c0 .174.067.34.187.464s.28.192.45.192H6.76c.315 1.059 1.332 1.72 2.393 1.556C10.215 15.811 11 14.87 11 13.763s-.785-2.049-1.846-2.213c-1.06-.164-2.078.497-2.393 1.556H2.803zm6.007-1.58c.482 0 .872.402.872.899s-.39.9-.872.9-.871-.403-.871-.9a.885.885 0 0 1 .871-.876zm0 5.544c.482 0 .872.402.872.9 0 .496-.39.899-.872.899s-.871-.403-.871-.9a.885.885 0 0 1 .871-.875zM2.144 1.36c.481 0 .871.402.871.9 0 .496-.39.9-.871.9s-.872-.404-.872-.9c0-.498.39-.9.872-.9z" />
	</svg>
);
