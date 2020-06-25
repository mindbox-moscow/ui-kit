import React from "react";
import ReactDOM from "react-dom";
import {
	FiltrationConditionComponentTest,
	FiltrationGroupComponentTest
} from "../utils";

const SingleConditionLableOr = () => (
	<FiltrationGroupComponentTest
		state="view"
		groupType="or"
		shouldShowLabel={true}
	>
		<FiltrationConditionComponentTest
			filterablePropertyName="Пол"
			filtrationMethodName=""
			editorComponent={""}
			state="view"
			filtrationMethodParametersComponent={
				<span>
					от <span style={{ fontWeight: "bold" }}>10</span> до{" "}
					<span style={{ fontWeight: "bold" }}>20</span>
				</span>
			}
		/>
	</FiltrationGroupComponentTest>
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
		<SingleConditionLableOr />
	</div>,
	entryElement
);
