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
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		isSelected: false,
		getChildren: () => arraySecondChild,
	}
];

const arraySecondChild = [
	{
		id: "behaviour",
		type: "filtrationObjectCategory",
		name: "Поведение",
		hasChildren: true,
		isExpanded: false,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		isSelected: false,
		getChildren: () => [],
	}
];

const childrenData = [
	{
		id: "behaviour",
		type: "simpleFiltrationObject",
		name: "Простой фильтр",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		isSelected: false,
		getChildren: () => [],
	},
	{
		id: "behaviour",
		type: "simpleFiltrationObject",
		name: "Простой фильтр",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		isSelected: true,
		getChildren: () => [],
	},
	{
		id: "behaviour",
		type: "filtrationObjectCategory",
		name: "Простая категория",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Простая категория"),
		toggleExpand: () => console.log("toggleExpand Простая категория"),
		isSelected: false,
		getChildren: () => arrayFirstChild,
	}
];

const hierarchy = [
	{
		id: "behaviour",
		type: "filtrationObjectCategory",
		name: "Поведение",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		isSelected: false,
		getChildren: () => childrenData,
	},
	{
		id: "empty",
		type: "simpleFiltrationObject",
		name: "Пустая тестовая категория",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Пустая тестовая категория"),
		toggleExpand: () =>
			console.log("toggleExpand Пустая тестовая категория"),
		isSelected: false,
		getChildren: () => [],
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
							helpCaption="Ссылка на установку электронной карты"
							helpComponent={
								<div>
									Что важно, мы настраиваемся на всю выручку и
									смотрим все заказы. Т.е. видим чистый
									добавленный эффект, не искаженный никакими
									атрибуциями. Если бы мы смотрели на
									атрибуцию, которая используется, например, в
									Google Analytics по умолчанию, то попали бы
									в ловушку. Контроль частоты снижает эффект
									каннибализации каналов, и очень вероятно мы
									бы увидели падение выручки в том числе там,
									где на самом деле ее нет.
								</div>
							}
							editorComponent={
								<FilterConditionEditorComponent
									innerEditorComponent={EditorComponentExample()}
									addFilterButtonCaption="Добавить фильтр"
									isAddFilterButtonEnabled={false}
									onAddFilterButtonClick={() =>
										console.log("фильтр добавлен")
									}
								/>
							}
							filterLabel="Фильтры"
							recentLabel="Недавние"
							savedLabel="Сохранённые"
							examplesLabel="Примеры"
							onModeChanged={mode => console.log(mode)}
							menuMode="filter"
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
