import cn from "classnames";
import * as React from "react";

import "./FiltrationGroupComponent.scss";

type GroupType = "and" | "or";

interface Props {
	groupType: GroupType; // тип группы: И или ИЛИ
	andLabel: string; // лейбл для И
	orLabel: string; // лейбл для ИЛИ
	shouldShowLabel?: boolean; // нужно ли отображать лейбл на брекете группы
	children: React.ReactNode[]; // условия фильтрации внутри группы. могут быть FiltrationGroupComponent или FiltrationConditionComponent
}

export class FiltrationGroupComponent extends React.Component<Props> {
	private kitFiltrationRef = React.createRef<HTMLUListElement>();

	public moveLabelAtCenterOfBracket() {
		const ref = this.kitFiltrationRef.current;

		if (ref) {
			const label: HTMLElement | null = ref.querySelector(
				".kit-filtration-group__label"
			);
			if (label && ref.lastElementChild) {
				if (
					ref.lastElementChild.classList.contains(
						"kit-filtration-group"
					)
				) {
					label.style.height = `${ref.offsetHeight -
						ref.lastElementChild.clientHeight +
						33}px`;
				} else {
					label.style.height = `${ref.offsetHeight -
						ref.lastElementChild.clientHeight +
						2}px`;
				}
			}
		}
	}

	public componentDidMount() {
		this.moveLabelAtCenterOfBracket();
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
			children
		} = this.props;

		return (
			<ul
				ref={this.kitFiltrationRef}
				className={cn("kit-filtration-group", {
					"kit-filtration-group_no-label": !shouldShowLabel
				})}
			>
				{shouldShowLabel && groupType === "or" && (
					<div className="kit-filtration-group__label kit-filtration-group__label_or">
						<span className="kit-filtration-group__label-text">
							{orLabel}
						</span>
					</div>
				)}
				{shouldShowLabel && groupType === "and" && (
					<div className="kit-filtration-group__label kit-filtration-group__label_and">
						<span className="kit-filtration-group__label-text">
							{andLabel}
						</span>
					</div>
				)}
				{children}
			</ul>
		);
	}
}
