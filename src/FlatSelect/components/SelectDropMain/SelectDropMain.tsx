import * as React from "react";
import { SelectDropMainProps } from "./types";

export class SelectDropMain extends React.Component<SelectDropMainProps> {
	private selectRef = React.createRef<HTMLDivElement>();

	private scrollHandler: () => void;

	public componentDidMount() {
		this.forceUpdate(this.addScrollHandler);
	}

	public componentWillUnmount() {
		this.removeScrollHandler();
	}

	public componentWillUpdate() {
		this.removeScrollHandler();
	}

	public componentDidUpdate() {
		this.addScrollHandler();
	}

	public render() {
		return (
			<div className="kit-selectR-drop-main" ref={this.selectRef}>
				<ul className="kit-selectR-results kit-selectR-results-default">
					{this.props.children}
				</ul>
			</div>
		);
	}

	private addScrollHandler = () => {
		if (this.props.onScroll && !this.scrollHandler) {
			const selectNode = this.selectRef.current!;
			this.scrollHandler = this.props.onScroll(selectNode);
			selectNode.addEventListener("scroll", this.scrollHandler);
		}
	};

	private removeScrollHandler = () => {
		if (this.scrollHandler) {
			this.selectRef.current!.removeEventListener(
				"scroll",
				this.scrollHandler
			);
		}
	};
}
