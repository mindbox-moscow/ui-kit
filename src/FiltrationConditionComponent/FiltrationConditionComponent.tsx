import cn from "classnames";
import * as React from "react";
import { FilterDetails } from "../FilterDetails";
import { FiltrationGroupComponentContext } from "../FiltrationGroupComponent";
import { IconSvg } from "../IconSvg";
import { FiltrationConditionComponentContext } from "./FiltrationConditionComponentContext";
import { CallbackProps, StateProps } from "./types";

import "./FiltrationConditionComponent.scss";

type Props = StateProps & CallbackProps;

interface State {
	showPopover: boolean;
	popoversChildren: React.ReactNode;
	popoverFilterAction: React.ReactNode;
}

export class FiltrationConditionComponent extends React.Component<
	Props,
	State
> {
	public static context: (() => void) | null;
	public refContent = React.createRef<HTMLDivElement>();

	public state = {
		popoverFilterAction: null,
		popoversChildren: null,
		showPopover: false
	};

	public componentDidMount() {
		const rerenderBrackets = this.context;

		if (rerenderBrackets) {
			rerenderBrackets();
		}
	}

	public componentDidUpdate() {
		const rerenderBrackets = this.context;

		if (rerenderBrackets) {
			rerenderBrackets();
		}
	}

	public renderPopover = (
		children: React.ReactNode,
		filterAction: React.ReactNode
	) => {
		this.setState(state => ({
			popoverFilterAction: filterAction,
			popoversChildren: children,
			showPopover: !state.showPopover
		}));
	};

	public render() {
		const {
			showPopover,
			popoversChildren,
			popoverFilterAction
		} = this.state;
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
			<FilterDetails
				helpCaption={filterablePropertyName}
				helpComponent={helpComponent}
				editorComponent={editorComponent}
				onClose={onConditionStateToggle}
				viewMode="edit"
			/>
		);
		return (
			<FiltrationConditionComponentContext.Provider
				value={this.renderPopover}
			>
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
							<b>{filterablePropertyName}</b>
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
					{showPopover && (
						<div className="kit-filtration-condition__popover">
							{popoverFilterAction}
							{popoversChildren}
						</div>
					)}
					{linkedConditionComponent}
				</li>
			</FiltrationConditionComponentContext.Provider>
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

FiltrationConditionComponent.contextType = FiltrationGroupComponentContext;
