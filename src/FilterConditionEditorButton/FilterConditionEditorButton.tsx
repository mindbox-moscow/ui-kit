import * as React from "react";

import "./FilterConditionEditorButton.scss";

interface Props {
	children?: React.ReactNode;
	toggleOpen: () => void;
	label: string;
	isOpened: boolean;
}

export const FilterConditionEditorButton = React.forwardRef(
	(props: Props, ref: React.RefObject<HTMLButtonElement>) => {
		const { children, toggleOpen, label, isOpened, ...propsButton } = props;

		return (
			<div className="kit-filter-editor">
				<button
					ref={ref}
					className="kit-filter-editor__btn"
					{...propsButton}
					type="button"
					onClick={toggleOpen}
				>
					{label}
				</button>
				{isOpened && children}
			</div>
		);
	}
);
