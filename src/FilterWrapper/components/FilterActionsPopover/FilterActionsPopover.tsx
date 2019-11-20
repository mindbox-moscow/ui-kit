import * as React from "react";
import { OverflowVisibleContainer } from "../../../OverflowVisibleContainer";
import { FilterAction } from "../../types";

import "./FilterActionsPopover.scss";

interface FilterActionsPopoverProps {
	filterActionItems: (FilterAction | any)[];
	filterActionsCaption: string;
}

interface State {
	isOpen: boolean;
}

const isFilterAction = (object: any): boolean => {
	const filterAction = object as FilterAction;
	return filterAction["key"] !== undefined
		&& filterAction["onClick"] !== undefined
		&& filterAction["name"] !== undefined;
}

export class FilterActionsPopover extends React.Component<
	FilterActionsPopoverProps,
	State
	> {
	public refElement = React.createRef<HTMLElement>();

	public state = {
		isOpen: false
	};

	public handleClickFilter = () => {
		this.setState(state => ({ isOpen: !state.isOpen }));
	};

	public hideList = () => {
		console.warn("hideList")
		this.setState(state => ({ ...state, isOpen: false }));
	}

	public getClickOnItem = (callback: () => void) => {
		const that = this;
		return () => {
			console.warn("clickOnItem.callback")
			that.hideList();
			callback();
		}
	}

	public render() {
		const { filterActionItems, filterActionsCaption } = this.props;

		const { isOpen } = this.state;

		return filterActionItems && filterActionItems.length ? (
			<div className="kit-filter-actions-popover">
				<span
					ref={this.refElement}
					className="kit-filter-actions-popover__title"
					onClick={this.handleClickFilter}
				>
					{filterActionsCaption}
				</span>
				{isOpen && (
					<OverflowVisibleContainer parentRef={this.refElement} onNeutralZoneClick={this.hideList}>
						<ul className="kit-filter-actions-popover__list">
							{/* {filterActions.map(({ key, onClick, name }) => (
								<li
									className="kit-filter-actions-popover__item"
									key={key}
									onClick={onClick}
								>
									{name}
								</li>
							))} */}
							{
								filterActionItems.map((item, index) => {
									if (isFilterAction(item)) {
										const { key, onClick, name } = item as FilterAction;
										return (
											<li
												className="kit-filter-actions-popover__item"
												key={key}
												onClick={() => {
													this.hideList();
													onClick()
												}}
											>
												{name}
											</li>
										);
									}
									return (
										<li
											className="kit-filter-actions-popover__item"
											key={`kit-filter-actions-popover__item-key-${index}`}
											onClick={this.hideList}
										>
											{item}
										</li>
									);
								})
							}
						</ul>
					</OverflowVisibleContainer>
				)}
			</div>
		) : null;
	}
}
