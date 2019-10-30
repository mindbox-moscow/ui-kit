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
	static defaultProps: DefaultProps = {
		position: "bottom",
		textDecoration: true
	};

	public state = {
		isShow: false
	};

	public refTitle = React.createRef<HTMLSpanElement>();

	public handleHoverTitle = () => {
		this.setState(state => ({ isShow: !state.isShow }));
	};

	public render() {
		const { isShow } = this.state;
		const { textDecoration, position, title, children } = this.props;
		return (
			<span className="kit-tooltip">
				<span
					ref={this.refTitle}
					onMouseOver={this.handleHoverTitle}
					onMouseOut={this.handleHoverTitle}
					className={cn("kit-tooltip__title", {
						"kit-tooltip__title_text-transform": textDecoration
					})}
				>
					{title}
				</span>
				<OverflowVisibleContainer
					parentRef={this.refTitle}
					className="kit-tooltip__popup"
				>
					<span
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
