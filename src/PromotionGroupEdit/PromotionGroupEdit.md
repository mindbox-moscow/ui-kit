```jsx
const labels = {
	titleField: "Название группы",
	parentGroupField: "Родительская группа",
	rulesField: "Правила применения акций",
	maxDiscountField: "Максимальный процент скидки",
	maxDiscountCheckbox:
		"Ограничить максимальный процент скидки для группы на уровне",
	submitBtn: "Сохранить изменения",
	cancelBtn: "Отменить"
};

const groups = [
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
];

const parentGroupData = {
	options: groups,
	submitBtnText: "Выбрать",
	cancelBtnText: "Отменить",
	showSubgroupBtnText: "Показать подгруппы"
};

const rules1 = [
	{
		title: "Максимальная выгода",
		description:
			"Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
	},
	{
		title: "Последовательное применение",
		description:
			"История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
	}
];

const rules2 = [
	{ title: "На уровне товара" },
	{ title: "На уровне товара 1" },
	{ title: "На уровне товара 2" }
];

const rule1Data = {
	items: rules1,
	placeholder: "Выбрать"
};

const rule2Data = {
	items: rules2,
	placeholder: "Выбрать"
};

const data = {
	title: "Снова в школу",
	parentGroup: groups[0].children[0],
	rule1: rules1[0],
	rule2: rules2[0],
	maxDiscount: 50,
	hasMaxDiscount: true
};

<PromotionGroupEdit
	data={data}
	labels={labels}
	parentGroupData={parentGroupData}
	rule1Data={rule1Data}
	rule2Data={rule2Data}
	onClose={() => console.log("PromotionGroupEdit closed")}
	onSubmit={(_, data) => console.log(data)}
/>;
```
