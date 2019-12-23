import cn from "classnames";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { DropdownContext } from "../Dropdown";
import { SelectSearchRowProps } from "./types";

enum KeysCodes {
	Enter = 13,
	Esc = 27,
	ArrowDown = 40,
	ArrowUp = 38
}

export const SelectSearchRow: React.FC<SelectSearchRowProps> = ({
	className,
	unselectable,
	disabled,
	isSelected,
	isForMultiSelect,
	hasNested,
	isLoader,
	text,
	title,
	children,
	onClickHandler
}) => {
	const context = React.useContext(DropdownContext);
	const refElement = React.useRef<HTMLLIElement>(null)

	React.useEffect(() => {
		document.addEventListener("searchEnter", handelSelectEnter)
		context?.onItemsRef(refElement)

		return () => {
			document.removeEventListener("searchEnter", handelSelectEnter)
		}
	})

	const Сhildren = (): JSX.Element | null => {
		return hasNested ? (
			<ul className="kit-selectR-results kit-selectR-results-default">
				{children}
			</ul>
		) : null;
	};

	const titleContent =
		title == null || typeof title === "string"
			? (title as string)
			: renderToStaticMarkup(title);

	const handelSelectEnter = (e:KeyboardEvent) => {
		if ( e.target === refElement.current && !disabled && onClickHandler ) {
			onClickHandler();
		}
	}

	const handleClick = () => {
		if (disabled) {
			return;
		}

		// tslint:disable-next-line: no-unused-expression
		onClickHandler && onClickHandler();
	};

	const handleOnKeyDown = (e: React.KeyboardEvent) => {
		const contextKeyDown = context?.contextOnKeyDownItems;

		if ( onClickHandler && contextKeyDown ) {
			switch (e.keyCode) {
				case KeysCodes.Enter:
					onClickHandler();
					contextKeyDown(e);
					break;

				case KeysCodes.Esc:
				case KeysCodes.ArrowDown:
				case KeysCodes.ArrowUp:
					contextKeyDown(e);
					break;
			}
		}
	};

	return (
		<li
			ref={refElement}
			tabIndex={0}
			onKeyDown={handleOnKeyDown}
			className={cn(className, "kit-selectR-result", {
				"kit-selectR-unselectable": unselectable,
				"kit-selectR-disabled": disabled,
				"kit-selectR-selected-multi": isSelected && isForMultiSelect,
				"kit-selectR-selected": isSelected && !isForMultiSelect,
				"kit-selectR-nesting": hasNested
			})}
		>
			<div
				className={cn("kit-selectR-label", {
					"kit-selectR-request-item": isLoader
				})}
				onClick={handleClick}
				title={titleContent}
			>
				{text}
			</div>
			<Сhildren />
		</li>
	);
};
