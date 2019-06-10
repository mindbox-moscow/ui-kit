```jsx
const options = [
	{
		id: 1,
		title: "Учебный год 2019–2020",
		details: ["Несовм. по заказу", "Макс. скидка: 30%"],
		children: null,
		selected: false
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
						children: null,
						selected: false
					},
					{
						id: 5,
						title: "Учебный год 2019–2020222",
						details: ["Несовм. по заказу", "Макс. скидка: 30%"],
						children: null,
						selected: true
					}
				],
				selected: false
			}
		],
		selected: false
	},
	{
		id: 6,
		title: "Учебный год 2019–2020",
		details: ["Несовм. по заказу", "Макс. скидка: 30%"],
		children: null,
		selected: false
	}
];

<SelectNested options={options} />;
```
