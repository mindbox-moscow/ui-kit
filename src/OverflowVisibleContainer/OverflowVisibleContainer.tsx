import cn from "classnames";
import * as React from "react";
import { createPortal } from "react-dom";
import { State, Props } from "./types";

import "./OverflowVisibleContainer.scss";

export class OverflowVisibleContainer extends React.Component<Props> {
	public state: State = {
		positionTop: 0,
		positionLeft: 0,
		isLoaded: false
	};

	constructor(props: Props) {
		super(props);

		this.onWindowClick = this.onWindowClick.bind(this);
	}

	private portal = document.createElement("div");

	public componentDidMount() {
		const { portal } = this;

		document.body.appendChild(portal);

		this.handleShowPopup();

		// setTimeout предотвращает обработку 
		// любого click по window
		// послужившого причиной cоздания данного компонента
		setTimeout(() => window.addEventListener("click", this.onWindowClick));
	}

	public componentWillUnmount() {
		const { portal } = this;

		document.body.removeChild(portal);
		window.removeEventListener("resize", this.handleShowPopup);
		window.removeEventListener("load", this.handleShowPopup);

		window.removeEventListener("click", this.onWindowClick);
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

	private onWindowClick = (event: Event) => {

		console.log("event:", event, event.composedPath());

		// TODO: delete when used new SelectedElement (using portal div#dropdown-overlay)
		const dropdownDivElement =
			document.getElementById("dropdown-overlay") as HTMLDivElement;

		const isClickInsideDropdownOverlay =
			event.composedPath().find(eventTarget => eventTarget == dropdownDivElement) != undefined;

		if (isClickInsideDropdownOverlay) return

		const targetNode = event.target as Node;
		const { onOutZoneClick } = this.props;

		if (
			onOutZoneClick != null
			&& !this.portal.contains(targetNode)
		) {
			console.log("call onOutZoneClick()");
			onOutZoneClick();
		}
	}

	public render() {
		const { portal } = this;
		const { positionLeft, positionTop, isLoaded } = this.state;
		const { children, className } = this.props;

		return createPortal(
			<div
				className={cn("kit-overflow-visiblecontainer", className)}
				style={{ left: positionLeft, top: positionTop }}
			>
				{isLoaded && children}
			</div>,
			portal
		);
	}
}
