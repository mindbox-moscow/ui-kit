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
			statisticsDescription="Всего клиентов"
			statisticsValue={1021318}
			doesContainFilter={true}
			applyButtonCaption="Применить фильтр"
			clearButtonCaption="Сбросить фильтр"
			onApply={() => console.log("apply filter")}
			onClear={() => console.log("clear filter")}
			selectionState="part"
			selectedText="Выбрано"
			selectedCancelText="Отменить выбор"
			selectedCount={0}
			onCancelSelection={() => console.log("clear selected")}
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
	</div>
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
	<h1>Пример 6 - Редактирование внешней группы</h1>
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
	<h1>Пример 7 - Редактирование внутренней группы</h1>
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
	<br />
	<br />
	<h1>Пример 8 - Ховер над простым фильтром</h1>
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
			>
				<FiltrationConditionComponent
					state="view"
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и мужской"
					editorComponent={<input />}
					helpComponent={<span>А тут у нас хелп</span>}
				/>
				<FiltrationConditionComponent
					state="view"
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
					state="view"
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponent
					state="view"
					filtrationObjectName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
				/>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
	<br />
	<br />
	<h1>Пример 9 - Простой фильтр в режиме редактирования</h1>
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
		>
			<FiltrationGroupComponent
				state="shaded"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
			>
				<FiltrationConditionComponent
					state="edit"
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и мужской"
					onConditionStateToggle={() => console.log("change state")}
					starred={true}
					toggleStar={() => console.log("toogle details")}
					editorComponent={
						<FilterConditionEditorComponent
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
			>
				<FiltrationConditionComponent
					state="shaded"
					filtrationObjectName="Пол"
					filtrationMethodName="заполнен и женский"
				/>
				<FiltrationConditionComponent
					state="shaded"
					filtrationObjectName="Возраст"
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
		>
			<FiltrationConditionComponent
				filtrationObjectName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filtrationObjectName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponent
						state="shaded"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
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
		>
			<FiltrationConditionComponent
				filtrationObjectName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filtrationObjectName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponent
						state="shaded"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
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
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					>
						<FiltrationConditionComponent
							filtrationObjectName="Идентификатор в мобильном приложении"
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
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
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
			<FiltrationConditionComponent
				filtrationObjectName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filtrationObjectName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponent
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
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
	<h1>Пример 13 - Если есть вложенное условие</h1>
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
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
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
			<FiltrationConditionComponent
				filtrationObjectName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filtrationObjectName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponent
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
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
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					>
						<FiltrationConditionComponent
							filtrationObjectName="Идентификатор в мобильном приложении"
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
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
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
			<FiltrationConditionComponent
				filtrationObjectName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filtrationObjectName="Розничный заказ"
				filtrationMethodName="есть такие"
				state="view"
				linkedConditionComponent={
					<FiltrationGroupComponent
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
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
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					>
						<FiltrationConditionComponent
							filtrationObjectName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filtrationObjectName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filtrationObjectName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filtrationObjectName="Идентификатор в мобильном приложении"
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
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
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
			<FiltrationConditionComponent
				filtrationObjectName="Пол"
				filtrationMethodName="заполнен и мужской"
			/>
			<FiltrationConditionComponent
				filtrationObjectName="Розничный заказ"
				filtrationMethodName="есть такие"
				state="linkedConditionEdit"
				onConditionStateToggle={() => console.log("state toggle")}
				linkedConditionComponent={
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
						onConditionStateToggle={() =>
							console.log("state toggle")
						}
						onConditionRemove={() => console.log("remove")}
					>
						<FiltrationConditionComponent
							filtrationObjectName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filtrationObjectName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filtrationObjectName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
						<FiltrationConditionComponent
							filtrationObjectName="Идентификатор в мобильном приложении"
							filtrationMethodName="заполнен и равен 42"
						/>
					</FiltrationGroupComponent>
				}
			/>
		</FiltrationGroupComponent>
	</FilterWrapper>
</div>
```
