import React from "react";
import ReactDOM from "react-dom";

import {
	FilterWrapper,
	ScrollState,
	SelectionStateType
} from "../../../src/FilterWrapper";
import { FiltrationGroupComponent } from "../../../src/FiltrationGroupComponent";

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
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={true}
			shouldShowButtons={false}
			shouldShowDuplicateButton={false}
			onGroupTypeToggle={() => {}}
			onConditionStateToggle={() => {}}
			onConditionRemove={() => {}}
			onConditionCopy={() => {}}
		/>
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
