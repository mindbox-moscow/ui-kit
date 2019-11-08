import cn from "classnames";
import * as React from "react";
import { createPortal } from "react-dom";
import { State, Props } from "./types";

import "./OverflowVisibleContainer.scss";
import {
	IsntNeutralZoneMarker,
	IWindowClickListener,
	CreateWindowClickListener
} from "../WindowClickListener";

export class OverflowVisibleContainer extends React.Component<Props> {
	public state: State = {
		positionTop: 0,
		positionLeft: 0,
		isLoaded: false
	};

	private windowClickListener: IWindowClickListener

	private portal = document.createElement("div");

	private containerRef = React.createRef<HTMLDivElement>();

	public componentDidMount() {
		const { portal } = this;

		document.body.appendChild(portal);

		this.handleShowPopup();


		// setTimeout предотвращает обработку 
		// любого click по window
		// послужившого причиной cоздания данного компонента
		setTimeout(() => {
			if (this.containerRef.current != null && this.props.onNeutralZoneClick != null) {
				this.windowClickListener = CreateWindowClickListener(
					this.props.onNeutralZoneClick,
					this.containerRef.current as HTMLElement
				)
			}
		})
	}

	public componentWillUnmount() {
		const { portal } = this;

		document.body.removeChild(portal);
		window.removeEventListener("resize", this.handleShowPopup);
		window.removeEventListener("load", this.handleShowPopup);

		// Так как windowClickListener создаётся через setTimeout, то и его стопинг реализуется также
		setTimeout(() => {
			if (this.windowClickListener != undefined) {
				this.windowClickListener.stop();
			}
		})
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
