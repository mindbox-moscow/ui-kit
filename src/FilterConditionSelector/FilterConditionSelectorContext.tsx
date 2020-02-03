import * as React from "react";
import { ElementType } from "./FilterConditionSelectorItem";

type SelectedElement = {
	isSelected: boolean;
	isExpanded: boolean;
	type: ElementType;
};

export interface IProps {
	selectedElement: SelectedElement | null;
}

export const FilterConditionSelectorContext = React.createContext<IProps | null>(
	null
);
