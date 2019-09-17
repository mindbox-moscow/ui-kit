import cn from "classnames";
import * as React from "react";

interface Props {
	activeType: string;
	types: { [key: string]: string };
	onToggle: () => void;
}

export const LabelButton: React.FC<Props> = ({
	activeType,
	types,
	onToggle
}) => (
	<button
		className="kit-filtration-group__label-button"
		type="button"
		onClick={onToggle}
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
