import React from "react";

import {
	CallbackProps,
	FilterWrapper,
	ScrollState,
	SelectionStateType,
	StateProps
} from "../../../src/FilterWrapper";

type Props = StateProps & CallbackProps;

export const FilterWrapperTest: React.FC<Partial<Props>> = props => (
	<FilterWrapper
		scrollState={ScrollState.Full}
		filterActions={[]}
		statisticsDescription="Всего клиентов"
		statisticsValue={1021318}
		doesContainFilter={false}
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
		{...props}
	/>
);
