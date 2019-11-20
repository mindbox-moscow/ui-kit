import cn from "classnames";
import * as React from "react";
import { FilterDetails } from "../FilterDetails";
import { IconSvg } from "../IconSvg";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import { FiltrationConditionComponentContext } from "./FiltrationConditionComponentContext";
import { CallbackProps, StateProps } from "./types";

import "./FiltrationConditionComponent.scss";

type Props = StateProps & CallbackProps;

interface State {
	offsetTop: number;
	showPopover: boolean;
	popoversChildren: React.ReactNode;
	popoverFilterAction: React.ReactNode;
}

const RANGE_OFFSET_TOP = 30;

export class FiltrationConditionComponent extends React.Component<
	Props,
	State
> {
	public refComponent = React.createRef<HTMLElement>();
	public refContent = React.createRef<HTMLDivElement>();
	public refCondition = React.createRef<HTMLLIElement>();
	public headerOffsetTop: number = 0;

	public state = {
		offsetTop: 0,
		showPopover: false,
		popoversChildren: null,
		popoverFilterAction: null
	};
	private observer: IntersectionObserver;

	public componentDidMount() {
		const refCondition = this.refCondition.current;

		if (refCondition) {
			requestAnimationFrame(() => {
				const { top } = refCondition.getBoundingClientRect();

				this.headerOffsetTop = top - RANGE_OFFSET_TOP;
			});
		}

		const observerOptions = {
			rootMargin: `-${Math.abs(this.headerOffsetTop)}px 0px 0px 0px`,
			threshold: 1.0
		};

		this.observer = new IntersectionObserver(
			this.checkCollapsed,
			observerOptions
		);
		this.observer.observe(refCondition!);
	}

	public componentWillUnmount() {
		this.observer.disconnect();
	}

	public checkCollapsed = (entries: IntersectionObserverEntry[]): void => {
		const refCondition = this.refCondition.current;
		const { onConditionStateToggle, state } = this.props;

		const entry = entries.find(({ target }) => target === refCondition);

		if (entry && state === "edit" && !entry.isIntersecting) {
			onConditionStateToggle();
		}
	};

	public renderPopover = (
		children: React.ReactNode,
		filterAction: React.ReactNode
	) => {
		this.setState(state => ({
			showPopover: !state.showPopover,
			popoversChildren: children,
			popoverFilterAction: filterAction
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
		);
		return (
			<FiltrationConditionComponentContext.Provider
				value={this.renderPopover}
			>
				<li
					ref={this.refCondition}
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
							<b ref={this.refComponent}>
								{filterablePropertyName}
							</b>
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
