```jsx
<div style={{}}>
	<FiltrationConditionComponent
		filterablePropertyName="Цена"
		filtrationMethodName="заполнена и"
		moreConditionToggle="Действие"
		moreActions={[
			{
				title: "Редактировать",
				onClick: () => console.log("Click")
			}
		]}
	/>
	<FiltrationConditionComponent
		filterablePropertyName="Розничный заказ"
		filtrationMethodName="в количестве"
		moreConditionToggle="Действие"
		moreActions={[
			{
				title: "Редактировать",
				onClick: () => console.log("Click")
			}
		]}
	/>
</div>
```
