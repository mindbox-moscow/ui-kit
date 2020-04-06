export interface ISegmentButtonExpandProps {
	onClick: () => void;
	isOpen: boolean;
	hidden?: boolean;
	filterActionCaption?: string;
	filterActionClick?: () => void;

	filterActionShow: boolean;
	disabled?: boolean;
}
