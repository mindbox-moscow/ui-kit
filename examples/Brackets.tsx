import React from "react";
import ReactDOM from "react-dom";

import { FiltrationConditionComponent } from "../src/FiltrationConditionComponent";
import { FiltrationGroupComponent } from "../src/FiltrationGroupComponent";

const SingleConditionWithoutLabel = () => (
	<div test-id="SingleConditionWithoutLabel">
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
	</div>
);

const SingleConditionLableAnd = () => (
	<div test-id="SingleConditionLableAnd">
		<FiltrationGroupComponent
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
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
	</div>
);

const SingleConditionLableOr = () => (
	<div test-id="SingleConditionLableOr">
		<FiltrationGroupComponent
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
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
	</div>
);

const Main = () => {
	return (
		<div>
			<SingleConditionWithoutLabel />
			<br />
			<br />
			<SingleConditionLableAnd />
			<br />
			<br />
			<SingleConditionLableOr />
		</div>
	);
};

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(<Main />, entryElement);
