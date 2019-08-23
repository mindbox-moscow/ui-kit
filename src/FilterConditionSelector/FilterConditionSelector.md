```jsx
const EditorComponentExample = () => {
	return (
		<div>
			<div style={{ display: "flex", marginBottom: "12px" }}>
				<div style={{ marginRight: "10px", width: "190px" }}>
					<Select
						hasDescriptions={true}
						placeholder="Заполнена и"
						items={[
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
						]}
					/>
				</div>
				<div style={{ width: "190px" }}>
					<Select
						hasDescriptions={true}
						placeholder="равна"
						items={[
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
						]}
					/>
				</div>
			</div>
			<Input noShadow />

			<button
				style={{
					marginTop: "15px",
					width: "100%",
					height: "32px",
					borderRadius: "3px",
					backgroundColor: "#E2EAF0",
					border: "0",
					fontFamily: "PT Sans",
					fontSize: "13px",
					lineHeight: "18px",
					color: "#ADADAD"
				}}
			>
				Добавить фильтр
			</button>
		</div>
	);
};

const hierarchy = [
	{
		id: "behaviour",
		type: "filtrationObjectCategory",
		name: "Поведение",
		helpCaption: "Поведение Caption",
		hasChildren: true,
		isExpanded: false,
		onSelect: () => null,
		toggleExpand: () => null,
		editorComponent: null,
		isSelected: false,
		getChildren: () => null,
		helpComponent: <div>Хелп к категории "Поведение"</div>
	},
	{
		id: "empty",
		type: "filtrationObjectCategory",
		name: "Пустая тестовая категория",
		helpCaption: "Ссылка на установку электронной карты",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => null,
		toggleExpand: () => null,
		editorComponent: EditorComponentExample(),
		isSelected: false,
		getChildren: () => [],
		helpComponent: (
			<div>
				Что важно, мы настраиваемся на всю выручку и смотрим все заказы.
				Т.е. видим чистый добавленный эффект, не искаженный никакими
				атрибуциями. Если бы мы смотрели на атрибуцию, которая
				используется, например, в Google Analytics по умолчанию, то
				попали бы в ловушку. Контроль частоты снижает эффект
				каннибализации каналов, и очень вероятно мы бы увидели падение
				выручки в том числе там, где на самом деле ее нет.
			</div>
		)
	}
];

class ExampleComponent extends React.Component {
	constructor() {
		super();
		this.state = { showPopup: false };
		this.togglePopup = this.togglePopup.bind(this);
	}

	togglePopup() {
		console.log("hello");
		this.setState(state => ({
			showPopup: !state.showPopup
		}));
	}
	render() {
		return (
			<>
				<FilterPanel
					addAndFilterBtnText="Добавить фильтр"
					addOrFilterBtnText="ИЛИ"
					hintText="Добавьте фильтр, чтобы создать выборку клиентов"
					clientsCountText="Всего клиентов"
					clientsCount="1 021 318"
					onAddAndFilter={this.togglePopup}
					onAddOrFilter={this.togglePopup}
				/>
				{this.state.showPopup && (
					<FilterConditionSelector
						hierarchy={hierarchy}
						selectedElement={hierarchy[1]}
					/>
				)}
			</>
		);
	}
}

<div style={{ position: "relative" }}>
	<ExampleComponent />
</div>;
```
