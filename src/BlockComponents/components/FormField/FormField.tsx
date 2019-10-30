import * as React from "react";

import "./FormField.scss";

interface FormFieldProps {
	label?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, children }) => (
	<div className="kit-form-field">
		<label className="kit-form-field__label">{label}</label>
		{children}
	</div>
);
