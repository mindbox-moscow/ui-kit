import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { FilterConditionEditorComponent } from "../FilterConditionEditorComponent";
import { FilterDetails } from "../FilterDetails";
import { StateProps, CallbackProps } from "./types";

import "./FiltrationConditionComponent.scss";

type Props = StateProps & CallbackProps;

export class FiltrationConditionComponent extends React.Component<Props> {
	public render() {
		const {
			filtrationObjectName,
			filtrationMethodName,
			filtrationMethodParametersComponent,
			linkedConditionComponent,
			onConditionRemove,
			state,
			helpComponent,
			editorComponent,
			onConditionStateToggle,
			onApplyFilter,
			starred,
			toggleStar
		} = this.props;

		const editModeContent = (
			<>
				<div
					className="kit-filtration-condition__remove"
					onClick={onConditionRemove}
				>
					<IconSvg type="trash" />
				</div>
				<FilterDetails
					helpCaption={filtrationObjectName}
					helpComponent={helpComponent}
					editorComponent={
						<>
							{editorComponent}
							<FilterConditionEditorComponent
								innerEditorComponent={""}
								addFilterButtonCaption="Применить изменения"
								isAddFilterButtonEnabled={false}
								onAddFilterButtonClick={onApplyFilter}
							/>
						</>
					}
					starred={starred}
					toggleStar={toggleStar}
					viewMode="edit"
				/>
			</>
		);

		return (
			<li
				className={cn("kit-filtration-condition", {
					"kit-filtration-condition_edit": state === "edit"
				})}
			>
				<span
					className={cn("kit-filtration-condition__item-text", {
						"kit-filtration-condition__item-text_edit":
							state === "edit"
					})}
					onClick={onConditionStateToggle}
				>
					<div className="kit-filtration-condition__drag-and-drop" />
					<b>{filtrationObjectName}</b>
					{filtrationMethodName && (
						<span>{filtrationMethodName}</span>
					)}
					{filtrationMethodParametersComponent}
					{state === "edit" && editModeContent}
				</span>
				{linkedConditionComponent}
			</li>
		);
	}

	private handleClick = () => {
		const element = this.refs.element;
		// @ts-ignore
		element.classList.add("click-state");
	};
}
