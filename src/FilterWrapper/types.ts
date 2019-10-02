type SelectionStateType = "none" | "part" | "all" | "concrete";

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
}

export interface CallbackProps {
	onApply: () => void;
	onClear: () => void;
	onCancelSelection: () => void;
}
