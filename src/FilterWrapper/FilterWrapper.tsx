import * as React from "react";

import "./FilterWrapper.scss";
import { Button } from "../Button";

interface State {
	changeCondition: boolean;
}

interface Props {
	numberClients?: string;
}

export class FilterWrapper extends React.Component<Props, State> {
	public state = {
		changeCondition: false
	};

	public render() {
		const { children, numberClients } = this.props;

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
									changeCondition: !this
										.state
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
						<button className="kit-filter__use-filter">
							Применить фильтр
						</button>
					</div>
					<div className="kit-filter__info-wrap">
						<span className="kit-filter__clients">
							Потребителей найдено:{" "}
							<span className="kit-filter__clients-number">
								{numberClients}
							</span>
						</span>
						<button
							className="kit-filter__clear-filter-btn"
							onClick={() => {
								console.log("clear filter");
							}}
						>
							Сбросить фильтр
						</button>
					</div>
				</div>
				</div>
			</>
		);
	}
}
