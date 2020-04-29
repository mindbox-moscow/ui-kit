import cn from "classnames";
import * as React from "react";
import { neutralZoneClass } from "../../../HOOKs";
import { OverflowVisibleContainer } from "../../../OverflowVisibleContainer";
import { Height, Width } from "../../../utils";
import { KeysCodes } from "../../../utils/constants";
import { Panel } from "../Panel";
import { DropdownContext } from "./DropdownContext";
import { DropdownProps } from "./types";

export interface DropdownHandles {
	hide(): void;
}

// TODO: Удалить после редизайна
const HEIGHT_HEADER = 90;

const EVENT_ENTER = new window.KeyboardEvent("searchEnter", {
	bubbles: true,
	cancelable: true,
	code: "Enter",
	key: "Enter",
	view: window
});

const Dropdown = React.forwardRef(
	(props: DropdownProps, ref: React.Ref<DropdownHandles>) => {
		const {
			id,
			className,
			openedClassName,
			closedClassName,
			headerInfo,
			disabled,
			height,
			width,
			panelClass,
			children,
			onSelectionClear,
			isOpen,
			onClick
		} = props;

		const [isInBottomOfScreen, setIsInBottomOfScreen] = React.useState(
			false
		);
		const [searchTerm, setSearchTerm] = React.useState("");

		const dropdownRef = React.useRef<HTMLDivElement>(null);
		const refPanel = React.useRef<HTMLDivElement>(null);

		let itemsListSearch: HTMLDivElement[] = [];
		let refSearch: HTMLInputElement | null = null;
		let onMarkFirstElement: (() => void) | null = null;

		const positionDropDown = () => {
			const windowHeight = window.innerHeight / 2;

			if (dropdownRef && dropdownRef.current) {
				const { top } = dropdownRef.current.getBoundingClientRect();
				const heigthTop = top - HEIGHT_HEADER;

				if (windowHeight < heigthTop && !isInBottomOfScreen) {
					setIsInBottomOfScreen(true);
				} else if (windowHeight > heigthTop && isInBottomOfScreen) {
					setIsInBottomOfScreen(false);
				}
			}
		};

		React.useEffect(positionDropDown, []);

		React.useEffect(
			() => {
				itemsListSearch = [];
			},
			[isOpen]
		);

		const handleClick = () => {
			if (!disabled) {
				onClick();
			}
		};

		const clearSelectionSection = (): JSX.Element | null => {
			return onSelectionClear == null ? null : (
				<span
					className="kit-selectR-clear"
					onClick={onSelectionClears}
				/>
			);
		};

		const onSelectionClears = (e: React.MouseEvent) => {
			e.stopPropagation();

			if (onSelectionClear) {
				onSelectionClear();
			}
		};

		const handleKeyDown = (e: React.KeyboardEvent) => {
			if (e.keyCode === KeysCodes.Enter) {
				handleClick();
			}
		};

		const handleContextOnKeyDownSearch = (e?: React.KeyboardEvent) => {
			if (e) {
				switch (e.keyCode) {
					case KeysCodes.Esc:
						e.preventDefault();
						onClick();
						handleFocusElement(dropdownRef.current);
						break;

					case KeysCodes.ArrowDown:
						e.stopPropagation();

						if (itemsListSearch.length > 0) {
							itemsListSearch[0].focus({ preventScroll: true });
						}
						break;
					case KeysCodes.Enter:
						e.preventDefault();

						if (itemsListSearch.length > 0) {
							itemsListSearch[0].dispatchEvent(EVENT_ENTER);
							handleFocusElement(dropdownRef.current);
						}
						break;
					case KeysCodes.ArrowUp:
						e.stopPropagation();
						break;
				}
			}

			setTimeout(() => {
				if (onMarkFirstElement && searchTerm !== "") {
					onMarkFirstElement();
				}
			}, 0);
		};

		const handleContextOnKeyDownItems = (e: React.KeyboardEvent) => {
			const focusedElement = document.activeElement;
			const currentIndex = itemsListSearch.findIndex(
				item => item === focusedElement
			);

			switch (e.keyCode) {
				case KeysCodes.Enter:
					e.preventDefault();
					handleFocusElement(dropdownRef.current);

					break;

				case KeysCodes.Esc:
					e.preventDefault();
					handleFocusElement(refSearch);
					break;

				case KeysCodes.ArrowDown:
					e.stopPropagation();

					if (currentIndex === itemsListSearch.length - 1) {
						itemsListSearch[0].focus({ preventScroll: true });
					} else {
						itemsListSearch[currentIndex + 1].focus({
							preventScroll: true
						});
					}
					break;

				case KeysCodes.ArrowUp:
					e.stopPropagation();

					if (currentIndex === 0) {
						handleFocusElement(refSearch);
					} else {
						itemsListSearch[currentIndex - 1].focus({
							preventScroll: true
						});
					}
					break;
			}
		};

		const setSearchRef = (
			searchElement: React.RefObject<HTMLInputElement>
		) => {
			refSearch = searchElement.current;
		};

		const setItemListRef = (
			itemElement: React.RefObject<HTMLDivElement>
		) => {
			if (itemElement.current) {
				itemsListSearch = [...itemsListSearch, itemElement.current];
			}
		};

		const handleFocusFirstElement = (
			onMouseEnter: () => void,
			onMouseLeave: () => void,
			itemElement: React.RefObject<HTMLDivElement>
		) => {
			if (itemsListSearch[0] === itemElement.current) {
				onMarkFirstElement = onMouseEnter;
			}

			onMouseLeave();
		};

		const handleFocusElement = (
			element: HTMLDivElement | HTMLInputElement | null
		) => {
			if (element) {
				element.focus({ preventScroll: true });
			}
		};

		const placeholder = headerInfo ? (
			<span className="kit-selectR-chosen">{headerInfo}</span>
		) : (
			<span className="kit-selectR-chosen">{props.placeholder}</span>
		);

		const style = { ...props.style, marginLeft: "0 !important" };

		const contextValues = {
			contextOnKeyDownItems: handleContextOnKeyDownItems,
			contextOnKeyDownSearch: handleContextOnKeyDownSearch,
			onCloseDropdown: onClick,
			onFocusElement: handleFocusFirstElement,
			onItemsRef: setItemListRef,
			onSearchRef: setSearchRef,
			setSearchTerm
		};

		return (
			<div className="kit-flat-select">
				<div
					tabIndex={0}
					id={id}
					className={cn(
						className,
						"form-control",
						"kit-selectR",
						"kit-selectR-container",
						`${String(height && Height.getClass(height))}`,
						`${String(width && Width.getClass(width))}`,
						{
							[`${closedClassName}`]: !isOpen && closedClassName,
							"kit-selectR-disabled": disabled,
							"kit-selectR-open": isOpen,
							[`${openedClassName}`]: isOpen,
							"kit-selectR-placeholder": !headerInfo
						}
					)}
					style={style}
					ref={dropdownRef}
					onClick={handleClick}
					onKeyDown={handleKeyDown}
				>
					<span className="kit-selectR-choice">
						{placeholder}
						{clearSelectionSection()}
					</span>
				</div>

				{isOpen && (
					<OverflowVisibleContainer
						ref={refPanel}
						parentRef={dropdownRef}
					>
						<DropdownContext.Provider value={contextValues}>
							<Panel
								parentRef={dropdownRef}
								width={width || Width.Full}
								className={cn(panelClass, neutralZoneClass, {
									"kit-selectR-above": isInBottomOfScreen
								})}
								onCLose={onClick}
							>
								{children}
							</Panel>
						</DropdownContext.Provider>
					</OverflowVisibleContainer>
				)}
			</div>
		);
	}
);

export { Dropdown };
