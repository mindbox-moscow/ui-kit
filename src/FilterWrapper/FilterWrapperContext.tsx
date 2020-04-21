import * as React from "react";
import { ScrollState } from "./types";

interface IFilterWrapperContext {
	updateBrackets: number;
	isFixed: boolean;
	rerenderBrackets: () => void;
	scrollState: ScrollState;
}

export const FilterWrapperContext = React.createContext<IFilterWrapperContext | null>(
	null
);
