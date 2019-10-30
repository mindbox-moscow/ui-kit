import cn from "classnames";
import * as React from "react";

import "./Form.scss";

interface FormProps {
	labelPosition: "top" | "left";
}

export const Form: React.FC<FormProps> = ({ children, labelPosition }) => (
	<div className={cn("kit-form", `kit-form_label-${labelPosition}`)}>
		{children}
	</div>
);

Form.defaultProps = {
	labelPosition: "left"
};
