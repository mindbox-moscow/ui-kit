```jsx
<div style={{}}>
	<FiltrationConditionComponent
		filterablePropertyName="Цена"
		filtrationMethodName="заполнена и"
		moreConditionToggleCaption="Действие"
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
		moreConditionToggleCaption="Действие"
		moreActions={[
			{
				title: "Редактировать",
				onClick: () => console.log("Click")
			}
		]}
	/>
</div>
```
