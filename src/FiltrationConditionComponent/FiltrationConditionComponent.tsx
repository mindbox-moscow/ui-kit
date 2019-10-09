import cn from "classnames";
import * as React from "react";
import { FilterConditionPopup } from "../FilterConditionPopup";
import { FilterDetails } from "../FilterDetails";
import { IconSvg } from "../IconSvg";
import { StateProps, CallbackProps } from "./types";

import "./FiltrationConditionComponent.scss";

type Props = StateProps & CallbackProps;

export class FiltrationConditionComponent extends React.Component<Props> {
	public refComponent = React.createRef<HTMLElement>();

	public render() {
		const {
			filterablePropertyName,
			filtrationMethodName,
			filtrationMethodParametersComponent,
			linkedConditionComponent,
			onConditionRemove,
			state,
			helpComponent,
			editorComponent,
			onConditionStateToggle,
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
				<FilterConditionPopup parentRef={this.refComponent}>
					<FilterDetails
						helpCaption={filterablePropertyName}
						helpComponent={helpComponent}
						editorComponent={editorComponent}
						starred={starred}
						toggleStar={toggleStar}
						viewMode="edit"
					/>
				</FilterConditionPopup>
			</>
		);
		return (
			<li
				className={cn("kit-filtration-condition", {
					"kit-filtration-condition_edit": state === "edit"
				})}
			>
				<div
					className={cn("kit-filtration-condition__item-text", {
						"kit-filtration-condition__item-text_edit":
							state === "edit",
						"kit-filtration-condition__item-text_linked-condition-edit":
							state === "linkedConditionEdit",
						"kit-filtration-condition__item-text_shaded":
							state === "shaded"
					})}
				>
					<div className="kit-filtration-condition__drag-and-drop" />
					<div
						className="kit-filtration-condition__content"
						onClick={onConditionStateToggle}
					>
						<b ref={this.refComponent}>{filterablePropertyName}</b>
						{filtrationMethodName && (
							<span>{filtrationMethodName}</span>
						)}
						{filtrationMethodParametersComponent}
					</div>
					{state === "edit" && editModeContent}
				</div>
				{linkedConditionComponent}
			</li>
		);
	}
}
