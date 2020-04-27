```jsx
const { Fragment } = require("react");
const months = [
	"Янв",
	"Фев",
	"Мар",
	"Апр",
	"Май",
	"Июн",
	"Июл",
	"Авг",
	"Сен",
	"Окт",
	"Ноя",
	"Дек"
];

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

class ExampleSegmentButtonExpand extends React.Component {
	constructor() {
		super();
		this.state = {
			isShow: false
		};

		this.handleShowPopover = this.handleShowPopover.bind(this);
	}

	handleShowPopover() {
		this.setState({
			isShow: !this.state.isShow
		});
	}

	render() {
		const { isShow } = this.state;
		const { children } = this.props;

		return (
			<SegmentButtonExpand
				onClick={this.handleShowPopover}
				isOpen={isShow}
				filterActionCaption="Использовать как фильтр"
				filterActionClick={() => {}}
				filterActionShow={false}
			>
				{children}
			</SegmentButtonExpand>
		);
	}
}

class ExampleFlatSelectorSimple extends React.Component {
	constructor() {
		super();
		this.state = {
			values: "male"
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(values) {
		this.setState({
			values: values
		});
	}

	render() {
		return (
			<FlatSelector
				onChange={this.handleChange}
				value={this.state.values}
				allowMultiple={false}
				items={[
					{
						key: "male",
						text: "Мужской"
					},
					{
						key: "female",
						text: "Женский"
					}
				]}
			/>
		);
	}
}

class ExampleFlatSelect extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [true, false],
			selectedValue: true,
			height: 2,
			width: 3
		};
	}

	onFiltrationMethodSettingsUpdated(value) {
		this.setState({
			selectedValue: value
		});
	}

	render() {
		const { items, selectedValue, height, width } = this.state;

		const itemFormatter = value => ({
			key: value ? "true" : "false",
			text: value ? "Да" : "Нет",
			value
		});

		return (
			<FlatSelect
				items={items}
				selectedValue={selectedValue}
				height={height}
				width={width}
				itemFormatter={itemFormatter}
				selectElementCaption="Выбрать элемент"
				loadListCaption="Загрузка..."
				onChange={value =>
					this.onFiltrationMethodSettingsUpdated(value)
				}
			/>
		);
	}
}

const EditorComponentExample = () => {
	return (
		<GridContainer>
			<GridRow>
				<GridColumn col={4}>
					<ExampleFlatSelect />
				</GridColumn>
				<GridColumn col={4}>
					<ExampleFlatSelect />
				</GridColumn>
			</GridRow>
			<GridRow>
				<GridColumn col={12}>
					<Input noShadow />
				</GridColumn>
			</GridRow>
		</GridContainer>
	);
};

const segmentViewHistory = () => (
	<GridContainer>
		<GridRow>
			<GridColumn col={4}>
				<Select
					hasDescriptions={true}
					placeholder="Выберите"
					items={[
						{
							title: "Сегмент"
						}
					]}
					defaultValue="Сегмент"
				/>
			</GridColumn>
			<GridColumn />
			<GridColumn>
				<Form>
					<FormField label="Дата:">
						<DateField
							onChange={() => null}
							months={months}
							days={days}
							value={new Date(2019, 11, 9)}
							noShadow={true}
						/>
					</FormField>
					<FormField>
						<TimeField hours={7} minutes={0} noShadow={true} />
					</FormField>
				</Form>
			</GridColumn>
		</GridRow>
		<GridRow>
			<GridColumn col={12}>
				<Wrapper>Сегментация</Wrapper>
				<Select
					hasDescriptions={true}
					placeholder="Выберите"
					items={[
						{
							title: "Подписан на рекламные рассылки"
						}
					]}
					defaultValue="Подписан на рекламные рассылки"
				/>
			</GridColumn>
		</GridRow>
		<GridRow>
			<GridColumn col={12}>
				<Popover
					buttonCaptionOpen="Развернуть состав сегмента"
					buttonCaptionClose="Свернуть состав сегмента"
				>
					<FiltrationConditionComponent
						state="readOnly"
						filterablePropertyName="Подписка Подписан на что-нибудь"
						filtrationMethodName="без учета брендов, каналов и тематик"
						linkedConditionComponent={
							<FiltrationGroupComponent
								onClickOutside={() => {}}
								state="readOnly"
								groupType="or"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={true}
							>
								<FiltrationConditionComponent
									state="readOnly"
									filterablePropertyName="Email: заполнен и валидный"
								/>
								<FiltrationConditionComponent
									state="readOnly"
									filterablePropertyName="Мобильный телефон: заполнен и валидный"
								/>
							</FiltrationGroupComponent>
						}
					/>
				</Popover>
			</GridColumn>
		</GridRow>
	</GridContainer>
);

const segmentView = () => (
	<GridContainer>
		<GridRow>
			<GridColumn col={4}>
				<Select
					hasDescriptions={true}
					placeholder="Выберите"
					items={[
						{
							title: "Сегмент"
						}
					]}
					defaultValue="Сегмент"
				/>
			</GridColumn>
		</GridRow>
		<GridRow>
			<GridColumn col={12}>
				<Wrapper>Сегментация</Wrapper>
				<Select
					hasDescriptions={true}
					placeholder="Выберите"
					items={[
						{
							title: "Подписан на рекламные рассылки"
						}
					]}
					defaultValue="Подписан на рекламные рассылки"
				/>
			</GridColumn>
		</GridRow>
		<GridRow>
			<GridColumn col={12}>
				<Popover
					buttonCaptionOpen="Развернуть состав сегмента"
					buttonCaptionClose="Свернуть состав сегмента"
				>
					<FiltrationConditionComponent
						state="readOnly"
						filterablePropertyName="Подписка Подписан на что-нибудь"
						filtrationMethodName="без учета брендов, каналов и тематик"
						linkedConditionComponent={
							<FiltrationGroupComponent
								onClickOutside={() => {}}
								state="readOnly"
								groupType="or"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={true}
							>
								<FiltrationConditionComponent
									state="readOnly"
									filterablePropertyName="Email: заполнен и валидный"
								/>
								<FiltrationConditionComponent
									state="readOnly"
									filterablePropertyName="Мобильный телефон: заполнен и валидный"
									linkedConditionComponent={
										<FiltrationGroupComponent
											onClickOutside={() => {}}
											state="readOnly"
											groupType="and"
											andLabel="И"
											orLabel="ИЛИ"
											shouldShowLabel={true}
											addSimpleConditionButton={
												<FilterConditionEditorButton
													toggleOpen={() =>
														console.log("toggle")
													}
													isOpened={false}
													label="Добавить фильтр"
												/>
											}
											addGroupConditionButton={
												<FilterConditionEditorButton
													toggleOpen={() =>
														console.log("toggle")
													}
													isOpened={false}
													label="ИЛИ"
												/>
											}
											onGroupTypeToggle={() =>
												console.log("type toggle")
											}
											onConditionStateToggle={() =>
												console.log("state toggle")
											}
											onConditionRemove={() =>
												console.log("remove")
											}
										>
											<FiltrationConditionComponent
												state="readOnly"
												filterablePropertyName="Подписка Подписан на что-нибудь"
												filtrationMethodName="без учета брендов, каналов и тематик"
											/>
											<FiltrationGroupComponent
												onClickOutside={() => {}}
												state="readOnly"
												groupType="or"
												andLabel="И"
												orLabel="ИЛИ"
												shouldShowLabel={true}
												addSimpleConditionButton={
													<FilterConditionEditorButton
														toggleOpen={() =>
															console.log(
																"toggle"
															)
														}
														isOpened={false}
														label="Добавить фильтр"
													/>
												}
												addGroupConditionButton={
													<FilterConditionEditorButton
														toggleOpen={() =>
															console.log(
																"toggle"
															)
														}
														isOpened={false}
														label="ИЛИ"
													/>
												}
												onGroupTypeToggle={() =>
													console.log("type toggle")
												}
												onConditionStateToggle={() =>
													console.log("state toggle")
												}
												onConditionRemove={() =>
													console.log("remove")
												}
											>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Подписка Подписан на что-нибудь"
													filtrationMethodName="без учета брендов, каналов и тематик"
												/>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Подписка Подписан на что-нибудь"
													filtrationMethodName="без учета брендов, каналов и тематик"
												/>
												<FiltrationGroupComponent
													onClickOutside={() => {}}
													state="readOnly"
													groupType="and"
													andLabel="И"
													orLabel="ИЛИ"
													shouldShowLabel={true}
													addSimpleConditionButton={
														<FilterConditionEditorButton
															toggleOpen={() =>
																console.log(
																	"toggle"
																)
															}
															isOpened={false}
															label="Добавить фильтр"
														/>
													}
													addGroupConditionButton={
														<FilterConditionEditorButton
															toggleOpen={() =>
																console.log(
																	"toggle"
																)
															}
															isOpened={false}
															label="ИЛИ"
														/>
													}
													onGroupTypeToggle={() =>
														console.log(
															"type toggle"
														)
													}
													onConditionStateToggle={() =>
														console.log(
															"state toggle"
														)
													}
													onConditionRemove={() =>
														console.log("remove")
													}
												>
													<FiltrationConditionComponent
														state="readOnly"
														filterablePropertyName="Подписка Подписан на что-нибудь"
														filtrationMethodName="без учета брендов, каналов и тематик"
													/>
												</FiltrationGroupComponent>
											</FiltrationGroupComponent>
										</FiltrationGroupComponent>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</Popover>
			</GridColumn>
		</GridRow>
	</GridContainer>
);

const segmentHistory = () => (
	<GridContainer>
		<GridRow alignItems="center">
			<GridColumn col={4}>
				<Select
					hasDescriptions={true}
					placeholder="Выберите"
					items={[
						{
							title: "Сегмент"
						}
					]}
					defaultValue="Сегмент"
				/>
			</GridColumn>
			<GridColumn />
			<GridColumn>
				<Form>
					<FormField label="Дата:">
						<DateField
							onChange={() => null}
							months={months}
							days={days}
							value={new Date(2019, 11, 9)}
							noShadow={true}
						/>
					</FormField>
					<FormField>
						<TimeField hours={7} minutes={0} noShadow={true} />
					</FormField>
				</Form>
			</GridColumn>
		</GridRow>
		<GridRow>
			<GridColumn col={12}>
				<Wrapper>Сегментация</Wrapper>
				<Select
					hasDescriptions={true}
					placeholder="Выберите"
					items={[
						{
							title: "Подписан на рекламные рассылки"
						}
					]}
					defaultValue="Подписан на рекламные рассылки"
				/>
			</GridColumn>
		</GridRow>
		<GridRow>
			<GridColumn col={12}>
				<Wrapper>Сегмент</Wrapper>
				<Select
					hasDescriptions={true}
					placeholder="Выберите"
					items={[
						{
							title: "Подписан на рекламные рассылки"
						}
					]}
					defaultValue="Подписан на рекламные рассылки"
				/>
			</GridColumn>
		</GridRow>
	</GridContainer>
);

const allElementsDictionary = {
	contents: {
		id: "contents",
		type: "simpleFilterableProperty",
		name: "Содержание",
		helpCaption: "Содержание",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={segmentViewHistory()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: [],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	segmentViewHistory: {
		id: "segmentViewHistory",
		type: "simpleFilterableProperty",
		name: "Сегмент - просмотр + режим по истории",
		helpCaption: "Сегмент - просмотр + режим по истории",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={segmentViewHistory()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: [],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	segmentView: {
		id: "segmentView",
		type: "simpleFilterableProperty",
		name: "Сегмент - просмотр",
		helpCaption: "Сегмент - просмотр",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={segmentView()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: [],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	segmentHistory: {
		id: "segmentHistory",
		type: "simpleFilterableProperty",
		name: "Сегмент - без просмотра с историей",
		helpCaption: "Сегмент - без просмотра с историей",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={segmentHistory()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: [],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
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
			<ConditionEditorPopup
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
	secondCategory2: {
		id: "secondCategory2",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
	secondCategory3: {
		id: "secondCategory3",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
	secondCategory4: {
		id: "secondCategory4",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
	secondCategory5: {
		id: "secondCategory5",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
	secondCategory6: {
		id: "secondCategory6",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
	secondCategory7: {
		id: "secondCategory7",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
	secondCategory8: {
		id: "secondCategory8",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
	secondCategory9: {
		id: "secondCategory9",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
	secondCategory10: {
		id: "secondCategory10",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
	secondCategory11: {
		id: "secondCategory11",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
	secondCategory12: {
		id: "secondCategory12",
		type: "simpleFilterableProperty",
		name: "Ещё простая категория",
		helpCaption: "Простая категория Caption",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Ещё простая категория"),
		toggleExpand: () => console.log("toggleExpand Ещё простая категория"),
		editorComponent: (
			<ConditionEditorPopup
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
		childIds: ["secondCategory2"],
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
			<ConditionEditorPopup
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
		type: "filterablePropertyWithLinkedConditions",
		name: "Процент открытий и кликов",
		helpCaption: "Процент открытий и кликов",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["contents"],
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
			<ConditionEditorPopup
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
			<ConditionEditorPopup
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
			<ConditionEditorPopup
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
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["organization2", "tech2"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	organization2: {
		id: "organization2",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["secondCategory3"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	tech2: {
		id: "tech2",
		type: "filterablePropertyCategory",
		name: "Техническое",
		helpCaption: "Техническое",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Техническое"),
		toggleExpand: () => console.log("toggleExpand Техническое"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: [
			"baseHitSource2",
			"baseHitSource3",
			"baseHitSource4",
			"customerFeatures2"
		],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	baseHitSource2: {
		id: "baseHitSource2",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	baseHitSource3: {
		id: "baseHitSource3",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	baseHitSource4: {
		id: "baseHitSource4",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	customerFeatures2: {
		id: "customerFeatures2",
		type: "filterablePropertyCategory",
		name: "Характеристики клиента",
		helpCaption: "Характеристики клиента",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Поведение"),
		toggleExpand: () => console.log("toggleExpand Поведение"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["organization3"],
		helpComponent: <div>Хелп к категории "Поведение"</div>
	},
	organization3: {
		id: "organization3",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["organization4"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	organization4: {
		id: "organization4",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["organization5"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	organization5: {
		id: "organization5",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["organization6", "organization7"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	organization6: {
		id: "organization6",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["organization8", "organization9", "organization10"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	organization7: {
		id: "organization7",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["secondCategory5"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	organization8: {
		id: "organization8",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["secondCategory4"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	organization9: {
		id: "organization9",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["secondCategory6"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	organization10: {
		id: "organization10",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: [
			"baseHitSource5",
			"baseHitSource6",
			"baseHitSource7",
			"baseHitSource8",
			"baseHitSource9",
			"baseHitSource10",
			"organization11"
		],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	baseHitSource5: {
		id: "baseHitSource5",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	baseHitSource6: {
		id: "baseHitSource6",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	baseHitSource7: {
		id: "baseHitSource7",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	baseHitSource8: {
		id: "baseHitSource8",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	baseHitSource9: {
		id: "baseHitSource9",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	baseHitSource10: {
		id: "baseHitSource10",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	organization11: {
		id: "organization11",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["organization12"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	organization12: {
		id: "organization12",
		type: "filterablePropertyCategory",
		name: "Устройство",
		helpCaption: "Устройство",
		hasChildren: true,
		isExpanded: true,
		onSelect: () => console.log("onSelect Устройство"),
		toggleExpand: () => console.log("toggleExpand Устройство"),
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["baseHitSource11", "baseHitSource12", "baseHitSource13"],
		helpComponent: <div>Хелп к "Простому фильтру"</div>
	},
	baseHitSource11: {
		id: "baseHitSource11",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	baseHitSource12: {
		id: "baseHitSource12",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
	baseHitSource13: {
		id: "baseHitSource13",
		type: "simpleFilterableProperty",
		name: "Источник попадания в базу",
		helpCaption: "Источник попадания в базу",
		hasChildren: false,
		isExpanded: false,
		onSelect: () => console.log("onSelect Простой фильтр"),
		toggleExpand: () => console.log("toggleExpand Простой фильтр"),
		editorComponent: (
			<ConditionEditorPopup
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
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["secondCategory7"],
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
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: ["secondCategory8"],
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
		editorComponent: (
			<ConditionEditorPopup
				innerEditorComponent={EditorComponentExample()}
				addFilterButtonCaption="Добавить фильтр"
				isAddFilterButtonEnabled={false}
				onAddFilterButtonClick={() => console.log("фильтр добавлен")}
			/>
		),
		isSelected: false,
		childIds: [
			"segmentViewHistory",
			"segmentView",
			"segmentHistory",
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
		childIds: ["secondCategory9"],
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
		childIds: ["secondCategory10"],
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
		childIds: ["secondCategory11"],
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
		childIds: ["secondCategory12"],
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
			this.createList = this.createList.bind(this);
		}

		onSelect() {
			onSelectCallback(this.props.id);
		}
		onToggleExpand() {
			onToggleExpandCallback(this.props.id);
		}

		createList() {
			const { name, type, childIds } = allElementsDictionary[
				this.props.id
			];

			let list = [];
			for (let i = 0; i < state.countFilters; i++) {
				list.push(
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
						pathFromRoot={this.props.pathFromRoot}
					/>
				);
			}

			return list.map((item, index) => {
				return <Fragment key={index}>{item}</Fragment>;
			});
		}

		render() {
			return <>{this.createList()}</>;
		}
	};
};

class ExampleEditorButton extends React.Component {
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
			},
			rootIds: [
				"customerFeatures",
				"behaviour",
				"newsletters",
				"shopping",
				"loyaltyProgram"
			],
			countFilters: 1
		};
		this.togglePopup = this.togglePopup.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onToggleExpand = this.onToggleExpand.bind(this);
		this.handleChangeCountFilter = this.handleChangeCountFilter.bind(this);
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

	onNextSelected(id) {
		const { selectedId, rootIds } = this.state;

		if (selectedId === "name") {
			this.setState({
				selectedId: rootIds[0]
			});
		} else {
			rootIds.map((key, index) => {
				if (key === id && index + 1 < rootIds.length) {
					this.setState({
						selectedId: rootIds[index + 1]
					});
				}
			});
		}
	}

	onPreviousSelected(id) {
		const { selectedId, rootIds } = this.state;
		let callBack = null;

		if (selectedId === "name") {
			callBack = false;
		} else {
			rootIds.forEach((key, index) => {
				if (key === id) {
					if (index !== 0) {
						this.setState({
							selectedId: rootIds[index - 1]
						});
						callBack = true;
					} else {
						this.setState({
							selectedId: "name"
						});
						callBack = false;
					}
				}
			});
		}
		return callBack;
	}

	handleChangeCountFilter(e) {
		this.setState({
			countFilters: e.target.value
		});
	}

	render() {
		return (
			<FilterConditionEditorButton
				label="Добавить фильтр"
				isOpened={this.state.showPopup}
				toggleOpen={this.togglePopup}
				onPreviousSelected={() =>
					this.onPreviousSelected(this.state.selectedId)
				}
				onNextSelected={() =>
					this.onNextSelected(this.state.selectedId)
				}
				onExpandCurrent={() =>
					this.onToggleExpand(this.state.selectedId)
				}
				childRenderer={createChildRenderer(
					this.onSelect,
					this.onToggleExpand,
					this.state
				)}
				rootIds={this.state.rootIds}
				helpComponent={
					allElementsDictionary[this.state.selectedId].helpComponent
				}
				editorComponent={
					allElementsDictionary[this.state.selectedId].editorComponent
				}
				helpCaption={
					allElementsDictionary[this.state.selectedId].helpCaption
				}
				onSearchTermChange={() => console.log("onSearchTermChange")}
				filterLabel="Фильтры"
				recentLabel="Недавние"
				savedLabel="Сохранённые"
				examplesLabel="Примеры"
				onModeChanged={mode => console.log(mode)}
				menuMode="filter"
			/>
		);
	}
}

<div
	style={{
		position: "relative",
		width: "1200px",
		left: "50%",
		transform: "translateX(-50%)"
	}}
>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			andLabel="И"
			groupType="and"
			moreConditionToggleCaption="Действие"
			orLabel="ИЛИ"
			shouldShowButtons={true}
			shouldShowDuplicateButton={false}
			shouldShowLabel={false}
			state="view"
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
		>
			<FiltrationConditionComponent
				editorComponent={null}
				filterablePropertyName="Клиент"
				filtrationMethodName={null}
				helpComponent={null}
				moreConditionToggleCaption="Действие"
				state="view"
				linkedConditionComponent={
					<FiltrationGroupComponent
						andLabel="И"
						groupType="and"
						moreConditionToggleCaption="Действие"
						orLabel="ИЛИ"
						shouldShowButtons={false}
						shouldShowDuplicateButton={false}
						shouldShowLabel={false}
						state="view"
					>
						<FiltrationGroupComponent
							andLabel="И"
							groupType="or"
							moreConditionToggleCaption="Действие"
							orLabel="ИЛИ"
							shouldShowButtons={false}
							shouldShowDuplicateButton={true}
							shouldShowLabel={true}
							state="view"
						>
							<FiltrationConditionComponent
								editorComponent={null}
								filterablePropertyName="Розничный заказ"
								filtrationMethodName="есть такие"
								helpComponent={null}
								moreConditionToggleCaption="Действие"
								state="view"
								linkedConditionComponent={
									<FiltrationGroupComponent
										andLabel="И"
										groupType="or"
										moreConditionToggleCaption="Действие"
										orLabel="ИЛИ"
										shouldShowButtons={false}
										shouldShowDuplicateButton={false}
										shouldShowLabel={true}
										state="view"
									>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
									</FiltrationGroupComponent>
								}
							/>
							<FiltrationConditionComponent
								editorComponent={null}
								filterablePropertyName="Розничный заказ"
								filtrationMethodName="есть такие"
								helpComponent={null}
								moreConditionToggleCaption="Действие"
								state="view"
								linkedConditionComponent={
									<FiltrationGroupComponent
										andLabel="И"
										groupType="or"
										moreConditionToggleCaption="Действие"
										orLabel="ИЛИ"
										shouldShowButtons={false}
										shouldShowDuplicateButton={false}
										shouldShowLabel={true}
										state="view"
									>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
									</FiltrationGroupComponent>
								}
							/>
						</FiltrationGroupComponent>
						<FiltrationGroupComponent
							andLabel="И"
							groupType="or"
							moreConditionToggleCaption="Действие"
							orLabel="ИЛИ"
							shouldShowButtons={false}
							shouldShowDuplicateButton={true}
							shouldShowLabel={true}
							state="view"
						>
							<FiltrationConditionComponent
								editorComponent={null}
								filterablePropertyName="Розничный заказ"
								filtrationMethodName="есть такие"
								helpComponent={null}
								moreConditionToggleCaption="Действие"
								state="view"
								linkedConditionComponent={
									<FiltrationGroupComponent
										andLabel="И"
										groupType="or"
										moreConditionToggleCaption="Действие"
										orLabel="ИЛИ"
										shouldShowButtons={false}
										shouldShowDuplicateButton={false}
										shouldShowLabel={true}
										state="view"
									>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
									</FiltrationGroupComponent>
								}
							/>
							<FiltrationConditionComponent
								editorComponent={null}
								filterablePropertyName="Розничный заказ"
								filtrationMethodName="есть такие"
								helpComponent={null}
								moreConditionToggleCaption="Действие"
								state="view"
								linkedConditionComponent={
									<FiltrationGroupComponent
										andLabel="И"
										groupType="or"
										moreConditionToggleCaption="Действие"
										orLabel="ИЛИ"
										shouldShowButtons={false}
										shouldShowDuplicateButton={false}
										shouldShowLabel={true}
										state="view"
									>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
										<FiltrationConditionComponent
											editorComponent={null}
											filterablePropertyName="Розничный заказ"
											filtrationMethodName="есть такие"
											helpComponent={null}
											moreConditionToggleCaption="Действие"
											state="view"
										/>
									</FiltrationGroupComponent>
								}
							/>
						</FiltrationGroupComponent>
					</FiltrationGroupComponent>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			shouldShowButtons={true}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				shouldShowButtons={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationGroupComponent
					onClickOutside={() => {}}
					state="view"
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
					shouldShowButtons={true}
					onGroupTypeToggle={() => console.log("type toggle")}
					onConditionStateToggle={() => console.log("state toggle")}
					onConditionRemove={() => console.log("remove")}
					addSimpleConditionButton={
						<FilterConditionEditorButton
							label="Добавить фильтр"
							toggleOpen={() => console.log("toggle")}
							isOpened={false}
							iconType="filter"
						/>
					}
					addGroupConditionButton={
						<Button color="silver" size="small" hasBorder="true">
							<IconSvg type="cross-arrows" />И
						</Button>
					}
				>
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={true}
						shouldShowButtons={true}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
					>
						<FiltrationGroupComponent
							onClickOutside={() => {}}
							state="view"
							groupType="and"
							andLabel="И"
							orLabel="ИЛИ"
							shouldShowLabel={true}
							shouldShowButtons={true}
							onGroupTypeToggle={() => console.log("type toggle")}
							onConditionStateToggle={() =>
								console.log("state toggle")
							}
							onConditionRemove={() => console.log("remove")}
							addSimpleConditionButton={
								<FilterConditionEditorButton
									label="Добавить фильтр"
									toggleOpen={() => console.log("toggle")}
									isOpened={false}
									iconType="filter"
								/>
							}
							addGroupConditionButton={
								<Button
									color="silver"
									size="small"
									hasBorder="true"
								>
									<IconSvg type="cross-arrows" />И
								</Button>
							}
						/>
					</FiltrationGroupComponent>
				</FiltrationGroupComponent>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<div style={{}}>
		<FilterWrapper
			scrollState="full"
			filterActions={[]}
			statisticsDescription="Потребителей найдено"
			statisticsValue={50248}
			selectionState="none"
			selectedText="Выбрано"
			selectedCancelText="Отменить"
			selectedCountDescription="100 (все)"
			applyButtonCaption="Применить фильтр"
			clearButtonCaption="Сбросить фильтр"
			onApply={() => console.log("apply filter")}
			onClear={() => console.log("clear filter")}
			buttonUpCaption="Вверх"
		>
			Other components here...
		</FilterWrapper>
	</div>
	<br />
	<br />
	<h1>Пример 1 - пустой фильтр</h1>
	<div
		style={{
			position: "relative",
			width: "1200px",
			left: "50%",
			transform: "translateX(-50%)"
		}}
	>
		<FilterWrapper
			scrollState="full"
			filterActions={[]}
			statisticsDescription="Всего клиентов"
			statisticsValue={1021318}
			doesContainFilter={false}
			selectionState="all"
			selectedText="Выбрано"
			selectedCancelText="Отменить"
			selectedCountDescription="100 (все)"
			applyButtonCaption="Применить фильтр"
			clearButtonCaption="Сбросить фильтр"
			onApply={() => console.log("apply filter")}
			onClear={() => console.log("clear filter")}
			buttonUpCaption="Вверх"
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="or"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={false}
				shouldShowButtons={true}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
			/>
			<i>Добавьте фильтр, чтобы создать выборку клиентов</i>
		</FilterWrapper>
	</div>
	<br />
	<br />
	<h1>Пример 1.2 - проскроленный</h1>
	<div
		style={{
			position: "relative",
			width: "1200px",
			left: "50%",
			transform: "translateX(-50%)"
		}}
	>
		<FilterWrapper
			filterActions={[]}
			statisticsDescription="Всего клиентов"
			statisticsValue={1021318}
			doesContainFilter={false}
			selectionState="all"
			selectedText="Выбрано"
			selectedCancelText="Отменить"
			selectedCountDescription="100 (все)"
			applyButtonCaption="Применить фильтр"
			clearButtonCaption="Сбросить фильтр"
			onApply={() => console.log("apply filter")}
			onClear={() => console.log("clear filter")}
			buttonUpCaption="Вверх"
			scrollState="minified"
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="or"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={false}
				shouldShowButtons={true}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
			/>
			<i>Добавьте фильтр, чтобы создать выборку клиентов</i>
		</FilterWrapper>
	</div>
	<div
		style={{
			position: "relative",
			width: "1200px",
			left: "50%",
			transform: "translateX(-50%)"
		}}
	>
		<br />
		<br />
		<h1>
			Пример 2 - Нажал "или" - пустая группа в фокусе, пустая группа ИЛИ в
			режиме редактирования
		</h1>
		<FilterWrapper
			scrollState="full"
			filterActions={[]}
			statisticsDescription="Всего клиентов"
			statisticsValue={1021318}
			doesContainFilter={true}
			applyButtonCaption="Применить фильтр"
			clearButtonCaption="Сбросить фильтр"
			onApply={() => console.log("apply filter")}
			onClear={() => console.log("clear filter")}
			buttonUpCaption="Вверх"
			selectionState="part"
			selectedText="Выбрано"
			selectedCancelText="Отменить"
			selectedCountDescription="50 (случайно)"
			onCancelSelection={() => console.log("clear selected")}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="edit"
				groupType="or"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				shouldShowButtons={true}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				moreConditionToggleCaption="Действие"
				moreActions={[
					{
						title: "Редактировать",
						onClick: () => console.log("Click")
					}
				]}
			/>
		</FilterWrapper>
	</div>
	<div>
		<h1>Пример 2.1 - Скрытая кнопка "Применить фильтр"</h1>
		<FilterWrapper
			scrollState="minified"
			filterActions={[]}
			statisticsDescription="Всего клиентов"
			statisticsValue={1021318}
			doesContainFilter={true}
			applyButtonCaption="Применить фильтр"
			clearButtonCaption="Сбросить фильтр"
			onApply={() => console.log("apply filter")}
			onClear={() => console.log("clear filter")}
			buttonUpCaption="Вверх"
			selectionState="part"
			selectedText="Выбрано"
			selectedCancelText="Отменить"
			selectedCountDescription="50 (случайно)"
			onCancelSelection={() => console.log("clear selected")}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="or"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				shouldShowButtons={true}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
			/>
		</FilterWrapper>
	</div>
	<div
		style={{
			position: "relative",
			width: "1200px",
			left: "50%",
			transform: "translateX(-50%)"
		}}
	>
		<br />
		<br />
		<h1>
			Пример 3 - Нажал "И" - Добавилась пустая группа ИЛИ в группу
			ИЛИредактирования
		</h1>
		<FilterWrapper
			scrollState="full"
			statisticsDescription="Всего клиентов"
			statisticsValue={1021318}
			doesContainFilter={true}
			applyButtonCaption="Применить фильтр"
			clearButtonCaption="Сбросить фильтр"
			onApply={() => console.log("apply filter")}
			onClear={() => console.log("clear filter")}
			buttonUpCaption="Вверх"
			selectionState="all"
			selectedText="Выбрано"
			selectedCancelText="Отменить"
			selectedCountDescription="100 (все)"
			onCancelSelection={() => console.log("clear selected")}
			isDataOutdated={true}
			filterActionsCaption="Еще"
			onUndo={() => {}}
			onRedo={() => {}}
			filterActions={[
				{
					component: (
						<Button size="xxs" color="gray">
							<IconSvg type="cross-arrows" />И
						</Button>
					),
					isImportant: true
				},
				{
					component: (
						<Button size="xxs" color="gray">
							<IconSvg type="cross-arrows" />
							ИЛИ
						</Button>
					),
					isImportant: true
				},
				{
					component: <>Копировать фильтр</>,
					isImportant: false
				},
				{
					component: <> Сохранить фильтр</>,
					isImportant: false
				}
			]}
			headInformation={<TimeTravel onDatesChange={() => {}} />}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="or"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
			>
				<FiltrationGroupComponent
					onClickOutside={() => {}}
					state="edit"
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
					shouldShowButtons={true}
					addSimpleConditionButton={
						<FilterConditionEditorButton
							label="Добавить фильтр"
							toggleOpen={() => console.log("toggle")}
							isOpened={false}
							iconType="filter"
						/>
					}
					addGroupConditionButton={
						<Button color="silver" size="small" hasBorder="true">
							<IconSvg type="cross-arrows" />И
						</Button>
					}
					onGroupTypeToggle={() => console.log("type toggle")}
					onConditionStateToggle={() => console.log("state toggle")}
					onConditionRemove={() => console.log("remove")}
					moreConditionToggleCaption="Действие"
					moreActions={[
						{
							title: "Редактировать",
							onClick: () => console.log("Click")
						}
					]}
				/>
			</FiltrationGroupComponent>
		</FilterWrapper>
	</div>
	<div
		style={{
			position: "relative",
			width: "1200px",
			left: "50%",
			transform: "translateX(-50%)"
		}}
	>
		<br />
		<br />
		<h1>
			Пример 4 - Закрыл редактирование группы, отображается пустая группа
			И в группе ИЛИ
		</h1>
		<FilterWrapper
			scrollState="full"
			filterActions={[]}
			statisticsDescription="Всего клиентов"
			statisticsValue={1021318}
			doesContainFilter={true}
			applyButtonCaption="Применить фильтр"
			clearButtonCaption="Сбросить фильтр"
			onApply={() => console.log("apply filter")}
			onClear={() => console.log("clear filter")}
			buttonUpCaption="Вверх"
			selectionState="concrete"
			selectedText="Выбрано"
			selectedCancelText="Отменить"
			selectedCountDescription="100"
			onCancelSelection={() => console.log("clear selected")}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="or"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationGroupComponent
					onClickOutside={() => {}}
					state="view"
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
					onGroupTypeToggle={() => console.log("type toggle")}
					onConditionStateToggle={() => console.log("state toggle")}
					onConditionRemove={() => console.log("remove")}
					addSimpleConditionButton={
						<FilterConditionEditorButton
							label="Добавить фильтр"
							toggleOpen={() => console.log("toggle")}
							isOpened={false}
							iconType="filter"
						/>
					}
					addGroupConditionButton={
						<Button color="silver" size="small" hasBorder="true">
							<IconSvg type="cross-arrows" />И
						</Button>
					}
				/>
			</FiltrationGroupComponent>
		</FilterWrapper>
	</div>
	<br />
	<br />
	<h1>Пример 4.1</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="edit"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			shouldShowButtons={true}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			moreConditionToggleCaption="Действие"
			moreActions={[
				{
					title: "Редактировать",
					onClick: () => console.log("Click")
				}
			]}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 5 - Одна группа ИЛИ, пустая группа ИЛИ </h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
		/>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 6 - Редактирование внешней группы</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="edit"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			shouldShowButtons={true}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			moreConditionToggleCaption="Действие"
			moreActions={[
				{
					title: "Редактировать",
					onClick: () => console.log("Click")
				}
			]}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationConditionComponent
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и мужской"
					withAlert={true}
				/>
				<FiltrationConditionComponent
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
				/>
			</FiltrationGroupComponent>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationConditionComponent
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponent
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 7 - Редактирование внутренней группы</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="shaded"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="edit"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				shouldShowButtons={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={<ExampleEditorButton />}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
				moreConditionToggleCaption="Действие"
				moreActions={[
					{
						title: "Редактировать",
						onClick: () => console.log("Click")
					}
				]}
			>
				<FiltrationConditionComponent
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и мужской"
				/>
				<FiltrationConditionComponent
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
				/>
			</FiltrationGroupComponent>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="shaded"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationConditionComponent
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponent
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
				<FiltrationGroupComponent
					onClickOutside={() => {}}
					state="shaded"
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
					onGroupTypeToggle={() => console.log("type toggle")}
					onConditionStateToggle={() => console.log("state toggle")}
					onConditionRemove={() => console.log("remove")}
					addSimpleConditionButton={
						<FilterConditionEditorButton
							label="Добавить фильтр"
							toggleOpen={() => console.log("toggle")}
							isOpened={false}
							iconType="filter"
						/>
					}
					addGroupConditionButton={
						<Button color="silver" size="small" hasBorder="true">
							<IconSvg type="cross-arrows" />И
						</Button>
					}
				>
					<FiltrationConditionComponent
						filterablePropertyName="Пол"
						filtrationMethodName="заполнен и женский"
					/>
					<FiltrationConditionComponent
						filterablePropertyName="Возраст"
						filtrationMethodName="заполнен и от 35 до 60 лет"
					/>
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="shaded"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={true}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
					>
						<FiltrationConditionComponent
							filterablePropertyName="Пол"
							filtrationMethodName="заполнен и женский"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Возраст"
							filtrationMethodName="заполнен и от 35 до 60 лет"
						/>
					</FiltrationGroupComponent>
				</FiltrationGroupComponent>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 8 - Ховер над простым фильтром</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и мужской"
					editorComponent={<input />}
					helpComponent={<span>А тут у нас хелп</span>}
					filtrationMethodParametersComponent={
						<>
							<ExampleSegmentButtonExpand
								onClick={() => {}}
								isOpen={true}
								filterActionCaption="Использовать как фильтр"
								filterActionClick={() => {}}
								filterActionShow={false}
							>
								<FiltrationGroupComponent
									onClickOutside={() => {}}
									state="readOnly"
									groupType="and"
									andLabel="И"
									orLabel="ИЛИ"
									shouldShowLabel={false}
									addSimpleConditionButton={
										<FilterConditionEditorButton
											label="Добавить фильтр"
											toggleOpen={() =>
												console.log("toggle")
											}
											isOpened={false}
											iconType="filter"
										/>
									}
									addGroupConditionButton={
										<Button
											color="silver"
											size="small"
											hasBorder="true"
										>
											<IconSvg type="cross-arrows" />И
										</Button>
									}
									onGroupTypeToggle={() =>
										console.log("type toggle")
									}
									onConditionStateToggle={() =>
										console.log("state toggle")
									}
									onConditionRemove={() =>
										console.log("remove")
									}
								>
									<FiltrationConditionComponent
										state="readOnly"
										filterablePropertyName="Пол"
										filtrationMethodName="заполнен и мужской"
									/>
									<FiltrationConditionComponent
										filterablePropertyName="Розничный заказ"
										filtrationMethodName="есть такие"
										state="readOnly"
										linkedConditionComponent={
											<FiltrationGroupComponent
												onClickOutside={() => {}}
												state="view"
												groupType="and"
												andLabel="И"
												orLabel="ИЛИ"
												shouldShowLabel={false}
												addSimpleConditionButton={
													<FilterConditionEditorButton
														label="Добавить фильтр"
														toggleOpen={() =>
															console.log(
																"toggle"
															)
														}
														isOpened={false}
														iconType="filter"
													/>
												}
												addGroupConditionButton={
													<Button
														color="silver"
														size="small"
														hasBorder="true"
													>
														<IconSvg type="cross-arrows" />
														И
													</Button>
												}
												onGroupTypeToggle={() =>
													console.log("type toggle")
												}
												onConditionStateToggle={() =>
													console.log("state toggle")
												}
												onConditionRemove={() =>
													console.log("remove")
												}
											>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
											</FiltrationGroupComponent>
										}
									/>
								</FiltrationGroupComponent>
							</ExampleSegmentButtonExpand>
							<SegmentButtonEdit onClick={() => {}} />
							<SegmentContent content="~1 469 718" />
						</>
					}
				/>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
				/>
			</FiltrationGroupComponent>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<h1>Пример 8.1</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и мужской"
					editorComponent={<input />}
					helpComponent={<span>А тут у нас хелп</span>}
					filtrationMethodParametersComponent={
						<>
							<SegmentButtonExpand
								onClick={() => {}}
								isOpen={true}
								filterActionCaption="Использовать как фильтр"
								filterActionClick={() => {}}
								filterActionShow={true}
							>
								<FiltrationGroupComponent
									onClickOutside={() => {}}
									state="readOnly"
									groupType="and"
									andLabel="И"
									orLabel="ИЛИ"
									shouldShowLabel={false}
									addSimpleConditionButton={
										<FilterConditionEditorButton
											label="Добавить фильтр"
											toggleOpen={() =>
												console.log("toggle")
											}
											isOpened={false}
											iconType="filter"
										/>
									}
									addGroupConditionButton={
										<Button
											color="silver"
											size="small"
											hasBorder="true"
										>
											<IconSvg type="cross-arrows" />И
										</Button>
									}
									onGroupTypeToggle={() =>
										console.log("type toggle")
									}
									onConditionStateToggle={() =>
										console.log("state toggle")
									}
									onConditionRemove={() =>
										console.log("remove")
									}
								>
									<FiltrationConditionComponent
										state="readOnly"
										filterablePropertyName="Пол"
										filtrationMethodName="заполнен и мужской"
									/>
									<FiltrationConditionComponent
										filterablePropertyName="Розничный заказ"
										filtrationMethodName="есть такие"
										state="readOnly"
										linkedConditionComponent={
											<FiltrationGroupComponent
												onClickOutside={() => {}}
												state="view"
												groupType="and"
												andLabel="И"
												orLabel="ИЛИ"
												shouldShowLabel={false}
												addSimpleConditionButton={
													<FilterConditionEditorButton
														label="Добавить фильтр"
														toggleOpen={() =>
															console.log(
																"toggle"
															)
														}
														isOpened={false}
														iconType="filter"
													/>
												}
												addGroupConditionButton={
													<Button
														color="silver"
														size="small"
														hasBorder="true"
													>
														<IconSvg type="cross-arrows" />
														И
													</Button>
												}
												onGroupTypeToggle={() =>
													console.log("type toggle")
												}
												onConditionStateToggle={() =>
													console.log("state toggle")
												}
												onConditionRemove={() =>
													console.log("remove")
												}
											>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
													filtrationMethodParametersComponent={
														<>
															<SegmentButtonExpand
																onClick={() => {}}
																isOpen={true}
																filterActionCaption="Использовать как фильтр"
																filterActionClick={() => {}}
																filterActionShow={
																	false
																}
															>
																<FiltrationGroupComponent
																	onClickOutside={() => {}}
																	state="view"
																	groupType="and"
																	andLabel="И"
																	orLabel="ИЛИ"
																	shouldShowLabel={
																		false
																	}
																	addSimpleConditionButton={
																		<FilterConditionEditorButton
																			label="Добавить фильтр"
																			toggleOpen={() =>
																				console.log(
																					"toggle"
																				)
																			}
																			isOpened={
																				false
																			}
																			iconType="filter"
																		/>
																	}
																	addGroupConditionButton={
																		<Button
																			color="silver"
																			size="small"
																			hasBorder="true"
																		>
																			<IconSvg type="cross-arrows" />
																			И
																		</Button>
																	}
																	onGroupTypeToggle={() =>
																		console.log(
																			"type toggle"
																		)
																	}
																	onConditionStateToggle={() =>
																		console.log(
																			"state toggle"
																		)
																	}
																	onConditionRemove={() =>
																		console.log(
																			"remove"
																		)
																	}
																>
																	<FiltrationConditionComponent
																		state="readOnly"
																		filterablePropertyName="Пол"
																		filtrationMethodName="заполнен и мужской"
																	/>
																	<FiltrationConditionComponent
																		filterablePropertyName="Розничный заказ"
																		filtrationMethodName="есть такие"
																		state="readOnly"
																		linkedConditionComponent={
																			<FiltrationGroupComponent
																				onClickOutside={() => {}}
																				state="view"
																				groupType="and"
																				andLabel="И"
																				orLabel="ИЛИ"
																				shouldShowLabel={
																					false
																				}
																				addSimpleConditionButton={
																					<FilterConditionEditorButton
																						label="Добавить фильтр"
																						toggleOpen={() =>
																							console.log(
																								"toggle"
																							)
																						}
																						isOpened={
																							false
																						}
																						iconType="filter"
																					/>
																				}
																				addGroupConditionButton={
																					<Button
																						color="silver"
																						size="small"
																						hasBorder="true"
																					>
																						<IconSvg type="cross-arrows" />

																						И
																					</Button>
																				}
																				onGroupTypeToggle={() =>
																					console.log(
																						"type toggle"
																					)
																				}
																				onConditionStateToggle={() =>
																					console.log(
																						"state toggle"
																					)
																				}
																				onConditionRemove={() =>
																					console.log(
																						"remove"
																					)
																				}
																			>
																				<FiltrationConditionComponent
																					state="readOnly"
																					filterablePropertyName="Идентификатор в мобильном приложении"
																					filtrationMethodName="заполнен и равен 42"
																				/>
																				<FiltrationConditionComponent
																					state="readOnly"
																					filterablePropertyName="Идентификатор в мобильном приложении"
																					filtrationMethodName="заполнен и равен 42"
																				/>
																				<FiltrationConditionComponent
																					state="readOnly"
																					filterablePropertyName="Идентификатор в мобильном приложении"
																					filtrationMethodName="заполнен и равен 42"
																				/>
																				<FiltrationConditionComponent
																					state="readOnly"
																					filterablePropertyName="Идентификатор в мобильном приложении"
																					filtrationMethodName="заполнен и равен 42"
																				/>
																			</FiltrationGroupComponent>
																		}
																	/>
																</FiltrationGroupComponent>
															</SegmentButtonExpand>
															<SegmentButtonEdit
																onClick={() => {}}
															/>
															<SegmentContent content="~1 469 718" />
														</>
													}
												/>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
											</FiltrationGroupComponent>
										}
									/>
								</FiltrationGroupComponent>
							</SegmentButtonExpand>
							<SegmentButtonEdit onClick={() => {}} />
							<SegmentContent content="~1 469 718" />
						</>
					}
				/>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
				/>
			</FiltrationGroupComponent>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 8.2</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и мужской"
					editorComponent={<input />}
					helpComponent={<span>А тут у нас хелп</span>}
					filtrationMethodParametersComponent={
						<>
							<SegmentButtonExpand
								onClick={() => {}}
								isOpen={false}
								filterActionCaption="Использовать как фильтр"
								filterActionClick={() => {}}
								filterActionShow={false}
							>
								<FiltrationGroupComponent
									onClickOutside={() => {}}
									state="readOnly"
									groupType="and"
									andLabel="И"
									orLabel="ИЛИ"
									shouldShowLabel={false}
									addSimpleConditionButton={
										<FilterConditionEditorButton
											label="Добавить фильтр"
											toggleOpen={() =>
												console.log("toggle")
											}
											isOpened={false}
											iconType="filter"
										/>
									}
									addGroupConditionButton={
										<Button
											color="silver"
											size="small"
											hasBorder="true"
										>
											<IconSvg type="cross-arrows" />И
										</Button>
									}
									onGroupTypeToggle={() =>
										console.log("type toggle")
									}
									onConditionStateToggle={() =>
										console.log("state toggle")
									}
									onConditionRemove={() =>
										console.log("remove")
									}
								>
									<FiltrationConditionComponent
										state="readOnly"
										filterablePropertyName="Пол"
										filtrationMethodName="заполнен и мужской"
									/>
									<FiltrationConditionComponent
										filterablePropertyName="Розничный заказ"
										filtrationMethodName="есть такие"
										state="readOnly"
										linkedConditionComponent={
											<FiltrationGroupComponent
												onClickOutside={() => {}}
												state="view"
												groupType="and"
												andLabel="И"
												orLabel="ИЛИ"
												shouldShowLabel={false}
												addSimpleConditionButton={
													<FilterConditionEditorButton
														label="Добавить фильтр"
														toggleOpen={() =>
															console.log(
																"toggle"
															)
														}
														isOpened={false}
														iconType="filter"
													/>
												}
												addGroupConditionButton={
													<Button
														color="silver"
														size="small"
														hasBorder="true"
													>
														<IconSvg type="cross-arrows" />
														И
													</Button>
												}
												onGroupTypeToggle={() =>
													console.log("type toggle")
												}
												onConditionStateToggle={() =>
													console.log("state toggle")
												}
												onConditionRemove={() =>
													console.log("remove")
												}
											>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
												<FiltrationConditionComponent
													state="readOnly"
													filterablePropertyName="Идентификатор в мобильном приложении"
													filtrationMethodName="заполнен и равен 42"
												/>
											</FiltrationGroupComponent>
										}
									/>
								</FiltrationGroupComponent>
							</SegmentButtonExpand>
							<SegmentButtonEdit onClick={() => {}} />
							<SegmentContent content="~1 469 718" />
						</>
					}
				/>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
				/>
			</FiltrationGroupComponent>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
			>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponent
					state="view"
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 9 - Простой фильтр в режиме редактирования</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="shaded"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			onConditionStateToggle={() => console.log("state toggle")}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="shaded"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onConditionStateToggle={() => console.log("state toggle")}
			>
				<FiltrationConditionComponent
					state="edit"
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и мужской"
					onConditionStateToggle={() => null}
					onClose={() => console.log("close")}
					editorComponent={
						<ConditionEditorPopup
							innerEditorComponent={
								<Select
									hasDescriptions={true}
									placeholder="Выберите событие"
									items={[
										{
											title: "Максимальная выгода",
											description:
												"Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
										},
										{
											title:
												"Последовательное применение",
											description:
												"История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
										}
									]}
								/>
							}
							viewMode="edit"
							addFilterButtonCaption="Применить изменения"
							cancelFilterButtonCaption="Отменить"
							isAddFilterButtonEnabled={true}
							onAddFilterButtonClick={() =>
								console.log("Apply filter")
							}
							onCancelFilterButtonClick={() =>
								console.log("Cancel filter")
							}
						/>
					}
					helpComponent={
						<div>
							Разнообразный и богатый опыт новая модель
							организационной деятельности играет важную роль в
							формировании существенных финансовых и
							административных условий. Задача организации, в
							особенности же укрепление и развитие структуры
							представляет собой интересный эксперимент проверки
							направлений прогрессивного развития. Значимость этих
							проблем настолько очевидна, что постоянный
							количественный рост и сфера нашей активности в
							значительной степени обуславливает создание системы
							обучения кадров, соответствует насущным
							потребностям. Идейные соображения высшего порядка, а
							также новая модель организационной деятельности
							позволяет выполнять важные задания по разработке
							модели развития. Разнообразный и богатый опыт новая
							модель организационной деятельности влечет за собой
							процесс внедрения и модернизации соответствующий
							условий активизации. Задача организации, в
							особенности же сложившаяся структура организации
							позволяет выполнять важные задания по разработке
							направлений прогрессивного развития.
						</div>
					}
				/>
				<FiltrationConditionComponent
					state="shaded"
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
				/>
			</FiltrationGroupComponent>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="shaded"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onConditionStateToggle={() => console.log("state toggle")}
			>
				<FiltrationConditionComponent
					state="shaded"
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponent
					state="shaded"
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
				<FiltrationGroupComponent
					onClickOutside={() => {}}
					state="shaded"
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
					onGroupTypeToggle={() => console.log("type toggle")}
					onConditionStateToggle={() => console.log("state toggle")}
					onConditionRemove={() => console.log("remove")}
					addSimpleConditionButton={
						<FilterConditionEditorButton
							label="Добавить фильтр"
							toggleOpen={() => console.log("toggle")}
							isOpened={false}
							iconType="filter"
						/>
					}
					addGroupConditionButton={
						<Button color="silver" size="small" hasBorder="true">
							<IconSvg type="cross-arrows" />И
						</Button>
					}
				>
					<FiltrationConditionComponent
						filterablePropertyName="Пол"
						filtrationMethodName="заполнен и женский"
					/>
					<FiltrationConditionComponent
						filterablePropertyName="Возраст"
						filtrationMethodName="заполнен и от 35 до 60 лет"
					/>
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="shaded"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={true}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
					>
						<FiltrationConditionComponent
							filterablePropertyName="Пол"
							filtrationMethodName="заполнен и женский"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Возраст"
							filtrationMethodName="заполнен и от 35 до 60 лет"
						/>
					</FiltrationGroupComponent>
				</FiltrationGroupComponent>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<h1>
		Пример 10 - Редактирование фильтра со вложенными условиями отображение с
		кнопками
	</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="edit"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			shouldShowButtons={true}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="shaded"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
						shouldShowButtons={true}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					/>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>
		Пример 11 - Редактирование фильтра со вложенными условиями, все условия
		во вложенных фильтрах серенькие
	</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="edit"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			shouldShowButtons={true}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="shaded"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
					</FiltrationGroupComponent>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>
		Пример 12 - В режиме просмотра пустая группа И отображает свои кнопки
		для условий с вложенными условиями
	</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
						shouldShowButtons={true}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					/>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 12.1</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="or"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={true}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					/>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 12.2 - Вложенная группа -- И, без лейбла</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
						shouldShowButtons={true}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					/>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>
		Пример 12.3 - Вложенная группа -- И, без лейбла, условие с вложенным не
		последнеее
	</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
						shouldShowButtons={true}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					/>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>
		Пример 12.4 - Вложенная группа -- ИЛИ, условие с вложенным не последнеее
	</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="or"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={true}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					/>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>
		Пример 12.5 - Вложенная группа -- последняя группа без лейбла в
		состоянии readonly
	</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="readOnly"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="readOnly"
						groupType="or"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					/>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 13 - Если есть вложенное условие</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
					</FiltrationGroupComponent>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 14 - Вложенная группа наведение</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				state="view"
				onCreateCondition={() => console.log("onCreateCondition")}
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
					</FiltrationGroupComponent>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 15 - Вложенная группа И в режиме редактирования</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="shaded"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				state="linkedConditionEdit"
				isLinkedCondition={true}
				onConditionStateToggle={() => console.log("state toggle")}
				onCreateCondition={() => console.log("onCreateCondition")}
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="edit"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={true}
						shouldShowButtons={true}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
					</FiltrationGroupComponent>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 16 - Валидация</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="shaded"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Дата и время"
				filtrationMethodName="заполнена и"
				state="edit"
				onConditionStateToggle={() => null}
				onClose={() => console.log("close")}
				editorComponent={
					<ConditionEditorPopup
						innerEditorComponent={
							<GridContainer>
								<GridRow>
									<GridColumn col="6">
										<Select
											hasDescriptions={true}
											placeholder="Выберите событие"
											items={[
												{
													title:
														"Максимальная выгода",
													description:
														"Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
												},
												{
													title:
														"Последовательное применение",
													description:
														"История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
												}
											]}
										/>
									</GridColumn>
								</GridRow>
								<GridRow alignItems="bottom">
									<GridColumn>
										<Wrapper>от</Wrapper>
										<DateField
											onChange={() => null}
											months={months}
											days={days}
											error={true}
											value={new Date(2018, 11, 10)}
											noShadow={false}
										/>
									</GridColumn>
									<GridColumn>
										<TimeField
											error={true}
											hours={12}
											minutes={23}
											noShadow={false}
										/>
									</GridColumn>
									<GridColumn>
										<Wrapper>до</Wrapper>
										<DateField
											onChange={() => null}
											months={months}
											days={days}
											value={new Date(2018, 11, 10)}
											noShadow={false}
										/>
									</GridColumn>
									<GridColumn>
										<TimeField
											error={true}
											hours={12}
											minutes={23}
											noShadow={false}
										/>
									</GridColumn>
									<GridColumn>
										<Tooltip
											title={<IconSvg type="warning" />}
											position="top"
										>
											Левая граница интервала должна быть
											меньше правой
										</Tooltip>
									</GridColumn>
								</GridRow>
							</GridContainer>
						}
						viewMode="edit"
						addFilterButtonCaption="Применить изменения"
						cancelFilterButtonCaption="Отменить"
						isAddFilterButtonEnabled={true}
						onAddFilterButtonClick={() =>
							console.log("Apply filter")
						}
						onCancelFilterButtonClick={() =>
							console.log("Cancel filter")
						}
					/>
				}
				helpComponent={
					<div>
						Разнообразный и богатый опыт новая модель
						организационной деятельности играет важную роль в
						формировании существенных финансовых и административных
						условий. Задача организации, в особенности же укрепление
						и развитие структуры представляет собой интересный
						эксперимент проверки направлений прогрессивного
						развития. Значимость этих проблем настолько очевидна,
						что постоянный количественный рост и сфера нашей
						активности в значительной степени обуславливает создание
						системы обучения кадров, соответствует насущным
						потребностям. Идейные соображения высшего порядка, а
						также новая модель организационной деятельности
						позволяет выполнять важные задания по разработке модели
						развития. Разнообразный и богатый опыт новая модель
						организационной деятельности влечет за собой процесс
						внедрения и модернизации соответствующий условий
						активизации. Задача организации, в особенности же
						сложившаяся структура организации позволяет выполнять
						важные задания по разработке направлений прогрессивного
						развития.
					</div>
				}
				filtrationMethodParametersComponent={
					<Wrapper tag="span">
						<InvalidHighLight>
							от 02.01.2019 до 01.01.2019
						</InvalidHighLight>
						<Tooltip
							title={<IconSvg type="warning" />}
							position="top"
						>
							Левая граница интервала должна быть меньше правой
						</Tooltip>
					</Wrapper>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<h1>Пример 17 - без валидации</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="shaded"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Дата и время"
				filtrationMethodName="заполнена и"
				state="edit"
				onConditionStateToggle={() => null}
				onClose={() => console.log("close")}
				editorComponent={
					<ConditionEditorPopup
						innerEditorComponent={
							<GridContainer>
								<GridRow>
									<GridColumn col="5">
										<Select
											hasDescriptions={true}
											placeholder="Выберите событие"
											items={[
												{
													title:
														"Максимальная выгода",
													description:
														"Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
												},
												{
													title:
														"Последовательное применение",
													description:
														"История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
												}
											]}
										/>
									</GridColumn>
									<GridColumn col="7">
										<Select
											hasDescriptions={true}
											placeholder="Выберите событие"
											items={[
												{
													title:
														"Максимальная выгода",
													description:
														"Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
												},
												{
													title:
														"Последовательное применение",
													description:
														"История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
												}
											]}
										/>
									</GridColumn>
									<GridColumn col="12">
										<Select
											hasDescriptions={true}
											placeholder="Выберите событие"
											items={[
												{
													title:
														"Максимальная выгода",
													description:
														"Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
												},
												{
													title:
														"Последовательное применение",
													description:
														"История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
												}
											]}
										/>
									</GridColumn>
								</GridRow>
							</GridContainer>
						}
						viewMode="edit"
						addFilterButtonCaption="Применить изменения"
						cancelFilterButtonCaption="Отменить"
						isAddFilterButtonEnabled={true}
						onAddFilterButtonClick={() =>
							console.log("Apply filter")
						}
						onCancelFilterButtonClick={() =>
							console.log("Cancel filter")
						}
					/>
				}
				helpComponent={
					<div>
						Разнообразный и богатый опыт новая модель
						организационной деятельности играет важную роль в
						формировании существенных финансовых и административных
						условий. Задача организации, в особенности же укрепление
						и развитие структуры представляет собой интересный
						эксперимент проверки направлений прогрессивного
						развития. Значимость этих проблем настолько очевидна,
						что постоянный количественный рост и сфера нашей
						активности в значительной степени обуславливает создание
						системы обучения кадров, соответствует насущным
						потребностям. Идейные соображения высшего порядка, а
						также новая модель организационной деятельности
						позволяет выполнять важные задания по разработке модели
						развития. Разнообразный и богатый опыт новая модель
						организационной деятельности влечет за собой процесс
						внедрения и модернизации соответствующий условий
						активизации. Задача организации, в особенности же
						сложившаяся структура организации позволяет выполнять
						важные задания по разработке направлений прогрессивного
						развития.
					</div>
				}
				filtrationMethodParametersComponent={
					<Wrapper tag="span">
						от 02.01.2019 до 01.01.2019
						<Tooltip
							title={<IconSvg type="warning" />}
							position="top"
						>
							Левая граница интервала должна быть меньше правой
						</Tooltip>
					</Wrapper>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<h1>Пример 17.1</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="shaded"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Дата и время"
				filtrationMethodName="заполнена и"
				state="edit"
				onConditionStateToggle={() => null}
				onClose={() => console.log("close")}
				editorComponent={
					<ConditionEditorPopup
						innerEditorComponent={
							<GridContainer>
								<GridRow>
									<GridColumn col="5">
										<Select
											hasDescriptions={true}
											placeholder="Выберите событие"
											items={[
												{
													title:
														"Максимальная выгода",
													description:
														"Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
												},
												{
													title:
														"Последовательное применение",
													description:
														"История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
												}
											]}
										/>
									</GridColumn>
									<GridColumn col="7">
										<ExampleFlatSelectorSimple />
									</GridColumn>
								</GridRow>
							</GridContainer>
						}
						viewMode="edit"
						addFilterButtonCaption="Применить изменения"
						cancelFilterButtonCaption="Отменить"
						isAddFilterButtonEnabled={true}
						onAddFilterButtonClick={() =>
							console.log("Apply filter")
						}
						onCancelFilterButtonClick={() =>
							console.log("Cancel filter")
						}
					/>
				}
				helpComponent={
					<div>
						Разнообразный и богатый опыт новая модель
						организационной деятельности играет важную роль в
						формировании существенных финансовых и административных
						условий. Задача организации, в особенности же укрепление
						и развитие структуры представляет собой интересный
						эксперимент проверки направлений прогрессивного
						развития. Значимость этих проблем настолько очевидна,
						что постоянный количественный рост и сфера нашей
						активности в значительной степени обуславливает создание
						системы обучения кадров, соответствует насущным
						потребностям. Идейные соображения высшего порядка, а
						также новая модель организационной деятельности
						позволяет выполнять важные задания по разработке модели
						развития. Разнообразный и богатый опыт новая модель
						организационной деятельности влечет за собой процесс
						внедрения и модернизации соответствующий условий
						активизации. Задача организации, в особенности же
						сложившаяся структура организации позволяет выполнять
						важные задания по разработке направлений прогрессивного
						развития.
					</div>
				}
				filtrationMethodParametersComponent={
					<Wrapper tag="span">
						от 02.01.2019 до 01.01.2019
						<Tooltip
							title={<IconSvg type="warning" />}
							position="top"
						>
							Левая граница интервала должна быть меньше правой
						</Tooltip>
					</Wrapper>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<h1>Пример 18 - валидация, режим просмотра</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Дата и время"
				filtrationMethodName="заполнена и"
				state="view"
				onConditionStateToggle={() => null}
				onClose={() => console.log("close")}
				editorComponent={
					<ConditionEditorPopup
						innerEditorComponent={
							<GridContainer>
								<GridRow>
									<GridColumn col="5">
										<Select
											hasDescriptions={true}
											placeholder="Выберите событие"
											items={[
												{
													title:
														"Максимальная выгода",
													description:
														"Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
												},
												{
													title:
														"Последовательное применение",
													description:
														"История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
												}
											]}
										/>
									</GridColumn>
									<GridColumn col="7">
										<Select
											hasDescriptions={true}
											placeholder="Выберите событие"
											items={[
												{
													title:
														"Максимальная выгода",
													description:
														"Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
												},
												{
													title:
														"Последовательное применение",
													description:
														"История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
												}
											]}
										/>
									</GridColumn>
									<GridColumn col="12">
										<Select
											hasDescriptions={true}
											placeholder="Выберите событие"
											items={[
												{
													title:
														"Максимальная выгода",
													description:
														"Для нас маркетинговая CRM-система — это центральная база данных по всему клиентскому опыту и соприкосновению бренда с клиентами. Мы накапливаем опыт взаимодействия с каждой покупательницей, чтобы лучше понимать ее потребности."
												},
												{
													title:
														"Последовательное применение",
													description:
														"История работы с Mindbox началась летом 2016 г. Начали с интеграции, затем запустили транзакционные и рекламно-информационные Email и SMS рассылки, зимой добавили модуль программы лояльности, а весной подключили модуль промо-акций."
												}
											]}
										/>
									</GridColumn>
								</GridRow>
							</GridContainer>
						}
						viewMode="edit"
						addFilterButtonCaption="Применить изменения"
						cancelFilterButtonCaption="Отменить"
						isAddFilterButtonEnabled={true}
						onAddFilterButtonClick={() =>
							console.log("Apply filter")
						}
						onCancelFilterButtonClick={() =>
							console.log("Cancel filter")
						}
					/>
				}
				helpComponent={
					<div>
						Разнообразный и богатый опыт новая модель
						организационной деятельности играет важную роль в
						формировании существенных финансовых и административных
						условий. Задача организации, в особенности же укрепление
						и развитие структуры представляет собой интересный
						эксперимент проверки направлений прогрессивного
						развития. Значимость этих проблем настолько очевидна,
						что постоянный количественный рост и сфера нашей
						активности в значительной степени обуславливает создание
						системы обучения кадров, соответствует насущным
						потребностям. Идейные соображения высшего порядка, а
						также новая модель организационной деятельности
						позволяет выполнять важные задания по разработке модели
						развития. Разнообразный и богатый опыт новая модель
						организационной деятельности влечет за собой процесс
						внедрения и модернизации соответствующий условий
						активизации. Задача организации, в особенности же
						сложившаяся структура организации позволяет выполнять
						важные задания по разработке направлений прогрессивного
						развития.
					</div>
				}
				filtrationMethodParametersComponent={
					<Wrapper tag="span">
						<InvalidHighLight>
							от 02.01.2019 до 01.01.2019
						</InvalidHighLight>
						<Tooltip
							title={<IconSvg type="warning" />}
							position="top"
						>
							Левая граница интервала должна быть меньше правой
						</Tooltip>
					</Wrapper>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 19</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			shouldShowButtons={true}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Идентификатор в мобильном приложении"
				filtrationMethodName="заполнен и равен 42"
			/>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="or"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				shouldShowButtons={false}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						label="Добавить фильтр"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="filter"
					/>
				}
				addGroupConditionButton={
					<Button color="silver" size="small" hasBorder="true">
						<IconSvg type="cross-arrows" />И
					</Button>
				}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
			>
				<FiltrationConditionComponent
					state="shaded"
					filterablePropertyName="Идентификатор в мобильном приложении"
					filtrationMethodName="заполнен и равен 42"
				/>
				<FiltrationConditionComponent
					state="shaded"
					filterablePropertyName="Идентификатор в мобильном приложении"
					filtrationMethodName="заполнен и равен 42"
				/>
				<FiltrationGroupComponent
					onClickOutside={() => {}}
					state="shaded"
					groupType="and"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
					addSimpleConditionButton={
						<FilterConditionEditorButton
							label="Добавить фильтр"
							toggleOpen={() => console.log("toggle")}
							isOpened={false}
							iconType="filter"
						/>
					}
					addGroupConditionButton={
						<Button color="silver" size="small" hasBorder="true">
							<IconSvg type="cross-arrows" />И
						</Button>
					}
					onGroupTypeToggle={() => console.log("type toggle")}
					onConditionStateToggle={() => console.log("state toggle")}
					onConditionRemove={() => console.log("remove")}
				>
					<FiltrationConditionComponent
						filterablePropertyName="Идентификатор в мобильном приложении"
						filtrationMethodName="заполнен и равен 42"
					/>
				</FiltrationGroupComponent>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 20 - без статистики по количеству найденных записей</h1>
	<FilterWrapper
		scrollState="full"
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		shouldShowStatistics={false}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
		buttonUpCaption="Вверх"
		selectionState="none"
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100"
		onCancelSelection={() => console.log("clear selected")}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="filter"
				/>
			}
			addGroupConditionButton={
				<Button color="silver" size="small" hasBorder="true">
					<IconSvg type="cross-arrows" />И
				</Button>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				state="view"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
						addSimpleConditionButton={
							<FilterConditionEditorButton
								label="Добавить фильтр"
								toggleOpen={() => console.log("toggle")}
								isOpened={false}
								iconType="filter"
							/>
						}
						addGroupConditionButton={
							<Button
								color="silver"
								size="small"
								hasBorder="true"
							>
								<IconSvg type="cross-arrows" />И
							</Button>
						}
						onGroupTypeToggle={() => console.log("type toggle")}
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
					</FiltrationGroupComponent>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
</div>;
```
