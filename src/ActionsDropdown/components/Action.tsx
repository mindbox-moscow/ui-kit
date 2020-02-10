import cn from "classnames";
import * as React from "react";

import { useActionsDropdownContext } from "../context";

interface IProps {
	title: React.ReactNode;
	disabled?: boolean;
	hint?: string;
	closeDropdownOnClick?: boolean;
	onClick: () => void;
}

const Action = (props: IProps) => {
	const {
		title,
		onClick,
		disabled = false,
		hint,
		closeDropdownOnClick = true
	} = props;
	const { closeDropdown } = useActionsDropdownContext();

	const handleClick = () => {
		if (!disabled) {
			if (closeDropdownOnClick) {
				closeDropdown();
			}

			onClick();
		}
	};

	return (
		<div
			className={cn("kit-actions-dropdown__action", {
				"kit-actions-dropdown__action_disabled": disabled
			})}
			onClick={handleClick}
			title={hint}
		>
			{title}
		</div>
	);
};

export { Action };
