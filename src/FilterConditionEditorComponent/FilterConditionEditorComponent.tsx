import * as React from "react";
import { Button } from "../Button";

import "./FilterConditionEditorComponent.scss";

interface Props {
	innerEditorComponent: React.ReactNode;
	addFilterButtonCaption: string;
	isAddFilterButtonEnabled: boolean;
	onAddFilterButtonClick: () => void;
}

export const FilterConditionEditorComponent = (props: Props) => {
	const {
		innerEditorComponent,
		addFilterButtonCaption,
		isAddFilterButtonEnabled,
		onAddFilterButtonClick
	} = props;

	return (
		<div className="kit-filter-editor-component">
			{innerEditorComponent}
			<Button
				color="gray"
				hasBorder={true}
				disabled={!isAddFilterButtonEnabled}
				onClick={onAddFilterButtonClick}
				size="large"
				className="kit-filter-editor-component__btn"
			>
				{addFilterButtonCaption}
			</Button>
		</div>
	);
};
