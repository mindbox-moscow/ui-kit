import * as React from "react";

interface IContext {
	contextOnKeyDownSearch: (e?: React.KeyboardEvent) => void;
	contextOnKeyDownItems: (e: React.KeyboardEvent) => void;
	setSearchRef: (searchElement: React.RefObject<HTMLInputElement>) => void;
	addItemsRef: (itemElement: React.RefObject<HTMLDivElement>) => void;
	onFocusElement: (
		onMouseEnter: () => void,
		onMouseLeave: () => void,
		itemRef: React.RefObject<HTMLDivElement>
	) => void;
	onCloseDropdown: () => void;
	setSearchTerm: (term: string) => void;
}

const context: IContext = {
	contextOnKeyDownSearch: () => {},
	contextOnKeyDownItems: () => {},
	setSearchRef: () => {},
	addItemsRef: () => {},
	onFocusElement: () => {},
	onCloseDropdown: () => {},
	setSearchTerm: () => {}
};

export const DropdownContext = React.createContext<IContext>(context);
