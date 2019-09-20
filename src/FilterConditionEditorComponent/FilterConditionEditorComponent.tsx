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
					color="gray"
					hasBorder={true}
					disabled={!isAddFilterButtonEnabled}
					onClick={onAddFilterButtonClick}
					size="large"
					className="kit-filter-editor-component__btn"
				>
					{addFilterButtonCaption}
				</Button>
				{viewMode === "edit" && (
					<Button
						color="gray"
						hasBorder={true}
						onClick={onCancelFilterButtonClick}
						size="large"
						className="kit-filter-editor-component__btn kit-filter-editor-component__cancel"
					>
						{cancelFilterButtonCaption}
					</Button>
				)}
			</div>
		</div>
	);
};
