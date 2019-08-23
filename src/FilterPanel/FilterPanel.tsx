import * as React from "react";
import { FilterConditionEditorButton } from "../FilterConditionEditorButton/FilterConditionEditorButton";

export class FilterPanel extends React.PureComponent {
	public state = {
		openModal: false
	};

	public render() {
		const { numberClients } = this.props;
		return (
			<div className="kit-filter-panel">
				<div className="kit-filter-panel__btn-wrap">
					<FilterConditionEditorButton isOpened={true} toggleOpen={() => null}
						className="kit-filter-panel__btn"
					>
						Добавить фильтр
					</FilterConditionEditorButton>

					<FilterConditionEditorButton isOpened={true} toggleOpen={() => null}
						className="kit-filter-panel__btn kit-filter-panel__btn_small"
					>
						ИЛИ
					</FilterConditionEditorButton>
					<p className="kit-filter-panel__text">
						Добавьте фильтр, чтобы создать выборку клиентов
					</p>
				</div>
				<div className="kit-filter-panel__info-wrap">
					<div className="kit-filter-panel__info">
						Всего клиентов:
						<span className="kit-filter-panel__clients">
							{numberClients}
						</span>
					</div>
				</div>
			</div>
		);
	}
}
