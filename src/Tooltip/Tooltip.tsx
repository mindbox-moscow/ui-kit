import cn from "classnames";
import * as React from "react";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import "./Tooltip.scss";

type IProps = {
	title: string;
} & Partial<DefaultProps>;

interface DefaultProps {
	position: "top" | "bottom";
	textDecoration: boolean;
}

interface State {
	isShow: boolean;
}

type ToolTipProps = IProps;

export class Tooltip extends React.Component<ToolTipProps, State> {
	public static defaultProps: DefaultProps = {
		position: "bottom",
		textDecoration: true
	};

	public state = {
		isShow: false
	};

	public refTitle = React.createRef<HTMLSpanElement>();

	public handleShowTooltip = () => {
		this.setState({ isShow: true });
	};
	public handleHideTooltip = () => {
		this.setState({ isShow: false });
	};

	public render() {
		const { isShow } = this.state;
		const { textDecoration, position, title, children } = this.props;
		return (
			<span className="kit-tooltip">
				<span
					onMouseEnter={this.handleShowTooltip}
					onMouseLeave={this.handleHideTooltip}
					ref={this.refTitle}
					className={cn("kit-tooltip__title", {
						"kit-tooltip__title_text-transform": textDecoration
					})}
				>
					<span
						className={cn(
							"kit-tooltip__road",
							`kit-tooltip__road_${position}`
						)}
					/>
					{title}
				</span>
				<OverflowVisibleContainer
					parentRef={this.refTitle}
					className="kit-tooltip__popup"
				>
					<span
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
					</span>
				</OverflowVisibleContainer>
			</span>
		);
	}
}
