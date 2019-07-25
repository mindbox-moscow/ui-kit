```jsx
const labels = {
	titleField: "Название группы",
	parentGroupField: "Родительская группа",
	groupCalculationStrategyField: "Правила применения акций",
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

const groupCalculationStrategyData = [
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

const arbitrationModeData = [
	{ title: "На уровне товара" },
	{ title: "На уровне товара 1" },
	{ title: "На уровне товара 2" }
];

const groupCalculationStrategyList = {
	items: groupCalculationStrategyData,
	placeholder: "Выбрать"
};

const arbitrationModeList = {
	items: arbitrationModeData,
	placeholder: "Выбрать"
};

const data = {
	title: "Снова в школу",
	parentGroup: groups[0].children[0],
	groupCalculationStrategy: groupCalculationStrategyData[0],
	arbitrationMode: arbitrationModeData[0],
	maxDiscount: 50,
	hasMaxDiscount: true,
};
const secondData = {
	title: "Снова в школу",
	parentGroup: groups[0].children[0],
	groupCalculationStrategy: groupCalculationStrategyData[0],
	arbitrationMode: arbitrationModeData[0],
	maxDiscount: 50,
	hasMaxDiscount: true
};

<div>
<PromotionGroupEdit
	data={data}
	labels={labels}
	parentGroupData={parentGroupData}
	groupCalculationStrategyList={groupCalculationStrategyList}
	arbitrationModeList={arbitrationModeList}
	onClose={() => console.log("PromotionGroupEdit closed")}
	onSubmit={(_, data) => console.log(data)}
/>

<br/>
<br/>

<PromotionGroupEdit
	titlePromo='Базовые правила применения акций'
	data={secondData}
	labels={labels}
	parentGroupData={parentGroupData}
	groupCalculationStrategyList={groupCalculationStrategyList}
	arbitrationModeList={arbitrationModeList}
	onClose={() => console.log("PromotionGroupEdit closed")}
	onSubmit={(_, data) => console.log(data)}
/>
</div>
```
