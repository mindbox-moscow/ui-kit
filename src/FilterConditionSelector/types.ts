export interface Props {
	childRenderer: React.ComponentType<{ id: string }>;
	searchTerm: string;
	rootIds: string[];
	onSearchTermChange: (changedSearchTerm: string) => void;
	filterLabel: string;
	recentLabel: string;
	savedLabel: string;
	examplesLabel: string;
	onModeChanged: (selectedMenuMode: MenuMode) => void;
	menuMode: MenuMode;
	helpCaption: string;
	helpComponent: React.ReactNode;
	editorComponent: React.ReactNode;
	starred: boolean;
	onConditionStateToggle: () => void;
	onPreviousSelected: () => boolean;
	onNextSelected: () => void;
	onExpandCurrent: () => void;
}

export type IMenuModeMap = { [key in MenuMode]: string };

export enum MenuMode {
	Filter = "filter",
	Recent = "recent",
	Saved = "saved",
	Examples = "examples"
}
