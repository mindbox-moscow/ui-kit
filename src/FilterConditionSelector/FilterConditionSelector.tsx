import cn from "classnames";
import * as React from "react";
import { FilterDetails } from "../FilterDetails/FilterDetails";
import { Props, MenuMode, IMenuModeMap } from "./types";

import { Input } from "../Input";

import "./FilterConditionSelector.scss";

export class FilterConditionSelector extends React.Component<Props> {
	public render() {
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
			helpComponent,
			helpCaption,
			starred,
			toggleStar
		} = this.props;

		const ChildItem = this.props.childRenderer;

		const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			onSearchTermChange(e.target.value);
		};

		const handleMenuModeChange = (mode: MenuMode) => () =>
			onModeChanged(mode);

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
					<div className="kit-filter-condition-selector__hierarchy-wrap">
					<ul className="kit-filter-condition-selector__hierarchy">
						{this.props.rootIds.map(childId => (
							<ChildItem key={childId} id={childId} />
						))}
					</ul>
					</div>
				</div>

				<FilterDetails
					helpCaption={helpCaption}
					helpComponent={helpComponent}
					editorComponent={editorComponent}
					starred={starred}
					toggleStar={toggleStar}
					viewMode="menu"
				/>
			</div>
		);
	}
}
