import * as React from "react";

export const ScrollableContainerContext = React.createContext<React.RefObject<
	HTMLElement
> | null>(null);
export const OverflowVisibleFixedContext = React.createContext<boolean>(false);
