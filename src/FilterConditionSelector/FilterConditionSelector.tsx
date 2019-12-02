import cn from "classnames";
import * as React from "react";
import { FilterDetails } from "../FilterDetails/FilterDetails";
import { FilterConditionSelectorContext } from "./FilterConditionSelectorContext";
import { IMenuModeMap, MenuMode, Props } from "./types";

import { Input } from "../Input";

import "./FilterConditionSelector.scss";

interface State {
	autoFocus: boolean;
}

enum ArrowKeysCodes {
	Up = 38,
	Right = 39,
	Down = 40,
	Enter = 13,
	Esc = 27
}

const HEADER_SEARCH_HEIGHT = 55;
// Height + PaddingTop + PaddingBottom
const MIN_HEIGHT_ELEMENT = 37;
const PADDING_PARENT = 16;

export class FilterConditionSelector extends React.Component<Props, State> {
	public searchRef = React.createRef<Input>();
	public listRef = React.createRef<HTMLUListElement>();

	public handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
		const {
			onPreviousSelected,
			onExpandCurrent,
			onNextSelected
		} = this.props;

		if (document.activeElement === this.listRef.current) {
			switch (e.keyCode) {
				case ArrowKeysCodes.Up:
					e.preventDefault();

					const focus = !onPreviousSelected();
					if (focus && this.searchRef.current) {
						this.searchRef.current.focus();
					}

					break;
				case ArrowKeysCodes.Esc:
					e.preventDefault();
					if (this.searchRef.current) {
						window.blur();
						this.searchRef.current.focus();
					}
					break;
				case ArrowKeysCodes.Right:
				case ArrowKeysCodes.Enter:
					e.preventDefault();
					onExpandCurrent();
					break;
				case ArrowKeysCodes.Down:
					e.preventDefault();
					if (this.searchRef.current) {
						this.searchRef.current.blur();
					}
					onNextSelected();
					break;
			}
		}
	};

	public handleKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { onNextSelected, onConditionStateToggle } = this.props;

		switch (e.keyCode) {
			case ArrowKeysCodes.Down:
			case ArrowKeysCodes.Enter:
				e.preventDefault();

				if (this.searchRef.current && this.listRef.current) {
					this.searchRef.current.blur();
					this.listRef.current.focus({ preventScroll: false });
				}

				onNextSelected();
				break;
			case ArrowKeysCodes.Esc:
				e.preventDefault();

				if (this.searchRef.current && this.listRef.current) {
					this.searchRef.current.blur();
					this.listRef.current.focus({ preventScroll: false });
				}

				onConditionStateToggle();
		}
	};

	public scrollHierarchyOnKeyDown = (selectElement: HTMLLIElement): void => {
		const refHierarchy = this.listRef.current;
		const selectOffsetTop = selectElement.offsetTop - HEADER_SEARCH_HEIGHT;

		if (refHierarchy) {
			if (selectOffsetTop <= refHierarchy.scrollTop) {
				refHierarchy.scrollTop = selectOffsetTop;
			} else if (
				refHierarchy.clientHeight -
					PADDING_PARENT +
					refHierarchy.scrollTop <
				selectOffsetTop + MIN_HEIGHT_ELEMENT
			) {
				refHierarchy.scrollTop =
					selectOffsetTop +
					MIN_HEIGHT_ELEMENT -
					refHierarchy.clientHeight;
			}
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
			notFoundMessage,
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
							value={searchTerm}
							type="search"
							placeholder="Название фильтра"
							onChange={handleSearchChange}
							onKeyDown={this.handleKeyDownSearch}
						/>
						<div className="kit-filter-condition-selector__filter-btn-block">
							{Object.keys(menuModeMap).map((mode: MenuMode) => {
								return (
									<div
										key={mode}
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
									</div>
								);
							})}
						</div>
					</div>
					<div className="kit-filter-condition-selector__hierarchy-wrap">
						<FilterConditionSelectorContext.Provider
							value={this.scrollHierarchyOnKeyDown}
						>
							<ul
								ref={this.listRef}
								className="kit-filter-condition-selector__hierarchy"
								tabIndex={0}
								onKeyDown={this.handleKeyDown}
							>
								{this.props.rootIds.length === 0 &&
								this.props.searchTerm !== ""
									? notFoundMessage
									: this.props.rootIds.map(childId => (
											<ChildItem
												key={childId}
												id={childId}
												pathFromRoot={[childId]}
											/>
									  ))}
							</ul>
						</FilterConditionSelectorContext.Provider>
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
