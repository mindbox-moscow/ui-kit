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
	stockType: string;
	stockTypePlaceholder: string;
	stockTypeItems: Array<Item | null>;
	category: string;
	categoryPlaceholder: string;
	categoryItems: Array<Item | null>;
	parentGroupLabel: string;
	rulesTitle: string;
	rulesText: string;
	discountText: string;
}

export class PromotionGroupEdit extends React.Component<Props> {
	public render() {
		const {
			title,
			maxDiscount,
			stockType,
			stockTypePlaceholder,
			stockTypeItems,
			category,
			categoryPlaceholder,
			categoryItems,
			closeBtnText,
			parentGroupLabel,
			sendBtnText,
			resetBtnText,
			rulesTitle,
			rulesText,
			discountText
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
							{parentGroupLabel}
						</legend>
						<div className="kit-promotion-group-edit__row-left">
							<Input defaultValue="Учебный год 2019–2020" />
						</div>
					</fieldset>

					<fieldset className="kit-promotion-group-edit__row">
						<legend className="kit-promotion-group-edit__row-title">
							{rulesTitle}
						</legend>

						<div className="kit-promotion-group-edit__row-left">
							<Select
								placeholder={stockTypePlaceholder}
								defaultValue={stockType}
								items={stockTypeItems}
							/>
						</div>

						<div className="kit-promotion-group-edit__row-right">
							<Select
								placeholder={categoryPlaceholder}
								defaultValue={category}
								items={categoryItems}
							/>
						</div>

						<p className="kit-promotion-group-edit__row-description">
							{rulesText}
						</p>
					</fieldset>

					<fieldset className="kit-promotion-group-edit__row">
						<Checkbox checked={true} text={discountText} />

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
