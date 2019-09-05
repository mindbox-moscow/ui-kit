import * as React from "react";
import cn from "classnames";

import "./FilterConditionEditorButton.scss";

interface Props {
	children?: React.ReactNode;
	toggleOpen: () => void;
	label: string;
	isOpened: boolean;
	className?: string;
}

export const FilterConditionEditorButton = (props: Props) => {
	const { children, className, toggleOpen, label, isOpened } = props;

	return (
		<div className="kit-filter-editor">
			<button
				className={cn("kit-filter-editor__btn", className)}
				type="button"
				onClick={toggleOpen}
			>
				{label}
			</button>
			{isOpened && children}
		</div>
	);
};
