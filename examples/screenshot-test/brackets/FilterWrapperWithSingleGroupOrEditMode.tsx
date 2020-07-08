import React from "react";
import ReactDOM from "react-dom";

import { FilterWrapperTest, FiltrationGroupComponentTest } from "../utils";

const FilterWrapper = () => (
	<FilterWrapperTest doesContainFilter={true}>
		<FiltrationGroupComponentTest
			state="edit"
			groupType="or"
			shouldShowLabel={true}
			shouldShowButtons={true}
		/>
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
		<FilterWrapper />
	</div>,
	entryElement
);
