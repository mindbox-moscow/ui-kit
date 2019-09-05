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
		toggleExpand
	} = props.selectedElement;

	const renderItem = (
		item: FiltrationObjectHierarchyElement,
		index: number
	) => (
		<>
			<li
				key={index}
				className={cn("kit-filter-condition-selector__hierarchy-item", {
					"kit-filter-condition-selector__hierarchy-item_selected":
						item.isSelected,
					"kit-filter-condition-selector__hierarchy-simple-filter":
						item.type === "simpleFiltrationObject"
				})}
				onClick={toggleExpand}
			>
				<span
					className={cn(
						"kit-filter-condition-selector__hierarchy-name",
						{
							"kit-filter-condition-selector__hierarchy-name_expanded":
								item.isExpanded
						}
					)}
				>
					{item.name}
				</span>

				{item.hasChildren && (
					<ul className="kit-filter-condition-selector__hierarchy-children">
						{item.getChildren().map(renderItem)}
					</ul>
				)}
			</li>
		</>
	);

	return (
		<div className="kit-filter-condition-selector">
			<ul className="kit-filter-condition-selector__hierarchy">
				{props.hierarchy.map(renderItem)}
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
