import * as React from "react";

interface IContext {
	contextOnKeyDownSearch: (e?: React.KeyboardEvent) => void | null;
	contextOnKeyDownItems: (e: React.KeyboardEvent) => void | null;
	onSearchRef: (
		searchElement: React.RefObject<HTMLInputElement>
	) => void | null;
	onItemsRef: (itemElement: React.RefObject<HTMLLIElement>) => void | null;
}

export const DropdownContext = React.createContext<IContext | null>(null);
