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
			filtrationMethodName="в количестве"
			linkedConditionComponent={
				<FiltrationGroupComponent
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={false}
classname="kit-filtration-group__child"
				>
					<FiltrationConditionComponent
						filtrationObjectName="Цена"
						filtrationMethodName="заполнена и"
className="kit-filtration-condition__last-child"
					/>

					<FiltrationConditionComponent filtrationObjectName="Доступен" />
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
						filtrationObjectName="Цена"
						filtrationMethodName="заполнена и"
className="kit-filtration-condition__last-child"
					/>

					<FiltrationConditionComponent filtrationObjectName="Доступен" />
				</FiltrationGroupComponent>
			}
		/>
	</FiltrationGroupComponent>
</div>
```
