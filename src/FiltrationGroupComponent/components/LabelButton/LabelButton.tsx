import cn from "classnames";
import * as React from "react";

type ButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

type ButtonCustomProps = {
	activeType: string;
	types: any;
};

type Props = Partial<ButtonProps & ButtonCustomProps>;

export const LabelButton: React.FC<Props> = ({
	activeType,
	types,
	...props
}) => (
	<button
		className="kit-filtration-group__label-button"
		{...props}
		type="button"
	>
		{Object.keys(types).map(type => (
			<span
				key={type}
				className={cn({
					"kit-filtration-group__label-button_active":
						activeType === type
				})}
			>
				{types[type]}
			</span>
		))}
	</button>
);
