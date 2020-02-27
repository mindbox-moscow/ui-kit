import cn from "classnames";
import * as React from "react";
import { FilterDetails } from "../FilterDetails/FilterDetails";
import { KeysCodes } from "../utils/constants";
import {
	FilterConditionSelectorContext,
	IProps
} from "./FilterConditionSelectorContext";
import { IMenuModeMap, MenuMode, Props } from "./types";

import { Input } from "../Input";

import { withOutsideClick, WithOutsideClickProps } from "../HOCs";
import { useDebounce } from "../HOOKs";
import { BrowserList } from "../utils/constants";
import { checkBrowser } from "../utils/helpers";
import { ContextWrapper } from "./components";
import "./FilterConditionSelector.scss";
import { setNextFocus } from "./utils";

const FilterConditionSelector: React.FC<
	Props & WithOutsideClickProps
> = props => {
	const {
		childRenderer,
		onModeChanged,
		onSearchTermChange,
		filterLabel,
		recentLabel,
		savedLabel,
		examplesLabel,
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
	} = props;

	const searchRef = React.useRef<Input>(null);
	const listRef = React.useRef<HTMLUListElement>(null);
	const mainRef = React.useRef<HTMLElement | null>(null);
	const [searchTerm, setSearchTerm] = React.useState(props.searchTerm);
	const [
		treeFirstItem,
		setTreeFirstItem
	] = React.useState<HTMLDivElement | null>(null);
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	let markFirstItemTree: () => void;
	let unmarkFirstItemTree: () => void;
	let selectFirstItemTree: () => void;
	let topRect: number = 0;

	React.useEffect(
		() => {
			onSearchTermChange(debouncedSearchTerm);
		},
		[debouncedSearchTerm]
	);

	React.useEffect(
		() => {
			if (debouncedSearchTerm === "") {
				unmarkFirstItemTree();
			} else {
				markFirstItemTree();
			}
		},
		[treeFirstItem]
	);

	React.useEffect(() => {
		const body = document.body;
		const refSelector = mainRef.current;

		setAutoFocusSearchInput();

		if (refSelector) {
			const { top } = refSelector.getBoundingClientRect();
			topRect = top;

			if (body.clientHeight < refSelector.clientHeight + topRect) {
				body.style.height = `${body.clientHeight + topRect}px`;
			}
		}

		return () => {
			body.style.height = "";
		};
	}, []);

	const handleDisableBodyScroll = (e: React.WheelEvent) => {
		if (checkBrowser(BrowserList.Safari)) {
			e.preventDefault();

			const { deltaY } = e;
			const listTree = listRef.current;

			if (listTree) {
				const scroll = listTree.scrollTop;

				listTree.scrollTop = scroll + deltaY;
			}
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
		if (document.activeElement === listRef.current) {
			switch (e.keyCode) {
				case KeysCodes.ArrowUp:
					e.preventDefault();

					const focus = !onPreviousSelected();
					if (focus && searchRef.current) {
						searchRef.current.focus();
					}

					break;
				case KeysCodes.Esc:
					e.preventDefault();
					if (searchRef.current) {
						searchRef.current.focus();
					}
					break;
				case KeysCodes.ArrowRight:
				case KeysCodes.Enter:
					e.preventDefault();

					const selectedElement =
						valueContext.selectedElement || null;

					if (
						selectedElement &&
						(selectedElement.type ===
							"filterablePropertyCategory" ||
							selectedElement.type ===
								"filterablePropertyWithLinkedConditions") &&
						!selectedElement.isExpanded
					) {
						onExpandCurrent();
					} else {
						setNextFocus();
					}

					break;
				case KeysCodes.ArrowDown:
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
			case KeysCodes.ArrowDown:
				e.preventDefault();

				if (searchRef.current && listRef.current) {
					searchRef.current.blur();
					listRef.current.focus({ preventScroll: true });
				}

				unmarkFirstItemTree();
				onNextSelected();
				break;
			case KeysCodes.Enter:
				e.preventDefault();

				unmarkFirstItemTree();
				selectFirstItemTree();

				break;

			case KeysCodes.Esc:
				e.preventDefault();

				if (searchRef.current && listRef.current) {
					searchRef.current.blur();
					listRef.current.focus({ preventScroll: true });
				}

				onConditionStateToggle();
		}
	};

	const ChildItem = childRenderer;

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		unmarkFirstItemTree();
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

	const setAutoFocusSearchInput = () => {
		if (searchRef.current) {
			searchRef.current.focus();
		}
	};

	const getFirstItemTree = (
		onMouseEnter: () => void,
		onMouseLeave: () => void,
		onSelect: () => void,
		itemElement: React.RefObject<HTMLDivElement>
	) => {
		if (itemElement.current) {
			setTreeFirstItem(itemElement.current);
			markFirstItemTree = onMouseEnter;
			unmarkFirstItemTree = onMouseLeave;
			selectFirstItemTree = onSelect;
		}
	};

	const handleRollBackFocus = () => {
		if (searchRef.current && listRef.current) {
			listRef.current.focus({ preventScroll: true });
		}
	};

	const valueContext: IProps = {
		selectedElement: null,
		onFocusElement: getFirstItemTree
	};

	return (
		<ContextWrapper>
			<div ref={setRef} className="kit-filter-condition-selector">
				<div className="kit-filter-condition-selector__wrap">
					<div className="kit-filter-condition-selector__filter-block">
						<Input
							ref={searchRef}
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
							value={valueContext}
						>
							<ul
								ref={listRef}
								className="kit-filter-condition-selector__hierarchy"
								tabIndex={0}
								onKeyDown={handleKeyDown}
								onWheel={handleDisableBodyScroll}
							>
								{rootIds.length === 0 &&
								debouncedSearchTerm !== ""
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
					rollBackFocus={handleRollBackFocus}
				/>
			</div>
		</ContextWrapper>
	);
};

const FilterConditionSelectorWithOutsideClick = withOutsideClick(
	FilterConditionSelector
);
export { FilterConditionSelectorWithOutsideClick as FilterConditionSelector };
