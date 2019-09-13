export interface StateProps {
	changeCondition: boolean;
	statisticsValue: React.ReactNode[] | React.ReactNode;
	statisticsDescription: string;
	applyButtonCaption: string;
	clearButtonCaption: string;
	doesContainFilter: boolean;
}

export interface CallbackProps {
	onApply: () => void;
	onClear: () => void;
}
