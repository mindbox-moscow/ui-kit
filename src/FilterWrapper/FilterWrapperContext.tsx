import * as React from "react";

interface IFilterWrapperContext {
	// TODO: Убрать
	refBreakPoint: HTMLDivElement | null;
	updateBrackets: number;
	rerenderBrackets: () => void;
}

export const FilterWrapperContext = React.createContext<IFilterWrapperContext | null>(
	null
);
