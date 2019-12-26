import * as React from "react";
import cn from "classnames";
import { FilterWrapperContext } from "../../../FilterWrapper";

export const ContextWrapper: React.FC = ({ children }) => {
	const context = React.useContext(FilterWrapperContext);
	let scrollState = context && context.scrollState;

	return React.useMemo(
		() => {
			return (
				<div
					className={cn(
						`kit-filter-condition-selector_${scrollState}`
					)}
				>
					{children}
				</div>
			);
		},
		[scrollState, children]
	);
};
