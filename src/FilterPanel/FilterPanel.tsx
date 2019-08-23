import * as React from "react";
import { FilterConditionEditorButton } from "../FilterConditionEditorButton";

import "./FilterPanel.scss";

interface Props {
	numberClients: string;
}

export class FilterPanel extends React.PureComponent<Props> {
	public state = {
		openModal: false
	};

	public render() {
		const { numberClients } = this.props;
		return (
			<div className="kit-filter-panel">
				<div className="kit-filter-panel__btn-wrap">
					<FilterConditionEditorButton
						isOpened={true}
						toggleOpen={() => null}
					>
						Добавить фильтр
					</FilterConditionEditorButton>

					<FilterConditionEditorButton
						isOpened={true}
						toggleOpen={() => null}
						small={true}
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
