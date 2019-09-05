import * as React from "react";
import { FilterConditionEditorButton } from "../FilterConditionEditorButton";

import "./FilterPanel.scss";

interface Props {
	clientsCount: string;
	onAddAndFilter: () => void;
	onAddOrFilter: () => void;
	hintText: string;
	addAndFilterBtnText: string;
	addOrFilterBtnText: string;
	clientsCountText: string;
}

export const FilterPanel = (props: Props) => {
	const {
		clientsCount,
		onAddAndFilter,
		onAddOrFilter,
		hintText,
		addAndFilterBtnText,
		addOrFilterBtnText,
		clientsCountText
	} = props;

	return (
		<div className="kit-filter-panel">
			<div className="kit-filter-panel__btn-wrap">
				<FilterConditionEditorButton
					toggleOpen={onAddAndFilter}
					label={addAndFilterBtnText}
					isOpened={true}
				>

				</FilterConditionEditorButton>

				<FilterConditionEditorButton
					toggleOpen={onAddOrFilter}
					className="kit-filter-panel__btn-second"
					label={addOrFilterBtnText}
					isOpened={true}
				>

				</FilterConditionEditorButton>
				<p className="kit-filter-panel__text">{hintText}</p>
			</div>
			<div className="kit-filter-panel__info-wrap">
				<div className="kit-filter-panel__info">
					{clientsCountText}:
					<span className="kit-filter-panel__clients">
						{clientsCount}
					</span>
				</div>
			</div>
		</div>
	);
};
