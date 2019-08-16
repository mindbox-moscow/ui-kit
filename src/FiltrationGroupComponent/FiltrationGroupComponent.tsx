import * as React from "react";
import cn from "classnames";

import "./FiltrationGroupComponent.scss";

type GroupType = "and" | "or";

interface Props {
	groupType: GroupType; // тип группы: И или ИЛИ
	andLabel?: string; // лейбл для И
	orLabel?: string; // лейбл для ИЛИ
	shouldShowLabel?: boolean; // нужно ли отображать лейбл на брекете группы
	children: React.ReactNode[]; // условия фильтрации внутри группы. могут быть FiltrationGroupComponent или FiltrationConditionComponent
	className?: string;
}

export class FiltrationGroupComponent extends React.Component<Props> {
	public render() {
		const {
			groupType,
			andLabel,
			orLabel,
			shouldShowLabel,
			children,
			className
		} = this.props;
		return (
			<ul
				className={cn("kit-filtration-group", className, {
					// "kit-filtration-group_show-label": shouldShowLabel,
					// "kit-filtration-group__label_and": shouldShowLabel && groupType === "and",
					// "kit-filtration-group__label_or": shouldShowLabel && groupType === "or"
				})}
			>
				{/*{groupType}*/}
				{/*{andLabel}*/}
				{/*{orLabel}*/}
				{shouldShowLabel && groupType === "or" && (
					<span className="kit-filtration-group__label kit-filtration-group__label_or">
						{orLabel}
					</span>
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
