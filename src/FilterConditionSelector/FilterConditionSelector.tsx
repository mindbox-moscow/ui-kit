import cn from "classnames";
import * as React from "react";
import FilterDetails from "../FilterDetails/FilterDetails";

import { Input } from "../Input";

import "./FilterConditionSelector.scss";

enum MenuMode {
	Filter = "filter",
	Recent = "recent",
	Saved = "saved",
	Examples = "examples"
}

interface Props {
	childRenderer: React.ComponentType<{ id: string }>;
	searchTerm: string;
	rootIds: string[];
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
		searchTerm,
		editorComponent,
		// helpComponent,
		helpCaption
	} = props;

	const ChildItem = props.childRenderer;

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
					{props.rootIds.map(childId => (
						<ChildItem key={childId} id={childId} />
					))}
				</ul>
			</div>

			<FilterDetails
				helpCaption={helpCaption}
				helpComponent={helpCaption}
				editorComponent={editorComponent}
				starred={true}
				toggleStar={() => {console.log('toogle details')}}
				viewMode="menu"
			/>
		</div>
	);
};
