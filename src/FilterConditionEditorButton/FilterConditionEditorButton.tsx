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

export class FilterConditionEditorButton extends React.Component<Props> {
	private refButton = React.createRef<HTMLButtonElement>();

	public focus = () => {
		const refButton = this.refButton.current;
		if (refButton) {
			refButton.focus();
		}
	};

	public render() {
		const {
			toggleOpen,
			label,
			isOpened,
			iconType,
			...otherProps
		} = this.props;

		return (
			<div className="kit-filter-editor">
				<button
					ref={this.refButton}
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
						onClickOutside={toggleOpen}
					/>
				)}
			</div>
		);
	}
}
