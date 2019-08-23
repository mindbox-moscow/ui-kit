import * as React from "react";
import cn from "classnames";

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

const FilterConditionSelector = (props: FilterConditionSelectorProps) => {
	const {
		editorComponent,
		helpComponent,
		helpCaption,
		name,
		isSelected
	} = props.selectedElement;

	return (
		<div className="kit-filter-condition-selector">
			<ul className="kit-filter-condition-selector__hierarchy">
				<li
					className={cn(
						"kit-filter-condition-selector__hierarchy-item",
						{
							"kit-filter-condition-selector__hierarchy-item_selected": isSelected
						}
					)}
				>
					{name}
				</li>
			</ul>
			<div className="kit-filter-condition-selector__helper">
				<h2 className="kit-filter-condition-selector__help-caption-title">
					{helpCaption}
				</h2>
				{editorComponent && (
					<div className="kit-filter-condition-selector__editor-wrapper">
						{editorComponent}
					</div>
				)}
				{helpComponent && (
					<div className="kit-filter-condition-selector__help-wrapper-text">
						{helpComponent}
					</div>
				)}
			</div>
		</div>
	);
};

export { FilterConditionSelector };
