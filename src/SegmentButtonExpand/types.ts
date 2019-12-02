export interface SegmentButtonExpandProps {
	onClick: () => void;
	isOpen: boolean;
	filterActionCaption: string;
	filterActionClick: () => void;

	filterActionShow: boolean;
	disabled?: boolean;
}
