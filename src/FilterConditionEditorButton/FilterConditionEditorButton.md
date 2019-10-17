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
		type: "simpleFilterableProperty",
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
		type: "filterablePropertyCategory",
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
	baseHitSource: {
		id: "baseHitSource",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
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
	clickRate: {
		id: "clickRate",
		type: "simpleFilterableProperty",
		name: "Процент открытий и кликов",
		helpCaption: "Процент открытий и кликов",
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
	electronicCard: {
		id: "electronicCard",
		type: "simpleFilterableProperty",
		name: "Ссылка на установку электронной карты",
		helpCaption: "Ссылка на установку электронной карты",
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
		type: "simpleFilterableProperty",
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
		helpComponent: (
			<div>
				Разнообразный и богатый опыт новая модель организационной
				деятельности играет важную роль в формировании существенных
				финансовых и административных условий. Задача организации, в
				особенности же укрепление и развитие структуры представляет
				собой интересный эксперимент проверки направлений прогрессивного
				развития. Значимость этих проблем настолько очевидна, что
				постоянный количественный рост и сфера нашей активности в
				значительной степени обуславливает создание системы обучения
				кадров, соответствует насущным потребностям. Идейные соображения
				высшего порядка, а также новая модель организационной
				деятельности позволяет выполнять важные задания по разработке
				модели развития. Разнообразный и богатый опыт новая модель
				организационной деятельности влечет за собой процесс внедрения и
				модернизации соответствующий условий активизации. Задача
				организации, в особенности же сложившаяся структура организации
				позволяет выполнять важные задания по разработке направлений
				прогрессивного развития.
			</div>
		)
	},
	personalData: {
		id: "personalData",
		type: "filterablePropertyCategory",
		name: "Персональные данные",
		helpCaption: "Персональные данные",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Персональные данные"),
		toggleExpand: () => console.log("toggleExpand Персональные данные"),
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
	additionalFields: {
		id: "additionalFields",
		type: "filterablePropertyCategory",
		name: "Дополнительные поля",
		helpCaption: "Дополнительные поля",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Дополнительные поля"),
		toggleExpand: () => console.log("toggleExpand Дополнительные поля"),
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
	organization: {
		id: "organization",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
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
	tech: {
		id: "tech",
		type: "filterablePropertyCategory",
		name: "Техническое",
		helpCaption: "Техническое",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Техническое"),
		toggleExpand: () => console.log("toggleExpand Техническое"),
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
	customerFeatures: {
		id: "customerFeatures",
		type: "filterablePropertyCategory",
		name: "Характеристики клиента",
		helpCaption: "Характеристики клиента",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		editorComponent: null,
		isSelected: false,
		childIds: [
			"baseHitSource",
			"electronicCard",
			"clickRate",
			"personalData",
			"additionalFields",
			"organization",
			"tech"
		],
		helpComponent: <div>Хелп к категории "Поведение"</div>
	},
	newsletters: {
		id: "newsletters",
		type: "filterablePropertyCategory",
		name: "Рассылки",
		helpCaption: "Рассылки",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		editorComponent: null,
		isSelected: false,
		childIds: [],
		helpComponent: <div>Хелп к категории "Поведение"</div>
	},
	shopping: {
		id: "shopping",
		type: "filterablePropertyCategory",
		name: "Покупки",
		helpCaption: "Покупки",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		editorComponent: null,
		isSelected: false,
		childIds: [],
		helpComponent: <div>Хелп к категории "Поведение"</div>
	},
	loyaltyProgram: {
		id: "loyaltyProgram",
		type: "filterablePropertyCategory",
		name: "Программа лояльности",
		helpCaption: "Программа лояльности",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		editorComponent: null,
		isSelected: false,
		childIds: [],
		helpComponent: <div>Хелп к категории "Поведение"</div>
	},
	behaviour: {
		id: "behaviour",
		type: "filterablePropertyCategory",
		name: "Поведение",
		helpCaption: "Поведение",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		editorComponent: null,
		isSelected: false,
		childIds: [],
		helpComponent: <div>Хелп к категории "Поведение"</div>
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
					searchTerm="ещё"
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
				behaviour: false,
				personalData: false,
				secondCategory: false,
				thirdCategory: false
			}
		};
		this.togglePopup = this.togglePopup.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onToggleExpand = this.onToggleExpand.bind(this);
	}

	componentDidMount() {
		if (this.refElement && this.refElement.current) {
			console.log(this.refElement);
		}
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
		return (
			<>
				<FilterWrapper
					filterActions={[]}
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
						childRenderer={createChildRenderer(
							this.onSelect,
							this.onToggleExpand,
							this.state
						)}
						rootIds={[
							"customerFeatures",
							"behaviour",
							"newsletters",
							"shopping",
							"loyaltyProgram"
						]}
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
						filterLabel="Фильтры"
						recentLabel="Недавние"
						savedLabel="Сохранённые"
						examplesLabel="Примеры"
						onModeChanged={mode => console.log(mode)}
						menuMode="filter"
					/>
				</FilterWrapper>
			</>
		);
	}
}

<div style={{ position: "relative" }}>
	<ExampleComponent />
</div>;
```
