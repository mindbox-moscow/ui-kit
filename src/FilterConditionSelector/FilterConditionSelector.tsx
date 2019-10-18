import cn from "classnames";
import * as React from "react";
import { FilterDetails } from "../FilterDetails/FilterDetails";
import { IMenuModeMap, MenuMode, Props } from "./types";

import { Input } from "../Input";

import "./FilterConditionSelector.scss";

interface State {
	autoFocus: boolean;
}

enum ArrowKeysCodes {
	Up = 38,
	Right = 39,
	Down = 40
}

export class FilterConditionSelector extends React.Component<Props, State> {
	public searchRef = React.createRef<Input>();

	public componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown);
	}

	public componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown);
	}

	public handleKeyDown = (e: KeyboardEvent) => {
		const {
			onPreviousSelected,
			onExpandCurrent,
			onNextSelected
		} = this.props;

		switch (e.keyCode) {
			case ArrowKeysCodes.Up:
				e.preventDefault();
				const autoFocus = !onPreviousSelected();
				if (autoFocus && this.searchRef) {
					this.searchRef.current!.focus();
				}
				break;
			case ArrowKeysCodes.Right:
				e.preventDefault();
				onExpandCurrent();
				break;
			case ArrowKeysCodes.Down:
				e.preventDefault();
				onNextSelected();
				break;
		}
	};

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
			onConditionStateToggle
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
							ref={this.searchRef}
							autoFocus={true}
							noShadow={true}
							defaultValue={searchTerm}
							type="search"
							placeholder="Название фильтра"
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
					onClose={onConditionStateToggle}
					viewMode="menu"
				/>
			</div>
		);
	}
}
