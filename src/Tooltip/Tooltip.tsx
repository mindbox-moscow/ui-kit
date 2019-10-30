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

type ToolTipProps = IProps;

export class Tooltip extends React.Component<ToolTipProps> {
	static defaultProps: DefaultProps = {
		position: "bottom",
		textDecoration: true
	};

	public refTitle = React.createRef<HTMLSpanElement>();
	public refContent = React.createRef<HTMLSpanElement>();

	public handleHoverTitle = () => {
		const refContent = this.refContent.current;

		if (refContent) {
			refContent.classList.toggle("kit-tooltip__content_show");
		}
	};

	public render() {
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
						ref={this.refContent}
						className={cn(
							"kit-tooltip__content",
							`kit-tooltip__content_${position}`
						)}
					>
						{children}
					</span>
				</OverflowVisibleContainer>
			</span>
		);
	}
}
