import * as React from "react";
import cn from "classnames";

import "./NestedItem.scss";

interface IProps {
	childrenCount: number;
	title: string;
	information: string;
	maxDiscount?: number | null;
	defaultStatus: any;
	onClick: any;
	updateData: any;
}

interface IState {
	isExpanded: boolean;
	defaultStatus?: boolean;
}

export class NestedItem extends React.Component<IProps, IState> {
	public state = {
		defaultStatus: false,
		isExpanded: false
	};

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
						"kit-nested-item_expand":
							this.props.defaultStatus || this.state.isExpanded
					})}
				>
					<div
						className="kit-nested-item__wrap"
						onClick={this.expandChild}
					>
						<div
							className={cn("kit-nested-item__title-wrap", {
								"kit-nested-item__title-wrap_expand":
									this.props.defaultStatus || this.state.isExpanded
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
								"kit-nested-item__promo_expand":
									this.props.defaultStatus || this.state.isExpanded
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
					{(this.props.defaultStatus && children) ||
						(this.state.isExpanded && children)}
				</li>
			</React.Fragment>
		);
	}

	private expandChild = () => {
		this.setState(state => ({ ...state, isExpanded: !this.state.isExpanded }));
	};
}
