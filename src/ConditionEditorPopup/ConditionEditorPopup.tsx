import * as React from "react";
import { Button as NewButton } from "@mindbox-moscow/ui-components";

import "./ConditionEditorPopup.scss";

interface IProps {
	viewMode: "edit" | "menu";
	innerEditorComponent: React.ReactNode;
	addFilterButtonCaption: string;
	cancelFilterButtonCaption: string;
	isAddFilterButtonEnabled: boolean;
	onAddFilterButtonClick: () => void;
	onCancelFilterButtonClick: () => void;
}

export class ConditionEditorPopup extends React.Component<IProps> {
	public render() {
		const {
			innerEditorComponent,
			addFilterButtonCaption,
			isAddFilterButtonEnabled,
			onAddFilterButtonClick,
			cancelFilterButtonCaption,
			onCancelFilterButtonClick,
			viewMode
		} = this.props;

		return (
			<div className="kit-filter-editor-component">
				{innerEditorComponent}
				<div className="kit-filter-editor-component__buttons">
					<div className="kit-filter-editor-component__buttons-item kit-filter-editor-component__buttons-item--add">
						<NewButton
							disabled={!isAddFilterButtonEnabled}
							size="medium"
							type="secondary"
							onClick={onAddFilterButtonClick}
						>
							{addFilterButtonCaption}
						</NewButton>
					</div>
					{viewMode === "edit" && (
						<div className="kit-filter-editor-component__buttons-item kit-filter-editor-component__buttons-item--cancel">
							<NewButton
								size="medium"
								type="secondary"
								onClick={onCancelFilterButtonClick}
							>
								{cancelFilterButtonCaption}
							</NewButton>
						</div>
					)}
				</div>
			</div>
		);
	}
}
