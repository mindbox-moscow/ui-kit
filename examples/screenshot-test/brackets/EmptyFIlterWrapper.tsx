import React from "react";
import ReactDOM from "react-dom";

import { FilterWrapperTest, FiltrationGroupComponentTest } from "../utils";

const FilterWrapper = () => (
	<FilterWrapperTest>
		<FiltrationGroupComponentTest shouldShowButtons={true} />
		<i>Добавьте фильтр, чтобы создать выборку клиентов</i>
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
