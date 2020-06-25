import React from "react";
import ReactDOM from "react-dom";

import { FilterConditionEditorButton } from "../../../src/FilterConditionEditorButton";
import { MenuMode } from "../../../src/FilterConditionSelector";
import {
	FilterWrapper,
	ScrollState,
	SelectionStateType
} from "../../../src/FilterWrapper";
import { FiltrationGroupComponent } from "../../../src/FiltrationGroupComponent";
import { LegacyFilterGroupButton } from "../../../src/LegacyFilterGroupButton";

const ChildRenderer = () => <div />;

const EmptyFilterWrapper = () => (
	<FilterWrapper
		scrollState={ScrollState.Minified}
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={false}
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
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			shouldShowButtons={true}
			shouldShowDuplicateButton={false}
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
			onGroupTypeToggle={() => {}}
			onConditionStateToggle={() => {}}
			onConditionRemove={() => {}}
			onConditionCopy={() => {}}
		/>
		<i>Добавьте фильтр, чтобы создать выборку клиентов</i>
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
