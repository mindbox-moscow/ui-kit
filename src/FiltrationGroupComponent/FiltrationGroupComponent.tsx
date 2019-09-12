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
				let offset = 2;
				if (
					ref.lastElementChild.classList.contains(
						"kit-filtration-group"
					) &&
					ref.childElementCount > 2
				) {
					offset = 31;
				}
				label.style.height = `${ref.clientHeight -
					ref.lastElementChild.clientHeight +
					offset}px`;
			}
		}
	};

	public handleHoverAddClassLabel = () => {
		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.parentElement!.classList.add("kit-filtration-group_hover");

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
			labelRef.removeEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}
	};

	public componentDidMount() {
		setTimeout(() => {
			this.moveLabelAtCenterOfBracket();
		}, 1);

		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.addEventListener(
				"mouseover",
				this.handleHoverAddClassLabel
			);
		}
	}

	public componentWillUnmount() {
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
			addSimpleConditionButton,
			addGroupConditionButton,
			onGroupTypeToggle,
			onConditionRemove,
			state
		} = this.props;

		const labelMap = {
			and: andLabel,
			or: orLabel
		};

		const GroupButtons = () => (
			<div className="kit-filtration-group__buttons">
				{addSimpleConditionButton}
				{addGroupConditionButton}
			</div>
		);

		return (
			<ul
				ref={this.kitFiltrationRef}
				className={cn("kit-filtration-group", {
					"kit-filtration-group_edit": state === "edit"
				})}
			>
				<div
					ref={this.kitFiltrationLabelRef}
					className={cn("kit-filtration-group__label", {
						[`kit-filtration-group__label_${groupType}`]: shouldShowLabel
					})}
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
				{!children && state === "view" && <GroupButtons />}
				{state === "edit" && (
					<>
						<button
							onClick={onConditionRemove}
							className="kit-filtration-group__remove"
							type="button"
						>
							<IconSvg type="trash" />
						</button>
						{children}
						<GroupButtons />
					</>
				)}
				{children && children}
			</ul>
		);
	}
}
