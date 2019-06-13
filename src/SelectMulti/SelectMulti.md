```jsx
const options = [
	{
		title: "Запущена",
		value: "started"
	},
	{
		title: "Запущена (тест)",
		value: "started_test"
	},
	{
		title: "Остановлена",
		value: "stopped"
	}
];

<SelectMulti
	options={options}
	name="status"
	onChange={selectedOptions => console.log(selectedOptions)}
/>;
```
