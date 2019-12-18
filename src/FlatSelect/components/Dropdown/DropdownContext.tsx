import * as React from "react";

export const DropdownContext = React.createContext<
	((e: React.KeyboardEvent) => void) | null
>(null);
