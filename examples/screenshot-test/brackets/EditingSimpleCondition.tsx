import React from "react";
import ReactDOM from "react-dom";
import {
	FilterWrapperTest,
	FiltrationConditionComponentTest,
	FiltrationGroupComponentTest
} from "../utils";

import {
	GridColumn,
	GridContainer,
	GridRow,
	Wrapper
} from "../../../src/BlockComponents";
import { ConditionEditorPopup } from "../../../src/ConditionEditorPopup";
import { IconSvg } from "../../../src/IconSvg";
import { Select } from "../../../src/Select";
import { Tooltip } from "../../../src/Tooltip";

const EditingSimpleCondition = () => {
	return (
		<FilterWrapperTest doesContainFilter={true}>
			<FiltrationGroupComponentTest
				state="shaded"
				groupType="and"
				shouldShowLabel={true}
			>
				<FiltrationConditionComponentTest
					filterablePropertyName="Дата и время"
					filtrationMethodName="заполнена и"
					state="edit"
					editorComponent={
						<ConditionEditorPopup
							innerEditorComponent={
								<GridContainer>
									<GridRow alignItems="center">
										<GridColumn col={5}>
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
										<GridColumn col={7}>
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
										<GridColumn col={12}>
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
					filtrationMethodParametersComponent={
						<Wrapper tag="span">
							от 02.01.2019 до 01.01.2019{" "}
							<Tooltip
								title={<IconSvg type="warning" />}
								position="top"
							>
								Левая граница интервала должна быть меньше
								правой
							</Tooltip>
						</Wrapper>
					}
				/>
			</FiltrationGroupComponentTest>
		</FilterWrapperTest>
	);
};

const entryElement = document.createElement("div");
document.body.appendChild(entryElement);

ReactDOM.render(
	<div
		style={{
			position: "relative",
			width: "1200px",
			marginLeft: "auto",
			marginRight: "auto"
		}}
	>
		<EditingSimpleCondition />
	</div>,
	entryElement
);
