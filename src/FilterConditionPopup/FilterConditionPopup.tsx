import * as React from "react";
import { createPortal } from "react-dom";
import { State, Props } from "./types";

import "./FilterConditionPopup.scss";

export class FilterConditionPopup extends React.Component<Props> {
	public state: State = {
		positionTop: 0,
		positionLeft: 0,
		isLoaded: false
	};

	private portal = document.createElement("div");

	public componentDidMount() {
		const { portal } = this;

		document.body.appendChild(portal);

		window.onload = () => this.handleShowPopup();
	}

	public componentWillUnmount() {
		const { portal } = this;

		document.body.removeChild(portal);
		window.removeEventListener("resize", this.handleShowPopup);
	}

	public handleShowPopup = () => {
		const { parentRef } = this.props;
		const { positionLeft, positionTop } = this.state;

		if (parentRef && parentRef.current) {
			const rect = parentRef.current.getBoundingClientRect();
			const top = window.scrollY + rect.top + rect.height;
			const left = rect.left;

			if (top !== positionTop || left !== positionLeft) {
				this.setState({
					positionTop: top,
					positionLeft: left,
					isLoaded: true
				});
			}
		}

		window.addEventListener("resize", this.handleShowPopup);
	};

	public render() {
		const { portal } = this;
		const { positionLeft, positionTop, isLoaded } = this.state;
		const { children } = this.props;

		return createPortal(
			<div
				className="kit-filter-condition-popup"
				style={{ left: positionLeft, top: positionTop }}
			>
				{isLoaded && children}
			</div>,
			portal
		);
	}
}
