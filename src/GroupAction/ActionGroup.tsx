import * as React from "react";
import "./ActionGroup.scss";

interface Props {}

export class ActionGroup extends React.Component<Props> {
	public render() {
		return <ul className="kit-action-list">{this.props.children}</ul>;
	}
}
