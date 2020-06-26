import React from "react";
import ReactDOM from "react-dom";

import {
	FilterWrapperTest,
	FiltrationConditionComponentTest,
	FiltrationGroupComponentTest
} from "../utils";

const EditingFilterWithNestedConditionsButtons = () => (
	<FilterWrapperTest doesContainFilter={true}>
		<FiltrationGroupComponentTest
			state="edit"
			groupType="and"
			shouldShowLabel={true}
			shouldShowButtons={true}
		>
			<FiltrationConditionComponentTest />
			<FiltrationConditionComponentTest
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponentTest
						state="shaded"
						groupType="and"
						shouldShowLabel={false}
						shouldShowButtons={true}
					>
						<FiltrationConditionComponentTest
							state="shaded"
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
					</FiltrationGroupComponentTest>
				}
			/>
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
		<EditingFilterWithNestedConditionsButtons />
	</div>,
	entryElement
);
