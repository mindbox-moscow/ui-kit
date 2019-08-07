import * as React from "react";

import "./Filter.scss";
import { Button } from "../Button";

interface Props {
	numberClients?: string;
}

export class Filter extends React.Component<Props> {
	public render() {
		const { children, numberClients } = this.props;
		return (
			<>
				<ul className="kit-filter">
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
			</>
		);
	}
}
