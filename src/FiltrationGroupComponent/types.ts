type GroupType = "and" | "or";

type ConditionState = "view" | "edit" | "shaded" | "linkedConditionEdit";

export interface StateProps {
	groupType: GroupType; // тип группы: И или ИЛИ
	state: ConditionState;
	andLabel: string; // лейбл для И
	orLabel: string; // лейбл для ИЛИ
	shouldShowLabel?: boolean; // нужно ли отображать лейбл на брекете группы
	children?: React.ReactNode | React.ReactNode[]; // условия фильтрации внутри группы. могут быть FiltrationGroupComponent или FiltrationConditionComponent
	addSimpleConditionButton?: React.ReactNode;
	addGroupConditionButton?: React.ReactNode;
}

export interface CallbackProps {
	onGroupTypeToggle: () => void;
	onConditionStateToggle: () => void;
	onConditionRemove: () => void;
}
