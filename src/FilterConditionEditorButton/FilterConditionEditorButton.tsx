import cn from "classnames";
import * as React from "react";
import {
	FilterConditionSelector,
	Props as SelectorProps
} from "../FilterConditionSelector";
import { IconSvg, IconSvgTypes } from "../IconSvg";
import "./FilterConditionEditorButton.scss";
import { Props as ButtonProps } from "./types";

type Props = ButtonProps &
	SelectorProps & {
		iconType?: IconSvgTypes;
	};

export const FilterConditionEditorButton: React.FC<Props> = ({
	toggleOpen,
	label,
	isOpened,
	iconType,
	autoFocus,
	...otherProps
}) => {
	return (
		<div className="kit-filter-editor">
			<div className="kit-filter-editor__breakpoint" />
			<button
				autoFocus={autoFocus}
				className={cn("kit-filter-editor__btn", {
					"kit-filter-editor__btn_open": isOpened
				})}
				type="button"
				onClick={toggleOpen}
			>
				{iconType && <IconSvg type={iconType} />}
				{label}
			</button>
			{isOpened && (
				<FilterConditionSelector
					{...otherProps}
					onConditionStateToggle={toggleOpen}
				/>
			)}
		</div>
	);
};
