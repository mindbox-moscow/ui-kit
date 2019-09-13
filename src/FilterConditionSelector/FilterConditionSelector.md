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

const allElementsDictionary = {
	secondCategory: {
		id: "secondCategory",
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
		childIds: ["thirdCategory"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	thirdCategory: {
		id: "thirdCategory",
		type: "filtrationObjectCategory",
		name: "Поведение",
		helpCaption: "Поведение Caption",
		hasChildren: true,
		isExpanded: false,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		editorComponent: null,
		isSelected: false,
		childIds: [],
		helpComponent: <div>Хелп к категории "Поведение"</div>
	},
	caption: {
		id: "caption",
		type: "simpleFiltrationObject",
		name: "Простой фильтр Caption",
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
		childIds: [],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	name: {
		id: "name",
		type: "simpleFiltrationObject",
		name: "Простой фильтр Name",
		helpCaption: "Простой фильтр Name",
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
		childIds: [],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	firstCategory: {
		id: "firstCategory",
		type: "filtrationObjectCategory",
		name: "Простая категория Caption",
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
		childIds: ["secondCategory"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	behaviour: {
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
		childIds: ["caption", "name", "firstCategory"],
		helpComponent: <div>Хелп к категории "Поведение"</div>
	},
	empty: {
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
		childIds: [],
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
};

const createChildRenderer = (
	onSelectCallback,
	onToggleExpandCallback,
	state
) => {
	return class ExampleChildRenderer extends React.Component {
		constructor() {
			super();

			this.onSelect = this.onSelect.bind(this);
			this.onToggleExpand = this.onToggleExpand.bind(this);
		}

		onSelect() {
			onSelectCallback(this.props.id);
		}
		onToggleExpand() {
			onToggleExpandCallback(this.props.id);
		}

		render() {
			const { name, type, childIds } = allElementsDictionary[
				this.props.id
			];

			return (
				<FilterConditionSelectorItem
					id={this.props.id}
					name={name}
					type={type}
					isSelected={this.props.id === state.selectedId}
					childIds={childIds}
					isExpanded={state.expansionState[this.props.id]}
					childRenderer={ExampleChildRenderer}
					onSelect={this.onSelect}
					toggleExpand={this.onToggleExpand}
				/>
			);
		}
	};
};

class ExampleComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			showPopup: false,
			selectedId: "name",
			expansionState: {
				behaviour: true,
				firstCategory: true,
				secondCategory: true,
				thirdCategory: false
			}
		};
		this.togglePopup = this.togglePopup.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onToggleExpand = this.onToggleExpand.bind(this);
	}

	onSelect(id) {
		this.setState({
			selectedId: id
		});
	}

	onToggleExpand(id) {
		console.log("onToggleExpand", id);
		this.setState(oldState => ({
			...oldState,
			expansionState: {
				...oldState.expansionState,
				...{ [id]: !(oldState.expansionState[id] || false) }
			}
		}));
	}

	togglePopup() {
		console.log("hello");
		this.setState(oldState => ({
			...oldState,
			showPopup: !oldState.showPopup
		}));
	}

	render() {
		console.log(this.state);
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
							childRenderer={createChildRenderer(
								this.onSelect,
								this.onToggleExpand,
								this.state
							)}
							rootIds={["behaviour", "empty"]}
							helpComponent={
								allElementsDictionary[this.state.selectedId]
									.helpComponent
							}
							editorComponent={
								allElementsDictionary[this.state.selectedId]
									.editorComponent
							}
							helpCaption={
								allElementsDictionary[this.state.selectedId]
									.helpCaption
							}
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
