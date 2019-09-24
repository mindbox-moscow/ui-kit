import { RefObject } from "react";

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
	toggleStar: () => void;
	parentRef: RefObject<HTMLElement>;
}

export interface State {
	positionLeft: number;
	positionTop: number;
}

export type IMenuModeMap = { [key in MenuMode]: string };

export enum MenuMode {
	Filter = "filter",
	Recent = "recent",
	Saved = "saved",
	Examples = "examples"
}
