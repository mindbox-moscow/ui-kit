import * as React from "react";
import cn from "classnames";

import "./index.scss";

interface IProps {
	stockCount: number;
	stockTitle: string;
	information: string;
	maxDiscount?: number | null;
	defaultCollapsed: any;
}

export class StockTitle extends React.Component<IProps> {

	public render() {
		const {
			stockCount,
			stockTitle,
			information,
			maxDiscount,
			children
		} = this.props;

		return (
			<React.Fragment>
					<div
						className="kit-stock-title"
					>
						<div
							className={cn("kit-stock-title__title-wrap", {
								"kit-stock-title__title-wrap_expand":
									!this.props.defaultCollapsed
							})}
						>
							<span className="kit-stock-title__name">
								{stockTitle}
							</span>
							<span className="kit-stock-title__number">
								{stockCount}
							</span>
						</div>
						<div
							className={cn("kit-stock-title__promo kit-nested-item__promo_expand", {
								"kit-nested-item__promo_expand": !this.props.defaultCollapsed
							})}
						>
							<span className="kit-stock-title__promo-title">
								{information}
							</span>
							<span
								className={cn("kit-stock-title__sale", {
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
			</React.Fragment>
		);
	}
}
