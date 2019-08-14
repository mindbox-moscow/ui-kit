import * as React from "react";
// import cn from "classnames";
import { Input } from "../Input";

import "./FilterPanel.scss";

interface State {
	openModal?: boolean;
}

interface Props {
	numberClients?: string | null;
}

export class FilterPanel extends React.PureComponent<Props, State> {
	public state = {
		openModal: false
	};

	public render() {
		const { numberClients } = this.props;
		const { openModal } = this.state;
		return (
			<div className="kit-filter-panel">
				<div className="kit-filter-panel__btn-wrap">
					<button
						className="kit-filter-panel__btn"
						onClick={() =>
							this.setState({
								openModal: !openModal
							})
						}
					>
						Добавить фильтр
					</button>

					<button
						className="kit-filter-panel__btn kit-filter-panel__btn_small"
						onClick={() =>
							this.setState({
								openModal: !openModal
							})
						}
					>
						ИЛИ
					</button>
					<p className="kit-filter-panel__text">Добавьте фильтр, чтобы создать выборку клиентов</p>
				</div>
				<div className="kit-filter-panel__info-wrap">
					<div className="kit-filter-panel__info">
						Всего клиентов:
						<span className="kit-filter-panel__clients">
							{numberClients}
						</span>
					</div>
				</div>

				{openModal && openPage()}
			</div>
		);
	}
}

function openPage() {
	return (
		<div className="kit-filter-window">
			<div className="kit-filter-window__wrap kit-filter-window__wrap_first">
				<div className="kit-filter-window__filter-block">
					Добавить фильтр
					<Input
						noShadow={true}
						defaultValue={""}
						type="search"
						placeholder="Название акции, группы или кампании"
					/>
					<div className="kit-filter-window__filter-btn-block">
						<a
							href=""
							className="kit-filter-window__filter-btn kit-filter-window__filter-btn_active"
						>
							Готовые шаблоны
						</a>
						<a href="" className="kit-filter-window__filter-btn">
							Все фильтры
						</a>
						<a href="" className="kit-filter-window__filter-btn">
							Недавние
						</a>
						<a href="" className="kit-filter-window__filter-btn">
							Сохранённые
						</a>
					</div>
				</div>
			</div>
			<div className="kit-filter-window__wrap  kit-filter-window__wrap_second">
				<div className="kit-filter-window__wrapper">Группа</div>
			</div>
		</div>
	);
}
