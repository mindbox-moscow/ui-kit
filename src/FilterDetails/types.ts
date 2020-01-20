export interface FilterDetailsProps {
	helpCaption: string;
	helpComponent: React.ReactNode;
	editorComponent: React.ReactNode;
	viewMode: "edit" | "menu";
}

export interface CallbackProps {
	onClose: () => void;
}
