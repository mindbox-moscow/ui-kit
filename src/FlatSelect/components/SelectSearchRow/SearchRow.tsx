import cn from "classnames";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { SelectSearchRowProps } from "./types";

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

	const handleClick = (e: React.MouseEvent) => {
		if (disabled) {
			return;
		}

		// tslint:disable-next-line: no-unused-expression
		onClickHandler && onClickHandler(e);
	};

	return (
		<li
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
