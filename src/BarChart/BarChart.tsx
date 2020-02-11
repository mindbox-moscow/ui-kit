import { BarSvgProps, ResponsiveBar } from "@nivo/bar";
import * as React from "react";

const BarChart = (props: BarSvgProps) => {
	return (
		<>
			<ResponsiveBar {...props} />
		</>
	);
};

export { BarChart };
