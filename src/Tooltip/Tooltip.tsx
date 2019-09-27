import cn from "classnames";
import * as React from "react";
import "./Tooltip.scss";

type IProps = {
	title: string;
} & Partial<DefaultProps>;
interface IState {
	isVisible: boolean;
}

interface DefaultProps {
	position: "top" | "bottom";
	textDecoration: boolean;
}

export class Tooltip extends React.Component<IProps, IState> {
	static defaultProps: DefaultProps = {
		position: "bottom",
		textDecoration: true
	};

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
		const { textDecoration, position, title, children } = this.props;
		const { isVisible } = this.state;

		return (
			<span className="kit-tooltip" ref={this.wrapRef}>
				<span
					className={cn("kit-tooltip__title", {
						"kit-tooltip__title_text-transform": textDecoration
					})}
					onClick={this.handleClick}
				>
					{title}
				</span>
				{isVisible && (
					<span
						className={cn(
							"kit-tooltip__content",
							`kit-tooltip__content_${position}`
						)}
					>
						{children}
					</span>
				)}
			</span>
		);
	}
}
