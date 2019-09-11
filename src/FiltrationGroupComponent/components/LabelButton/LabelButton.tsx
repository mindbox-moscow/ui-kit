import cn from "classnames";
import * as React from "react";

type ButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

type ButtonCustomProps = {
	active: boolean;
};

type Props = Partial<ButtonProps & ButtonCustomProps>;

export const LabelButton: React.FC<Props> = ({ active, ...props }) => (
	<button
		className={cn(
			"kit-filtration-group__label_and kit-filtration-group__label-button",
			{
				"kit-filtration-group__label-button_active": active
			}
		)}
		{...props}
		type="button"
	/>
);
