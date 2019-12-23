export enum SelectionStateType {
	None = "none",
	Part = "part",
	All = "all",
	Concrete = "concrete"
}

export enum ScrollState {
	Full = "full",
	Minified = "minified"
}

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
	filterActions: Array<FilterAction | React.ReactNode>;
	filterActionsCaption: string;
	scrollState: ScrollState;
	buttonUpCaption: string;
	shouldShowStatistics?: boolean;
}

export interface CallbackProps {
	onApply: () => void;
	onClear: () => void;
	onCancelSelection: () => void;
}
