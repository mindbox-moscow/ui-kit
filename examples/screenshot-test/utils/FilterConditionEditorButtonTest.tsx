import React from "react";

import { FilterConditionEditorButton } from "../../../src/FilterConditionEditorButton";
import { Props as ButtonProps } from "../../../src/FilterConditionEditorButton/types";
import { MenuMode } from "../../../src/FilterConditionSelector";
import { Props as SelectorProps } from "../../../src/FilterConditionSelector";
import { IconSvgTypes } from "../../../src/IconSvg";

const ChildRenderer = () => <div />;

type Props = ButtonProps &
	SelectorProps & {
		iconType?: IconSvgTypes;
	};

export const FilterConditionEditorButtonTest = (props: Partial<Props>) => {
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
			{...props}
		/>
	);
};
