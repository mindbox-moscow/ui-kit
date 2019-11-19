import * as React from "react";

export const FiltrationConditionComponentContext = React.createContext<
	((children: React.ReactNode, filterAction: JSX.Element) => void) | null
>(null);
