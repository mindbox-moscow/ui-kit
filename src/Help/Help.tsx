import * as React from "react";
import "./Help.scss";
import { IconSvg } from "../IconSvg/IconSvg";

import cn from "classnames";

interface Props {
	className?: string;
	children?: any;
}

export class Help extends React.Component<Props> {
	public render() {
		const { children, className } = this.props;
		return (
			<div className={cn("kit-help", className)}>
				<div className="kit-help__icon">
					<IconSvg type="question" size="large" />
				</div>
				<div className="kit-help__inner">{children}</div>
			</div>
		);
	}
}
