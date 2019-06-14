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

<SelectMulti
	options={options}
	name="status"
	onChange={selectedOptions => console.log(selectedOptions)}
/>;
```
