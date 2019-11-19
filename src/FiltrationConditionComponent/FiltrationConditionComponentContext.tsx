import * as React from "react";

export const FiltrationConditionComponentContext = React.createContext<
	((children: React.ReactNode) => void) | null
>(null);
