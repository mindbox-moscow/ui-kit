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

const ENTER_KEY = 13;

export class FilterConditionEditorComponent extends React.Component<Props> {
	public componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown);
	}

	public componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown);
	}

	public handleKeyDown = (e: KeyboardEvent) => {
		const { onAddFilterButtonClick, isAddFilterButtonEnabled } = this.props;

		if (e.keyCode === ENTER_KEY && isAddFilterButtonEnabled) {
			onAddFilterButtonClick();
		}
	};

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
	}
}
