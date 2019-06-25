import { ISelectOption } from "../Select";
import { ISelectNestedOption } from "../SelectNested";

interface IPromotionGroupData {
	title?: string;
	parentGroup?: ISelectNestedOption;
	rule1?: ISelectOption;
	rule2?: ISelectOption;
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
	rule1Data: {
		items: Array<ISelectOption | null>;
		placeholder: string;
	};
	rule2Data: {
		items: Array<ISelectOption | null>;
		placeholder: string;
	};
	onClose: (e: React.MouseEvent) => void;
	onSubmit: (e: React.FormEvent, data: IPromotionGroupData) => void;
}

export interface IState {
	data: IPromotionGroupData;
}
