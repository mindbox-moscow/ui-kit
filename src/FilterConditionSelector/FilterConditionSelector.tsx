import * as React from "react";
import { Input } from "../Input";

import "./FilterConditionSelector.scss";


type ElementType =
	| "filtrationObjectCategory"
	| "simpleFiltrationObject"
	| "filtrationObjectWithLinkedConditions";

interface FiltrationObjectHierarchyElement {
	id: string;
	name: string;
	helpCaption: string;
	type: ElementType;
	isSelected: boolean;
	hasChildren: boolean;
	getChildren: () => FiltrationObjectHierarchyElement[];
	isExpanded: boolean;
	helpComponent: React.ReactNode;
	editorComponent: React.ReactNode;
	onSelect: () => void;
	toggleExpand: () => void;
}

interface FilterConditionSelectorProps {
	hierarchy: FiltrationObjectHierarchyElement[];
	selectedElement: FiltrationObjectHierarchyElement;
}

export class FilterConditionSelector extends React.Component<
	FilterConditionSelectorProps
> {
	public render() {
		return (
			<div className="kit-filter-panel">
				<div className="kit-filter-panel__btn-wrap">
					<button
						className="kit-filter-panel__btn"
					>
						Добавить фильтр
					</button>

					<button
						className="kit-filter-panel__btn kit-filter-panel__btn_small"
					>
						ИЛИ
					</button>
					<p className="kit-filter-panel__text">
						Добавьте фильтр, чтобы создать выборку клиентов
					</p>
				</div>
				<div className="kit-filter-panel__info-wrap">
					<div className="kit-filter-panel__info">
						Всего клиентов:
						<span className="kit-filter-panel__clients">
							 1 256 783
						</span>
					</div>
				</div>

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
								<a
									href=""
									className="kit-filter-window__filter-btn"
								>
									Все фильтры
								</a>
								<a
									href=""
									className="kit-filter-window__filter-btn"
								>
									Недавние
								</a>
								<a
									href=""
									className="kit-filter-window__filter-btn"
								>
									Сохранённые
								</a>
							</div>
						</div>
					</div>
					<div className="kit-filter-window__wrap  kit-filter-window__wrap_second">
						<div className="kit-filter-window__wrapper">
							<h2 className="kit-filter-window__help-caption-title">

							</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
