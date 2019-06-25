import { IItem as ISelectOption } from "../Select";
import { IOption as ISelectNestedOption } from "../SelectNested";

interface IPromotionGroupData {
	title: string;
	parentGroup: number;
	rule1: string;
	rule2: string;
	maxDiscount: number;
	hasMaxDiscount: boolean;
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
	onClose: (e: React.MouseEvent) => void;
	onSubmit: (e: React.FormEvent) => void;
}

export interface IState {
	data: IPromotionGroupData;
}
