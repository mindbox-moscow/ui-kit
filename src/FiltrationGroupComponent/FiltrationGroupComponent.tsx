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
	public render() {
		const {
			groupType,
			andLabel,
			orLabel,
			shouldShowLabel,
			children
		} = this.props;
		return (
			<ul className="kit-filtration-group">
				{shouldShowLabel && groupType === "or" && (
					<div className="kit-filtration-group__label kit-filtration-group__label_or">
						{orLabel}
					</div>
				)}
				{shouldShowLabel && groupType === "and" && (
					<div className="kit-filtration-group__label kit-filtration-group__label_and">
						{andLabel}
					</div>
				)}
				{children}
			</ul>
		);
	}
}
