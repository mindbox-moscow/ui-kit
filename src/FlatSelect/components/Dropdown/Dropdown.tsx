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
			ignoreNeutralZoneClass
		} = props;

		const [isInBottomOfScreen, setIsInBottomOfScreen] = React.useState(
			false
		);
		const [show, setShow] = React.useState(false);
		const [searchTerm, setSearchTerm] = React.useState("");

		const dropdownRef = React.useRef<HTMLDivElement>(null);
		const refPanel = React.useRef<HTMLDivElement>(null);
		const refSearch = React.useRef<HTMLInputElement | null>(null);

		const itemsListSearch: HTMLLIElement[] = [];
		let markFirstElement: (() => void) | null = null;
		let unmarkFirstElement: (() => void) | null = null;

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

		const toggleShow = () => {
			if (!disabled) {
				setShow(prev => !prev);
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

		const hide = () => {
			setShow(false);
		};

		const handleKeyDown = (e: React.KeyboardEvent) => {
			if (e.keyCode === KeysCodes.Enter) {
				toggleShow();
			}
		};

		const handleContextOnKeyDownSearch = (e?: React.KeyboardEvent) => {
			if (e) {
				switch (e.keyCode) {
					case KeysCodes.Esc:
						e.preventDefault();
						setShow(false);
						setFocusOnElement(dropdownRef.current);
						break;

					case KeysCodes.ArrowDown:
						e.stopPropagation();
						e.preventDefault();

						if (itemsListSearch.length > 0) {
							itemsListSearch[0].focus({ preventScroll: true });
						}
						break;
					case KeysCodes.Enter:
						e.preventDefault();

						if (itemsListSearch.length > 0) {
							itemsListSearch[0].dispatchEvent(EVENT_ENTER);
							setFocusOnElement(dropdownRef.current);
						}
						break;
					case KeysCodes.ArrowUp:
						e.stopPropagation();
						break;
				}
			}
		};

		const handleContextOnKeyDownItems = (e: React.KeyboardEvent) => {
			const focusedElement = document.activeElement;
			const currentIndex = itemsListSearch.findIndex(
				item => item === focusedElement
			);

			switch (e.keyCode) {
				case KeysCodes.Enter:
					e.preventDefault();
					setFocusOnElement(dropdownRef.current);

					break;

				case KeysCodes.Esc:
					e.preventDefault();
					setFocusOnElement(refSearch.current);
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
						setFocusOnElement(refSearch.current);
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
			refSearch.current = searchElement.current;
		};

		const addItemListRef = (
			itemElement: React.RefObject<HTMLLIElement>
		) => {
			if (itemElement.current) {
				itemsListSearch.push(itemElement.current);
			}
		};

		const handleFocusFirstElement = (
			onMouseEnter: () => void,
			onMouseLeave: () => void,
			itemElement: React.RefObject<HTMLLIElement>
		) => {
			if (itemsListSearch[0] === itemElement.current) {
				markFirstElement = onMouseEnter;
				unmarkFirstElement = onMouseLeave;
			}

			onMouseLeave();
		};

		const setFocusOnElement = (
			element: HTMLDivElement | HTMLInputElement | null
		) => {
			if (element) {
				element.focus({ preventScroll: true });
			}
		};

		React.useEffect(positionDropDown, []);

		React.useEffect(
			() => {
				setFocusOnElement(refSearch.current);
			},
			[show]
		);

		React.useEffect(
			() => {
				if (searchTerm === "" && unmarkFirstElement) {
					unmarkFirstElement();
				} else if (searchTerm !== "" && markFirstElement) {
					markFirstElement();
				}
			},
			[searchTerm]
		);

		React.useImperativeHandle(ref, () => ({
			hide
		}));

		const placeholder = headerInfo ? (
			<span className="kit-selectR-chosen">{headerInfo}</span>
		) : (
			<span className="kit-selectR-chosen">{props.placeholder}</span>
		);

		const style = { ...props.style, marginLeft: "0 !important" };

		const contextValues = {
			contextOnKeyDownItems: handleContextOnKeyDownItems,
			contextOnKeyDownSearch: handleContextOnKeyDownSearch,
			onCloseDropdown: hide,
			onFocusElement: handleFocusFirstElement,
			addItemsRef: addItemListRef,
			setSearchRef,
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
							[`${closedClassName}`]: !show && closedClassName,
							"kit-selectR-disabled": disabled,
							"kit-selectR-open": show,
							[`${openedClassName}`]: show,
							"kit-selectR-placeholder": !headerInfo
						}
					)}
					style={style}
					ref={dropdownRef}
					onClick={toggleShow}
					onKeyDown={handleKeyDown}
				>
					<span className="kit-selectR-choice">
						{placeholder}
						{clearSelectionSection()}
					</span>
				</div>

				{show && (
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
								onCLose={hide}
								ignoreNeutralZoneClass={ignoreNeutralZoneClass}
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
