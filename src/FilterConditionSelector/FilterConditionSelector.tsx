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
		// name,
		// isSelected,
		toggleExpand
		// hasChildren,
		// type
	} = props.selectedElement;

	console.log(
		props.hierarchy.map(item => <span key={item.id}>{item.name}</span>)
	);

	return (
		<div className="kit-filter-condition-selector">
			<div className="kit-filter-condition-selector__hierarchy">
				{props.hierarchy.map(item => (
					<>
						<div
							key={item.id}
							className={cn(
								"kit-filter-condition-selector__hierarchy-item",
								{
									"kit-filter-condition-selector__hierarchy-item_selected":
										item.isSelected
								}
							)}
							onClick={toggleExpand}
						>
							{item.name}
						</div>
						{item.hasChildren && (
							<div className="kit-filter-condition-selector__hierarchy-selected">
								<div
									className={cn(
										"kit-filter-condition-selector__hierarchy-selected-item"
									)}
								>
									<span
										className={cn(
											"kit-filter-condition-selector__hierarchy-name",
											{
												"kit-filter-condition-selector__hierarchy-name_filtration":
													item.type ===
													"simpleFiltrationObject",
												"kit-filter-condition-selector__hierarchy-name":
													item.type ===
													"filtrationObjectCategory"
											}
										)}
									>
										{item.name}
									</span>

									{item.getChildren() !== null &&
										item.getChildren().map(items => (
											<div
												className={cn(
													"kit-filter-condition-selector__hierarchy-selected-item",
													{
														"kit-filter-condition-selector__hierarchy-selected-item_filtration":
															items.type ===
															"simpleFiltrationObject",
														"kit-filter-condition-selector__hierarchy-selected-item":
															items.type ===
															"filtrationObjectCategory"
													}
												)}
											>
												<span
													className={cn(
														"kit-filter-condition-selector__hierarchy-name",
														{
															"kit-filter-condition-selector__hierarchy-name_filtration":
																items.type ===
																"simpleFiltrationObject",
															"kit-filter-condition-selector__hierarchy-name":
																items.type ===
																"filtrationObjectCategory"
														}
													)}
												>
													{items.name}

													{items.getChildren() !==
														null &&
														items
															.getChildren()
															.map(it => (
																<div
																	className={cn(
																		"kit-filter-condition-selector__hierarchy-selected-item",
																		{
																			"kit-filter-condition-selector__hierarchy-selected-item_filtration":
																				it.type ===
																				"simpleFiltrationObject",
																			"kit-filter-condition-selector__hierarchy-selected-item":
																				it.type ===
																				"filtrationObjectCategory"
																		}
																	)}
																>
																	<span
																		className={cn(
																			"kit-filter-condition-selector__hierarchy-name",
																			{
																				"kit-filter-condition-selector__hierarchy-name_filtration":
																					it.type ===
																					"simpleFiltrationObject",
																				"kit-filter-condition-selector__hierarchy-name":
																					items.type ===
																					"filtrationObjectCategory"
																			}
																		)}
																	>
																		{
																			it.name
																		}
																	</span>
																</div>
															))}
												</span>
											</div>
										))}
								</div>
							</div>
						)}
					</>
				))}
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
