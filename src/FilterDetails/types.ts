export interface FilterDetailsProps {
	helpCaption: string;
	helpComponent?: React.ReactNode;
	editorComponent: React.ReactNode;
	viewMode: "edit" | "menu";
	vertical?: "top";
	horizontal?: "center" | "right";
}

export interface CallbackProps {
	onClose: () => void;
	rollBackFocus?: () => void;
	onKeyDown?: (
		e: React.KeyboardEvent | React.KeyboardEvent<HTMLUListElement>
	) => void;
}
