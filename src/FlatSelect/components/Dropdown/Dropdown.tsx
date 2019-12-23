import cn from "classnames";
import * as React from "react";
import { Height, Width } from "../../../utils";
import { Panel } from "../Panel";
import { DropdownContext } from "./DropDownContext";
import { DropdownProps, DropdownState } from "./types";

// TODO: Удалить после редизайна
const HEIGHT_HEADER = 90;

enum KeysCodes {
	Enter = 13,
	Esc = 27,
	ArrowDown = 40,
	ArrowUp = 38
}

const EVENT_ENTER = new window.KeyboardEvent("searchEnter", {
	bubbles: true,
	cancelable: true,
	key: "Enter",
	code: "Enter",
	view: window
});

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
	private static DropdownIdentifier: number = 0;

	public state = {
		dropdownId: "",
		isInBottomOfScreen: false,
		show: false
	};
	private itemsListSearch: HTMLLIElement[] = [];
	private refSearch: HTMLInputElement | null = null;

	private dropdownRef = React.createRef<HTMLDivElement>();

	public componentDidMount() {
		this.positionDropDown();

		Dropdown.DropdownIdentifier++;
		this.setState({
			dropdownId: "react-dropdown-" + Dropdown.DropdownIdentifier
		});
	}

	public componentDidUpdate() {
		this.positionDropDown();
		this.itemsListSearch = [];
	}

	public hide = () => {
		this.changeVisibility(false);
	};

	public positionDropDown = () => {
		const dropdownRef = this.dropdownRef.current;
		const { isInBottomOfScreen } = this.state;
		const windowHeight = window.innerHeight / 2;

		if (dropdownRef) {
			const { top } = dropdownRef.getBoundingClientRect();
			const heigthTop = top - HEIGHT_HEADER;

			if (windowHeight < heigthTop && !isInBottomOfScreen) {
				this.setState({
					isInBottomOfScreen: true
				});
			} else if (windowHeight > heigthTop && isInBottomOfScreen) {
				this.setState({
					isInBottomOfScreen: false
				});
			}
		}
	};

	public handleOnKeyDown = (e: React.KeyboardEvent) => {
		if (e.keyCode === KeysCodes.Enter) {
			this.handleClick();
		}
	};

	public handleContextOnKeyDownSearch = (e: React.KeyboardEvent) => {
		if (e) {
			switch (e.keyCode) {
				case KeysCodes.Esc:
					e.preventDefault();
					this.changeVisibility(false);
					this.handleFocusElement(this.dropdownRef.current);
					break;

				case KeysCodes.ArrowDown:
					e.preventDefault();

					if (this.itemsListSearch.length > 0) {
						this.itemsListSearch[0].focus({ preventScroll: true });
					}
					break;
				case KeysCodes.Enter:
					e.preventDefault();

					if (this.itemsListSearch.length > 0) {
						this.itemsListSearch[0].dispatchEvent(EVENT_ENTER);
						this.handleFocusElement(this.dropdownRef.current);
					}
			}
		}
	};

	public handleContextOnKeyDownItems = (e: React.KeyboardEvent) => {
		const focusElement = document.activeElement;
		const currentIndex = this.itemsListSearch.findIndex(
			item => item === focusElement
		);

		switch (e.keyCode) {
			case KeysCodes.Enter:
				e.preventDefault();
				this.handleFocusElement(this.dropdownRef.current);

				break;

			case KeysCodes.Esc:
				e.preventDefault();
				this.handleFocusElement(this.refSearch);
				break;

			case KeysCodes.ArrowDown:
				e.preventDefault();

				if (currentIndex === this.itemsListSearch.length - 1) {
					this.itemsListSearch[0].focus({ preventScroll: true });
				} else {
					this.itemsListSearch[currentIndex + 1].focus({
						preventScroll: true
					});
				}
				break;

			case KeysCodes.ArrowUp:
				e.preventDefault();

				if (currentIndex === 0) {
					this.handleFocusElement(this.refSearch);
				} else {
					this.itemsListSearch[currentIndex - 1].focus({
						preventScroll: true
					});
				}
				break;
		}
	};

	public searchRef = (searchElement: React.RefObject<HTMLInputElement>) => {
		this.refSearch = searchElement.current;
	};

	public itemListRef = (itemElement: React.RefObject<HTMLLIElement>) => {
		if (itemElement.current) {
			this.itemsListSearch = [
				...this.itemsListSearch,
				itemElement.current
			];
		}
	};

	public handleFocusFirstElement = (
		onMouseEnter: () => void,
		onMouseLeave: () => void,
		itemElement: React.RefObject<HTMLLIElement>
	) => {
		if (this.itemsListSearch[0] === itemElement.current) {
			onMouseEnter();
		} else {
			onMouseLeave();
		}
	};

	public handleFocusElement = (
		element: HTMLDivElement | HTMLInputElement | null
	) => {
		if (element) {
			element.focus({ preventScroll: true });
		}
	};

	public render() {
		const { show, isInBottomOfScreen } = this.state;
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
			children
		} = this.props;

		const placeholder = headerInfo ? (
			<span className="kit-selectR-chosen">{headerInfo}</span>
		) : (
			<span className="kit-selectR-chosen">{this.props.placeholder}</span>
		);

		const style = { ...this.props.style, marginLeft: "0 !important" };

		const contextValues = {
			contextOnKeyDownSearch: this.handleContextOnKeyDownSearch,
			contextOnKeyDownItems: this.handleContextOnKeyDownItems,
			onSearchRef: this.searchRef,
			onItemsRef: this.itemListRef,
			onFocusElement: this.handleFocusFirstElement
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
							"kit-selectR-open": show,
							[`${openedClassName}`]: show,
							"kit-selectR-placeholder": !headerInfo,
							"kit-selectR-disabled": disabled
						}
					)}
					style={style}
					ref={this.dropdownRef}
					onClick={this.handleClick}
					onKeyDown={this.handleOnKeyDown}
				>
					<span className="kit-selectR-choice">
						{placeholder}
						{this.clearSelectionSection()}
					</span>
				</div>

				{show && (
					<DropdownContext.Provider value={contextValues}>
						<Panel
							onClickOutside={this.hide}
							width={width || Width.Full}
							className={cn(panelClass, {
								"kit-selectR-above": isInBottomOfScreen
							})}
						>
							{children}
						</Panel>
					</DropdownContext.Provider>
				)}
			</div>
		);
	}

	private handleClick = () => {
		const { show } = this.state;

		this.changeVisibility(!show);
	};

	private changeVisibility = (show: boolean) => {
		this.setState({ show });
	};

	private clearSelectionSection = (): JSX.Element | null => {
		return this.props.onSelectionClear == null ? null : (
			<span onClick={this.onSelectionClear} />
		);
	};

	private onSelectionClear = (e: React.MouseEvent) => {
		const { onSelectionClear } = this.props;
		e.stopPropagation();

		if (onSelectionClear) {
			onSelectionClear();
		}
	};
}
