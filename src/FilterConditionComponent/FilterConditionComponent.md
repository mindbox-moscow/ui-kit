```jsx
<div style={{}}>
	<FilterConditionComponent
		filtrationMethodName="нет таких"
		filtrationObjectName={"Розничный заказ"}
		isBooleanCondition={true}
	/>
	<FilterConditionComponent
		isNested={true}
		filtrationMethodName="есть такие"
		filtrationObjectName={"Что-нибудь"}
	>
		<FilterConditionComponent
			isNested={true}
			filtrationMethodName="есть такие"
			filtrationObjectName={"Видео, аудио"}
		>
			<FilterConditionComponent
				isNested={true}
				filtrationMethodName="Нет таких"
				filtrationObjectName={"Что-то ещё"}
			/>
		</FilterConditionComponent>
	</FilterConditionComponent>
</div>
```
