import cn from "classnames";
import * as React from "react";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import "./Tooltip.scss";

interface IProps {
	title: string | JSX.Element;
	position?: "top" | "bottom";
	className?: string;
}

interface IState {
	isShow: boolean;
}

export class Tooltip extends React.Component<IProps, IState> {
	public state = {
		isShow: false
	};

	public refTitle = React.createRef<HTMLDivElement>();

	public handleShowTooltip = () => {
		this.setState({ isShow: true });
	};
	public handleHideTooltip = () => {
		this.setState({ isShow: false });
	};

	public render() {
		const { isShow } = this.state;
		const { title, position = "bottom", className, children } = this.props;

		if (!children) {
			return (
				<div className={cn("kit-tooltip", className)}>
					<div className="kit-tooltip__title">{title}</div>
				</div>
			);
		}

		return (
			<div className={cn("kit-tooltip", className)}>
				<div
					onMouseEnter={this.handleShowTooltip}
					onMouseLeave={this.handleHideTooltip}
					ref={this.refTitle}
					className="kit-tooltip__title"
				>
					{isShow && (
						<span
							className={cn(
								"kit-tooltip__road",
								`kit-tooltip__road_${position}`
							)}
						/>
					)}
					{title}
				</div>
				<OverflowVisibleContainer
					parentRef={this.refTitle}
					className="kit-tooltip__popup"
				>
					<div
						onMouseEnter={this.handleShowTooltip}
						onMouseLeave={this.handleHideTooltip}
						className={cn(
							"kit-tooltip__content",
							`kit-tooltip__content_${position}`,
							{
								"kit-tooltip__content_show": isShow
							}
						)}
					>
						{children}
					</div>
				</OverflowVisibleContainer>
			</div>
		);
	}
}
