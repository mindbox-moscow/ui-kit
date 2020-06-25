import React from "react";
import ReactDOM from "react-dom";

import { ScrollState } from "../../../src/FilterWrapper";
import { FilterWrapperTest, FiltrationGroupComponentTest } from "../utils";

const EmptyFilterWrapper = () => (
	<FilterWrapperTest
		scrollState={ScrollState.Minified}
		showApplyButton={false}
	>
		<FiltrationGroupComponentTest />
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
		<EmptyFilterWrapper />
	</div>,
	entryElement
);
