import * as React from "react";

import "./FilterConditionEditorButton.scss";

interface Props {
	children?: React.ReactNode;
	toggleOpen: () => void;
	label: string;
	isOpened: boolean;
}

export const FilterConditionEditorButton = (props: Props) => {
	const { children, toggleOpen, label, isOpened } = props;

	return (
		<div className="kit-filter-editor">
			<button
				className="kit-filter-editor__btn"
				type="button"
				onClick={toggleOpen}
			>
				{label}
			</button>
			{isOpened && children}
		</div>
	);
};
