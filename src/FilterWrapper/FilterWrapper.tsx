import cn from "classnames";
import * as React from "react";
import { InfoWrapper } from "./components";

import "./FilterWrapper.scss";

interface State {
	changeCondition: boolean;
}

interface Props {
	statisticsValue?: React.ReactNode;
	statisticsDescription: string;
	applyButtonCaption: string;
	clearButtonCaption: string;
	doesContainFilter: boolean;
	onApply: () => void;
	onClear: () => void;
}

export class FilterWrapper extends React.Component<Props, State> {
	public state = {
		changeCondition: false
	};

	public render() {
		const {
			children,
			statisticsValue,
			statisticsDescription,
			applyButtonCaption,
			clearButtonCaption,
			doesContainFilter,
			onApply,
			onClear
		} = this.props;

		return (
			<>
				<div
					className={cn("kit-filter", {
						"kit-filter_short": !doesContainFilter
					})}
				>
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
							<InfoWrapper
								statisticsValue={statisticsValue}
								statisticsDescription={statisticsDescription}
							>
								<button
									className="kit-filter__clear-filter-btn"
									onClick={onClear}
								>
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
			</>
		);
	}
}
