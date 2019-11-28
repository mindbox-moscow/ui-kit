import cn from "classnames";
import * as React from "react";
import { FilterAction } from "../../types";

import "./FilterActionsPopover.scss";

import { IsntNeutralZoneMarker } from "../../../WindowClickListener";

interface FilterActionsPopoverProps {
	filterActions: Array<FilterAction | any>;
	filterActionsCaption: string;
}

const isFilterAction = (object: any): boolean => {
	const filterAction = object as FilterAction;
	return (
		filterAction.key !== undefined &&
		filterAction.onClick !== undefined &&
		filterAction.name !== undefined
	);
};

export const FilterActionsPopover: React.FC<FilterActionsPopoverProps> = ({
	filterActions,
	filterActionsCaption
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleClickFilter = () => {
		setIsOpen(!isOpen);
	};

	const hideListPopover = () => {
		setIsOpen(false);
	};

	return filterActions && filterActions.length ? (
		<div
			className={cn("kit-filter-actions-popover", IsntNeutralZoneMarker)}
		>
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
					if (isFilterAction(item)) {
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
							key={`kit-filter-actions-popover__item-key-${index}`}
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
