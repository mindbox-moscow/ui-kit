import cn from "classnames";
import * as React from "react";
import { createPortal } from "react-dom";
import { Props, State } from "./types";

import { withOutsideClick, WithOutsideClickProps } from "../HOCs";
import "./OverflowVisibleContainer.scss";

class OverflowVisibleContainer extends React.Component<
	Props & WithOutsideClickProps
> {
	public state: State = {
		positionTop: 0,
		positionLeft: 0,
		positionBottom: "auto",
		isLoaded: false
	};

	private portal = document.createElement("div");

	public componentDidMount() {
		const { portal } = this;

		document.body.appendChild(portal);

		this.handleShowPopup();
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
		const { parentRef, isAdaptive, onAdaptive } = this.props;
		const { positionLeft, positionTop, positionBottom } = this.state;

		if (parentRef && parentRef.current) {
			const {
				top,
				height,
				left
			} = parentRef.current.getBoundingClientRect();
			const windowScrollY = window.scrollY;
			let reactTop: number | string = windowScrollY + top + height;
			let rectBottom: number | string = "auto";
			const rectLeft: number | string = left;
			const heightBody = document.body.offsetHeight;

			if (isAdaptive && window.innerHeight / 2 < top) {
				reactTop = "auto";
				rectBottom = heightBody - windowScrollY - top - 2;
			}

			if (onAdaptive) {
				rectBottom !== "auto" ? onAdaptive(true) : onAdaptive(false);
			}

			if (
				reactTop !== positionTop ||
				rectLeft !== positionLeft ||
				rectBottom !== positionBottom
			) {
				this.setState({
					positionTop: reactTop,
					positionLeft: rectLeft,
					positionBottom: rectBottom,
					isLoaded: true
				});
			}
		}

		window.addEventListener("resize", this.handleShowPopup);
		window.addEventListener("load", this.handleShowPopup);
	};

	public render() {
		const {
			positionLeft,
			positionTop,
			isLoaded,
			positionBottom
		} = this.state;
		const { children, className, clickOutsideRef } = this.props;

		return createPortal(
			<div
				ref={clickOutsideRef}
				className={cn("kit-overflow-visiblecontainer", className)}
				style={{
					left: positionLeft,
					top: positionTop,
					bottom: positionBottom
				}}
			>
				{isLoaded && children}
			</div>,
			this.portal
		);
	}
}

const OverflowVisibleContainerwithOutside = withOutsideClick(
	OverflowVisibleContainer
);

export { OverflowVisibleContainerwithOutside as OverflowVisibleContainer };
