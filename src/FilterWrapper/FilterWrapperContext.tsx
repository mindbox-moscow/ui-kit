import * as React from "react";
import { ScrollState } from "./types";

interface IFilterWrapperContext {
	updateBrackets: number;
	rerenderBrackets: () => void;
	scrollState: ScrollState;
}

export const FilterWrapperContext = React.createContext<IFilterWrapperContext | null>(
	null
);
