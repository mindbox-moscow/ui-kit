import * as React from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { IconSvg } from "../IconSvg";
import { Input } from "../Input";
import { Select } from "../Select";
import { SelectNested } from "../SelectNested";
import "./PromotionGroupEdit.scss";

interface Item {
	title: string;
	disabled?: boolean;
}

interface IOption {
	id: number;
	title: string;
	details: string[];
	children?: IOption[];
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
	selectNestedItems: IOption[];
	selectedNestedItem: IOption;
	showSubgroupBtnText: string;
	submitBtnText: string;
	cancelBtnText: string;
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
			discountText,
			selectNestedItems,
			selectedNestedItem,
			showSubgroupBtnText,
			submitBtnText,
			cancelBtnText
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
						<IconSvg
							className="kit-promotion-group-edit__close-icon"
							type="close"
							ariaHidden={true}
						/>
					</button>
				</fieldset>

				<div className="kit-promotion-group-edit__body">
					<fieldset className="kit-promotion-group-edit__row">
						<legend className="kit-promotion-group-edit__row-title">
							{parentGroupLabel}
						</legend>
						<div className="kit-promotion-group-edit__row-left">
							<SelectNested
								options={selectNestedItems}
								selectedOption={selectedNestedItem}
								onChange={newSelectedOption =>
									console.log(newSelectedOption)
								}
								showSubgroupBtnText={showSubgroupBtnText}
								submitBtnText={submitBtnText}
								cancelBtnText={cancelBtnText}
							/>
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
