import * as React from "react";

interface IContext {
	contextOnKeyDownSearch: (e?: React.KeyboardEvent) => void;
	contextOnKeyDownItems: (e: React.KeyboardEvent) => void;
	setSearchRef: (searchElement: React.RefObject<HTMLInputElement>) => void;
	addItemsRef: (itemElement: React.RefObject<HTMLLIElement>) => void;
	onFocusElement: (
		onMouseEnter: () => void,
		onMouseLeave: () => void,
		itemElement: React.RefObject<HTMLLIElement>
	) => void;
	onCloseDropdown: () => void;
	setSearchTerm: (term: string) => void;
}

export const DropdownContext = React.createContext<IContext | null>(null);
