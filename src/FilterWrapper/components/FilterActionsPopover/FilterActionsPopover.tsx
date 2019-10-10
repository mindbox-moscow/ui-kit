import * as React from "react";
import { FilterConditionPopup } from "../../../FilterConditionPopup";
import { StateProps } from "../../types";

import "./FilterActionsPopover.scss";

type FilterProps = Pick<
	StateProps,
	"filterActions" | "filterActionsCaption"
> & {
	isOpen: boolean;
	handleOpenFilter: () => void;
};

export const FilterActionsPopover: React.FC<FilterProps> = ({
	filterActions,
	filterActionsCaption,
	isOpen,
	handleOpenFilter
}) => {
	const refElement = React.createRef<HTMLElement>();

	return (
		<>
			{!!filterActions.length && (
				<div className="kit-filter-actions-popover">
					<span
						ref={refElement}
						className="kit-filter-actions-popover__title"
						onClick={handleOpenFilter}
					>
						{filterActionsCaption}
					</span>
					{isOpen && (
						<FilterConditionPopup parentRef={refElement}>
							<ul className="kit-filter-actions-popover__list">
								{filterActions.map(({ key, onClick, name }) => (
									<li
										className="kit-filter-actions-popover__item"
										key={key}
										onClick={onClick}
									>
										{name}
									</li>
								))}
							</ul>
						</FilterConditionPopup>
					)}
				</div>
			)}
		</>
	);
};
