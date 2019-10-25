import cn from "classnames";
import * as React from "react";
import {
	FilterConditionSelector,
	Props as SelectorProps
} from "../FilterConditionSelector";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import { Props as ButtonProps } from "./types";

import "./FilterConditionEditorButton.scss";

type Props = ButtonProps & SelectorProps;

export const FilterConditionEditorButton = (props: Props) => {
	const refButton = React.createRef<HTMLButtonElement>();

	const { toggleOpen, label, isOpened, ...otherProps } = props;

	return (
		<div className="kit-filter-editor">
			<button
				// autoFocus={true}
				ref={refButton}
				className={cn("kit-filter-editor__btn", {
					"kit-filter-editor__btn_open": isOpened
				})}
				type="button"
				onClick={toggleOpen}
			>
				{label}
			</button>
			{isOpened && (
				<OverflowVisibleContainer parentRef={refButton}>
					<FilterConditionSelector
						{...otherProps}
						onConditionStateToggle={toggleOpen}
					/>
				</OverflowVisibleContainer>
			)}
		</div>
	);
};
