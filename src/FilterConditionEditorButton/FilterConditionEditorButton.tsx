import * as React from "react";
import cn from "classnames";

import "./FilterConditionEditorButton.scss";

interface Props {
	className?: string;
	children: React.ReactNode;
	isActive: boolean;
	toggleOpen: () => void;
	label: string;
	isOpened: boolean;
}

export const FilterConditionEditorButton = (props: Props) => {
	const { children, className, toggleOpen, label, isOpened } = props;

	return (
		<div>
			<button
				className={cn("kit-filter-editor-btn", className)}
				type="button"
				onClick={toggleOpen}
			>
				{label}
			</button>
			{isOpened && children}
		</div>
	);
};
