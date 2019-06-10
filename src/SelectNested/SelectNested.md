```jsx
const options = [
	{
		id: 1,
		title: "Учебный год 2019–2020",
		details: ["Несовм. по заказу", "Макс. скидка: 30%"],
		children: null
	},
	{
		id: 2,
		title: "Акции с кассы",
		details: [
			"Без несовместимости",
			"Суммирование акций",
			"Макс. скидка: 35%"
		],
		children: [
			{
				id: 3,
				title: "Учебный год 2019–2020",
				details: ["Несовм. по заказу", "Макс. скидка: 30%"],
				children: [
					{
						id: 4,
						title: "Учебный год 2019–2020",
						details: ["Несовм. по заказу", "Макс. скидка: 30%"],
						children: null
					},
					{
						id: 5,
						title: "Учебный год 2019–2020222",
						details: ["Несовм. по заказу", "Макс. скидка: 30%"],
						children: null,
						disabled: true
					}
				]
			}
		]
	},
	{
		id: 6,
		title: "Учебный год 2019–2020",
		details: ["Несовм. по заказу", "Макс. скидка: 30%"],
		children: null
	}
];

<SelectNested
	options={options}
	selectedOption={options[0]}
	onChange={newSelectedOption => console.log(newSelectedOption)}
/>;
```
