export interface Props {
	childRenderer: React.ComponentType<ChildRendererProps>;
	searchTerm: string;
	notFoundMessage?: string;
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

export interface ChildRendererProps {
	id: string;
	pathFromRoot?: string[];
}

export type IMenuModeMap = { [key in MenuMode]: string };

export enum MenuMode {
	Filter = "filter",
	Recent = "recent",
	Saved = "saved",
	Examples = "examples"
}
