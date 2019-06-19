import * as React from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Icon } from "../Icon";
import { Input } from "../Input";
import { Select } from "../Select";
import "./PromotionGroupEdit.scss";

interface Item {
	title: string;
	disabled?: boolean;
}

interface Props {
	title: string;
	closeBtnText: string;
	sendBtnText: string;
	resetBtnText: string;
	maxDiscount: string;
	itemsSelectStockType: Array<Item | null>;
	itemsSelectCategory: Array<Item | null>;
}

export class PromotionGroupEdit extends React.Component<Props> {
	public render() {
		const {
			title,
			maxDiscount,
			itemsSelectStockType,
			itemsSelectCategory,
			closeBtnText,
			sendBtnText,
			resetBtnText
		} = this.props;

		return (
			<form className="kit-promotion-group-edit">
				<fieldset className="kit-promotion-group-edit__header">
					<div className="kit-promotion-group-edit__header-left">
						<Input defaultValue={title} />
					</div>
					<button
						className="kit-promotion-group-edit__close"
						aria-label={closeBtnText}
					>
						<Icon icon="remove" />
					</button>
				</fieldset>

				<div className="kit-promotion-group-edit__body">
					<fieldset className="kit-promotion-group-edit__row">
						<legend className="kit-promotion-group-edit__row-title">
							Родительская группа
						</legend>
						<div className="kit-promotion-group-edit__row-left">
							<Input defaultValue="Учебный год 2019–2020" />
						</div>
					</fieldset>

					<fieldset className="kit-promotion-group-edit__row">
						<legend className="kit-promotion-group-edit__row-title">
							Правила применения акций
						</legend>

						<div className="kit-promotion-group-edit__row-left">
							<Select
								placeholder="Выберите"
								defaultValue="Несовместимость"
								items={itemsSelectStockType}
							/>
						</div>

						<div className="kit-promotion-group-edit__row-right">
							<Select
								placeholder="Выберите"
								defaultValue="На уровне товара"
								items={itemsSelectCategory}
							/>
						</div>

						<p className="kit-promotion-group-edit__row-description">
							Расчеты промо-активностей, скидок, дисконтирование
							по программе лояльности — все это собирается и
							настраивается в Mindbox, а сама кассовая программа
							является лишь отображением того рассчета, которое
							предоставляет система.
						</p>
					</fieldset>

					<fieldset className="kit-promotion-group-edit__row">
						<Checkbox
							checked={true}
							text="Ограничить максимальный процент скидки для группы на уровне"
						/>

						<div className="kit-promotion-group-edit__max-discount">
							<Input defaultValue={maxDiscount} />
						</div>
					</fieldset>
				</div>

				<div className="kit-promotion-group-edit__footer">
					<Button color="gray" size="medium">
						{sendBtnText}
					</Button>

					<div className="kit-promotion-group-edit__footer-right">
						<Button color="gray" size="medium">
							{resetBtnText}
						</Button>
					</div>
				</div>
			</form>
		);
	}
}
