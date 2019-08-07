import * as React from "react";

import "./FilterWrapper.scss";

export class FilterWrapper extends React.Component {
	public render() {
		const { children } = this.props;
		return (
			<div className="kit-filter-wrapper">
				{children}
			</div>
		);
	}
}
