import * as React from "react";
import { SelectSearchListProps, SelectSearchListState } from "./types";

export class SelectSearchList extends React.Component<
	SelectSearchListProps,
	SelectSearchListState
> {
	public render() {
		return <div className={this.props.className} />;
	}
}
