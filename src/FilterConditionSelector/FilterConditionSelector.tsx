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
		isSelected,
		toggleExpand,
		hasChildren,
		type
	} = props.selectedElement;

	return (
		<div className="kit-filter-condition-selector">
			<div className="kit-filter-condition-selector__hierarchy">
				<div
					className={cn(
						"kit-filter-condition-selector__hierarchy-item",
						{
							"kit-filter-condition-selector__hierarchy-item_selected": isSelected
						}
					)}
					onClick={toggleExpand}
				>
					{name}
				</div>
				{hasChildren && (
					<div className="kit-filter-condition-selector__hierarchy-selected">
						<div
							className={cn(
								"kit-filter-condition-selector__hierarchy-selected-item",
								{
									"kit-filter-condition-selector__hierarchy-item_filtration":
										type === "simpleFiltrationObject"
								}
							)}
						>
							<span>{name}</span>
						</div>
					</div>
				)}
			</div>
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
