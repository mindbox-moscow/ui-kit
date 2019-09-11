import cn from "classnames";
import * as React from "react";

import "./FilterConditionSelector.scss";

export type ElementType =
	| "filtrationObjectCategory"
	| "simpleFiltrationObject"
	| "filtrationObjectWithLinkedConditions";

export interface FiltrationObjectHierarchyElement {
	id: string;
	name: string;
	type: ElementType;
	isSelected: boolean;
	hasChildren: boolean;
	getChildren: () => FiltrationObjectHierarchyElement[];
	isExpanded: boolean;
	onSelect: () => void;
	toggleExpand: () => void;
}

interface Props {
	hierarchy: FiltrationObjectHierarchyElement[];
	helpCaption: string;
	helpComponent: React.ReactNode;
	editorComponent: React.ReactNode;
}

export const FilterConditionSelector = (props: Props) => {
	const { editorComponent, helpComponent, helpCaption } = props;

	const renderItem = (
		item: FiltrationObjectHierarchyElement,
		index: number
	) => {
		const {
			isSelected,
			type,
			isExpanded,
			name,
			hasChildren,
			getChildren,
			onSelect,
			toggleExpand
		} = item;
		const isSimpleFiltrationObject = type === "simpleFiltrationObject";

		return (
			<li
				key={index}
				className={cn("kit-filter-condition-selector__hierarchy-item", {
					"kit-filter-condition-selector__hierarchy-item_expanded": isExpanded,
					"kit-filter-condition-selector__hierarchy-item_selected": isSelected,
					"kit-filter-condition-selector__hierarchy-simple-filter": isSimpleFiltrationObject
				})}
			>
				{!isSimpleFiltrationObject && (
					<button
						type="button"
						className="kit-filter-condition-selector__hierarchy-toggle"
						onClick={toggleExpand}
					/>
				)}
				<button
					type="button"
					className="kit-filter-condition-selector__hierarchy-name"
					onClick={onSelect}
				>
					{name}
				</button>

				{isExpanded && hasChildren && (
					<ul className="kit-filter-condition-selector__hierarchy-children">
						{getChildren().map(renderItem)}
					</ul>
				)}
			</li>
		);
	};

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
