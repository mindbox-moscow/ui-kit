import * as React from "react";

export const FiltrationConditionComponentContext = React.createContext<
	| ((
			children: React.ReactNode,
			filterAction: React.ReactNode,
			shoudShowSegment: boolean
	  ) => void)
	| null
>(null);
