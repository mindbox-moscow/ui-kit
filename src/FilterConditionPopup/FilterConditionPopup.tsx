import * as React from "react";
import { createPortal } from "react-dom";
import { State, Props } from "./types";

import "./FilterConditionPopup.scss";

export class FilterConditionPopup extends React.Component<Props> {
	public state: State = {
		positionTop: 0,
		positionLeft: 0
	};

	private portal = document.createElement("div");

	public componentDidMount() {
		const { portal } = this;
		const { parentRef } = this.props;

		document.body.appendChild(portal);

		const ref = parentRef.current;
		if (parentRef && ref) {
			const rect = ref.getBoundingClientRect();
			const positionTop = window.pageYOffset + rect.height + rect.top;

			this.setState({
				positionTop,
				positionLeft: rect.left
			});
		}
	}

	public componentWillUnmount() {
		const { portal } = this;

		document.body.removeChild(portal);
	}

	public render() {
		const { portal } = this;
		const { positionLeft, positionTop } = this.state;
		const { children } = this.props;

		return createPortal(
			<div
				className="kit-filter-condition-popup"
				style={{ left: positionLeft, top: positionTop }}
			>
				{children}
			</div>,
			portal
		);
	}
}
