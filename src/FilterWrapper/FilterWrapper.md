```jsx
<div style={{}}>
	<FilterWrapper
		statisticsDescription="Потребителей найдено"
		statisticsValue={50248}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
	>
		Other components here...
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 1 - пустой фильтр</h1>
	<FilterWrapper
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={false}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
	>
		<FiltrationGroupComponent
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
				/>
			}
			addGroupConditionButton={
				<FilterConditionEditorButton
					label="И"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
				/>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		/>
		<i>Добавьте фильтр, чтобы создать выборку клиентов</i>
	</FilterWrapper>
	<br />
	<br />
	<h1>
		Пример 2 - Нажал "или" - пустая группа в фокусе, пустая группа ИЛИ в
		режиме редактирования
	</h1>
	<FilterWrapper
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
	>
		<FiltrationGroupComponent
			state="edit"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
				/>
			}
			addGroupConditionButton={
				<FilterConditionEditorButton
					label="И"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
				/>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		/>
	</FilterWrapper>
	<br />
	<br />
	<h1>
		Пример 3 - Нажал "И" - Добавилась пустая группа ИЛИ в группу
		ИЛИредактирования
	</h1>
	<FilterWrapper
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
	>
		<FiltrationGroupComponent
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					label="Добавить фильтр"
				/>
			}
			addGroupConditionButton={
				<FilterConditionEditorButton
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					label="ИЛИ"
				/>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		>
			<FiltrationGroupComponent
				state="edit"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="Добавить фильтр"
					/>
				}
				addGroupConditionButton={
					<FilterConditionEditorButton
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="ИЛИ"
					/>
				}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>
		Пример 4 - Закрыл редактирование группы, отображается пустая группа И в
		группе ИЛИ
	</h1>
	<FilterWrapper
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
	>
		<FiltrationGroupComponent
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
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					label="Добавить фильтр"
				/>
			}
			addGroupConditionButton={
				<FilterConditionEditorButton
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					label="ИЛИ"
				/>
			}
		>
			<FiltrationGroupComponent
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
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="Добавить фильтр"
					/>
				}
				addGroupConditionButton={
					<FilterConditionEditorButton
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="ИЛИ"
					/>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 5 - Одна группа ИЛИ, пустая группа ИЛИ </h1>
	<FilterWrapper
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
	>
		<FiltrationGroupComponent
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
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					label="Добавить фильтр"
				/>
			}
			addGroupConditionButton={
				<FilterConditionEditorButton
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					label="ИЛИ"
				/>
			}
		/>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 5 - Редактирование внешней группы</h1>
	<FilterWrapper
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
	>
		<FiltrationGroupComponent
			state="edit"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					label="Добавить фильтр"
				/>
			}
			addGroupConditionButton={
				<FilterConditionEditorButton
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					label="ИЛИ"
				/>
			}
		>
			<FiltrationGroupComponent
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
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="Добавить фильтр"
					/>
				}
				addGroupConditionButton={
					<FilterConditionEditorButton
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="ИЛИ"
					/>
				}
			>
				<FiltrationConditionComponent
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и мужской"
				/>
				<FiltrationConditionComponent
					filtrationObjectName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
				/>
			</FiltrationGroupComponent>
			<FiltrationGroupComponent
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
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="Добавить фильтр"
					/>
				}
				addGroupConditionButton={
					<FilterConditionEditorButton
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="ИЛИ"
					/>
				}
			>
				<FiltrationConditionComponent
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponent
					filtrationObjectName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 6 - Редактирование внутренней группы</h1>
	<FilterWrapper
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		onApply={() => console.log("apply filter")}
		onClear={() => console.log("clear filter")}
	>
		<FiltrationGroupComponent
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
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					label="Добавить фильтр"
				/>
			}
			addGroupConditionButton={
				<FilterConditionEditorButton
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					label="ИЛИ"
				/>
			}
		>
			<FiltrationGroupComponent
				state="edit"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
				addSimpleConditionButton={
					<FilterConditionEditorButton
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="Добавить фильтр"
					/>
				}
				addGroupConditionButton={
					<FilterConditionEditorButton
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="ИЛИ"
					/>
				}
			>
				<FiltrationConditionComponent
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и мужской"
				/>
				<FiltrationConditionComponent
					filtrationObjectName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
				/>
			</FiltrationGroupComponent>
			<FiltrationGroupComponent
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
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="Добавить фильтр"
					/>
				}
				addGroupConditionButton={
					<FilterConditionEditorButton
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						label="ИЛИ"
					/>
				}
			>
				<FiltrationConditionComponent
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponent
					filtrationObjectName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
</div>
```
