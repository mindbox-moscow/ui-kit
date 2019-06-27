import * as React from "react";
import * as ReactDOM from "react-dom";

import "./Alert.scss";

interface IProps {
	onOutsideClick?: () => void;
	onTimeout?: () => void;
	timeout?: number;
	pauseTimeoutOnHover?: boolean;
}

export class Alert extends React.Component<IProps> {
	public container = document.createElement("div");
	public timeoutId: number | null = null;
	public timeout: number = this.props.timeout || 5000;

	public handleClickOutside = (e: MouseEvent) => {
		const { onOutsideClick } = this.props;

		if (onOutsideClick && !this.container.contains(e.target as Node)) {
			onOutsideClick();
		}
	};

	public handleTimeout = () => {
		const { onTimeout } = this.props;

		if (onTimeout) {
			onTimeout();
		}
	};

	public clearCurrentTimeout = () =>
		this.timeoutId && clearTimeout(this.timeoutId);

	public setNewTimeout = () => {
		this.clearCurrentTimeout();
		this.timeoutId = window.setTimeout(this.handleTimeout, this.timeout);
	};

	public componentDidMount() {
		const { onOutsideClick, onTimeout, pauseTimeoutOnHover } = this.props;

		this.container!.classList.add("kit-alert");
		document.body.insertAdjacentElement("beforeend", this.container);

		if (onOutsideClick) {
			document.addEventListener("click", this.handleClickOutside);
		}

		if (onTimeout) {
			this.setNewTimeout();
		}

		if (onTimeout && pauseTimeoutOnHover) {
			this.container!.addEventListener(
				"mouseenter",
				this.clearCurrentTimeout
			);
			this.container!.addEventListener("mouseleave", this.setNewTimeout);
		}
	}

	public componentWillUnmount() {
		const { onOutsideClick, onTimeout, pauseTimeoutOnHover } = this.props;

		if (onOutsideClick) {
			document.removeEventListener("click", this.handleClickOutside);
		}

		if (onTimeout && pauseTimeoutOnHover) {
			this.container!.removeEventListener(
				"mouseenter",
				this.clearCurrentTimeout
			);
			this.container!.removeEventListener(
				"mouseleave",
				this.setNewTimeout
			);
		}

		this.clearCurrentTimeout();
		this.container!.parentNode!.removeChild(this.container);
	}

	public render() {
		return ReactDOM.createPortal(this.props.children, this.container);
	}
}
