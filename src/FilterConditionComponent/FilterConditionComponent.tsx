import * as React from "react";
import cn from "classnames";

import "./FilterConditionComponent.scss";

interface Props {
	typeOfCondition: string;
	isNested?: boolean;
	children: any;
	listChildren: any;
	nameOfList: string;
	isBooleanCondition: boolean;
}

export class FilterConditionComponent extends React.Component<Props> {
	public render() {
		const {
			// children,
			// listChildren,
			// isNested
			// typeOfCondition
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
		nameOfList,
		// isNested,
		isBooleanCondition,
		typeOfCondition
	} = props;
	return (
		<>
			<li
				// className="kit-filter-condition"
				className={cn("kit-filter-condition", {
					"kit-filter-condition_boolean-and": isBooleanCondition,
					// "kit-filter-condition_boolean-or": !isBooleanCondition
				})}
			>
				{nameOfList}{" "}
				{typeOfCondition && (
					<span className="kit-filter-condition__type-condition">
						{typeOfCondition}
					</span>
				)}
				{children}
			</li>
			{isBooleanCondition && (
				<div className={cn("kit-filter-condition__bool", {
					"kit-filter-condition__bool_and": isBooleanCondition,
					"kit-filter-condition__bool_or": !isBooleanCondition
				})}>
					ИЛИ
				</div>
			)}
		</>
	);
};
