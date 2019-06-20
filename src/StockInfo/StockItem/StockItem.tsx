import * as React from "react";
import cn from 'classnames'
import { Icon } from "../../Icon";

import "./StockItem.scss";

interface Props {
    title: string;
	icon: string,
	start: string | null;
	finish: string | null;
	isFinished?: boolean;
}

export class StockItem extends React.Component<Props> {
    public render() {
    	const {title, icon, start, finish, isFinished} = this.props;
        return (
            <div className={cn("kit-stock-item", {
				"kit-stock-item_finished": isFinished })}>
				<div className="kit-stock-item__title-wrap">
					<span className="kit-stock-item__name">
						{title}
					</span>
					<div className="kit-stock-item__btn-wrap">
						<button>test</button>
					</div>
				</div>
				<div className="kit-stock-item__promo">
					<p className="kit-stock-item__promo-title-wrap">
						<Icon icon={icon}/>
						<span className={cn("kit-stock-item__promo-title", {
						"kit-stock-item__promo-title_no-sale": !start })}>
							{start ? `C ${start}` : `без даты старта`}
						</span>
					</p>
					<span className={cn("kit-stock-item__sale", {
							"kit-stock-item__sale_no-sale": !finish })}>
						{finish ? `по ${finish}` : `без даты окончания`}
					</span>
				</div>
			</div>
        );
    }
}
