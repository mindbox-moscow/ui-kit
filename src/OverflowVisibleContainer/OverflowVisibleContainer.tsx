import cn from "classnames";
import * as React from "react";
import { createPortal } from "react-dom";
import { State, Props } from "./types";

import {
	WindowClickListener,
	IsntNeutralZoneMarker
} from "../WindowClickListener";

import "./OverflowVisibleContainer.scss";

export class OverflowVisibleContainer extends React.Component<Props> {
	public state: State = {
		positionTop: 0,
		positionLeft: 0,
		isLoaded: false
	};

	private portal = document.createElement("div");

	private containerRef = React.createRef<HTMLDivElement>();

	public windowClickListener: any;

	public componentDidMount() {
		const { portal } = this;

		document.body.appendChild(portal);

		this.handleShowPopup();

		const { onNeutralZoneClick } = this.props;
		if (onNeutralZoneClick != null) {
			this.windowClickListener = WindowClickListener(onNeutralZoneClick, this.containerRef.current as HTMLElement);
		}
	}

	public componentWillUnmount() {
		const { portal } = this;

		document.body.removeChild(portal);
		window.removeEventListener("resize", this.handleShowPopup);
		window.removeEventListener("load", this.handleShowPopup);

		this.windowClickListener.stop();
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
		const { children, className } = this.props;

		return createPortal(
			<div
				ref={this.containerRef}
				className={cn("kit-overflow-visiblecontainer", IsntNeutralZoneMarker, className)}
				style={{ left: positionLeft, top: positionTop }}
			>
				{isLoaded && children}
			</div>,
			portal
		);
	}
}
