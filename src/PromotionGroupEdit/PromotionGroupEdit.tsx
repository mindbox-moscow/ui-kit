import * as React from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { PromotionEditContainer } from "../PromotionEditContainer";
import { Select } from "../Select";
import { SelectNested } from "../SelectNested";
import { IProps } from "./types";

import "./PromotionGroupEdit.scss";

export class PromotionGroupEdit extends React.Component<IProps> {
	public render() {
		const {
			data,
			labels,
			parentGroupData,
			rule1Data,
			rule2Data,
			onClose
		} = this.props;

		return (
			<PromotionEditContainer
				closeBtnLabel={labels.closeBtn}
				onCloseClick={onClose}
			>
				<form className="kit-promotion-group-edit">
					<PromotionEditContainer.Header>
						<fieldset className="kit-promotion-group-edit__title">
							<legend>{labels.titleField}</legend>
							<Input type="text" defaultValue={data.title} />
						</fieldset>
					</PromotionEditContainer.Header>

					<PromotionEditContainer.Main>
						<fieldset className="kit-promotion-group-edit__parent-group">
							<legend>{labels.parentGroupField}</legend>
							<SelectNested {...parentGroupData} />
						</fieldset>

						<fieldset className="kit-promotion-group-edit__rules">
							<legend>{labels.rulesField}</legend>
							<Select
								className="kit-promotion-group-edit__rule-1"
								hasDescriptions={true}
								{...rule1Data}
							/>
							<Select
								className="kit-promotion-group-edit__rule-2"
								hasDescriptions={true}
								{...rule2Data}
							/>
							<p className="kit-promotion-group-edit__rule-desc">
								{rule1Data.items[1]!.description}
							</p>
						</fieldset>

						<fieldset className="kit-promotion-group-edit__max-discount">
							<legend>{labels.maxDiscountField}</legend>
							<div className="kit-promotion-group-edit__max-discount-inner">
								<Checkbox
									text={labels.maxDiscountCheckbox}
									checked={data.hasMaxDiscount}
								/>
								<Input
									className="kit-promotion-group-edit__max-discount-input"
									type="text"
									defaultValue={`${data.maxDiscount}`}
								/>
								&#37;
							</div>
						</fieldset>
					</PromotionEditContainer.Main>

					<PromotionEditContainer.Footer>
						<fieldset className="kit-promotion-group-edit__submit">
							<div className="kit-promotion-group-edit__submit-inner">
								<Button
									className="kit-promotion-group-edit__submit-btn"
									type="submit"
									size="medium"
									color="gray"
								>
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
							</div>
						</fieldset>
					</PromotionEditContainer.Footer>
				</form>
			</PromotionEditContainer>
		);
	}
}
