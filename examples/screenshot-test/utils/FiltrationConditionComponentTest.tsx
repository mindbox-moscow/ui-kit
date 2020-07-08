import React from "react";

import { FiltrationConditionComponent } from "../../../src/FiltrationConditionComponent";
import {
	ICallbackProps,
	IStateProps
} from "../../../src/FiltrationConditionComponent/types";

type Props = IStateProps & ICallbackProps;

export const FiltrationConditionComponentTest: React.FC<
	Partial<Props>
> = props => {
	return (
		<FiltrationConditionComponent
			filterablePropertyName="Пол"
			filtrationMethodName="заполнен и мужской"
			editorComponent={""}
			state="view"
			onConditionStateToggle={() => {}}
			onConditionCopy={() => {}}
			onConditionRemove={() => {}}
			{...props}
		/>
	);
};
