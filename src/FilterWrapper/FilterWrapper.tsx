import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { InfoWrapper, FilterActionsPopover } from "./components";
import { StateProps, CallbackProps, SelectionStateType } from "./types";

import "./FilterWrapper.scss";

type Props = StateProps & CallbackProps;

export class FilterWrapper extends React.Component<Props> {
	public render() {
		const {
			children,
			statisticsValue,
			statisticsDescription,
			applyButtonCaption,
			clearButtonCaption,
			doesContainFilter,
			onApply,
			onClear,
			selectedCountDescription,
			selectedText,
			selectedCancelText,
			selectionState,
			onCancelSelection,
			isDataOutdated,
			filterActions,
			filterActionsCaption
		} = this.props;

		return (
			<div
				className={cn("kit-filter", {
					"kit-filter_short": !doesContainFilter,
					"kit-filter_with-filter-action":
						filterActions && filterActionsCaption
				})}
			>
				<div className="kit-filter__top-filter">
					<FilterActionsPopover
						filterActionsCaption={filterActionsCaption}
						filterActions={filterActions}
					/>
				</div>
				<ul className="kit-filter__all-wrap">{children}</ul>
				{doesContainFilter ? (
					<div className="kit-filter__wrap">
						<div className="kit-filter__wrap-filter">
							<button
								className="kit-filter__use-filter"
								onClick={onApply}
							>
								{applyButtonCaption}
							</button>
						</div>
						{selectionState !== SelectionStateType.None && (
							<div
								className={cn(
									"kit-filter__count-block",
									`kit-filter__count-block_${selectionState}`
								)}
							>
								<span className="kit-filter__count-block-text">
									{selectedText}:{" "}
									<b>{selectedCountDescription}</b>
								</span>
								<button
									className="kit-filter__clear-filter-btn"
									onClick={onCancelSelection}
								>
									<IconSvg type="close" />
									{selectedCancelText}
								</button>
							</div>
						)}
						<InfoWrapper
							isWarning={isDataOutdated}
							statisticsValue={statisticsValue}
							statisticsDescription={statisticsDescription}
						>
							<button
								className="kit-filter__clear-filter-btn"
								onClick={onClear}
							>
								<IconSvg type="close" />
								{clearButtonCaption}
							</button>
						</InfoWrapper>
					</div>
				) : (
					<InfoWrapper
						statisticsValue={statisticsValue}
						statisticsDescription={statisticsDescription}
					/>
				)}
			</div>
		);
	}
}
