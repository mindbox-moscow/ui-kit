import * as React from "react";
import cn from "classnames";

import "./FilterConditionEditorButton.scss";

interface Props {
	className?: string;
	children: React.ReactNode;
	isActive: boolean;
	toggleOpen: () => void;
}

export const FilterConditionEditorButton = (props: Props) => {
	const { children, className, toggleOpen } = props;
	return (
		<button
			className={cn("kit-filter-editor-btn", className)}
			type="button"
			onClick={toggleOpen}
		>
			{children}
		</button>
	);
};
