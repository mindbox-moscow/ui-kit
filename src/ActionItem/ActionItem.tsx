import * as React from "react";
import cn from "classnames";

import { ActionsDropdown } from "../ActionsDropdown";
import { Badge } from "../Badge";
import { IconSvg } from "../IconSvg";
import { Tooltip } from "../Tooltip";

import "./ActionItem.scss";

type ActionItemType = "discount" | "bonus";

type StatusType = "start" | "ended";

const StatusMap = {
	in_development: {
		title: "В разработке",
		mode: "ghost"
	},
	ended: {
		title: "Завершена",
		mode: "disabled"
	},
	started: {
		title: "Запущена",
		mode: "success"
	},
	started_test: {
		title: "Запущена (тест)",
		mode: "warning"
	},
	stopped: {
		title: "Остановлена",
		mode: "danger"
	}
};

interface IProps {
	actionTitle: string;
	type: ActionItemType;
	description: string;
	startDate: string | null;
	endDate: string | null;
	status: StatusType;
	lastBeforeGroup: boolean;
	isEditing: boolean;
}

export class ActionItem extends React.Component<IProps> {

	public render() {
		const {
			actionTitle,
			type,
			startDate,
			endDate,
			status,
			lastBeforeGroup,
			isEditing
		} = this.props;

		return (
			<li
				className={cn("kit-stock-item", {
					"kit-stock-item_finished": status === "ended",
					"kit-stock-item_last-before-group": lastBeforeGroup,
					"kit-stock-item_edit-mode": isEditing
				})}
			>
				<div className="kit-stock-item__title-wrap">
					<span className="kit-stock-item__name">{actionTitle}</span>
					<div className="kit-stock-item__btn-wrap">
						<Tooltip title="Описание">
							Раздаем промокод за регистрацию на сайте, при
							использовании делаем скидку в размере 15%.
						</Tooltip>
						<Badge
							title={StatusMap[status].title}
							size="small"
							mode={StatusMap[status].mode}
						/>
					</div>
				</div>
				<div className="kit-stock-item__promo">
					<p className="kit-stock-item__promo-title-wrap">
						<IconSvg
							type={
								type === "discount" ? "percent-round" : "coins"
							}
						/>
						<span
							className={cn("kit-stock-item__promo-title", {
								"kit-stock-item__promo-title_no-sale": !startDate
							})}
						>
							{startDate ? `C ${startDate}` : `Без даты старта`}
						</span>
					</p>
					<span
						className={cn("kit-stock-item__sale", {
							"kit-stock-item__sale_no-sale": !endDate
						})}
					>
						{endDate ? `по ${endDate}` : `без даты окончания`}
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
			</li>
		);
	}
}
