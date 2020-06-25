import React from "react";
import ReactDOM from "react-dom";

import { FilterWrapperTest, FiltrationGroupComponentTest } from "../utils";

const EmptyFilterWrapper = () => (
	<FilterWrapperTest doesContainFilter={true} showApplyButton={true}>
		<FiltrationGroupComponentTest shouldShowLabel={true} />
	</FilterWrapperTest>
);

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
	<div
		style={{
			position: "relative",
			width: "1200px",
			marginLeft: "auto",
			marginRight: "auto"
		}}
	>
		<EmptyFilterWrapper />
	</div>,
	entryElement
);
