import cn from "classnames";
import { useState } from "react";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { FilterActionsPopover, InfoWrapper } from "./components";
import { CallbackProps, SelectionStateType, StateProps } from "./types";
import { neitralZoneClass } from "../HOCs";

import { Button } from "../Button";
import "./FilterWrapper.scss";
import { FilterWrapperContext } from "./FilterWrapperContext";

type Props = StateProps & CallbackProps;

export const FilterWrapper: React.FC<Props> = ({
	selectionState,
	selectedText,
	selectedCountDescription,
	onCancelSelection,
	selectedCancelText,
	children,
	statisticsValue,
	statisticsDescription,
	applyButtonCaption,
	clearButtonCaption,
	doesContainFilter,
	onApply,
	onClear,
	isDataOutdated,
	filterActions,
	filterActionsCaption,
	scrollState = "full",
	buttonUpCaption,
	shouldShowStatistics
}) => {
	const [updateBrackets, setUpdateBrackets] = useState(0);
	const refFilterWrapper = React.createRef<HTMLDivElement>();

	const countSelectedItems = () => {
		return (
			<div
				className={cn(
					"kit-filter__count-block",
					`kit-filter__count-block_${selectionState}`
				)}
			>
				<span className="kit-filter__count-block-text">
					{selectedText}: <b>{selectedCountDescription}</b>
				</span>
				<button
					className="kit-filter__clear-filter-btn"
					onClick={onCancelSelection}
				>
					<IconSvg type="close" />
					{selectedCancelText}
				</button>
			</div>
		);
	};

	const handleScrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	const rerenderBrackets = () => {
		setUpdateBrackets(Math.random());
	};

	const ButtonUp = () => (
		<Button
			onClick={handleScrollUp}
			size="small"
			color="silver"
			hasBorder={true}
			className={neitralZoneClass}
		>
			{buttonUpCaption}
		</Button>
	);

	const contextValue = {
		updateBrackets,
		rerenderBrackets,
		scrollState
	};

	return (
		<>
			<FilterWrapperContext.Provider value={contextValue}>
				<div
					ref={refFilterWrapper}
					className={cn("kit-filter", {
						"kit-filter_short": !doesContainFilter,
						"kit-filter_with-filter-action":
							filterActions && filterActions.length
					})}
				>
					<div className="kit-filter__top-filter">
						<FilterActionsPopover
							filterActionsCaption={filterActionsCaption}
							filterActions={filterActions}
						/>
					</div>
					<ul className="kit-filter__all-wrap">
						{!doesContainFilter && scrollState === "minfied" ? (
							<ButtonUp />
						) : (
							children
						)}
					</ul>
					{doesContainFilter ? (
						<div className="kit-filter__wrap">
							<div className="kit-filter__wrap-filter">
								{scrollState !== "minfied" ? (
									<button
										className="kit-filter__use-filter"
										onClick={onApply}
									>
										{applyButtonCaption}
									</button>
								) : (
									<ButtonUp />
								)}
							</div>
							{selectionState !== SelectionStateType.None &&
								countSelectedItems()}
							<InfoWrapper
								isWarning={isDataOutdated}
								statisticsValue={statisticsValue}
								statisticsDescription={statisticsDescription}
								shouldShowStatistics={
									shouldShowStatistics == undefined
										? true
										: shouldShowStatistics
								}
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
						<div className="kit-filter__short-wrap-filter">
							{selectionState !== SelectionStateType.None &&
								countSelectedItems()}
							<InfoWrapper
								statisticsValue={statisticsValue}
								statisticsDescription={statisticsDescription}
								shouldShowStatistics={
									shouldShowStatistics == undefined
										? true
										: shouldShowStatistics
								}
							/>
						</div>
					)}
				</div>
			</FilterWrapperContext.Provider>
		</>
	);
};
