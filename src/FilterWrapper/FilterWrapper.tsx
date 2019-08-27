import * as React from "react";
import { Button } from "../Button";

import "./FilterWrapper.scss";

interface State {
	changeCondition: boolean;
}

interface Props {
	statisticsValue?: React.ReactNode;
	statisticsDescription: string;
	applyButtonCaption: string;
	clearButtonCaption: string;
	onApply: () => void;
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
			onApply
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
								Добавить фильтр
							</Button>
							<Button
								size={"small"}
								color={"gray"}
								className="kit-filter__btn"
							>
								Добавить группу
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
								Сменить тип связи «ИЛИ»
							</Button>
						</div>
					</ul>
					<div className="kit-filter__wrap">
						<div className="kit-filter__wrap-filter">
							<button className="kit-filter__use-filter" onClick={onApply}>
								{applyButtonCaption}
							</button>
						</div>
						<div className="kit-filter__info-wrap">
							<span className="kit-filter__clients">
								{statisticsDescription}:{" "}
								<span className="kit-filter__clients-number">
									{statisticsValue}
								</span>
							</span>
							<button
								className="kit-filter__clear-filter-btn"
								onClick={() => {
									console.log("clear filter");
								}}
							>
								{clearButtonCaption}
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}
