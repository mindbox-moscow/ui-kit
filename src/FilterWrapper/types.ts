export enum SelectionStateType {
	None = "none",
	Part = "part",
	All = "all",
	Concrete = "concrete"
}

export type ScrollState = "full" | "minfied";

export interface FilterAction {
	key: string;
	name: string;
	onClick: () => void;
}

export interface StateProps {
	statisticsValue: React.ReactNode;
	statisticsDescription: string;
	applyButtonCaption: string;
	clearButtonCaption: string;
	doesContainFilter: boolean;
	selectionState: SelectionStateType;
	selectedText: string;
	selectedCancelText: string;
	selectedCountDescription: string;
	isDataOutdated: boolean;
	filterActions: Array<FilterAction | any>;
	filterActionsCaption: string;
	scrollState: ScrollState;
	buttonUpCaption: string;
}

export interface CallbackProps {
	onApply: () => void;
	onClear: () => void;
	onCancelSelection: () => void;
}
