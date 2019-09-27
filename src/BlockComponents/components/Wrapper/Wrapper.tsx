import * as React from "react";

import "./Wrapper.scss";

interface Props {
	tag: "div" | "span";
}

export const Wrapper: React.FC<Props> = ({ tag, ...props }) => {
	const Tag = tag;

	return <Tag className="kit-block-wrapper" {...props} />;
};

Wrapper.defaultProps = {
	tag: "div"
};
