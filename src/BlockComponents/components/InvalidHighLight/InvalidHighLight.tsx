import * as React from "react";

import "./InvalidHighLight.scss";

export const InvalidHighLight: React.FC = ({ children, ...props }) => (
	<span className="kit-block-invalid-high-light" {...props}>
		<span>{children}</span>
	</span>
);
