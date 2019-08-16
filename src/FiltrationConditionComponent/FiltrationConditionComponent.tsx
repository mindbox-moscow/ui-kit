import * as React from "react";
import cn from "classnames";

import "./FiltrationConditionComponent.scss";

// interface Props {
//     className?: string;
//     children?: any;
// }

interface Props {
	filtrationObjectName: string; // название объекта фильтрации. типа "Розничный заказ", "Покупка" или "Цена"
	filtrationMethodName?: string; // способ фильтрации. "есть такие" или "заполнен и". может отсутстовать.
	filtrationMethodParametersComponent?: React.ReactNode; // компонент настроек для способа фильтрации. тоже может
	// отсутствовать.
	linkedConditionComponent?: React.ReactNode; // компонент вложенного условия фильтрации. туда всегда будет
	// приходить FiltrationGroupComponent.
	className?: string;
}

export class FiltrationConditionComponent extends React.Component<Props> {
	public render() {
		const {
			filtrationObjectName,
			filtrationMethodName,
			filtrationMethodParametersComponent,
			linkedConditionComponent,
			className
		} = this.props;
		return (
			<li className={cn("kit-filtration-condition", className)}>
				<p className="kit-filtration-condition__item-text">
					<b>{filtrationObjectName}</b>
					{filtrationMethodName}
				</p>
				{filtrationMethodParametersComponent}
				{linkedConditionComponent}
			</li>
		);
	}
}
