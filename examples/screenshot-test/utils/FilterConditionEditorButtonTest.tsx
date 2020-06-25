import React from "react";

import { FilterConditionEditorButton } from "../../../src/FilterConditionEditorButton";
import { MenuMode } from "../../../src/FilterConditionSelector";

const ChildRenderer = () => <div />;

export const FilterConditionEditorButtonTest = () => {
	return (
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
	);
};
