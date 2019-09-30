import cn from "classnames";
import * as React from "react";

import "./GridRow.scss";

export interface GridRowProps {
	alignItems: "top" | "center" | "end";
}

export const GridRow: React.FC<GridRowProps> = ({ alignItems, ...props }) => (
	<div
		className={cn("grid__row", `grid__row_align-${alignItems}`)}
		{...props}
	/>
);

GridRow.defaultProps = {
	alignItems: "top"
};
