import * as React from "react";
import { FilterConditionPopup } from "../FilterConditionPopup";
import {
	FilterConditionSelector,
	Props as SelectorProps
} from "../FilterConditionSelector";
import { Props as ButtonProps } from "./types";

import "./FilterConditionEditorButton.scss";

type Props = ButtonProps & SelectorProps;

export const FilterConditionEditorButton = (props: Props) => {
	const ref = React.createRef() as React.RefObject<HTMLButtonElement>;

	const { toggleOpen, label, isOpened, ...otherProps } = props;

	return (
		<div className="kit-filter-editor">
			<button
				ref={ref}
				className="kit-filter-editor__btn"
				type="button"
				onClick={toggleOpen}
			>
				{label}
			</button>
			{isOpened && (
				<FilterConditionPopup parentRef={ref}>
					<FilterConditionSelector {...otherProps} />
				</FilterConditionPopup>
			)}
		</div>
	);
};
