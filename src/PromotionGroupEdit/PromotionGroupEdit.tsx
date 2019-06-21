import * as React from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { IconSvg } from "../IconSvg";
import { Input } from "../Input";
import { IItem as ISelectOption, Select } from "../Select";
import { IOption as ISelectNestedOption, SelectNested } from "../SelectNested";

interface IPromotionGroupData {
	title: string;
	parentGroup: number;
	rule1: string;
	rule2: string;
	maxDiscount: number;
	hasMaxDiscount: boolean;
}

interface IProps {
	data: IPromotionGroupData;
	labels: {
		titleField: string;
		closeBtn: string;
		parentGroupField: string;
		rulesField: string;
		maxDiscountField: string;
		maxDiscountCheckbox: string;
		submitBtn: string;
		cancelBtn: string;
	};
	parentGroupData: {
		options: ISelectNestedOption[];
		selectedOption?: ISelectNestedOption;
		submitBtnText: string;
		cancelBtnText: string;
		showSubgroupBtnText: string;
	};
	rule1Data: {
		items: Array<ISelectOption | null>;
		placeholder: string;
		defaultValue?: string;
	};
	rule2Data: {
		items: Array<ISelectOption | null>;
		placeholder: string;
		defaultValue?: string;
	};
}

const renderCloseButton = (label: string) => (
	<button
		className="kit-promotion-group-edit__close"
		aria-label={label}
		type="button"
	>
		<IconSvg
			className="kit-promotion-group-edit__close-icon"
			type="close"
		/>
	</button>
);

export class PromotionGroupEdit extends React.Component<IProps> {
	public render() {
		const {
			data,
			labels,
			parentGroupData,
			rule1Data,
			rule2Data
		} = this.props;

		return (
			<form className="kit-promotion-group-edit">
				<fieldset className="kit-promotion-group-edit__title">
					<legend>{labels.titleField}</legend>
					<Input type="text" defaultValue={data.title} />
				</fieldset>

				{renderCloseButton(labels.closeBtn)}

				<fieldset className="kit-promotion-group-edit__parent-group">
					<legend>{labels.parentGroupField}</legend>
					<SelectNested {...parentGroupData} />
				</fieldset>

				<fieldset className="kit-promotion-group-edit__rules">
					<legend>{labels.rulesField}</legend>
					<Select {...rule1Data} hasDescriptions={true} />
					<Select {...rule2Data} hasDescriptions={true} />
					<p>{rule1Data.items[1]!.description}</p>
				</fieldset>

				<fieldset className="kit-promotion-group-edit__max-discount">
					<legend>{labels.maxDiscountField}</legend>
					<Checkbox
						text={labels.maxDiscountCheckbox}
						checked={data.hasMaxDiscount}
					/>
					<Input type="number" defaultValue={`${data.maxDiscount}`} />
				</fieldset>

				<fieldset className="kit-promotion-group-edit__submit">
					<Button type="submit" size="medium" color="gray">
						{labels.submitBtn}
					</Button>
					<Button
						type="reset"
						size="medium"
						color="gray"
						mode="simple_text"
					>
						{labels.cancelBtn}
					</Button>
				</fieldset>
			</form>
		);
	}
}
