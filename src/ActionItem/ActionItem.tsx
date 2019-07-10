import * as React from "react";
import cn from "classnames";

import "./ActionItem.scss";
import { Badge } from "../Badge";
import { IconSvg } from "../IconSvg";

type ActionItemType = 'discount' | 'bonus';

type StatusType = "start" | "end";

const StatusMap = {
	in_development: {
		title: "В разработке",
		mode: 'ghost'
	},
	ended:  {
		title: "Завершена",
		mode: 'disabled'
	},
	started: {
		title: "Запущена",
		mode: 'success'
	},
	started_test: {
		title: "Запущена (тест)",
		mode: 'warning',
	},
	stopped: {
		title: "Остановлена",
		mode: 'danger'
	}
};

interface IProps {
	title: string;
	type: ActionItemType,
	description: string;
	startDate: string | null;
	endDate: string | null;
	status: StatusType;
}

export class ActionItem extends React.Component<IProps> {
	public render() {
		const {
			title,
			type,
			startDate,
			endDate,
			status,
		} = this.props;
		return (
			<div
				className={cn("kit-stock-item", {
					"kit-stock-item_finished": status
				})}
			>
				<div className="kit-stock-item__title-wrap">
					<span className="kit-stock-item__name">{title}</span>
					<div className="kit-stock-item__btn-wrap">
						<Badge title={StatusMap[status].title} size="small" mode={StatusMap[status].mode} />
					</div>
				</div>
				<div className="kit-stock-item__promo">
					<p className="kit-stock-item__promo-title-wrap">
						<IconSvg type={type === 'discount' ? 'percent-round' : 'coins'} />
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
			</div>
		);
	}
}
