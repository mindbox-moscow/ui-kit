import * as React from "react";

import "./FiltrationConditionComponent.scss";

interface Props {
	filtrationObjectName: string; // название объекта фильтрации. типа "Розничный заказ", "Покупка" или "Цена"
	filtrationMethodName?: string; // способ фильтрации. "есть такие" или "заполнен и". может отсутстовать.
	filtrationMethodParametersComponent?: React.ReactNode; // компонент настроек для способа фильтрации. тоже может
	// отсутствовать.
	linkedConditionComponent?: React.ReactNode; // компонент вложенного условия фильтрации. туда всегда будет
	// приходить FiltrationGroupComponent.
}

export class FiltrationConditionComponent extends React.Component<Props> {
	public render() {
		const {
			filtrationObjectName,
			filtrationMethodName,
			filtrationMethodParametersComponent,
			linkedConditionComponent
		} = this.props;
		return (
			<li className="kit-filtration-condition">
				<span className="kit-filtration-condition__item-text">
					<b>{`${filtrationObjectName} `}</b>
					<span>{filtrationMethodName && filtrationMethodName}</span>
				</span>
				{filtrationMethodParametersComponent}
				{linkedConditionComponent}
			</li>
		);
	}
}
