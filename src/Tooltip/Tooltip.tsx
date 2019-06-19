import * as React from "react";
import "./Tooltip.scss";

interface IProps {
	title: string;
}
interface IState {
	isVisible: boolean;
}

export class Tooltip extends React.Component<IProps, IState> {
	public state = {
		isVisible: false
	};

	public wrapRef = React.createRef<HTMLDivElement>();

	public handleClick = () =>
		this.setState(({ isVisible }) => ({ isVisible: !isVisible }));

	public handleClickOutside = (e: MouseEvent) => {
		const dropdownWrap = this.wrapRef.current!;

		if (!dropdownWrap.contains(e.target as Node)) {
			this.setState({ isVisible: false });
		}
	};

	public componentDidMount() {
		document.addEventListener("click", this.handleClickOutside);
	}

	public componentWillUnmount() {
		document.removeEventListener("click", this.handleClickOutside);
	}

	public render() {
		const { title, children } = this.props;
		const { isVisible } = this.state;

		return (
			<div className="kit-tooltip" ref={this.wrapRef}>
				<span className="kit-tooltip__title" onClick={this.handleClick}>
					{title}
				</span>
				{isVisible && (
					<div className="kit-tooltip__content">{children}</div>
				)}
			</div>
		);
	}
}
