export interface SelectDropMainProps {
	onScroll?: (element: Element) => () => void;
	getChildRef?: (ref: React.RefObject<HTMLElement>) => void;
}
