type ConditionState = "view" | "edit" | "shaded" | "linkedConditionEdit";

export interface StateProps {
	filterablePropertyName: string; // название объекта фильтрации. типа "Розничный заказ", "Покупка" или "Цена"
	filtrationMethodName?: string; // способ фильтрации. "есть такие" или "заполнен и". может отсутстовать.
	filtrationMethodParametersComponent?: React.ReactNode; // компонент настроек для способа фильтрации. тоже может
	// отсутствовать.
	linkedConditionComponent?: React.ReactNode; // компонент вложенного условия фильтрации. туда всегда будет
	// приходить FiltrationGroupComponent.
	state: ConditionState; // состояние условия фильтрации. то же самое, что в группах.
	editorComponent: React.ReactNode; // компонент редактирования условия фильтрации. точно такой же, как в FilterablePropertyHierarchyElement.editorComponent.
	helpComponent: React.ReactNode; // компонент хелпа. точно такой же, как в FilterablePropertyHierarchyElement.helpComponent.
	starred: boolean;
	withAlert: boolean;
}

export interface CallbackProps {
	onConditionStateToggle: () => void; // вызывается, когда мы кликаем в режиме просмотра на условие. если мы уже в режиме редактирования, то повторный клик его снимает.
	onConditionRemove: () => void; // вызывается при клике на корзинку
	toggleStar: () => void;
}
