import React from "react";
import ReactDOM from "react-dom";

import {
	FiltrationConditionComponentTest,
	FiltrationGroupComponentTest
} from "../utils";

const FiltrationGroupComponentExample5 = () => {
	return (
		<FiltrationGroupComponentTest
			groupType="or"
			shouldShowLabel={true}
			shouldShowButtons={true}
		>
			<FiltrationConditionComponentTest
				filterablePropertyName="Идентификатор в мобильном приложении"
				filtrationMethodName="заполнен и равен 42"
			/>
			<FiltrationGroupComponentTest
				groupType="or"
				shouldShowLabel={true}
				shouldShowButtons={true}
			/>
			<FiltrationGroupComponentTest
				groupType="or"
				shouldShowLabel={true}
				shouldShowButtons={true}
			/>
			<FiltrationGroupComponentTest
				groupType="or"
				shouldShowLabel={true}
				shouldShowButtons={true}
			>
				<FiltrationGroupComponentTest
					groupType="or"
					shouldShowLabel={true}
					shouldShowButtons={true}
				>
					<FiltrationGroupComponentTest
						groupType="or"
						shouldShowLabel={true}
						shouldShowButtons={true}
					/>
					<FiltrationGroupComponentTest
						groupType="or"
						shouldShowLabel={true}
						shouldShowButtons={true}
					/>
				</FiltrationGroupComponentTest>
				<FiltrationGroupComponentTest
					groupType="or"
					shouldShowLabel={true}
					shouldShowButtons={true}
				/>
			</FiltrationGroupComponentTest>
		</FiltrationGroupComponentTest>
	);
};

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
		<FiltrationGroupComponentExample5 />
	</div>,
	entryElement
);
