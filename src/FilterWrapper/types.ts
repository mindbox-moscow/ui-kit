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
	component: React.ReactNode;
	isImportant: boolean;
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
	filterActions: FilterAction[];
	filterActionsCaption: string;
	scrollState: ScrollState;
	buttonUpCaption: string;
	shouldShowStatistics?: boolean;
	showApplyButton?: boolean;
	headInformation?: React.ReactElement;
}

export interface CallbackProps {
	onApply: () => void;
	onClear: () => void;
	onCancelSelection: () => void;
}
