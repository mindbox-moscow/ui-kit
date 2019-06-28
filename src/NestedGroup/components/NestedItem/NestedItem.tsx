import * as React from "react";
import cn from "classnames";

import "./NestedItem.scss";

interface IProps {
	childrenCount: number;
	title: string;
	information: string;
	maxDiscount?: number | null;
	name: any;
	updateState: any
}

interface IState {
	isExpanded: boolean
}

export class NestedItem extends React.Component<IProps, IState> {

	public state = {
		isExpanded: false,
	}

	public render() {
		const {
			childrenCount,
			title,
			information,
			maxDiscount,
			children,
			updateState
		} = this.props;

		console.log('props', this.props.name);

		return (
			<React.Fragment>
				<li
					className={cn("kit-nested-item", {
						"kit-nested-item_expand":
						this.props.name
					})}
				>
					<div
						className="kit-nested-item__wrap"
						onClick={updateState}
						//onClick={updateData}
					>
						<div
							className={cn("kit-nested-item__title-wrap", {
								"kit-nested-item__title-wrap_expand":
								this.props.name
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
								this.props.name
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
					{(this.props.name && children)}
				</li>
			</React.Fragment>
		);
	}
	//
	// private expandChild = () => {
	// 	this.setState(state => ({ ...state, isExpanded: !this.state.isExpanded }));
	// };
}

// this.props.defaultStatus ||
