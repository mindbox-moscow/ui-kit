import * as React from "react";
import { ElementType } from "./FilterConditionSelectorItem";

export interface SelectedElement {
	isSelected: boolean;
	isExpanded: boolean;
	type: ElementType;
	onSelect: () => void;
}

export interface IProps {
	selectedElement: SelectedElement | null;
}

export const FilterConditionSelectorContext = React.createContext<IProps | null>(
	null
);
