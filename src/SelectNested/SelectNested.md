```jsx
const options = [
	{
		id: 1,
		title: "Товары двойного назначения",
		details: [
			"Несовм. по товарам",
			"Последовательное применение",
			"Макс. скидка: 30%"
		]
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
						title: "Призы и подарки",
						details: ["Несовм. по заказу", "Макс. скидка: 30%"]
					},
					{
						id: 5,
						title: "Школьные товары",
						details: ["Несовм. по заказу", "Макс. скидка: 30%"],
						disabled: true
					}
				]
			}
		]
	},
	{
		id: 6,
		title: "Горящие товары",
		details: ["Несовм. по заказу", "Макс. скидка: 30%"],
		children: [
			{
				id: 3,
				title: "Учебный год 2019–2020",
				details: ["Несовм. по заказу", "Макс. скидка: 30%"],
				children: [
					{
						id: 4,
						title: "Призы и подарки",
						details: ["Несовм. по заказу", "Макс. скидка: 30%"],
						children: [
							{
								id: 3,
								title: "Учебный год 2019–2020",
								details: [
									"Несовм. по заказу",
									"Макс. скидка: 30%"
								],
								children: [
									{
										id: 4,
										title: "Призы и подарки",
										details: [
											"Несовм. по заказу",
											"Макс. скидка: 30%"
										],
										children: [
											{
												id: 3,
												title: "Учебный год 2019–2020",
												details: [
													"Несовм. по заказу",
													"Макс. скидка: 30%"
												],
												children: [
													{
														id: 4,
														title:
															"Призы и подарки",
														details: [
															"Несовм. по заказу",
															"Макс. скидка: 30%"
														]
													},
													{
														id: 5,
														title:
															"Школьные товары",
														details: [
															"Несовм. по заказу",
															"Макс. скидка: 30%"
														],
														disabled: true
													}
												]
											}
										]
									},
									{
										id: 5,
										title: "Школьные товары",
										details: [
											"Несовм. по заказу",
											"Макс. скидка: 30%"
										],
										disabled: true
									}
								]
							}
						]
					},
					{
						id: 5,
						title: "Школьные товары",
						details: ["Несовм. по заказу", "Макс. скидка: 30%"],
						disabled: true
					}
				]
			}
		]
	}
];

<div style={{ background: "#fffaed", padding: "20px" }}>
	<div style={{ width: "446px" }}>
		<SelectNested
			options={options}
			selectedOption={options[1].children[0]}
			onChange={newSelectedOption => console.log(newSelectedOption)}
			submitBtnText="Выбрать"
			cancelBtnText="Отменить"
		/>
	</div>
</div>;
```
