import * as React from "react";
import cn from "classnames";
import { ActionsDropdown } from "../../../ActionsDropdown";
import { IconSvg } from "../../../IconSvg";

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
					})}
				>
					<div
						// className="kit-group-item__wrap"
						onClick={this.expandTree}
						className={cn("kit-group-item__wrap", {
							"kit-group-item__wrap_expand":
								!isExpanded,
							"kit-group-item__wrap_edit-mode": isEditing
						})}
					>
						<div
							className={cn("kit-group-item__title-wrap", {
								"kit-group-item__title-wrap_edit-mode": isEditing
							})}
						>
							<IconSvg type="drop" className="kit-group-item__icon"/>
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
						<ActionsDropdown
							className="kit-stock-item__action-dropdown"
							toggleBtnText="Действия"
						>
							<ActionsDropdown.Action
								title="Редактировать"
								onClick={() => console.log("Редактировать")}
							/>
							<ActionsDropdown.Group title="Добавить">
								<ActionsDropdown.Action
									title="Акцию"
									onClick={() => console.log("Добавить акцию")}
								/>
								<ActionsDropdown.Action
									title="Подгруппу"
									onClick={() => console.log("Добавить подгруппу")}
								/>
							</ActionsDropdown.Group>
							<ActionsDropdown.Group title="Акции в группе">
								<ActionsDropdown.Action
									title="Остановить"
									onClick={() => console.log("Остановить")}
								/>
								<ActionsDropdown.Action
									title="Запустить"
									onClick={() => console.log("Запустить")}
								/>
								<ActionsDropdown.Action
									title="Архивировать"
									onClick={() => console.log("Архивировать")}
								/>
							</ActionsDropdown.Group>
						</ActionsDropdown>
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
