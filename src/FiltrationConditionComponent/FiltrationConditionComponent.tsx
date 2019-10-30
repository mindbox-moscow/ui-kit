import cn from "classnames";
import * as React from "react";
import { FilterDetails } from "../FilterDetails";
import { IconSvg } from "../IconSvg";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import { CallbackProps, StateProps } from "./types";

import "./FiltrationConditionComponent.scss";

type Props = StateProps & CallbackProps;

export class FiltrationConditionComponent extends React.Component<Props> {
	public refComponent = React.createRef<HTMLElement>();
	public refContent = React.createRef<HTMLDivElement>();

	public componentDidMount() {
		this.handleMoveUpParentPopupSergment();
	}

	public handleMoveUpParentPopupSergment = () => {
		const refContent = this.refContent.current;

		if (refContent) {
			let popoverElement: HTMLElement = document.createElement("div");
			refContent.childNodes.forEach((item: HTMLElement) => {
				if (
					item.classList.contains(
						"kit-segment-button-expand__popover"
					)
				) {
					popoverElement = item;
					item.remove();
				}
			});

			if (refContent.parentElement) {
				refContent.parentElement.parentElement!.appendChild(
					popoverElement
				);
			}
		}
	};

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
			withAlert
		} = this.props;

		const editModeContent = (
			<>
				<OverflowVisibleContainer parentRef={this.refComponent} onNeutralZoneClick={onConditionStateToggle}>
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
						ref={this.refContent}
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
					</div>
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
					{state === "edit" && editModeContent}
				</div>
				{linkedConditionComponent}
			</li>
		);
	}
	private onConditionCopy = (e: React.MouseEvent) => {
		e.stopPropagation();
		this.props.onConditionCopy();
	};

	private onConditionRemove = (e: React.MouseEvent) => {
		e.stopPropagation();
		this.props.onConditionRemove();
	};
}
