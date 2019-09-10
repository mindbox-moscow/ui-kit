import * as React from "react";
import cn from "classnames";

import "./FiltrationGroupComponent.scss";

type GroupType = "and" | "or";

type ConditionState = "view" | "edit" | "shaded";

export interface StateProps {
	groupType: GroupType; // тип группы: И или ИЛИ
	state: ConditionState;
	andLabel: string; // лейбл для И
	orLabel: string; // лейбл для ИЛИ
	shouldShowLabel?: boolean; // нужно ли отображать лейбл на брекете группы
	children: React.ReactNode[]; // условия фильтрации внутри группы. могут быть FiltrationGroupComponent или FiltrationConditionComponent
	addSimpleConditionButton?: React.ReactNode;
	addGroupConditionButton?: React.ReactNode;
}

export interface CallbackProps {
	onGroupTypeToggle: () => void;
	onConditionStateToggle: () => void;
	onConditionRemove: () => void;
}

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
					)
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
			state
		} = this.props;

		const labelMap = {
			or: orLabel,
			and: andLabel
		};

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
							{labelMap[groupType]}
						</span>
					)}
				</div>
				{!!!children && state === "view" && (
					<div className="kit-filtration-group__buttons">
						{addSimpleConditionButton}
						{addGroupConditionButton}
					</div>
				)}
				{state === "edit" && (
					<>
						{children}
						<div className="kit-filtration-group__buttons">
							{addSimpleConditionButton}
							{addGroupConditionButton}
						</div>
					</>
				)}
				{!!children && children}
			</ul>
		);
	}
}
