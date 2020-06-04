import * as React from "react";

import "./Wrapper.scss";

interface IProps {
	tag?: "div" | "span";
}

export const Wrapper: React.FC<IProps> = props => {
	const { tag = "div", children } = props;

	const Tag = tag;

	return <Tag className="kit-block-wrapper">{children}</Tag>;
};
