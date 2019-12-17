import * as React from "react";

interface IFilterWrapperContext {
	updateBrackets: number;
	rerenderBrackets: () => void;
}

export const FilterWrapperContext = React.createContext<IFilterWrapperContext | null>(
	null
);
