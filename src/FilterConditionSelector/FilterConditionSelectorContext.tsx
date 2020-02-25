import * as React from "react";
import { ElementType } from "./FilterConditionSelectorItem";

interface SelectedElement {
	isSelected: boolean;
	isExpanded: boolean;
	type: ElementType;
}

export interface IProps {
	searchTerm: string;
	selectedElement: SelectedElement | null;
	onItemsRef: (itemElement: React.RefObject<HTMLDivElement>) => void;
	onFocusElement: (
		onMouseEnter: () => void,
		onMouseLeave: () => void,
		itemElement: React.RefObject<HTMLDivElement>
	) => void;
}

export const FilterConditionSelectorContext = React.createContext<IProps | null>(
	null
);
