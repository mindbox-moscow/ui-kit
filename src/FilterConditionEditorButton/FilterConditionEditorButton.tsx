import * as React from "react";
import cn from "classnames";

import "./FilterConditionEditorButton.scss";

interface Props {
	className?: string;
	children?: any;
	isOpened: boolean;
	toggleOpen: any;
	small?: boolean;
}

export class FilterConditionEditorButton extends React.Component<Props> {
	public render() {
		const { children, small, className } = this.props;
		return (
			<button
				className={cn("kit-filter-editor-btn", className, {
					"kit-filter-editor-btn_small": small
				})}
			>
				{children}
			</button>
		);
	}
}
