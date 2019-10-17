import cn from "classnames";
import * as React from "react";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import { FilterDetails } from "../FilterDetails";
import { IconSvg } from "../IconSvg";
import { StateProps, CallbackProps } from "./types";

import "./FiltrationConditionComponent.scss";

type Props = StateProps & CallbackProps;

export class FiltrationConditionComponent extends React.Component<Props> {
	private onConditionCopy = (e: React.MouseEvent) => {
		e.stopPropagation();
		this.props.onConditionCopy();
	}

	private onConditionRemove = (e: React.MouseEvent) => {
		e.stopPropagation();
		this.props.onConditionRemove();
	}

	public refComponent = React.createRef<HTMLElement>();

	public render() {
		const {
			filterablePropertyName,
			filtrationMethodName,
			filtrationMethodParametersComponent,
			linkedConditionComponent,
			state,
			helpComponent,
			editorComponent,
			onConditionStateToggle,
			withAlert,
		} = this.props;

		const editModeContent = (
			<>
				<OverflowVisibleContainer parentRef={this.refComponent}>
					<FilterDetails
						helpCaption={filterablePropertyName}
						helpComponent={helpComponent}
						editorComponent={editorComponent}
						onClose={onConditionStateToggle}
						viewMode="edit"
					/>
				</OverflowVisibleContainer>
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
							state === "shaded",
						"kit-filtration-condition__item-text_read-only":
							state === "readOnly",
						"kit-filtration-condition__item-text_view":
							state === "view"
					})}
				>
					<div className="kit-filtration-condition__drag-and-drop" />
					<div
						className="kit-filtration-condition__content"
						onClick={onConditionStateToggle}
					>
						<b ref={this.refComponent}>{filterablePropertyName}</b>
						{filtrationMethodName && (
							<span
								className={cn({
									"kit-filtration-condition_with-alert": withAlert
								})}
							>
								{filtrationMethodName}
							</span>
						)}
						{filtrationMethodParametersComponent}
						<button
							type="button"
							className="kit-filtration-condition__copy"
							onClick={this.onConditionCopy}
						>
							<IconSvg type="duplicate" />
						</button>
						<button
							type="button"
							className="kit-filtration-condition__remove"
							onClick={this.onConditionRemove}
						>
							<IconSvg type="trash" />
						</button>
					</div>
					{state === "edit" && editModeContent}
				</div>
				{linkedConditionComponent}
			</li>
		);
	}
}
