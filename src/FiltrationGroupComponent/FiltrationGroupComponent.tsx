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
				let offset = 2;
				if (
					ref.lastElementChild.classList.contains(
						"kit-filtration-group"
					)
				) {
					offset = 33;
				}
				label.style.height = `${ref.clientHeight -
					ref.lastElementChild.clientHeight +
					offset}px`;
			}
		}
	}

	public componentDidMount() {
		setTimeout(() => {
			this.moveLabelAtCenterOfBracket();
		}, 1);
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

		const labelMap = {
			or: orLabel,
			and: andLabel
		};

		return (
			<ul ref={this.kitFiltrationRef} className="kit-filtration-group">
				<div
					className={cn("kit-filtration-group__label", {
						[`kit-filtration-group__label_${groupType}`]: shouldShowLabel
					})}
				>
					{shouldShowLabel && (
						<span className="kit-filtration-group__label-text">
							{labelMap[groupType]}
						</span>
					)}
				</div>
				{children}
			</ul>
		);
	}
}
