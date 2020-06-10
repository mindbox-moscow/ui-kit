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
	isOpenDropdown: boolean;
	isChildSelect: boolean;
}

const context: IContext = {
	contextOnKeyDownSearch: () => {},
	contextOnKeyDownItems: () => {},
	setSearchRef: () => {},
	addItemsRef: () => {},
	onFocusElement: () => {},
	onCloseDropdown: () => {},
	setSearchTerm: () => {},
	isOpenDropdown: false,
	isChildSelect: false
};

export const DropdownContext = React.createContext<IContext>(context);
