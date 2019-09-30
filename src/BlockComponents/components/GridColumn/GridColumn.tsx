import cn from "classnames";
import * as React from "react";

import "./GridColumn.scss";

export interface GridColumnProps {
	col: number;
}

export const GridColumn: React.FC<GridColumnProps> = ({ col, ...props }) => (
	<div
		className={cn("grid__column", {
			[`grid__column_${col}`]: col,
			grid__column_auto: !col
		})}
		{...props}
	/>
);
