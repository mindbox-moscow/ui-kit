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

const options2 = [
	{
		title: "Запущена",
		value: "started",
		checked: true
	},
	{
		title: "Запущена (тест)",
		value: "started_test",
		checked: true
	},
	{
		title: "Остановлена",
		value: "stopped",
		checked: true
	}
];

const options3 = [
	{
		title: "Запущена",
		value: "started",
		checked: true
	},
	{
		title: "Запущена (тест)",
		value: "started_test",
		checked: true
	},
	{
		title: "Остановлена",
		value: "stopped"
	},
	{
		title: "Завершена",
		value: "ended"
	}
];

const textKeys = {
	all: "Все",
	except: "кроме",
	and: "и"
};

<>
	<div style={{ width: "50%" }}>
		<SelectMulti
			options={options}
			name="status"
			placeholder="Все статусы"
			onChange={selectedOptions => console.log(selectedOptions)}
		/>
	</div>
	<div style={{ width: "50%", marginTop: "15px" }}>
		<SelectMulti
			options={options2}
			name="status2"
			placeholder="Все статусы"
			textKeys={textKeys}
			onChange={selectedOptions => console.log(selectedOptions)}
		/>
	</div>
	<div style={{ width: "50%", marginTop: "15px" }}>
		<SelectMulti
			options={options3}
			name="status3"
			placeholder="Все статусы"
			textKeys={textKeys}
			onChange={selectedOptions => console.log(selectedOptions)}
		/>
	</div>
</>;
```
