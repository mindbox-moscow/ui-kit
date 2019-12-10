import cn from "classnames";
import * as React from "react";
import { createPortal } from "react-dom";
import { Props, State } from "./types";

import "./OverflowVisibleContainer.scss";

export class OverflowVisibleContainer extends React.Component<Props> {
	public state: State = {
		positionTop: 0,
		positionLeft: 0,
		isLoaded: false
	};

	private portal = document.createElement("div");

	public componentDidMount() {
		const { portal } = this;

		document.body.appendChild(portal);

		setTimeout(this.handleShowPopup, 0);
	}

	public componentWillUnmount() {
		const { portal } = this;

		document.body.removeChild(portal);
		window.removeEventListener("resize", this.handleShowPopup);
		window.removeEventListener("load", this.handleShowPopup);
	}

	public componentDidUpdate() {
		this.handleShowPopup();
	}

	public handleShowPopup = () => {
		const { parentRef } = this.props;
		const { positionLeft, positionTop } = this.state;

		if (parentRef && parentRef.current) {
			const {
				top,
				height,
				left
			} = parentRef.current.getBoundingClientRect();
			const windowScrollY = window.scrollY;
			const reactTop: number | string = windowScrollY + top + height;
			const rectLeft: number | string = left;

			if (reactTop !== positionTop || rectLeft !== positionLeft) {
				this.setState({
					positionTop: reactTop,
					positionLeft: rectLeft,
					isLoaded: true
				});
			}
		}

		window.addEventListener("resize", this.handleShowPopup);
		window.addEventListener("load", this.handleShowPopup);
	};

	public render() {
		const { positionLeft, positionTop, isLoaded } = this.state;
		const { children, className } = this.props;

		return createPortal(
			<div
				className={cn("kit-overflow-visiblecontainer", className)}
				style={{
					left: positionLeft,
					top: positionTop
				}}
			>
				{isLoaded && children}
			</div>,
			this.portal
		);
	}
}
