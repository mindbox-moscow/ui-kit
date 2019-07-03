import * as React from "react";
import cn from "classnames";

import "./NestedItem.scss";

interface IProps {
	childrenCount: number;
	title: string;
	information: string;
	maxDiscount?: number | null;
	defaultCollapsed: any;
}

export class NestedItem extends React.Component<IProps> {

	public render() {
		const {
			childrenCount,
			title,
			information,
			maxDiscount,
			children
		} = this.props;

		return (
			<React.Fragment>
				<li
					className={cn("kit-nested-item", {
						"kit-nested-item_expand": !this.props.defaultCollapsed
					})}
				>
					<div
						className="kit-nested-item__wrap"
					>
						<div
							className={cn("kit-nested-item__title-wrap", {
								"kit-nested-item__title-wrap_expand":
								!this.props.defaultCollapsed
							})}
						>
							<span className="kit-nested-item__name">
								{title}
							</span>
							<span className="kit-nested-item__number">
								{childrenCount}
							</span>
						</div>
						<div
							className={cn("kit-nested-item__promo", {
								"kit-nested-item__promo_expand": !this.props.defaultCollapsed
							})}
						>
							<span className="kit-nested-item__promo-title">
								{information}
							</span>
							<span
								className={cn("kit-nested-item__sale", {
									"kit-nested-item__sale_no-sale": !maxDiscount
								})}
							>
								{maxDiscount
									? `Максимальная скидка: ${maxDiscount}%`
									: `Без максимальной скидки`}
							</span>
						</div>
					</div>
					{!this.props.defaultCollapsed && children}
				</li>
			</React.Fragment>
		);
	}
}
