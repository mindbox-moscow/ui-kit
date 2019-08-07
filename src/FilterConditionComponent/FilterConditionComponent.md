```jsx
<div style={{}}>
	<FilterConditionComponent
		typeOfCondition="нет таких"
		nameOfList={"Розничный заказ"}
		isBooleanCondition={true}
	/>
	<FilterConditionComponent
		isNested={true}
		typeOfCondition="есть такие"
		nameOfList={"Что-нибудь"}
	>
		<FilterConditionComponent
			isNested={true}
			typeOfCondition="есть такие"
			nameOfList={"Видео, аудио"}
		>
			<FilterConditionComponent
				isNested={true}
				typeOfCondition="Нет таких"
				nameOfList={"Что-то ещё"}
			/>
		</FilterConditionComponent>
	</FilterConditionComponent>
</div>
```
