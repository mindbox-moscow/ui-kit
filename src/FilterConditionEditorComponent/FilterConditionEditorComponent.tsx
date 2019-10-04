import * as React from "react";
import { Button } from "../Button";

import "./FilterConditionEditorComponent.scss";

interface Props {
	viewMode: "edit" | "menu";
	innerEditorComponent: React.ReactNode;
	addFilterButtonCaption: string;
	cancelFilterButtonCaption: string;
	isAddFilterButtonEnabled: boolean;
	onAddFilterButtonClick: () => void;
	onCancelFilterButtonClick: () => void;
}

export const FilterConditionEditorComponent = (props: Props) => {
	const {
		innerEditorComponent,
		addFilterButtonCaption,
		isAddFilterButtonEnabled,
		onAddFilterButtonClick,
		cancelFilterButtonCaption,
		onCancelFilterButtonClick,
		viewMode
	} = props;

	return (
		<div className="kit-filter-editor-component">
			{innerEditorComponent}
			<div className="kit-filter-editor-component__buttons">
				<Button
					color="silver"
					hasBorder={true}
					disabled={!isAddFilterButtonEnabled}
					onClick={onAddFilterButtonClick}
					size="medium"
					className="kit-filter-editor-component__btn"
				>
					{addFilterButtonCaption}
				</Button>
				{viewMode === "edit" && (
					<Button
						color="silver"
						hasBorder={true}
						onClick={onCancelFilterButtonClick}
						size="medium"
						className="kit-filter-editor-component__btn kit-filter-editor-component__cancel"
					>
						{cancelFilterButtonCaption}
					</Button>
				)}
			</div>
		</div>
	);
};
