import * as React from "react";

export const FilterConditionSelectorContext = React.createContext<
	((selectElement: HTMLLIElement) => void) | null
>(null);
