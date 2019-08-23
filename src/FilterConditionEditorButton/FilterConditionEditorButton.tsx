import * as React from "react";
import "./FilterConditionEditorButton.scss";

import cn from "classnames";

interface Props {
	className?: string;
	children?: any;
	isOpened: boolean;
	toggleOpen: boolean
}

export class FilterConditionEditorButton extends React.Component<Props> {
	public render() {
		const { children, className } = this.props;
		return (
			<button
				className={cn("className", className)}
			>
				{children}
			</button>
		);
	}
}
