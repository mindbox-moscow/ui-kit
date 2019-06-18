import * as React from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Icon } from "../Icon/";
import { Input } from "../Input";
import { Select } from "../Select";
import "./PromotionEdit.scss";

interface Item {
	title: string;
	disabled?: boolean;
}

interface Props {
	defaultValueHeader: string;
	defaultValueDiscount: string;
	itemsSelectStockType: Array<Item | null>;
	itemsSelectCategory: Array<Item | null>;
}

export class PromotionEdit extends React.Component<Props> {
	public render() {
		const {
			defaultValueHeader,
			defaultValueDiscount,
			itemsSelectStockType,
			itemsSelectCategory
		} = this.props;

		return (
			<form className="kit-promotion">
				<fieldset className="kit-promotion__header">
					<div className="kit-promotion__header-left">
						<Input defaultValue={defaultValueHeader} />
					</div>
					<button className="kit-promotion__close">
						<Icon icon="remove" />
					</button>
				</fieldset>

				<div className="kit-promotion__body">
					<fieldset className="kit-promotion__row">
						<legend className="kit-promotion__row-title">
							Родительская группа
						</legend>
						<div className="kit-promotion__row-left">
							<Input defaultValue="Учебный год 2019–2020" />
						</div>
					</fieldset>

					<fieldset className="kit-promotion__row">
						<legend className="kit-promotion__row-title">
							Правила применения акций
						</legend>

						<div className="kit-promotion__row-left">
							<Select
								placeholder="Несовместимость"
								items={itemsSelectStockType}
							/>
						</div>

						<div className="kit-promotion__row-right">
							<Select
								placeholder="На уровне товара"
								items={itemsSelectCategory}
							/>
						</div>

						<p className="kit-promotion__row-description">
							Расчеты промо-активностей, скидок, дисконтирование
							по программе лояльности — все это собирается и
							настраивается в Mindbox, а сама кассовая программа
							является лишь отображением того рассчета, которое
							предоставляет система.{" "}
						</p>
					</fieldset>

					<fieldset className="kit-promotion__row">
						<Checkbox
							checked={true}
							text="Ограничить максимальный процент скидки для группы на уровне"
						/>

						<div className="kit-promotion__max-discount">
							<Input defaultValue={defaultValueDiscount} />
						</div>
					</fieldset>
				</div>

				<div className="kit-promotion__footer">
					<Button color="gray" size="medium">
						Сохранить изменения
					</Button>

					<div className="kit-promotion__footer-right">
						<Button color="gray" size="medium">
							Отменить
						</Button>
					</div>
				</div>
			</form>
		);
	}
}
