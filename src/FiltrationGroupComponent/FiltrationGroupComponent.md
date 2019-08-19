```jsx
<div style={{ display: "flex", justifyContent: "space-between" }}>
	<FiltrationGroupComponent
		groupType="or"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationConditionComponent
			filtrationObjectName="Розничный заказ"
			filtrationMethodName="есть такие"
			linkedConditionComponent={
				<FiltrationGroupComponent
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
				>
					<FiltrationConditionComponent
						filtrationObjectName="Покупка"
						filtrationMethodName="есть такие"
						linkedConditionComponent={
							<>
								<FiltrationGroupComponent
								>
									<FiltrationConditionComponent
										filtrationObjectName="Цена заполнена"
										filtrationMethodName="и от 5000"
									/>
								</FiltrationGroupComponent>
								<FiltrationConditionComponent
									filtrationObjectName="Первое действие"
									filtrationMethodName=""
									linkedConditionComponent={
										<FiltrationGroupComponent>
											<FiltrationConditionComponent
												filtrationObjectName="Период от текущей даты"
												filtrationMethodName="до 90 дней назад"
											/>
										</FiltrationGroupComponent>
									}
								/>
							</>
						}
					/>
				</FiltrationGroupComponent>
			}
		/>

		<FiltrationConditionComponent
			filtrationObjectName="Розничный заказ"
			filtrationMethodName="в количестве"
			linkedConditionComponent={
				<FiltrationGroupComponent
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={false}
				>
					<FiltrationConditionComponent
						filtrationObjectName="Покупка"
						filtrationMethodName="нет таких"
					/>

					<FiltrationConditionComponent
						filtrationObjectName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent>
								<FiltrationConditionComponent
									filtrationObjectName="Период от текущей даты"
									filtrationMethodName="до 14 дней назад"
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
		/>
	</FiltrationGroupComponent>
</div>
```
