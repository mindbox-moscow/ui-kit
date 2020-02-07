export interface FilterDetailsProps {
	helpCaption: string;
	helpComponent?: React.ReactNode;
	editorComponent: React.ReactNode;
	viewMode: "edit" | "menu";
	vertical?: "top";
	horizontal?: "center" | "right"
}

export interface CallbackProps {
	onClose: () => void;
}
