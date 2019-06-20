```jsx
const options = [
	{
		title: "Запущена",
		value: "started"
	},
	{
		title: "Запущена (тест)",
		value: "started_test",
		checked: true
	},
	{
		title: "Остановлена",
		value: "stopped",
		disabled: true
	}
];

<div style={{ width: "50%" }}>
	<SelectMulti
		options={options}
		name="status"
		placeholder="Все статусы"
		onChange={selectedOptions => console.log(selectedOptions)}
	/>
</div>;
```
