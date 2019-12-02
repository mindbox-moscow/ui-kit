import * as React from "react";

export const FiltrationGroupComponentContext = React.createContext<
	(() => void) | null
>(null);
