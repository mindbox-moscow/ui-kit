import React from "react";
import ReactDOM from "react-dom";

import { FiltrationConditionComponent } from "../../../src/FiltrationConditionComponent";
import { FiltrationGroupComponent } from "../../../src/FiltrationGroupComponent";

const SingleConditionWithoutLabel = () => (
	<FiltrationGroupComponent
		state="view"
		groupType="and"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={false}
		shouldShowButtons={false}
		shouldShowDuplicateButton={false}
		onGroupTypeToggle={() => {}}
		onConditionStateToggle={() => {}}
		onConditionRemove={() => {}}
		onConditionCopy={() => {}}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			editorComponent={""}
			state="view"
			onConditionStateToggle={() => {}}
			onConditionCopy={() => {}}
			onConditionRemove={() => {}}
			filtrationMethodParametersComponent={
				<span>
					от <span style={{ fontWeight: "bold" }}>10</span> до{" "}
					<span style={{ fontWeight: "bold" }}>20</span>
				</span>
			}
		/>
	</FiltrationGroupComponent>
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
		<SingleConditionWithoutLabel />
	</div>,
	entryElement
);
