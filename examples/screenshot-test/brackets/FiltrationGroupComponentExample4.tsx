import React from "react";
import ReactDOM from "react-dom";

import {
	FiltrationConditionComponentTest,
	FiltrationGroupComponentTest
} from "../utils";

const FiltrationGroupComponentExample4 = () => {
	return (
		<FiltrationGroupComponentTest groupType="or" shouldShowLabel={true}>
			<FiltrationGroupComponentTest
				groupType="and"
				shouldShowLabel={true}
			>
				<FiltrationConditionComponentTest
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и"
					filtrationMethodParametersComponent={
						<span style={{ fontWeight: "bold" }}>Женский</span>
					}
					linkedConditionComponent={
						<FiltrationGroupComponentTest
							groupType="and"
							shouldShowLabel={false}
						>
							<FiltrationConditionComponentTest
								filterablePropertyName="Покупка"
								filtrationMethodName="нет таких"
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
														14 дней
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
														14 дней
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
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и"
					filtrationMethodParametersComponent={
						<span style={{ fontWeight: "bold" }}>Мужской</span>
					}
				/>
			</FiltrationGroupComponentTest>

			<FiltrationGroupComponentTest
				groupType="and"
				shouldShowLabel={true}
			>
				<FiltrationConditionComponentTest
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и"
					filtrationMethodParametersComponent={
						<span style={{ fontWeight: "bold" }}>Женский</span>
					}
				/>
				<FiltrationConditionComponentTest
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и"
					filtrationMethodParametersComponent={
						<span style={{ fontWeight: "bold" }}>Мужской</span>
					}
				/>
			</FiltrationGroupComponentTest>

			<FiltrationGroupComponentTest
				groupType="and"
				shouldShowLabel={true}
			>
				<FiltrationConditionComponentTest
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и"
					filtrationMethodParametersComponent={
						<span style={{ fontWeight: "bold" }}>Женский</span>
					}
				/>
				<FiltrationConditionComponentTest
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и"
					filtrationMethodParametersComponent={
						<span style={{ fontWeight: "bold" }}>Мужской</span>
					}
				/>
			</FiltrationGroupComponentTest>

			<FiltrationGroupComponentTest
				groupType="and"
				shouldShowLabel={true}
			>
				<FiltrationConditionComponentTest
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и"
					filtrationMethodParametersComponent={
						<span style={{ fontWeight: "bold" }}>Женский</span>
					}
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
														14 дней
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
														14 дней
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
		<FiltrationGroupComponentExample4 />
	</div>,
	entryElement
);
