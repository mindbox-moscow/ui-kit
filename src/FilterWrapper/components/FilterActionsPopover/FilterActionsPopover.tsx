import cn from "classnames";
import * as React from "react";
import { FilterAction } from "../../types";

import "./FilterActionsPopover.scss";

interface FilterActionsPopoverProps {
	filterActions: Array<FilterAction | React.ReactNode>;
	filterActionsCaption: string;
}

const isFilterAction = (object: FilterAction): boolean => {
	return (
		object.key !== undefined &&
		object.onClick !== undefined &&
		object.name !== undefined
	);
};

export const FilterActionsPopover: React.FC<FilterActionsPopoverProps> = ({
	filterActions,
	filterActionsCaption
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleClickFilter = () => {
		setIsOpen(prevIsOpen => !prevIsOpen);
	};

	const hideListPopover = () => {
		setIsOpen(false);
	};

	return filterActions && filterActions.length ? (
		<div className={cn("kit-filter-actions-popover")}>
			<span
				className="kit-filter-actions-popover__title"
				onClick={handleClickFilter}
			>
				{filterActionsCaption}
			</span>
			<ul
				className={cn("kit-filter-actions-popover__list", {
					"kit-filter-actions-popover__list_hide": !isOpen
				})}
			>
				{filterActions.map((item, index) => {
					if (isFilterAction(item as FilterAction)) {
						const { key, onClick, name } = item as FilterAction;

						const handleClickItem = () => {
							hideListPopover();
							onClick();
						};

						return (
							<li
								className="kit-filter-actions-popover__item"
								key={key}
								onClick={handleClickItem}
							>
								{name}
							</li>
						);
					}
					return (
						<li
							className="kit-filter-actions-popover__item"
							key={index}
							onClick={hideListPopover}
						>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	) : null;
};
