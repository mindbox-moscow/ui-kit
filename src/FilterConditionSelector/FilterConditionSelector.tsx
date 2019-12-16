import {
	BodyScrollOptions,
	disableBodyScroll,
	enableBodyScroll
} from "body-scroll-lock";
import cn from "classnames";
import * as React from "react";
import { FilterDetails } from "../FilterDetails/FilterDetails";
import { FilterConditionSelectorContext } from "./FilterConditionSelectorContext";
import { IMenuModeMap, MenuMode, Props } from "./types";

import { Input } from "../Input";

import { withOutsideClick, WithOutsideClickProps } from "../HOCs";
import "./FilterConditionSelector.scss";

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

const options: BodyScrollOptions = {
	reserveScrollBarGap: true
};

const FilterConditionSelector: React.FC<Props & WithOutsideClickProps> = ({
	childRenderer,
	onModeChanged,
	onSearchTermChange,
	filterLabel,
	recentLabel,
	savedLabel,
	examplesLabel,
	searchTerm,
	menuMode,
	rootIds,
	notFoundMessage,
	helpCaption,
	helpComponent,
	editorComponent,
	onConditionStateToggle,
	onNextSelected,
	onPreviousSelected,
	onExpandCurrent,
	setOutsideClickRef
}) => {
	const searchRef = React.createRef<Input>();
	const listRef = React.createRef<HTMLUListElement>();
	const mainRef = React.useRef<HTMLElement | null>(null);

	const handleScrollOn = () => {
		if (listRef.current) {
			disableBodyScroll(listRef.current, options);
		}
	};

	const handleScrollOff = () => {
		if (listRef.current) {
			enableBodyScroll(listRef.current);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
		if (document.activeElement === listRef.current) {
			switch (e.keyCode) {
				case ArrowKeysCodes.Up:
					e.preventDefault();

					const focus = !onPreviousSelected();
					if (focus && searchRef.current) {
						searchRef.current.focus();
					}

					break;
				case ArrowKeysCodes.Esc:
					e.preventDefault();
					if (searchRef.current) {
						window.blur();
						searchRef.current.focus();
					}
					break;
				case ArrowKeysCodes.Right:
				case ArrowKeysCodes.Enter:
					e.preventDefault();
					onExpandCurrent();
					break;
				case ArrowKeysCodes.Down:
					e.preventDefault();
					if (searchRef.current) {
						searchRef.current.blur();
					}
					onNextSelected();
					break;
			}
		}
	};

	const handleKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
		switch (e.keyCode) {
			case ArrowKeysCodes.Down:
			case ArrowKeysCodes.Enter:
				e.preventDefault();

				if (searchRef.current && listRef.current) {
					searchRef.current.blur();
					listRef.current.focus({ preventScroll: true });
				}

				onNextSelected();
				break;
			case ArrowKeysCodes.Esc:
				e.preventDefault();

				if (searchRef.current && listRef.current) {
					searchRef.current.blur();
					listRef.current.focus({ preventScroll: true });
				}

				onConditionStateToggle();
		}
	};

	const scrollHierarchyOnKeyDown = (selectElement: HTMLLIElement): void => {
		const refHierarchy = listRef.current;
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

	const ChildItem = childRenderer;

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

	const setRef = (el: HTMLDivElement) => {
		mainRef.current = el;

		if (setOutsideClickRef) {
			setOutsideClickRef(el);
		}
	};

	return (
		<div ref={setRef} className="kit-filter-condition-selector">
			<div className="kit-filter-condition-selector__wrap">
				<div className="kit-filter-condition-selector__filter-block">
					<Input
						ref={searchRef}
						autoFocus={true}
						noShadow={true}
						value={searchTerm}
						type="search"
						placeholder="Название фильтра"
						onChange={handleSearchChange}
						onKeyDown={handleKeyDownSearch}
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
						value={scrollHierarchyOnKeyDown}
					>
						<ul
							ref={listRef}
							className="kit-filter-condition-selector__hierarchy"
							tabIndex={0}
							onKeyDown={handleKeyDown}
							onMouseEnter={handleScrollOn}
							onMouseLeave={handleScrollOff}
						>
							{rootIds.length === 0 && searchTerm !== ""
								? notFoundMessage
								: rootIds.map(childId => (
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
};

const FilterConditionSelectorWithOutsideClick = withOutsideClick(
	FilterConditionSelector
);
export { FilterConditionSelectorWithOutsideClick as FilterConditionSelector };
