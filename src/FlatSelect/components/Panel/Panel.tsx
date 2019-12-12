import cn from "classnames";
import * as React from "react";
import { Width } from "../../../utils";
import { PanelProps } from "./types";

export class Panel extends React.Component<PanelProps> {
	public panelRef = React.createRef<HTMLDivElement>();

	public render() {
		const { className, width, children } = this.props;

		return (
			<div
				className={cn(
					"kit-selectR-drop",
					"kit-overflow-isnt-neutral-zone-marker",
					className,
					Width.getClass(width)
				)}
				ref={this.panelRef}
			>
				{children}
			</div>
		);
	}
}
