import cn from "classnames";
import * as React from "react";
import { createPortal } from "react-dom";
import { Props, State } from "./types";

import { WithOusideProps, withOutsideClick } from "../HOCs";
import "./OverflowVisibleContainer.scss";

class OverflowVisibleContainer extends React.Component<
	Props & WithOusideProps
> {
	public state: State = {
		positionTop: 0,
		positionLeft: 0,
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
		window.addEventListener("load", this.handleShowPopup);
	};

	public render() {
		const { portal } = this;
		const { positionLeft, positionTop, isLoaded } = this.state;
		const { children, className, clickOutsideRef } = this.props;

		return createPortal(
			<div
				ref={clickOutsideRef}
				className={cn("kit-overflow-visiblecontainer", className)}
				style={{ left: positionLeft, top: positionTop }}
			>
				{isLoaded && children}
			</div>,
			portal
		);
	}
}

const OverflowVisibleContainerwithOutside = withOutsideClick(
	OverflowVisibleContainer
);

export { OverflowVisibleContainerwithOutside as OverflowVisibleContainer };
