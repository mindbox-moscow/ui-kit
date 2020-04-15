import cn from "classnames";
import * as React from "react";
import {
	FilterConditionSelector,
	Props as SelectorProps
} from "../FilterConditionSelector";
import { useClickOutside } from "../HOOKs";
import { IconSvg, IconSvgTypes } from "../IconSvg";
import "./FilterConditionEditorButton.scss";
import { Props as ButtonProps } from "./types";

type Props = ButtonProps &
	SelectorProps & {
		iconType?: IconSvgTypes;
	};

export interface FilterConditionEditorButtonHandles {
	focus: () => void;
}

export const FilterConditionEditorButton = React.forwardRef<
	FilterConditionEditorButtonHandles,
	Props
>((props, ref) => {
	const { toggleOpen, label, isOpened, iconType, ...otherProps } = props;

	const refButton = React.useRef<HTMLButtonElement>(null);
	const refFilterEditor = React.useRef<HTMLDivElement>(null);

	React.useImperativeHandle(ref, () => ({
		focus: () => {
			if (refButton.current) {
				refButton.current.focus();
			}
		}
	}));

	const handleClose = () => {
		if (isOpened) {
			toggleOpen();
		}
	};

	useClickOutside(refFilterEditor, handleClose, isOpened);

	return (
		<div className="kit-filter-editor" ref={refFilterEditor}>
			<button
				ref={refButton}
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
					onConditionStateToggle={handleClose}
				/>
			)}
		</div>
	);
});
