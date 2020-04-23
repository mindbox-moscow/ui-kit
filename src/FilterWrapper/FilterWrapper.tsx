import cn from "classnames";
import { useState } from "react";
import * as React from "react";
import { neutralZoneClass } from "../HOOKs";
import { useDebouncedWindowSize } from "../HOOKs";
import { IconSvg } from "../IconSvg";
import { FilterActions, InfoWrapper } from "./components";
import {
	CallbackProps,
	ScrollState,
	SelectionStateType,
	StateProps
} from "./types";

import { Button } from "../Button";
import { OverflowVisibleFixedContext } from "../OverflowVisibleContainer/OverflowVisibleContext";
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
	canRedo,
	canUndo,
	onUndo,
	onRedo,
	onApply,
	onClear,
	isDataOutdated,
	filterActions,
	filterActionsCaption,
	scrollState = ScrollState.Full,
	buttonUpCaption,
	shouldShowStatistics = true,
	showApplyButton = false,
	headInformation
}) => {
	const [updateBrackets, setUpdateBrackets] = useState(0);
	const refFilterWrapper = React.createRef<HTMLDivElement>();
	const debouncedWindowSize = useDebouncedWindowSize();
	const hasFilterActions = filterActions && filterActions.length > 0;
	const hasHeadInformation = doesContainFilter && headInformation;

	React.useEffect(
		() => {
			rerenderBrackets();
		},
		[debouncedWindowSize]
	);

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
			behavior: "smooth",
			top: 0
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
			className={neutralZoneClass}
		>
			{buttonUpCaption}
		</Button>
	);

	const contextValue = {
		rerenderBrackets,
		scrollState,
		updateBrackets
	};

	return (
		<>
			<OverflowVisibleFixedContext.Provider value={scrollState === ScrollState.Minified}>
				<FilterWrapperContext.Provider value={contextValue}>
					<div
						ref={refFilterWrapper}
						className={cn("kit-filter", {
							"kit-filter_short":
								!doesContainFilter &&
								(filterActions == null ||
									filterActions.length === 0)
						})}
					>
						{doesContainFilter && (
							<div className="kit-filter__top-filter">
								{hasHeadInformation ? (<div className="kit-filter__top-info">
									{headInformation}
								</div>) : <div />}
								<div className="kit-filter__top-right">
									{hasFilterActions && (
										<FilterActions
											filterActions={filterActions}
											filterActionsCaption={filterActionsCaption}
										/>
									)}
									<Button
										onClick={onUndo}
										size="xxs"
										color="gray"
										disabled={!canUndo}
										type="button"
									>
										<IconSvg type="circle-arrow" className="kit-filter__undo" />
									</Button>
									<Button
										onClick={onRedo}
										size="xxs"
										color="gray"
										disabled={!canRedo}
										type="button"
									>
										<IconSvg type="circle-arrow" className="kit-filter__redo" />
									</Button>
								</div>
							</div>
						)}
						<ul className="kit-filter__all-wrap">
							{!doesContainFilter &&
								scrollState === ScrollState.Minified ? (
									<ButtonUp />
								) : (
									children
								)}
						</ul>
						{doesContainFilter ? (
							<div className="kit-filter__wrap">
								<div className="kit-filter__wrap-filter">
									{showApplyButton ? (
										scrollState !== ScrollState.Minified ? (
											<button
												className="kit-filter__use-filter"
												onClick={onApply}
												type="button"
											>
												{applyButtonCaption}
											</button>
										) : (
												<ButtonUp />
											)
									) : null}
								</div>
								{selectionState !== SelectionStateType.None &&
									countSelectedItems()}
								<InfoWrapper
									isWarning={isDataOutdated}
									statisticsValue={statisticsValue}
									statisticsDescription={statisticsDescription}
									shouldShowStatistics={shouldShowStatistics}
								>
									<button
										className="kit-filter__clear-filter-btn"
										onClick={onClear}
										type="button"
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
										shouldShowStatistics={shouldShowStatistics}
									/>
								</div>
							)}
					</div>
				</FilterWrapperContext.Provider>
			</OverflowVisibleFixedContext.Provider>
		</>
	);
};
