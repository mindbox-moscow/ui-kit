import cn from "classnames";
import * as React from "react";
import { Width } from "../../../utils";
import { PanelProps } from "./types";

export class Panel extends React.Component<PanelProps> {
	public panelRef = React.createRef<HTMLDivElement>();

	public render() {
		const { className, width } = this.props;

		return (
			<div
				className={cn(
					"kit-selectR-drop",
					"kit-overflow-isnt-neutral-zone-marker",
					className,
					`${String(width && Width.getClass(width))}`
				)}
				ref={this.panelRef}
			>
				{this.props.children}
			</div>
		);
	}
}
