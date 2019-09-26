export interface State {
	positionLeft: number;
	positionTop: number;
	isLoaded: boolean;
}

export interface Props {
	parentRef: React.RefObject<HTMLElement>;
}
