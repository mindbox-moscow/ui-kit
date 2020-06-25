import React from "react";

import { FiltrationGroupComponent } from "../../../src/FiltrationGroupComponent";
import {
	ICallbackProps,
	IStateProps
} from "../../../src/FiltrationGroupComponent/types";
import { FilterConditionEditorButtonTest } from "./FilterConditionEditorButtonTest";
import { LegacyFilterGroupButtonTest } from "./LegacyFilterGroupButtonTest";

type Props = IStateProps & ICallbackProps;

export const FiltrationGroupComponentTest: React.FC<Partial<Props>> = props => {
	return (
		<FiltrationGroupComponent
			state="view"
			groupType="or"
			andLabel="И"
			orLabel="ИЛИ"
			shouldShowLabel={false}
			shouldShowButtons={false}
			shouldShowDuplicateButton={false}
			addSimpleConditionButton={<FilterConditionEditorButtonTest />}
			addGroupConditionButton={<LegacyFilterGroupButtonTest />}
			onGroupTypeToggle={() => {}}
			onConditionStateToggle={() => {}}
			onConditionRemove={() => {}}
			onConditionCopy={() => {}}
			{...props}
		/>
	);
};
