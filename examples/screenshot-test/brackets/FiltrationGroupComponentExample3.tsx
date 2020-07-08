import React from "react";
import ReactDOM from "react-dom";

import {
	FiltrationConditionComponentTest,
	FiltrationGroupComponentTest
} from "../utils";

const FiltrationGroupComponentExample3 = () => {
	return (
		<FiltrationGroupComponentTest groupType="or" shouldShowLabel={true}>
			<FiltrationConditionComponentTest
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponentTest
						groupType="or"
						shouldShowLabel={true}
					>
						<FiltrationConditionComponentTest
							filterablePropertyName="Покупка"
							filtrationMethodName="есть такие"
							linkedConditionComponent={
								<FiltrationGroupComponentTest
									groupType="and"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponentTest
										filterablePropertyName="Цена"
										filtrationMethodName="заполнена и от"
										filtrationMethodParametersComponent={
											<span
												style={{ fontWeight: "bold" }}
											>
												5000
											</span>
										}
									/>
								</FiltrationGroupComponentTest>
							}
						/>
						<FiltrationConditionComponentTest
							filterablePropertyName="Первое действие"
							linkedConditionComponent={
								<FiltrationGroupComponentTest
									groupType="and"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponentTest
										withAlert={true}
										filtrationMethodName="до"
										filtrationMethodParametersComponent={
											<>
												<span
													style={{
														fontWeight: "bold"
													}}
												>
													90 дней{" "}
												</span>
												<span
													style={{
														fontWeight: "normal"
													}}
												>
													назад
												</span>
											</>
										}
									/>
								</FiltrationGroupComponentTest>
							}
						/>
					</FiltrationGroupComponentTest>
				}
			/>

			<FiltrationConditionComponentTest
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponentTest
						groupType="and"
						shouldShowLabel={false}
					>
						<FiltrationConditionComponentTest
							filterablePropertyName="Покупка"
							filtrationMethodName="нет таких"
						/>
						<FiltrationConditionComponentTest
							filterablePropertyName="Первое действие"
							linkedConditionComponent={
								<FiltrationGroupComponentTest
									groupType="and"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponentTest
										filterablePropertyName="Период от текущей даты"
										filtrationMethodName="до"
										filtrationMethodParametersComponent={
											<>
												<span
													style={{
														fontWeight: "bold"
													}}
												>
													14 дней{" "}
												</span>
												<span
													style={{
														fontWeight: "normal"
													}}
												>
													назад
												</span>
											</>
										}
									/>
								</FiltrationGroupComponentTest>
							}
						/>
					</FiltrationGroupComponentTest>
				}
			/>

			<FiltrationConditionComponentTest
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponentTest
						groupType="and"
						shouldShowLabel={false}
					>
						<FiltrationConditionComponentTest
							filterablePropertyName="Покупка"
							filtrationMethodName="нет таких"
						/>
						<FiltrationConditionComponentTest
							filterablePropertyName="Первое действие"
							linkedConditionComponent={
								<FiltrationGroupComponentTest
									groupType="and"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponentTest
										filterablePropertyName="Период от текущей даты"
										filtrationMethodName="до"
										filtrationMethodParametersComponent={
											<>
												<span
													style={{
														fontWeight: "bold"
													}}
												>
													14 дней{" "}
												</span>
												<span
													style={{
														fontWeight: "normal"
													}}
												>
													назад
												</span>
											</>
										}
									/>
								</FiltrationGroupComponentTest>
							}
						/>
					</FiltrationGroupComponentTest>
				}
			/>
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
		<FiltrationGroupComponentExample3 />
	</div>,
	entryElement
);
