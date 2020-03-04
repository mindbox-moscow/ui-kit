import cn from "classnames";
import * as React from "react";
import { Fragment } from "react";
import { Button } from "../../../Button";
import { useClickOutside } from "../../../HOOKs";
import { FilterAction } from "../../types";

import "./FilterActions.scss";

interface FilterActionsProps {
	filterActions: Array<FilterAction | React.ReactNode>;
	filterActionsCaption: string;
}

const FilterActions: React.FC<FilterActionsProps> = ({
	filterActions,
	filterActionsCaption
}) => {
	const refActions = React.useRef(null);
	const [isOpen, setIsOpen] = React.useState(false);
	const filterNotImportant = filterActions.filter(
		(item: FilterAction) => !item.isImportant
	);
	const filterImportant = filterActions.filter(
		(item: FilterAction) => item.isImportant
	);

	const handleClickFilter = () => {
		setIsOpen(prevIsOpen => !prevIsOpen);
	};

	const hideListPopover = () => {
		setIsOpen(false);
	};

	useClickOutside(refActions, hideListPopover);

	return (
		<div className="kit-filter-actions">
			{filterImportant.map((item: FilterAction, index) => (
				<Fragment key={index}>{item.component}</Fragment>
			))}
			{filterNotImportant.length > 0 && (
				<div className="kit-filter-actions__popover">
					<Button
						onClick={handleClickFilter}
						size="xxs"
						color="gray"
						className="kit-filter-actions__title"
						type="button"
					>
						{filterActionsCaption}
					</Button>
					<ul
						className={cn("kit-filter-actions__list", {
							"kit-filter-actions__list_hide": !isOpen
						})}
					>
						{filterNotImportant.map((item: FilterAction, index) => (
							<li
								className="kit-filter-actions__list-item"
								key={index}
								onClick={hideListPopover}
							>
								{item.component}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export { FilterActions };
