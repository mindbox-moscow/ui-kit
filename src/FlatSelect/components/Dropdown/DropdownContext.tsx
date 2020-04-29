import * as React from "react";

interface IContext {
	contextOnKeyDownSearch: (e?: React.KeyboardEvent) => void;
	contextOnKeyDownItems: (e: React.KeyboardEvent) => void;
	onSearchRef: (searchElement: React.RefObject<HTMLInputElement>) => void;
	onItemsRef: (itemElement: React.RefObject<HTMLDivElement>) => void;
	onFocusElement: (
		onMouseEnter: () => void,
		onMouseLeave: () => void,
		itemElement: React.RefObject<HTMLDivElement>
	) => void;
	onCloseDropdown: () => void;
	setSearchTerm: (term: string) => void;
}

export const DropdownContext = React.createContext<IContext | null>(null);
