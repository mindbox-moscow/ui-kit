import * as React from "react";

interface IContext {
	isLinkedCondition: boolean;
	renderPopover(
		children: React.ReactNode,
		filterAction: React.ReactNode,
		shoudShowSegment: boolean
	): void;
}

export const FiltrationConditionComponentContext = React.createContext<IContext | null>(
	null
);
