```jsx
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
			isUndoRedoEnabled={true}
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
				onConditionStateToggle={() => console.log("state toggle")}
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
