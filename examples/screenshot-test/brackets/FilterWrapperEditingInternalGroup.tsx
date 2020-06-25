import React from "react";
import ReactDOM from "react-dom";

import {
	FilterWrapperTest,
	FiltrationConditionComponentTest,
	FiltrationGroupComponentTest
} from "../utils";

const EmptyFilterWrapper = () => (
	<FilterWrapperTest>
		<FiltrationGroupComponentTest state="shaded">
			<FiltrationGroupComponentTest state="edit" groupType="and">
				<FiltrationConditionComponentTest
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и мужской"
				/>
				<FiltrationConditionComponentTest
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
				/>
			</FiltrationGroupComponentTest>
			<FiltrationGroupComponentTest state="shaded" groupType="and">
				<FiltrationConditionComponentTest
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponentTest
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
				<FiltrationGroupComponentTest state="shaded" groupType="and">
					<FiltrationConditionComponentTest
						filterablePropertyName="Пол"
						filtrationMethodName="заполнен и женский"
					/>
					<FiltrationConditionComponentTest
						filterablePropertyName="Возраст"
						filtrationMethodName="заполнен и от 35 до 60 лет"
					/>
					<FiltrationGroupComponentTest
						state="shaded"
						groupType="and"
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
		<EmptyFilterWrapper />
	</div>,
	entryElement
);
