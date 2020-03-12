import { IActionProps } from "../ActionsDropdown";

type GroupType = "and" | "or";

type ConditionState =
	| "view"
	| "edit"
	| "shaded"
	| "linkedConditionEdit"
	| "readOnly";

export interface StateProps {
	groupType: GroupType; // тип группы: И или ИЛИ
	state: ConditionState;
	andLabel: string; // лейбл для И
	orLabel: string; // лейбл для ИЛИ
	shouldShowLabel?: boolean; // нужно ли отображать лейбл на брекете группы
	children?: React.ReactNode | React.ReactNode[]; // условия фильтрации внутри группы. могут быть FiltrationGroupComponent или FiltrationConditionComponent
	addSimpleConditionButton?: React.ReactNode;
	addGroupConditionButton?: React.ReactNode;
	shouldShowButtons: boolean;
	shouldShowDuplicateButton: boolean;
	moreConditionToggle: string;
	moreActions: IActionProps[];
}

export interface CallbackProps {
	onGroupTypeToggle: () => void;
	onConditionStateToggle: () => void;
	onConditionRemove: () => void;
	onConditionCopy: () => void;
}

export enum SearchClasses {
	KitFiltrationGroup = "kit-filtration-group",
	KitFiltrationCondition = "kit-filtration-condition",
	KitFiltrationGroupButtons = "kit-filtration-group__buttons"
}
