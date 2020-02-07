import * as React from "react";

interface IContext {
	contextOnKeyDownSearch: (e?: React.KeyboardEvent) => void;
	contextOnKeyDownItems: (e: React.KeyboardEvent) => void;
	onSearchRef: (searchElement: React.RefObject<HTMLInputElement>) => void;
	onItemsRef: (itemElement: React.RefObject<HTMLLIElement>) => void;
	onFocusElement: (
		onMouseEnter: () => void,
		onMouseLeave: () => void,
		itemElement: React.RefObject<HTMLLIElement>
	) => void;
	onCloseDropdown: () => void;
}

export const DropdownContext = React.createContext<IContext | null>(null);
