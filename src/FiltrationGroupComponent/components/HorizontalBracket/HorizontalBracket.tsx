import * as React from "react";
import { SearchClasses } from "../../types";

interface ItemsRootElement {
	element: HTMLElement;
	height: number;
}

interface HorizontalBracketProps {
	minHeight: number;
	brackets: ItemsRootElement[];
	bracketWidth: number;
}
export const HorizontalBracket: React.FC<HorizontalBracketProps> = ({
	brackets,
	minHeight,
	bracketWidth
}) => {
	let positionTop = 0;
	let height = 0;

	return (
		<>
			{!!brackets.length &&
				brackets.map((item, index) => {
					const lastElement =
						index === brackets.length - 1 ? -bracketWidth : 0;
					if (
						item.element.classList.contains(
							SearchClasses.KitFiltrationGroup
						)
					) {
						const labelLine = item.element.querySelector(
							".kit-filtration-group__label-line"
						) as HTMLDivElement;

						const middleLine =
							labelLine &&
							labelLine.offsetTop +
								labelLine.offsetHeight / 2 +
								lastElement;

						positionTop = height + middleLine;
					} else if (
						item.element.classList.contains(
							SearchClasses.KitFiltrationCondition
						) ||
						item.element.classList.contains(
							SearchClasses.KitFiltrationGroupButtons
						)
					) {
						positionTop = height + minHeight / 2 + lastElement;
					}

					height += item.height;

					return (
						<span
							key={index}
							className="kit-filtration-group__label-horizontal-bracket"
							style={{ top: positionTop }}
						/>
					);
				})}
		</>
	);
};
