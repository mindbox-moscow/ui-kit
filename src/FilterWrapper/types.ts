export interface StateProps {
	changeCondition: boolean;
	statisticsValue: number;
	statisticsDescription: string;
	applyButtonCaption: string;
	clearButtonCaption: string;
	doesContainFilter: boolean;
}

export interface CallbackProps {
	onApply: () => void;
	onClear: () => void;
}
