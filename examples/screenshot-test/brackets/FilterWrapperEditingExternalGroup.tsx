import React from "react";
import ReactDOM from "react-dom";

import {
	FilterWrapperTest,
	FiltrationConditionComponentTest,
	FiltrationGroupComponentTest
} from "../utils";

const FilterWrapper = () => (
	<FilterWrapperTest doesContainFilter={true}>
		<FiltrationGroupComponentTest
			state="edit"
			groupType="or"
			shouldShowLabel={true}
			shouldShowButtons={true}
		>
			<FiltrationGroupComponentTest
				groupType="and"
				shouldShowLabel={true}
			>
				<FiltrationConditionComponentTest
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и мужской"
					withAlert={true}
				/>
				<FiltrationConditionComponentTest
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
				/>
			</FiltrationGroupComponentTest>
			<FiltrationGroupComponentTest
				groupType="and"
				shouldShowLabel={true}
			>
				<FiltrationConditionComponentTest
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponentTest
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
			</FiltrationGroupComponentTest>
		</FiltrationGroupComponentTest>
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
