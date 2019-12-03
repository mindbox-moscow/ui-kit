export interface State {
	positionLeft: number | string;
	positionTop: number | string;
	positionBottom: number | string;
	isLoaded: boolean;
}

export interface Props {
	parentRef: React.RefObject<HTMLElement>;
	className?: string;
	isAdaptive?: boolean;
	onAdaptive?: (isAdaptive: boolean) => void;
	onNeutralZoneClick: (() => void) | null;
}
