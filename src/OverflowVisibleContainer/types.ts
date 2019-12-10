export interface State {
	positionLeft: number | string;
	positionTop: number | string;
	isLoaded: boolean;
}

export interface Props {
	parentRef: React.RefObject<HTMLElement>;
	className?: string;
}
