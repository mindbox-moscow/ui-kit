import * as React from "react";
import cn from "classnames";

import "./FilterConditionComponent.scss";

type Nested = "or" | "and";

interface Props {
	filtrationMethodName: string;
	isNested?: Nested;
	children: any;
	listChildren: any;
	filtrationObjectName: string;
	isBooleanCondition: boolean;
	changeCondition?: boolean;
	priceNumber?: number;
}

export class FilterConditionComponent extends React.Component<Props> {
	public render() {
		const {
			// isNested
		} = this.props;
		return (
			<ul className="parent">
				{List(this.props)}
				{/*{isNested && <ul className="nested">{listChildren}</ul>}*/}
			</ul>
		);
	}
}

const List = (props: Props) => {
	const {
		children,
		filtrationObjectName,
		filtrationMethodName,
		// isBooleanCondition,
		isNested,
		priceNumber
	} = props;

	return (
		<>
			<div
				className={cn({
					// "kit-filter-condition_boolean": isNested,
					"kit-filter-condition_boolean_and": isNested === "and",
					"kit-filter-condition_boolean_or": isNested === "or"
					// "kit-filter-condition_boolean-and": isNested === "and",
					// "kit-filter-condition_boolean-or": isNested === "or",
				})}
			>
				<li className={cn("kit-filter-condition", {})}>
					{filtrationObjectName}{" "}
					{filtrationMethodName && (
						<span className="kit-filter-condition__type-condition">
							{filtrationMethodName}
						</span>
					)}
					{filtrationMethodName && priceNumber &&
						<div className="kit-filter-condition__type-condition kit-filter-condition__type-condition_price">
							<b>Цена</b> заполнена и от <b>{priceNumber}</b>
						</div>
					}
					{children}
				</li>
			</div>
		</>
	);
};
