import * as React from "react";
import { Button } from "../Button";

import "./FilterWrapper.scss";

interface State {
	changeCondition: boolean;
}

interface Props {
	StatisticsValue?: React.ReactNode;
	StatisticsDescription: string;
	buttonTextFirst: string;
	buttonTextSecond: string;
	buttonTextThird: string;
	buttonTextFourth: string;
	buttonTextFives: string;
	onButtonFourClick: () => void;
}

export class FilterWrapper extends React.Component<Props, State> {
	public state = {
		changeCondition: false
	};

	public render() {
		const {
			children,
			StatisticsValue,
			StatisticsDescription,
			buttonTextFirst,
			buttonTextSecond,
			buttonTextThird,
			buttonTextFourth,
			buttonTextFives,
			onButtonFourClick
		} = this.props;

		return (
			<>
				<div className="kit-filter">
					<ul className="kit-filter__all-wrap">
						{children}

						<div className="kit-filter__btn-wrap">
							<Button
								size={"small"}
								color={"gray"}
								className="kit-filter__btn"
							>
								{buttonTextFirst}
							</Button>
							<Button
								size={"small"}
								color={"gray"}
								className="kit-filter__btn"
							>
								{buttonTextSecond}
							</Button>
							<Button
								size={"small"}
								color={"gray"}
								className="kit-filter__btn"
								onClick={() => {
									this.setState({
										changeCondition: !this.state
											.changeCondition
									});
								}}
							>
								{buttonTextThird}
							</Button>
						</div>
					</ul>
					<div className="kit-filter__wrap">
						<div className="kit-filter__wrap-filter">
							<button className="kit-filter__use-filter" onClick={onButtonFourClick}>
								{buttonTextFourth}
							</button>
						</div>
						<div className="kit-filter__info-wrap">
							<span className="kit-filter__clients">
								{StatisticsDescription}:{" "}
								<span className="kit-filter__clients-number">
									{StatisticsValue}
								</span>
							</span>
							<button
								className="kit-filter__clear-filter-btn"
								onClick={() => {
									console.log("clear filter");
								}}
							>
								{buttonTextFives}
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}
