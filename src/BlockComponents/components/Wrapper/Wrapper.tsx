import cn from "classnames";
import * as React from "react";

import "./Wrapper.scss";

interface IProps {
	tag?: "div" | "span";
}

export const Wrapper: React.FC<IProps> = props => {
	const { tag = "span", children } = props;

	const Tag = tag;

	return (
		<Tag className={cn("kit-block-wrapper", `kit-block-wrapper_${tag}`)}>
			{children}
		</Tag>
	);
};
