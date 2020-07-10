import React from "react";
import ReactDOM from "react-dom";

import {
	FilterWrapperTest,
	FiltrationConditionComponentTest,
	FiltrationGroupComponentTest
} from "../utils";

const EditingLinkedCondition = () => (
	<FilterWrapperTest doesContainFilter={true}>
		<FiltrationGroupComponentTest
			state="shaded"
			groupType="and"
			shouldShowLabel={false}
		>
			<FiltrationConditionComponentTest isLinkedCondition={true} />
			<FiltrationConditionComponentTest
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				state="linkedConditionEdit"
				isLinkedCondition={true}
				linkedConditionComponent={
					<FiltrationGroupComponentTest
						state="edit"
						groupType="and"
						shouldShowLabel={true}
						shouldShowButtons={true}
					>
						<FiltrationConditionComponentTest
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponentTest
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponentTest
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponentTest
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponentTest
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
		<EditingLinkedCondition />
	</div>,
	entryElement
);
