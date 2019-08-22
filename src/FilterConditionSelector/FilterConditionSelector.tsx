import * as React from "react";
import { Input } from "../Input";

import "./FilterConditionSelector.scss";
// import cn from "classnames";

/*
"filtrationObjectCategory" -- значит, что пункт меню -- категория. Может содержать вложенные элементы, соответственно должен иметь контролл для раскрывания (треугольничек слева от пункта меню). Справа выводим заголовок из (name) и helpComponent.

"simpleFiltrationObject" -- значит, что пункт меню -- объект фильтрации без вложенных фильтров. Не содержит вложенных элементов, соответственно не должен иметь контролл для раскрывания. Справа выводится заголовок (name), editorComponent (через него будем редактировать) и helpComponent.

"filtrationObjectWithLinkedConditions" -- значит, что пункт меню -- объект фильтрации с вложенными фильтрами. Может содержать вложенные элементы, должен иметь контролл для раскрывания. При этом справа выводится заголовок (name), editorComponent (через него будем редактировать) и helpComponent.

*/
type ElementType =
	| "filtrationObjectCategory"
	| "simpleFiltrationObject"
	| "filtrationObjectWithLinkedConditions";

interface FiltrationObjectHierarchyElement {
	id: string; // для key наверное понадобится, идентификатор элемента меню
	name: string; // название пункта меню
	helpCaption: string; // заголовок хелпа
	type: ElementType; // тип пункта меню
	isSelected: boolean; // выбран ли этот пункт меню сейчас (отмечается синим цветом)
	hasChildren: boolean; // есть ли у этого пункта меню дочерние пункты
	getChildren: () => FiltrationObjectHierarchyElement[]; // метод получения дочерних пунктов меню
	isExpanded: boolean; // раскрыт ли этот пункт меню в дереве
	helpComponent: React.ReactNode; // компонент, который отрисовывает хелп к этому элементу меню
	editorComponent: React.ReactNode; // может отсутствовать. компонент для редактирования условия фильтрации. Сюда всегда передаётся FilterConditionSelector.
	onSelect: () => void; // при нажатии на пункт меню должен вызываться этот метод
	toggleExpand: () => void; // при клике по раскрывающему/сворачивающему треугольничку должен вызываться этот метод
}

interface FilterConditionSelectorProps {
	hierarchy: FiltrationObjectHierarchyElement[]; // вся иерархия, которую нужно отрисовать
	selectedElement: FiltrationObjectHierarchyElement; // текущий выбранный элемент (от него зависит, что рисуем справа). Может отсутствовать, тогда ничего не рисуем.
}

// interface FilterConditionEditorComponentProps {
// 	innerEditorComponent: React.ReactNode; // разные условия имеют разные компоненты. тут будут все контроллы для редактирования -- выпадалки и т.п.
// 	addFilterButtonCaption: string; // надпись на кнопке "добавить фильтр", для локализации
// 	isAddFilterButtonEnabled: boolean; // можно ли нажать на кнопку, серенькая ли она
// 	onAddFilterButtonClick: () => void; // при нажатии на кнопку "добавить фильтр"
// }
//
// class FilterConditionEditorComponent extends React.Component<FilterConditionEditorComponentProps>
// {
// 	// ...
// }

export class FilterConditionSelector extends React.Component<
	FilterConditionSelectorProps
> {
	public render() {
		const {
			// selectedElement,
			// helpCaption
		} = this.props;
		return (
			<div className="kit-filter-panel">
				<div className="kit-filter-panel__btn-wrap">
					<button
						className="kit-filter-panel__btn"
						// onClick={() =>
						// 	this.setState({
						// 		openModal: !openModal
						// 	})
						// }
					>
						Добавить фильтр
					</button>

					<button
						className="kit-filter-panel__btn kit-filter-panel__btn_small"
						// onClick={() =>
						// 	this.setState({
						// 		openModal: !openModal
						// 	})
						// }
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
							{/*{numberClients}*/} 1 256 783
						</span>
					</div>
				</div>

				{/*{openModal && openPage()}*/}

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
								{/*{selectedElement.helpCaption}*/}
								Группа
							</h2>
							{/*</div>*/}
							{/*{selectedComponent.editorComponent && (*/}
							{/*	<div className="editor-component">*/}
							{/*		{selectedComponent.editorComponent}*/}
							{/*	</div>*/}
							{/*)}*/}
							{/*<div className="help-component">*/}
							{/*	{selectedComponent.helpComponent}*/}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
