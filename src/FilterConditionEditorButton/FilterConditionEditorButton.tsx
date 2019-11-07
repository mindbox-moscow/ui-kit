import cn from "classnames";
import * as React from "react";
import {
	FilterConditionSelector,
	Props as SelectorProps
} from "../FilterConditionSelector";
import { IconSvg, IconSvgTypes } from "../IconSvg";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import { Props as ButtonProps } from "./types";

import "./FilterConditionEditorButton.scss";

type Props = ButtonProps &
	SelectorProps & {
		iconType?: IconSvgTypes;
	};

export class FilterConditionEditorButton extends React.Component<Props> {
	private refButton = React.createRef<HTMLButtonElement>();

	public focus = () => {
		(this.refButton.current as HTMLButtonElement).focus()
	}

	public render() {
		const {
			toggleOpen,
			label,
			isOpened,
			iconType,
			autoFocus,
			...otherProps
		} = this.props;

		return (
			<div className="kit-filter-editor">
				<button
					autoFocus={autoFocus}
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
					<OverflowVisibleContainer parentRef={this.refButton} onNeutralZoneClick={toggleOpen}>
						<FilterConditionSelector
							{...otherProps}
							onConditionStateToggle={toggleOpen}
						/>
					</OverflowVisibleContainer>
				)}
			</div>
		);
	}
}
