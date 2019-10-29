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

	private containerRef = React.createRef<HTMLDivElement>();

	public componentDidMount() {
		const { portal } = this;

		document.body.appendChild(portal);

		this.handleShowPopup();

		// setTimeout предотвращает обработку любого click послужившого причиной 
		// cоздания данного компонента
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

	private clickInContainerRect(x: number, y: number): boolean {
		const { positionLeft, positionTop } = this.state;

		const container = this.containerRef.current as HTMLDivElement;
		const width = container.clientWidth;
		const height = container.clientHeight;

		const res =
			x >= positionLeft
			&& x <= positionLeft + width
			&& y >= positionTop
			&& y <= positionTop + height;

		console.log(x, y, positionLeft, width, positionTop, height, res, this.containerRef)

		return res;
	}

	private onWindowClick = (event: MouseEvent) => {
		const targetNode = event.target as Node;
		const { onOutZoneClick } = this.props;

		if (
			!this.portal.contains(targetNode)
			&& !this.clickInContainerRect(event.clientX, event.clientY)
			&& onOutZoneClick != null) {
			onOutZoneClick();
		}
	}

	public render() {
		const { portal } = this;
		const { positionLeft, positionTop, isLoaded } = this.state;
		const { children, className } = this.props;

		return createPortal(
			<div
				ref={this.containerRef}
				className={cn("kit-overflow-visiblecontainer", className)}
				style={{ left: positionLeft, top: positionTop }}
			>
				{isLoaded && children}
			</div>,
			portal
		);
	}
}
