import * as React from "react";
import { ElementType } from "./FilterConditionSelectorItem";

interface SelectedElement {
	isSelected: boolean;
	isExpanded: boolean;
	type: ElementType;
}

export interface IProps {
	selectedElement: SelectedElement | null;
	onFocusElement: (
		onMouseEnter: () => void,
		onMouseLeave: () => void,
		onSelect: () => void,
		itemElement: React.RefObject<HTMLDivElement>
	) => void;
}

export const FilterConditionSelectorContext = React.createContext<IProps | null>(
	null
);
