import * as React from "react";

import "./FilterConditionEditorComponent.scss";
// import cn from "classnames";


/*
"filtrationObjectCategory" -- значит, что пункт меню -- категория. Может содержать вложенные элементы, соответственно должен иметь контролл для раскрывания (треугольничек слева от пункта меню). Справа выводим заголовок из (name) и helpComponent.

"simpleFiltrationObject" -- значит, что пункт меню -- объект фильтрации без вложенных фильтров. Не содержит вложенных элементов, соответственно не должен иметь контролл для раскрывания. Справа выводится заголовок (name), editorComponent (через него будем редактировать) и helpComponent.

"filtrationObjectWithLinkedConditions" -- значит, что пункт меню -- объект фильтрации с вложенными фильтрами. Может содержать вложенные элементы, должен иметь контролл для раскрывания. При этом справа выводится заголовок (name), editorComponent (через него будем редактировать) и helpComponent.

*/
type ElementType = "filtrationObjectCategory" | "simpleFiltrationObject" | "filtrationObjectWithLinkedConditions";

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
	editorComponent: React.ReactNode; // может отсутствовать. компонент для редактирования условия фильтрации. Сюда всегда передаётся FilterConditionEditorComponent.
	onSelect: () => void; // при нажатии на пункт меню должен вызываться этот метод
	toggleExpand: () => void; // при клике по раскрывающему/сворачивающему треугольничку должен вызываться этот метод
}

interface FilterConditionSelectorProps {
	hierarchy: FiltrationObjectHierarchyElement[]; // вся иерархия, которую нужно отрисовать
	selectedElement: FiltrationObjectHierarchyElement; // текущий выбранный элемент (от него зависит, что рисуем справа). Может отсутствовать, тогда ничего не рисуем.
}

export class FilterConditionSelector extends React.Component<FilterConditionSelectorProps> {
    public render() {
        return (
            <div className="">
				1111
            </div>
        );
    }
}
