import * as React from "react";
import { OverflowVisibleContainer } from "../../../OverflowVisibleContainer";
import { FilterAction } from "../../types";

import "./FilterActionsPopover.scss";

interface FilterActionsPopoverProps {
	filterActions: FilterAction[];
	filterActionsCaption: string;
}

interface State {
	isOpen: boolean;
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

	public render() {
		const { filterActions, filterActionsCaption } = this.props;

		const { isOpen } = this.state;

		return !!filterActions.length ? (
			<div className="kit-filter-actions-popover">
				<span
					ref={this.refElement}
					className="kit-filter-actions-popover__title"
					onClick={this.handleClickFilter}
				>
					{filterActionsCaption}
				</span>
				{isOpen && (
					<OverflowVisibleContainer parentRef={this.refElement}>
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
					</OverflowVisibleContainer>
				)}
			</div>
		) : null;
	}
}
