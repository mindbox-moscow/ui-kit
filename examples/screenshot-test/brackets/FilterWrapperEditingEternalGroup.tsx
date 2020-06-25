import React from "react";
import ReactDOM from "react-dom";

import { FilterConditionEditorButton } from "../../../src/FilterConditionEditorButton";
import { MenuMode } from "../../../src/FilterConditionSelector";
import {
	FilterWrapper,
	ScrollState,
	SelectionStateType
} from "../../../src/FilterWrapper";
import { FiltrationConditionComponent } from "../../../src/FiltrationConditionComponent";
import { FiltrationGroupComponent } from "../../../src/FiltrationGroupComponent";
import { LegacyFilterGroupButton } from "../../../src/LegacyFilterGroupButton";

const ChildRenderer = () => <div />;

const EmptyFilterWrapper = () => (
	<FilterWrapper
		scrollState={ScrollState.Full}
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={true}
		showApplyButton={true}
		selectionState={SelectionStateType.All}
		selectedText="Выбрано"
		selectedCancelText="Отменить"
		selectedCountDescription="100 (все)"
		applyButtonCaption="Применить фильтр"
		clearButtonCaption="Сбросить фильтр"
		buttonUpCaption="Вверх"
		filterActionsCaption=""
		isDataOutdated={true}
		onApply={() => {}}
		onClear={() => {}}
		onCancelSelection={() => {}}
	>
		<FiltrationGroupComponent
			state="edit"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			shouldShowButtons={true}
			shouldShowDuplicateButton={false}
			onGroupTypeToggle={() => {}}
			onConditionStateToggle={() => {}}
			onConditionRemove={() => {}}
			onConditionCopy={() => {}}
			addSimpleConditionButton={
				<FilterConditionEditorButton
					label="Добавить фильтр"
					toggleOpen={() => {}}
					isOpened={false}
					iconType="filter"
					searchTerm=""
					onSearchTermChange={() => {}}
					childRenderer={ChildRenderer}
					rootIds={[]}
					filterLabel=""
					recentLabel=""
					savedLabel=""
					examplesLabel=""
					onModeChanged={() => {}}
					menuMode={MenuMode.Filter}
					helpCaption=""
					helpComponent={() => {}}
					editorComponent={() => {}}
					starred={false}
					onConditionStateToggle={() => {}}
					onPreviousSelected={() => false}
					onExpandCurrent={() => {}}
					onNextSelected={() => {}}
					searchPlaceholder=""
				/>
			}
			addGroupConditionButton={
				<LegacyFilterGroupButton icon="cross-arrows">
					И
				</LegacyFilterGroupButton>
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
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				shouldShowButtons={false}
				shouldShowDuplicateButton={false}
				onGroupTypeToggle={() => {}}
				onConditionStateToggle={() => {}}
				onConditionRemove={() => {}}
				onConditionCopy={() => {}}
			>
				<FiltrationConditionComponent
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и мужской"
					withAlert={true}
					editorComponent={""}
					state="view"
					onConditionStateToggle={() => {}}
					onConditionCopy={() => {}}
					onConditionRemove={() => {}}
				/>
				<FiltrationConditionComponent
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 18 до 35 лет"
					editorComponent={""}
					state="view"
					onConditionStateToggle={() => {}}
					onConditionCopy={() => {}}
					onConditionRemove={() => {}}
				/>
			</FiltrationGroupComponent>
			<FiltrationGroupComponent
				state="view"
				groupType="and"
				andLabel="И"
				orLabel="ИЛИ"
				shouldShowLabel={true}
				shouldShowButtons={false}
				shouldShowDuplicateButton={false}
				onGroupTypeToggle={() => {}}
				onConditionStateToggle={() => {}}
				onConditionRemove={() => {}}
				onConditionCopy={() => {}}
			>
				<FiltrationConditionComponent
					filterablePropertyName="Пол"
					filtrationMethodName="заполнен и женский"
					editorComponent={""}
					state="view"
					onConditionStateToggle={() => {}}
					onConditionCopy={() => {}}
					onConditionRemove={() => {}}
				/>
				<FiltrationConditionComponent
					filterablePropertyName="Возраст"
					filtrationMethodName="заполнен и от 35 до 60 лет"
					editorComponent={""}
					state="view"
					onConditionStateToggle={() => {}}
					onConditionCopy={() => {}}
					onConditionRemove={() => {}}
				/>
			</FiltrationGroupComponent>
		</FiltrationGroupComponent>
	</FilterWrapper>
);

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
		<EmptyFilterWrapper />
	</div>,
	entryElement
);
