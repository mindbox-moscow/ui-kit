import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { LabelButton } from "./components";
import { StateProps, CallbackProps } from "./types";

import "./FiltrationGroupComponent.scss";

type Props = StateProps & CallbackProps;

export class FiltrationGroupComponent extends React.Component<Props> {
	private kitFiltrationRef = React.createRef<HTMLUListElement>();
	private kitFiltrationLabelRef = React.createRef<HTMLDivElement>();

	public moveLabelAtCenterOfBracket = () => {
		const ref = this.kitFiltrationRef.current;

		if (ref) {
			const label: HTMLElement | null = ref.querySelector(
				".kit-filtration-group__label"
			);
			if (label && ref.lastElementChild) {
				let height = 0;
				const childElement = ref.lastElementChild;
				const childElementRect = childElement.getBoundingClientRect();
				const parentElementRect = ref.getBoundingClientRect();
				const lastElement = childElement.classList.contains(
					"kit-filtration-group"
				);

				if (lastElement) {
					const childLabel = childElement.querySelector(
						".kit-filtration-group__label"
					);
					if (childLabel) {
						const childLabelRect = childLabel.getBoundingClientRect();
						height =
							parentElementRect.height -
							childElementRect.height +
							childLabelRect.height;
					}
				} else {
					height = parentElementRect.height - childElementRect.height;
				}

				if (height <= 5) {
					height = 0;
					label.classList.add("kit-filtration-group__label_none");
				}

				label.style.height = `${height}px`;
			}
		}

		window.addEventListener("load", this.moveLabelAtCenterOfBracket);
	};

	public handleHoverAddClassLabel = () => {
		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.parentElement!.classList.add("kit-filtration-group_hover");

			const parentElements = labelRef.parentElement!.parentElement!
				.children;

			Array.from(parentElements).forEach(item => {
				if (
					item.classList.contains(
						"kit-filtration-condition__item-text"
					)
				) {
					item.classList.add(
						"kit-filtration-condition__item-text_hover"
					);
				}
			});

			labelRef.addEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}
	};

	public handleHoverRemoveClassLabel = () => {
		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.parentElement!.classList.remove(
				"kit-filtration-group_hover"
			);

			const parentElements = labelRef.parentElement!.parentElement!
				.children;

			Array.from(parentElements).forEach(item => {
				if (
					item.classList.contains(
						"kit-filtration-condition__item-text"
					)
				) {
					item.classList.remove(
						"kit-filtration-condition__item-text_hover"
					);
				}
			});

			labelRef.removeEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}
	};

	public componentDidMount() {
		this.moveLabelAtCenterOfBracket();

		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.addEventListener(
				"mouseover",
				this.handleHoverAddClassLabel
			);
		}
	}

	public componentWillUnmount() {
		window.removeEventListener("load", this.moveLabelAtCenterOfBracket);

		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.removeEventListener(
				"mouseover",
				this.handleHoverAddClassLabel
			);
			labelRef.removeEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}
	}

	public componentDidUpdate() {
		this.moveLabelAtCenterOfBracket();
	}

	public render() {
		const {
			groupType,
			andLabel,
			orLabel,
			shouldShowLabel,
			children,
			onGroupTypeToggle,
			state
		} = this.props;

		const labelMap = {
			and: andLabel,
			or: orLabel
		};

		return (
			<ul
				ref={this.kitFiltrationRef}
				className={cn("kit-filtration-group", {
					"kit-filtration-group_edit": state === "edit",
					"kit-filtration-group_shaded": state === "shaded",
					"kit-filtration-group_not-children": children === undefined
				})}
			>
				<div
					ref={this.kitFiltrationLabelRef}
					className={cn(
						"kit-filtration-group__label",
						`kit-filtration-group__label_hover_${groupType}`,
						{
							[`kit-filtration-group__label_${groupType}`]: shouldShowLabel
						}
					)}
					onClick={this.handleGroupLabelClick}
				>
					<div className="kit-filtration-group__label-line" />
					{shouldShowLabel && (
						<span className="kit-filtration-group__label-text">
							{state === "edit" ? (
								<LabelButton
									onToggle={onGroupTypeToggle}
									types={labelMap}
									activeType={groupType}
								/>
							) : (
								labelMap[groupType]
							)}
						</span>
					)}
				</div>
				{this.renderInnerComponents()}
			</ul>
		);
	}

	private renderInnerComponents = () => {
		const {
			addSimpleConditionButton,
			addGroupConditionButton,
			state,
			children,
			onConditionRemove,
			onConditionStateToggle,
			shouldShowLabel
		} = this.props;

		const GroupButtons = () => (
			<div className="kit-filtration-group__buttons">
				{addSimpleConditionButton}
				{addGroupConditionButton}
			</div>
		);

		if (state === "view" || state === "shaded") {
			if (React.Children.count(children) === 0) {
				if (!shouldShowLabel) {
					return <GroupButtons />;
				} else {
					return null;
				}
			}

			return <>{children}</>;
		}

		return (
			<>
				<button
					key="remove"
					onClick={onConditionRemove}
					className="kit-filtration-group__remove"
					type="button"
				>
					<IconSvg type="trash" />
				</button>
				<button
					key="toggle"
					onClick={onConditionStateToggle}
					type="button"
					className="kit-filtration-group__close"
				>
					<IconSvg type="close" />
				</button>
				{children}
				<GroupButtons />
			</>
		);
	};

	private handleGroupLabelClick = () => {
		if (this.props.state === "edit") {
			return;
		}

		this.props.onConditionStateToggle();
	};
}
