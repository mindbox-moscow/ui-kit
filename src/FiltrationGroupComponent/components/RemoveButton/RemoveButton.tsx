import * as React from "react";

type ButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export const RemoveButton: React.FC<ButtonProps> = props => (
	<button {...props} className="kit-filtration-group__remove" type="button" />
);
