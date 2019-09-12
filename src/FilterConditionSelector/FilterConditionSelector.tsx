import cn from "classnames";
import * as React from "react";

import { Input } from "../Input";

import "./FilterConditionSelector.scss";

type ElementType =
	| "filtrationObjectCategory"
	| "simpleFiltrationObject"
	| "filtrationObjectWithLinkedConditions";

enum MenuMode {
	Filter = "filter",
	Recent = "recent",
	Saved = "saved",
	Examples = "examples"
}

interface FiltrationObjectHierarchyElement {
	id: string;
	name: string;
	helpCaption: string;
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
	searchTerm: string;
	onSearchTermChange: (changedSearchTerm: string) => void;
	filterLabel: string;
	recentLabel: string;
	savedLabel: string;
	examplesLabel: string;
	onModeChanged: (selectedMenuMode: MenuMode) => void;
	menuMode: MenuMode;
	helpCaption: string;
	helpComponent: React.ReactNode;
	editorComponent: React.ReactNode;
}

type IMenuModeMap = { [key in MenuMode]: string };

export const FilterConditionSelector = (props: Props) => {
	const {
		onSearchTermChange,
		onModeChanged,
		filterLabel,
		recentLabel,
		savedLabel,
		examplesLabel,
		menuMode,
    editorComponent,
		helpComponent,
		helpCaption,
    searchTerm
	} = props;

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

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onSearchTermChange(e.target.value);
	};

	const handleMenuModeChange = (mode: MenuMode) => () => onModeChanged(mode);

	const menuModeMap: IMenuModeMap = {
		[MenuMode.Filter]: filterLabel,
		[MenuMode.Recent]: recentLabel,
		[MenuMode.Saved]: savedLabel,
		[MenuMode.Examples]: examplesLabel
	};

	return (
		<div className="kit-filter-condition-selector">
			<div className="kit-filter-condition-selector__wrap">
				<div className="kit-filter-condition-selector__filter-block">
					<Input
						noShadow={true}
						defaultValue={searchTerm}
						type="search"
						placeholder="Название акции, группы или кампании"
						onChange={handleSearchChange}
					/>
					<div className="kit-filter-condition-selector__filter-btn-block">
						{Object.keys(menuModeMap).map((mode: MenuMode) => {
							return (
								<button
									key={mode}
									type="button"
									className={cn(
										"kit-filter-condition-selector__filter-btn",
										{
											"kit-filter-condition-selector__filter-btn_active":
												menuMode === mode
										}
									)}
									onClick={handleMenuModeChange(mode)}
								>
									{menuModeMap[mode]}
								</button>
							);
						})}
					</div>
				</div>

				<ul className="kit-filter-condition-selector__hierarchy">
					{props.hierarchy.map(renderItem)}
				</ul>
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
