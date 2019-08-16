```jsx
<div style={{ display: "flex", justifyContent: "space-between" }}>
	<FiltrationGroupComponent
		groupType="or"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationGroupComponent groupType="and" andLabel="И">
			<FiltrationConditionComponent
				filtrationObjectName="Розничный заказ"
				filtrationMethodName="есть такие"
			/>
		</FiltrationGroupComponent>

		<FiltrationGroupComponent>
			<FiltrationConditionComponent
				filtrationObjectName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponent
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
					>
						<FiltrationConditionComponent
							filtrationObjectName="Цена"
							filtrationMethodName="заполнена и"
						/>
						<FiltrationConditionComponent
							filtrationObjectName="Розничный заказ"
							filtrationMethodName="нет таких"
						/>
					</FiltrationGroupComponent>
				}
			/>
		</FiltrationGroupComponent>
	</FiltrationGroupComponent>
</div>
```
