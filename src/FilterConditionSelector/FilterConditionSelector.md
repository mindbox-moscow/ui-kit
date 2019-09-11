```jsx
const EditorComponentExample = () => {
	return (
		<div>
			<div style={{ display: "flex", marginBottom: "12px" }}>
				<div style={{ marginRight: "10px", width: "190px" }}>
					<Select
						hasDescriptions={true}
						placeholder="Выберите"
						items={[
							{
								title: "Заполнена и"
							},
							{
								title: "Не заполнена и"
							}
						]}
						defaultValue="Заполнено и"
					/>
				</div>
				<div style={{ width: "190px" }}>
					<Select
						hasDescriptions={true}
						placeholder="Выберите"
						items={[
							{
								title: "равна"
							},
							{
								title: "не равна"
							}
						]}
						defaultValue="равна"
					/>
				</div>
			</div>
			<Input noShadow />
		</div>
	);
};

const arrayFirstChild = [
	{
		id: "behaviour",
		type: "filtrationObjectCategory",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<FilterConditionEditorComponent
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		getChildren: () => arraySecondChild,
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	}
];

const arraySecondChild = [
	{
		id: "behaviour",
		type: "filtrationObjectCategory",
		name: "Поведение",
		helpCaption: "Поведение Caption",
		hasChildren: true,
		isExpanded: false,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		editorComponent: null,
		isSelected: false,
		getChildren: () => [],
		helpComponent: <div>Хелп к категории "Поведение"</div>
	}
];

const childrenData = [
	{
		id: "behaviour",
		type: "simpleFiltrationObject",
		name: "Простой фильтр",
		helpCaption: "Простой фильтр Caption",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<FilterConditionEditorComponent
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		getChildren: () => [],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	{
		id: "behaviour",
		type: "simpleFiltrationObject",
		name: "Простой фильтр",
		helpCaption: "Простой фильтр Caption",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<FilterConditionEditorComponent
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: true,
		getChildren: () => [],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	{
		id: "behaviour",
		type: "filtrationObjectCategory",
		name: "Простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Простая категория"),
		toggleExpand: () => console.log("toggleExpand Простая категория"),
		editorComponent: (
			<FilterConditionEditorComponent
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		getChildren: () => arrayFirstChild,
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	}
];

const hierarchy = [
	{
		id: "behaviour",
		type: "filtrationObjectCategory",
		name: "Поведение",
		helpCaption: "Поведение Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		editorComponent: null,
		isSelected: false,
		getChildren: () => childrenData,
		helpComponent: <div>Хелп к категории "Поведение"</div>
	},
	{
		id: "empty",
		type: "simpleFiltrationObject",
		name: "Пустая тестовая категория",
		helpCaption: "Ссылка на установку электронной карты",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Пустая тестовая категория"),
		toggleExpand: () =>
			console.log("toggleExpand Пустая тестовая категория"),
		editorComponent: (
			<FilterConditionEditorComponent
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
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
				<FilterWrapper
					statisticsDescription="Потребителей найдено"
					statisticsValue={50248}
					applyButtonCaption="Применить фильтр"
					onApply={() => {
						console.log("apply filter");
					}}
				>
					<FilterConditionEditorButton
						label="Добавить фильтр"
						isOpened={this.state.showPopup}
						toggleOpen={this.togglePopup}
					>
						<FilterConditionSelector
							hierarchy={hierarchy}
							selectedElement={hierarchy[0]}
							filterLabel={"Фильтры"}
							recentLabel={"Недавние"}
							savedLabel={"Сохранённые"}
							examplesLabel={"Примеры"}
                            onModeChanged={"filter"}
						/>
					</FilterConditionEditorButton>
				</FilterWrapper>
			</>
		);
	}
}

<div style={{ position: "relative" }}>
	<ExampleComponent />
</div>;
```
