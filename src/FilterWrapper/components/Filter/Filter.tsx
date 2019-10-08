import * as React from "react";
import { FilterConditionPopup } from "../../../FilterConditionPopup";
import { StateProps } from "../../types";

import "./Filter.scss";

type FilterProps = Pick<StateProps, "filterActions"> & {
	isOpen: boolean;
	handleOpenFilter: () => void;
};

export const Filter: React.FC<FilterProps> = ({
	filterActions,
	isOpen,
	handleOpenFilter
}) => {
	const refElement = React.createRef<HTMLElement>();

	return (
		<>
			{!!filterActions.length && (
				<div className="kit-filter-block-filter">
					<span
						ref={refElement}
						className="kit-filter-block-filter__title"
						onClick={handleOpenFilter}
					>
						Действия с фильтром
					</span>
					{isOpen && (
						<FilterConditionPopup parentRef={refElement}>
							<ul className="kit-filter-block-filter__list">
								{filterActions.map(({ key, onClick, name }) => (
									<li
										className="kit-filter-block-filter__item"
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
