import { ISelectOption } from "../Select";
import { ISelectNestedOption } from "../SelectNested";

interface IPromotionGroupData {
	title?: string;
	parentGroup?: ISelectNestedOption;
	groupCalculationStrategy?: ISelectOption;
	arbitrationMode?: ISelectOption;
	maxDiscount?: number;
	hasMaxDiscount?: boolean;
}

export interface IProps {
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
		submitBtnText: string;
		cancelBtnText: string;
		showSubgroupBtnText: string;
	};
	groupCalculationStrategyList: {
		items: Array<ISelectOption | null>;
		placeholder: string;
	};
	arbitrationModeList: {
		items: Array<ISelectOption | null>;
		placeholder: string;
	};
	onClose: (e: React.MouseEvent) => void;
	onSubmit: (e: React.FormEvent, data: IPromotionGroupData) => void;
}

export interface IState {
	data: IPromotionGroupData;
}
