import * as React from "react";
import cn from "classnames";
import { ActionsDropdown } from "../../ActionsDropdown";
import { Badge } from "../../Badge";
import { IconSvg } from "../../IconSvg";
import { IconType } from "../../IconSvg/assets";

import "./StockItem.scss";
import { StockTitle } from "./components/StockTitle";

interface Props {
	title: string;
	type: string | IconType;
	start: string | null;
	finish: string | null;
	isFinished?: boolean;
	badgeTitle: string;
	size?: any;
	mode?: any;
	stockTitle: string;
	information: string;
	stockCount: number;
}

export class StockItem extends React.Component<Props> {
	public render() {
		const {
			title,
			start,
			finish,
			type,
			isFinished,
			badgeTitle,
			size,
			mode,
			stockTitle,
			information,
			stockCount
		} = this.props;
		return (
			<React.Fragment>
				<StockTitle
					stockCount={stockCount}
					stockTitle={stockTitle}
					information={information}
					defaultCollapsed={true}
				/>
				<div
					className={cn("kit-stock-item", {
						"kit-stock-item_finished": isFinished
					})}
				>
					<div className="kit-stock-item__title-wrap">
						<span className="kit-stock-item__name">{title}</span>
						<div className="kit-stock-item__btn-wrap">
							<Badge title={badgeTitle} size={size} mode={mode} />
						</div>
					</div>
					<div className="kit-stock-item__promo">
						<div className="kit-stock-item__date-wrap">
							<p className="kit-stock-item__promo-title-wrap">
								<IconSvg
									type={type}
									className={cn("kit-stock-item__icon", {
										"kit-stock-item__icon_grey": !start
									})}
								/>
								<span
									className={cn(
										"kit-stock-item__promo-title",
										{
											"kit-stock-item__promo-title_no-sale": !start
										}
									)}
								>
									{start ? `C ${start}` : `Без даты старта`}
								</span>
							</p>
							<span
								className={cn("kit-stock-item__sale", {
									"kit-stock-item__sale_no-sale": !finish
								})}
							>
								{finish ? `по ${finish}` : `без даты окончания`}
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
									onClick={() =>
										console.log("Добавить акцию")
									}
								/>
								<ActionsDropdown.Action
									title="Подгруппу"
									onClick={() =>
										console.log("Добавить подгруппу")
									}
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
				</div>
			</React.Fragment>
		);
	}
}
