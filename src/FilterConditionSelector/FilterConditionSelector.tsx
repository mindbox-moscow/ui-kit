import * as React from "react";

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

				<div className="kit-filter-window">
					<div className="kit-filter-window__wrap kit-filter-window__wrap_first">

					</div>
					<div className="kit-filter-window__wrap  kit-filter-window__wrap_second">
						<div className="kit-filter-window__wrapper">
							<h2 className="kit-filter-window__help-caption-title">

							</h2>
							<div className="kit-filter-window__editor-wrapper">
								область редактирования
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
