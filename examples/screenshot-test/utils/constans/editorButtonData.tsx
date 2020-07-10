import React, { Fragment } from "react";

import {
	Form,
	FormField,
	GridColumn,
	GridContainer,
	GridRow,
	Popover,
	Wrapper
} from "../../../../src/BlockComponents";
import { ConditionEditorPopup } from "../../../../src/ConditionEditorPopup";
import { DateField, Days, Months } from "../../../../src/DateField";
import { FilterConditionSelectorItem } from "../../../../src/FilterConditionSelector";
import { Input } from "../../../../src/Input";
import { Select } from "../../../../src/Select";
import { TimeField } from "../../../../src/TimeField";
import { FilterConditionEditorButtonTest } from "../FilterConditionEditorButtonTest";
import { FiltrationConditionComponentTest } from "../FiltrationConditionComponentTest";
import { FiltrationGroupComponentTest } from "../FiltrationGroupComponentTest";
import { FlatSelectTest } from "../FlatSelectTest";

const months: Months = [
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

const days: Days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const EditorComponentExample = () => {
	return (
		<GridContainer>
			<GridRow alignItems="center">
				<GridColumn col={4}>
					<FlatSelectTest />
				</GridColumn>
				<GridColumn col={4}>
					<FlatSelectTest />
				</GridColumn>
			</GridRow>
			<GridRow alignItems="center">
				<GridColumn col={12}>
					<Input noShadow={true} value="" />
				</GridColumn>
			</GridRow>
		</GridContainer>
	);
};

const segmentViewHistory = () => (
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
				<Form labelPosition="top">
					<FormField label="Дата:">
						<DateField
							onChange={() => {}}
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
		<GridRow alignItems="center">
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
		<GridRow alignItems="center">
			<GridColumn col={12}>
				<Popover
					buttonCaptionOpen="Развернуть состав сегмента"
					buttonCaptionClose="Свернуть состав сегмента"
				>
					<FiltrationConditionComponentTest
						state="readOnly"
						filterablePropertyName="Подписка Подписан на что-нибудь"
						filtrationMethodName="без учета брендов, каналов и тематик"
						linkedConditionComponent={
							<FiltrationGroupComponentTest
								state="readOnly"
								groupType="or"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={true}
							>
								<FiltrationConditionComponentTest
									state="readOnly"
									filterablePropertyName="Email: заполнен и валидный"
								/>
								<FiltrationConditionComponentTest
									state="readOnly"
									filterablePropertyName="Мобильный телефон: заполнен и валидный"
								/>
							</FiltrationGroupComponentTest>
						}
					/>
				</Popover>
			</GridColumn>
		</GridRow>
	</GridContainer>
);

const segmentView = () => (
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
		</GridRow>
		<GridRow alignItems="center">
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
		<GridRow alignItems="center">
			<GridColumn col={12}>
				<Popover
					buttonCaptionOpen="Развернуть состав сегмента"
					buttonCaptionClose="Свернуть состав сегмента"
				>
					<FiltrationConditionComponentTest
						state="readOnly"
						filterablePropertyName="Подписка Подписан на что-нибудь"
						filtrationMethodName="без учета брендов, каналов и тематик"
						linkedConditionComponent={
							<FiltrationGroupComponentTest
								state="readOnly"
								groupType="or"
								andLabel="И"
								orLabel="ИЛИ"
								shouldShowLabel={true}
							>
								<FiltrationConditionComponentTest
									state="readOnly"
									filterablePropertyName="Email: заполнен и валидный"
								/>
								<FiltrationConditionComponentTest
									state="readOnly"
									filterablePropertyName="Мобильный телефон: заполнен и валидный"
									linkedConditionComponent={
										<FiltrationGroupComponentTest
											state="readOnly"
											groupType="and"
											andLabel="И"
											orLabel="ИЛИ"
											shouldShowLabel={true}
											addSimpleConditionButton={
												<FilterConditionEditorButtonTest
													toggleOpen={() =>
														console.log("toggle")
													}
													isOpened={false}
													label="Добавить фильтр"
												/>
											}
											addGroupConditionButton={
												<FilterConditionEditorButtonTest
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
											<FiltrationConditionComponentTest
												state="readOnly"
												filterablePropertyName="Подписка Подписан на что-нибудь"
												filtrationMethodName="без учета брендов, каналов и тематик"
											/>
											<FiltrationGroupComponentTest
												state="readOnly"
												groupType="or"
												andLabel="И"
												orLabel="ИЛИ"
												shouldShowLabel={true}
												addSimpleConditionButton={
													<FilterConditionEditorButtonTest
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
													<FilterConditionEditorButtonTest
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
												<FiltrationConditionComponentTest
													state="readOnly"
													filterablePropertyName="Подписка Подписан на что-нибудь"
													filtrationMethodName="без учета брендов, каналов и тематик"
												/>
												<FiltrationConditionComponentTest
													state="readOnly"
													filterablePropertyName="Подписка Подписан на что-нибудь"
													filtrationMethodName="без учета брендов, каналов и тематик"
												/>
												<FiltrationGroupComponentTest
													state="readOnly"
													groupType="and"
													andLabel="И"
													orLabel="ИЛИ"
													shouldShowLabel={true}
													addSimpleConditionButton={
														<FilterConditionEditorButtonTest
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
														<FilterConditionEditorButtonTest
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
													<FiltrationConditionComponentTest
														state="readOnly"
														filterablePropertyName="Подписка Подписан на что-нибудь"
														filtrationMethodName="без учета брендов, каналов и тематик"
													/>
												</FiltrationGroupComponentTest>
											</FiltrationGroupComponentTest>
										</FiltrationGroupComponentTest>
									}
								/>
							</FiltrationGroupComponentTest>
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
				<Form labelPosition="top">
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
		<GridRow alignItems="center">
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
		<GridRow alignItems="center">
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

export const allElementsDictionary = {
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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
				viewMode="edit"
				cancelFilterButtonCaption="Закрыть"
				onCancelFilterButtonClick={() => {}}
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

interface IProps {
	id: string;
	pathFromRoot: any;
}

export const createChildRenderer = (
	onSelectCallback: any,
	onToggleExpandCallback: any,
	state: any
) => {
	return class ExampleChildRenderer extends React.Component<IProps> {
		constructor(props: any) {
			super(props);

			this.onSelect = this.onSelect.bind(this);
			this.onToggleExpand = this.onToggleExpand.bind(this);
			this.createList = this.createList.bind(this);
		}

		public onSelect() {
			onSelectCallback(this.props.id);
		}
		public onToggleExpand() {
			onToggleExpandCallback(this.props.id);
		}

		public createList() {
			const { name, type, childIds } = allElementsDictionary[
				this.props.id
			];

			const list = [];
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

		public render() {
			return <>{this.createList()}</>;
		}
	};
};
