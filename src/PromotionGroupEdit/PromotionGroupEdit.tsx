import * as React from "react";
import { Button as NewButton } from "@mindbox-moscow/ui-components";

// import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { PromotionEditContainer } from "../PromotionEditContainer";
import { ISelectOption, Select } from "../Select";
import { ISelectNestedOption, SelectNested } from "../SelectNested";
import { IProps, IState } from "./types";

import "./PromotionGroupEdit.scss";

export class PromotionGroupEdit extends React.PureComponent<IProps, IState> {
	public state: IState = {
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

	public handleGroupCalculationStrategyChange = (
		groupCalculationStrategy: ISelectOption
	) => {
		this.setState({
			data: {
				...this.state.data,
				groupCalculationStrategy
			}
		});
	};

	public handleArbitrationModeChange = (arbitrationMode: ISelectOption) => {
		this.setState({
			data: {
				...this.state.data,
				arbitrationMode
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
			groupCalculationStrategyList,
			arbitrationModeList,
			onClose
		} = this.props;
		const {
			title,
			parentGroup,
			groupCalculationStrategy,
			arbitrationMode,
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
								value={title!}
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

						<fieldset className="kit-promotion-group-edit__calc-strategy-wrap">
							<legend>
								{labels.groupCalculationStrategyField}
							</legend>
							<Select
								className="kit-promotion-group-edit__calc-strategy"
								hasDescriptions={true}
								items={groupCalculationStrategyList.items}
								placeholder={
									groupCalculationStrategyList.placeholder
								}
								defaultValue={groupCalculationStrategy!.title}
								onChange={
									this.handleGroupCalculationStrategyChange
								}
							/>
							<Select
								className="kit-promotion-group-edit__arbitration-mode"
								hasDescriptions={true}
								items={arbitrationModeList.items}
								placeholder={arbitrationModeList.placeholder}
								defaultValue={arbitrationMode!.title}
								onChange={this.handleArbitrationModeChange}
							/>
							<p className="kit-promotion-group-edit__calc-strategy-desc">
								{groupCalculationStrategy!.description}
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
									value={`${maxDiscount}`}
									onChange={this.handleMaxDiscountChange}
								/>
								&#37;
							</div>
						</fieldset>
					</PromotionEditContainer.Main>

					<PromotionEditContainer.Footer>
						<fieldset className="kit-promotion-group-edit__submit">
							<div className="kit-promotion-group-edit__submit-inner">
								<NewButton
									size="medium"
									type="primary"
								>
									{labels.submitBtn}
								</NewButton>
								<NewButton
									size="medium"
									type="secondary"
								>
									{labels.cancelBtn}
								</NewButton>
							</div>
						</fieldset>
					</PromotionEditContainer.Footer>
				</form>
			</PromotionEditContainer>
		);
	}
}
