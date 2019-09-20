export interface FilterDetailsProps {
	helpCaption: string;
	helpComponent: React.ReactNode;
	editorComponent: React.ReactNode;
	starred: boolean;
	viewMode: "edit" | "menu";
}

export interface CallbackProps {
	toggleStar: () => void;
}

export interface State {
	isExpanded: boolean;
	helpIsExpanded: boolean;
}
