import cn from "classnames";
import * as React from "react";
import { FilterDetails } from "../FilterDetails";
import { IconSvg } from "../IconSvg";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import { CallbackProps, StateProps } from "./types";

import "./FiltrationConditionComponent.scss";

type Props = StateProps & CallbackProps;

interface State {
	offsetTop: number;
}

const RANGE_OFFSET_TOP = 30;

export class FiltrationConditionComponent extends React.Component<
	Props,
	State
> {
	public refComponent = React.createRef<HTMLElement>();
	public refContent = React.createRef<HTMLDivElement>();

	public state = {
		offsetTop: 0
	};
	private popoverElement: Element = document.createElement("div");

	public componentDidMount() {
		window.addEventListener("scroll", this.scrollWindowsHeight);
		this.handleMoveUpParentPopupSegment();
	}

	public componentWillUnmount() {
		const refContent = this.refContent.current;

		window.removeEventListener("scroll", this.scrollWindowsHeight);
		window.removeEventListener("load", this.handleMoveUpParentPopupSegment);

		if (refContent) {
			if (refContent.parentElement) {
				refContent.parentElement.parentElement!.removeChild(
					this.popoverElement
				);
			}
		}
	}

	public scrollWindowsHeight = () => {
		const { offsetTop } = this.state;
		const { onConditionStateToggle, state } = this.props;
		const refContent = this.refContent.current;

		if (refContent) {
			const { top } = refContent.getBoundingClientRect();
			if (offsetTop === 0) {
				this.setState({
					offsetTop: top
				});
			}

			if (
				top > 0 &&
				window.innerHeight >= top &&
				offsetTop - RANGE_OFFSET_TOP > top &&
				onConditionStateToggle &&
				state === "edit"
			) {
				onConditionStateToggle();
			}
		}
	};

	public handleMoveUpParentPopupSegment = () => {
		const refContent = this.refContent.current;

		if (refContent) {
			const popover = refContent.querySelector(
				".kit-segment-button-expand__popover"
			);

			if (popover) {
				this.popoverElement = popover;
				popover.remove();
			}

			if (refContent.parentElement) {
				refContent.parentElement.parentElement!.appendChild(
					this.popoverElement
				);
			}
		}

		window.addEventListener("load", this.handleMoveUpParentPopupSegment);
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
				<OverflowVisibleContainer
					parentRef={this.refComponent}
					onNeutralZoneClick={onConditionStateToggle}
				>
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
