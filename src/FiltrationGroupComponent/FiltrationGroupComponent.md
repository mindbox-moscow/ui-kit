```jsx
<div style={{}}>
	<h2>1.</h2>
	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="or"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={false}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Розничный заказ"
			filtrationMethodName="есть такие"
			linkedConditionComponent={
				<FiltrationGroupComponent
					onClickOutside={() => {}}
					state="view"
					groupType="or"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={false}
				>
					<FiltrationConditionComponent
						filterablePropertyName="Покупка"
						filtrationMethodName="есть такие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								onClickOutside={() => {}}
								state="view"
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filterablePropertyName="Цена"
									filtrationMethodName="заполнена и от"
									filtrationMethodParametersComponent={
										<span style={{ fontWeight: "bold" }}>
											5000
										</span>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
					<FiltrationConditionComponent
						filterablePropertyName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								onClickOutside={() => {}}
								state="view"
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filterablePropertyName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												90 дней
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
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
				>
					<FiltrationConditionComponent
						filterablePropertyName="Покупка"
						filtrationMethodName="нет таких"
					/>
					<FiltrationConditionComponent
						filterablePropertyName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								onClickOutside={() => {}}
								state="view"
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filterablePropertyName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												14 дней
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />
	<h2>2.</h2>
	<div>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Розничный заказ"
				filtrationMethodName="есть такие"
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="or"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={true}
					>
						<FiltrationConditionComponent
							filterablePropertyName="Покупка"
							filtrationMethodName="есть такие"
							linkedConditionComponent={
								<FiltrationGroupComponent
									onClickOutside={() => {}}
									state="view"
									groupType="and"
									andLabel="И"
									orLabel="ИЛИ"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponent
										filterablePropertyName="Цена"
										filtrationMethodName="заполнена и от"
										filtrationMethodParametersComponent={
											<span
												style={{ fontWeight: "bold" }}
											>
												5000
											</span>
										}
									/>
								</FiltrationGroupComponent>
							}
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Первое действие"
							linkedConditionComponent={
								<FiltrationGroupComponent
									onClickOutside={() => {}}
									state="view"
									groupType="and"
									andLabel="И"
									orLabel="ИЛИ"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponent
										filterablePropertyName="Период от текущей даты"
										filtrationMethodName="до"
										filtrationMethodParametersComponent={
											<>
												<span
													style={{
														fontWeight: "bold"
													}}
												>
													90 дней
												</span>
												<span
													style={{
														fontWeight: "normal"
													}}
												>
													назад
												</span>
											</>
										}
									/>
								</FiltrationGroupComponent>
							}
						/>
					</FiltrationGroupComponent>
				}
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
					>
						<FiltrationConditionComponent
							filterablePropertyName="Покупка"
							filtrationMethodName="нет таких"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Первое действие"
							linkedConditionComponent={
								<FiltrationGroupComponent
									onClickOutside={() => {}}
									state="view"
									groupType="and"
									andLabel="И"
									orLabel="ИЛИ"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponent
										filterablePropertyName="Период от текущей даты"
										filtrationMethodName="до"
										filtrationMethodParametersComponent={
											<>
												<span
													style={{
														fontWeight: "bold"
													}}
												>
													14 дней
												</span>
												<span
													style={{
														fontWeight: "normal"
													}}
												>
													назад
												</span>
											</>
										}
									/>
								</FiltrationGroupComponent>
							}
						/>
					</FiltrationGroupComponent>
				}
			/>
		</FiltrationGroupComponent>
	</div>

	<br />
	<br />
	<h2>
		3.
		<a href="https://github.com/mindbox-moscow/ui-kit/issues/272">
			https://github.com/mindbox-moscow/ui-kit/issues/272
		</a>
	</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="or"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Розничный заказ"
			filtrationMethodName="есть такие"
			linkedConditionComponent={
				<FiltrationGroupComponent
					onClickOutside={() => {}}
					state="view"
					groupType="or"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
				>
					<FiltrationConditionComponent
						filterablePropertyName="Покупка"
						filtrationMethodName="есть такие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								onClickOutside={() => {}}
								state="view"
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filterablePropertyName="Цена"
									filtrationMethodName="заполнена и от"
									filtrationMethodParametersComponent={
										<span style={{ fontWeight: "bold" }}>
											5000
										</span>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
					<FiltrationConditionComponent
						filterablePropertyName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								onClickOutside={() => {}}
								state="view"
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									negativePostFix="не"
									filtrationObjectName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												90 дней
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
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
				>
					<FiltrationConditionComponent
						filterablePropertyName="Покупка"
						filtrationMethodName="нет таких"
					/>
					<FiltrationConditionComponent
						filterablePropertyName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								onClickOutside={() => {}}
								state="view"
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filterablePropertyName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												14 дней
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
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
				>
					<FiltrationConditionComponent
						filterablePropertyName="Покупка"
						filtrationMethodName="нет таких"
					/>
					<FiltrationConditionComponent
						filterablePropertyName="Первое действие"
						linkedConditionComponent={
							<FiltrationGroupComponent
								onClickOutside={() => {}}
								state="view"
								groupType="and"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={false}
							>
								<FiltrationConditionComponent
									filterablePropertyName="Период от текущей даты"
									filtrationMethodName="до"
									filtrationMethodParametersComponent={
										<>
											<span
												style={{ fontWeight: "bold" }}
											>
												14 дней
											</span>
											<span
												style={{ fontWeight: "normal" }}
											>
												назад
											</span>
										</>
									}
								/>
							</FiltrationGroupComponent>
						}
					/>
				</FiltrationGroupComponent>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />
	<h2>4.</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="edit"
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
	>
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>
		5.
		<a href="https://github.com/mindbox-moscow/ui-kit/issues/276">
			https://github.com/mindbox-moscow/ui-kit/issues/276
		</a>
	</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="or"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>

			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
		</FiltrationGroupComponent>

		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>5.5.1 Инвертированный 5, группа И с лейблом</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="and"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>

			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
		</FiltrationGroupComponent>

		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>5.5.2 Инвертированный 5, группа И без лейбла</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="and"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={false}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>

			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
		</FiltrationGroupComponent>

		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>
	</FiltrationGroupComponent>

	<h2>5.6.1 Группа И без лейбла с 3мя условиями, одно -- группа без детей</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="and"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={false}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		/>

		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>5.6.2 Группа И с лейблом с 3мя условиями, одно -- группа без детей</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="and"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationGroupComponent
				onClickOutside={() => {}}
				state="view"
				groupType="or"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
			>
				<FiltrationGroupComponent
					onClickOutside={() => {}}
					state="view"
					groupType="or"
					andLabel="И"
					orLabel="ИЛИ"
					shouldShowLabel={true}
				/>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>

		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>5.6.3 Группа ИЛИ с 3мя условиями, одно -- группа без детей</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="or"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		/>

		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>5.6.4 Группа ИЛИ с группой без детей</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="or"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>5.6.5 Группа ИЛИ с группой без детей в режиме редактирования</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
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
			<Button color="silver" size="xxs" hasBorder type="button">
				Добавить группу И
			</Button>
		}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span style={{ fontWeight: "bold" }}>Мужской</span>
			}
		/>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>
		6.
		<a href="https://github.com/mindbox-moscow/ui-kit/issues/273">
			https://github.com/mindbox-moscow/ui-kit/issues/273
		</a>
	</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="or"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>
		</FiltrationGroupComponent>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>
		</FiltrationGroupComponent>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>6.5.1: Инвертированный 6, группа И с лейблом</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="and"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>
		</FiltrationGroupComponent>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>
		</FiltrationGroupComponent>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>6.5.2: Инвертированный 6, группа И без лейбла</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="and"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={false}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>
		</FiltrationGroupComponent>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>
		</FiltrationGroupComponent>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>
		7.
		<a href="https://github.com/mindbox-moscow/ui-kit/issues/274">
			https://github.com/mindbox-moscow/ui-kit/issues/274
		</a>
	</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="or"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
					>
						<FiltrationConditionComponent
							filterablePropertyName="Покупка"
							filtrationMethodName="нет таких"
							linkedConditionComponent={
								<FiltrationGroupComponent
									onClickOutside={() => {}}
									state="view"
									groupType="and"
									andLabel="И"
									orLabel="ИЛИ"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponent
										filterablePropertyName="Период от текущей даты"
										filtrationMethodName="до"
										filtrationMethodParametersComponent={
											<>
												<span
													style={{
														fontWeight: "bold"
													}}
												>
													14 дней
												</span>
												<span
													style={{
														fontWeight: "normal"
													}}
												>
													назад
												</span>
											</>
										}
									/>
								</FiltrationGroupComponent>
							}
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Первое действие"
							linkedConditionComponent={
								<FiltrationGroupComponent
									onClickOutside={() => {}}
									state="view"
									groupType="and"
									andLabel="И"
									orLabel="ИЛИ"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponent
										filterablePropertyName="Период от текущей даты"
										filtrationMethodName="до"
										filtrationMethodParametersComponent={
											<>
												<span
													style={{
														fontWeight: "bold"
													}}
												>
													14 дней
												</span>
												<span
													style={{
														fontWeight: "normal"
													}}
												>
													назад
												</span>
											</>
										}
									/>
								</FiltrationGroupComponent>
							}
						/>
					</FiltrationGroupComponent>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>
		</FiltrationGroupComponent>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>
		</FiltrationGroupComponent>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
			/>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Мужской</span>
				}
			/>
		</FiltrationGroupComponent>

		<FiltrationGroupComponent
			onClickOutside={() => {}}
			state="view"
			groupType="and"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
		>
			<FiltrationConditionComponent
				filterablePropertyName="Пол"
				filtrationMethodName="заполнен и"
				filtrationMethodParametersComponent={
					<span style={{ fontWeight: "bold" }}>Женский</span>
				}
				linkedConditionComponent={
					<FiltrationGroupComponent
						onClickOutside={() => {}}
						state="view"
						groupType="and"
						andLabel="И"
						orLabel="ИЛИ"
						shouldShowLabel={false}
					>
						<FiltrationConditionComponent
							filterablePropertyName="Покупка"
							filtrationMethodName="нет таких"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Первое действие"
							linkedConditionComponent={
								<FiltrationGroupComponent
									onClickOutside={() => {}}
									state="view"
									groupType="and"
									andLabel="И"
									orLabel="ИЛИ"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponent
										filterablePropertyName="Период от текущей даты"
										filtrationMethodName="до"
										filtrationMethodParametersComponent={
											<>
												<span
													style={{
														fontWeight: "bold"
													}}
												>
													14 дней
												</span>
												<span
													style={{
														fontWeight: "normal"
													}}
												>
													назад
												</span>
											</>
										}
									/>
								</FiltrationGroupComponent>
							}
						/>
					</FiltrationGroupComponent>
				}
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
					>
						<FiltrationConditionComponent
							filterablePropertyName="Покупка"
							filtrationMethodName="нет таких"
						/>
						<FiltrationConditionComponent
							filterablePropertyName="Первое действие"
							linkedConditionComponent={
								<FiltrationGroupComponent
									onClickOutside={() => {}}
									state="view"
									groupType="and"
									andLabel="И"
									orLabel="ИЛИ"
									shouldShowLabel={false}
								>
									<FiltrationConditionComponent
										filterablePropertyName="Период от текущей даты"
										filtrationMethodName="до"
										filtrationMethodParametersComponent={
											<>
												<span
													style={{
														fontWeight: "bold"
													}}
												>
													14 дней
												</span>
												<span
													style={{
														fontWeight: "normal"
													}}
												>
													назад
												</span>
											</>
										}
									/>
								</FiltrationGroupComponent>
							}
						/>
					</FiltrationGroupComponent>
				}
			/>
		</FiltrationGroupComponent>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>8: Одно простое условие в группе И с лейблом</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="and"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={true}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span>
					от <span style={{ fontWeight: "bold" }}>10</span> до
					<span style={{ fontWeight: "bold" }}>20</span>
				</span>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>8.1: Одно простое условие в группе И без лейблом</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="and"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={false}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и"
			filtrationMethodParametersComponent={
				<span>
					от <span style={{ fontWeight: "bold" }}>10</span> до
					<span style={{ fontWeight: "bold" }}>20</span>
				</span>
			}
		/>
	</FiltrationGroupComponent>

	<br />
	<br />

	<h2>8.2: Одно простое условие без метода фильтрации в группе И</h2>

	<FiltrationGroupComponent
		onClickOutside={() => {}}
		state="view"
		groupType="and"
		andLabel="И"
		orLabel="ИЛИ"
		shouldShowLabel={false}
	>
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodParametersComponent={
				<span>
					от <span style={{ fontWeight: "bold" }}>10</span> до
					<span style={{ fontWeight: "bold" }}>20</span>
				</span>
			}
		/>
	</FiltrationGroupComponent>

	<h2>8.3</h2>
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
			<FilterConditionEditorButton
				label="И"
				toggleOpen={() => console.log("toggle")}
				isOpened={false}
				iconType="cross-arrows"
			/>
		}
		onGroupTypeToggle={() => console.log("type toggle")}
		onConditionStateToggle={() => console.log("state toggle")}
		onConditionRemove={() => console.log("remove")}
	>
		<FiltrationConditionComponent
			state="view"
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
				<FilterConditionEditorButton
					label="И"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="cross-arrows"
				/>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		/>
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
				<FilterConditionEditorButton
					label="И"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="cross-arrows"
				/>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
		/>
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
				<FilterConditionEditorButton
					label="И"
					toggleOpen={() => console.log("toggle")}
					isOpened={false}
					iconType="cross-arrows"
				/>
			}
			onGroupTypeToggle={() => console.log("type toggle")}
			onConditionStateToggle={() => console.log("state toggle")}
			onConditionRemove={() => console.log("remove")}
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
					<FilterConditionEditorButton
						label="И"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="cross-arrows"
					/>
				}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
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
						<FilterConditionEditorButton
							label="И"
							toggleOpen={() => console.log("toggle")}
							isOpened={false}
							iconType="cross-arrows"
						/>
					}
					onGroupTypeToggle={() => console.log("type toggle")}
					onConditionStateToggle={() => console.log("state toggle")}
					onConditionRemove={() => console.log("remove")}
				/>
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
						<FilterConditionEditorButton
							label="И"
							toggleOpen={() => console.log("toggle")}
							isOpened={false}
							iconType="cross-arrows"
						/>
					}
					onGroupTypeToggle={() => console.log("type toggle")}
					onConditionStateToggle={() => console.log("state toggle")}
					onConditionRemove={() => console.log("remove")}
				/>
			</FiltrationGroupComponent>
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
					<FilterConditionEditorButton
						label="И"
						toggleOpen={() => console.log("toggle")}
						isOpened={false}
						iconType="cross-arrows"
					/>
				}
				onGroupTypeToggle={() => console.log("type toggle")}
				onConditionStateToggle={() => console.log("state toggle")}
				onConditionRemove={() => console.log("remove")}
			/>
		</FiltrationGroupComponent>
	</FiltrationGroupComponent>
</div>
```
