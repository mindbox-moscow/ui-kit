import * as React from "react";
import { Utils } from "../../modules";
import { SelectDropMainProps } from "./types";

export class SelectDropMain extends React.Component<SelectDropMainProps> {
	private selectRef = React.createRef<HTMLDivElement>();

	private scrollHandler: () => void;

	public componentDidMount() {
		Utils.Instance.scrollableElements.push(this.selectRef.current!);

		this.forceUpdate(this.addScrollHandler);
	}

	public componentWillUnmount() {
		Utils.Instance.scrollableElements = Utils.Instance.scrollableElements.filter(
			item => item !== this.selectRef.current!
		);

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
			<div className="selectR-drop-main" ref={this.selectRef}>
				<ul className="selectR-results selectR-results-default">
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
