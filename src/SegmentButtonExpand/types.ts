export interface ISegmentButtonExpandProps {
	onClick: () => void;
	isOpen: boolean;
	isHideButton?: boolean;
	filterActionCaption?: string;
	filterActionClick?: () => void;

	filterActionShow: boolean;
	disabled?: boolean;
}
