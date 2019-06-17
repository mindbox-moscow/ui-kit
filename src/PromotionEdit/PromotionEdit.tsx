import * as React from "react";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import "./PromotionEdit.scss";

export class PromotionEdit extends React.Component {
	public render() {
		return (
			<div className="kit-promotion-wrapper">
				<div className="kit-promotion-wrapper__header">
					<div className="kit-promotion-wrapper__header-left">
						<Input defaultValue="Снова в школу" />
					</div>
					<button className="kit-promotion-wrapper__close">
						<Icon icon="remove" />
					</button>
				</div>
				<div className="kit-promotion-wrapper__body">
					<div className="kit-promotion-wrapper__row">
						<div className="kit-promotion-wrapper__row-left">
							<div className="kit-promotion-wrapper__row-title">
								Родительская группа
							</div>
							<Input defaultValue="Учебный год 2019–2020" />
						</div>
					</div>
					<div className="kit-promotion-wrapper__row">
						<div className="kit-promotion-wrapper__row-title">
							Правила применения акций
						</div>
						<div className="kit-promotion-wrapper__row-left">
							<Select
								placeholder="Несовместимость"
								items={[
									{ title: "Несовместимость 2" },
									{ title: "Несовместимость 3" },
									{ title: "Несовместимость 4" }
								]}
							/>
						</div>
						<div className="kit-promotion-wrapper__row-right">
							<Select
								placeholder="На уровне товара"
								items={[
									{ title: "На уровне товара 2" },
									{ title: "На уровне товара 3" },
									{ title: "На уровне товара 4" }
								]}
							/>
						</div>
						<p className="kit-promotion-wrapper__row-description">
							Расчеты промо-активностей, скидок, дисконтирование
							по программе лояльности — все это собирается и
							настраивается в Mindbox, а сама кассовая программа
							является лишь отображением того рассчета, которое
							предоставляет система.{" "}
						</p>
					</div>
					<div className="kit-promotion-wrapper__row">
						<Checkbox
							checked={true}
							text="Ограничить максимальный процент скидки для группы на уровне"
						/>
						<div className="kit-promotion-wrapper__max-discount">
							<Input defaultValue="50" />
						</div>
					</div>
				</div>
				<div className="kit-promotion-wrapper__footer">
					<Button color="gray" size="medium">
						Сохранить изменения
					</Button>
					<div className="kit-promotion-wrapper__footer-right">
						<Button color="gray" size="medium">
							Отменить
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
