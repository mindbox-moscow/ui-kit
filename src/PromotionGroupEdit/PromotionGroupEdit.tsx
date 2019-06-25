import * as React from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { PromotionEditContainer } from "../PromotionEditContainer";
import { ISelectOption, Select } from "../Select";
import { ISelectNestedOption, SelectNested } from "../SelectNested";
import { IProps, IState } from "./types";

import "./PromotionGroupEdit.scss";

export class PromotionGroupEdit extends React.PureComponent<IProps, IState> {
	public state = {
		data: this.props.data
	};

	public handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			data: {
				...this.state.data,
				title: e.target.value
			}
		});
	};

	public handleParentGropuChange = (parentGroup: ISelectNestedOption) => {
		this.setState({
			data: {
				...this.state.data,
				parentGroup
			}
		});
	};

	public handleRule1Change = (rule1: ISelectOption) => {
		this.setState({
			data: {
				...this.state.data,
				rule1
			}
		});
	};

	public handleRule2Change = (rule2: ISelectOption) => {
		this.setState({
			data: {
				...this.state.data,
				rule2
			}
		});
	};

	public handleMaxDiscountChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		this.setState({
			data: {
				...this.state.data,
				maxDiscount: parseInt(e.target.value, 10)
			}
		});
	};

	public handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		this.props.onSubmit(e, this.state.data);
	};

	public render() {
		const {
			labels,
			parentGroupData,
			rule1Data,
			rule2Data,
			onClose
		} = this.props;
		const {
			title,
			parentGroup,
			rule1,
			rule2,
			hasMaxDiscount,
			maxDiscount
		} = this.state.data;

		return (
			<PromotionEditContainer
				closeBtnLabel={labels.closeBtn}
				onCloseClick={onClose}
			>
				<form
					className="kit-promotion-group-edit"
					onSubmit={this.handleSubmit}
				>
					<PromotionEditContainer.Header>
						<fieldset className="kit-promotion-group-edit__title">
							<legend>{labels.titleField}</legend>
							<Input
								type="text"
								defaultValue={title!}
								onChange={this.handleTitleChange}
							/>
						</fieldset>
					</PromotionEditContainer.Header>

					<PromotionEditContainer.Main>
						<fieldset className="kit-promotion-group-edit__parent-group">
							<legend>{labels.parentGroupField}</legend>
							<SelectNested
								{...parentGroupData}
								selectedOption={parentGroup}
								onChange={this.handleParentGropuChange}
							/>
						</fieldset>

						<fieldset className="kit-promotion-group-edit__rules">
							<legend>{labels.rulesField}</legend>
							<Select
								className="kit-promotion-group-edit__rule-1"
								hasDescriptions={true}
								items={rule1Data.items}
								placeholder={rule1Data.placeholder}
								defaultValue={rule1!.title}
								onChange={this.handleRule1Change}
							/>
							<Select
								className="kit-promotion-group-edit__rule-2"
								hasDescriptions={true}
								items={rule2Data.items}
								placeholder={rule2Data.placeholder}
								defaultValue={rule2!.title}
								onChange={this.handleRule2Change}
							/>
							<p className="kit-promotion-group-edit__rule-desc">
								{rule1!.description}
							</p>
						</fieldset>

						<fieldset className="kit-promotion-group-edit__max-discount">
							<legend>{labels.maxDiscountField}</legend>
							<div className="kit-promotion-group-edit__max-discount-inner">
								<Checkbox
									text={labels.maxDiscountCheckbox}
									checked={hasMaxDiscount}
								/>
								<Input
									className="kit-promotion-group-edit__max-discount-input"
									type="text"
									defaultValue={`${maxDiscount}`}
									onChange={this.handleMaxDiscountChange}
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
