import * as React from "react";
import cn from "classnames";

import "./NestedItem.scss";

interface Props {
	childrenCount: number;
	title: string;
	information: string;
	maxDiscount?: number | null;
}

interface State {
	isExpanded: boolean;
}

export class NestedItem extends React.Component<Props, State> {
	public state = { isExpanded: true };

	public render() {
		const {
			childrenCount,
			title,
			information,
			maxDiscount,
			children
		} = this.props;
		const { isExpanded } = this.state;

		return (
			<React.Fragment>
				<li
					className={cn("kit-nested-item", {
						"kit-nested-item_expand": !isExpanded
					})}
				>
					<div
						className="kit-nested-item__wrap"
						onClick={this.expandTree}
					>
						<div
							className={cn("kit-nested-item__title-wrap", {
								"kit-nested-item__title-wrap_expand": !isExpanded
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
								"kit-nested-item__promo_expand": !isExpanded
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
								{maxDiscount ? `Максимальная скидка: ${maxDiscount}%` : `Без максимальной скидки`}
							</span>
						</div>
					</div>
					{!isExpanded && children}
				</li>
			</React.Fragment>
		);
	}

	private expandTree = () => {
		this.setState(state => ({...state, isExpanded: !this.state.isExpanded }));
	};
}
