import * as React from "react";
import cn from "classnames";

import "./GroupItem.scss";

interface IProps {
	childrenCount: number;
	title: string;
	information: string;
	maxDiscount?: number | null;
	sublist: boolean;
	isEditing: boolean
}

interface State {
	isExpanded: boolean;
}

export class GroupItem extends React.Component<IProps, State> {

	public state = { isExpanded: true };

	public render() {
		const {
			childrenCount,
			title,
			information,
			maxDiscount,
			children,
			sublist,
			isEditing
		} = this.props;

		const { isExpanded } = this.state;

		return (
			<React.Fragment>
				<li
					className={cn("kit-group-item", {
						"kit-group-item_expand": !isExpanded,
						"kit-nested-list__sublist": sublist,
						"kit-group-item_edit-mode": isEditing
					})}
				>
					<div
						className="kit-group-item__wrap"
						onClick={this.expandTree}
					>
						<div
							className={cn("kit-group-item__title-wrap", {
								"kit-group-item__title-wrap_expand":
									!isExpanded,
							})}
						>
							<span className="kit-group-item__name">
								{title}
							</span>
							<span className="kit-group-item__number">
								{childrenCount}
							</span>
						</div>
						<div
							className={cn("kit-group-item__promo", {
								"kit-group-item__promo_expand": !isExpanded
							})}
						>
							<span className="kit-group-item__promo-title">
								{information}
							</span>
							<span
								className={cn("kit-group-item__sale", {
									"kit-group-item__sale_no-sale": !maxDiscount
								})}
							>
								{maxDiscount
									? `Максимальная скидка: ${maxDiscount}%`
									: `Без максимальной скидки`}
							</span>
						</div>
					</div>
					{!isExpanded && <ul className="kit-nested-list">{children}</ul>}
				</li>
			</React.Fragment>
		);
	}

	private expandTree = () => {
		this.setState(state => ({...state, isExpanded: !this.state.isExpanded }));
	};
}
