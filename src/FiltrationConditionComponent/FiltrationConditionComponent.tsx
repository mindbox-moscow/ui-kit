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
}

const RANGE_OFFSET_TOP = 30;

export class FiltrationConditionComponent extends React.Component<
	Props,
	State
> {
	public refComponent = React.createRef<HTMLElement>();
	public refContent = React.createRef<HTMLDivElement>();

	public state = {
		offsetTop: 0,
		showPopover: false,
		popoversChildren: []
	};

	public componentDidMount() {
		window.addEventListener("scroll", this.scrollWindowsHeight);
	}

	public componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollWindowsHeight);
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

	public renderPopover = (children: React.ReactNode) => {
		this.setState({
			showPopover: true,
			popoversChildren: children
		});
	};

	public render() {
		const { showPopover, popoversChildren } = this.state;
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
