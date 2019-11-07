import * as React from "react";
import { SearchClasses } from "../../types";

type ItemsRootElement = {
	element: HTMLElement;
	height: number;
};

interface HorizontalBracketProps {
	minHeight: number;
	brackets: ItemsRootElement[];
	widthBracket: number;
}
export const HorizontalBracket: React.FC<HorizontalBracketProps> = ({
	brackets,
	minHeight,
	widthBracket
}) => {
	let positionTop = 0;
	let height = -widthBracket;

	const classes = Object.values(SearchClasses);

	return (
		<>
			{!!brackets.length &&
				brackets.map((item, index) => {
					switch (index) {
						case 0:
							if (
								item.element.classList.contains(
									SearchClasses.KitFiltrationCondition
								) ||
								item.element.classList.contains(
									SearchClasses.KitFiltrationGroupButtons
								)
							) {
								positionTop = height + minHeight / 2;
							} else if (
								item.element.classList.contains(
									SearchClasses.KitFiltrationGroup
								)
							) {
								const theLine = item.element.querySelector(
									".kit-filtration-group__label-line"
								) as HTMLDivElement;

								positionTop = theLine.offsetTop +
									theLine.offsetHeight / 2 - widthBracket;
							}
							break;

						case brackets.length - 1:
							if (
								item.element.classList.contains(
									SearchClasses.KitFiltrationCondition
								) ||
								item.element.classList.contains(
									SearchClasses.KitFiltrationGroupButtons
								)
							) {
								positionTop = height + minHeight / 2;
							} else if (
								item.element.classList.contains(
									SearchClasses.KitFiltrationGroup
								)
							) {
								let childHeight = minHeight;
								item.element.childNodes.forEach(
									(child: HTMLElement, index) => {
										if (
											classes.some(className =>
												child.classList.contains(
													className
												)
											)
										) {
											if (
												index !==
												item.element.childNodes.length -
													1
											) {
												childHeight += child.getBoundingClientRect()
													.height;
											}
										}
									}
								);
								positionTop = height + childHeight / 2;
							}
							break;

						default:
							if (
								item.element.classList.contains(
									SearchClasses.KitFiltrationCondition
								) ||
								item.element.classList.contains(
									SearchClasses.KitFiltrationGroupButtons
								)
							) {
								positionTop = height + minHeight / 2;
							} else if (
								item.element.classList.contains(
									SearchClasses.KitFiltrationGroup
								)
							) {
								const lineElement = item.element.querySelector(
									".kit-filtration-group__label-line"
								);
								let lineHeight = 0;
								if (lineElement) {
									lineHeight =
										(item.height -
											minHeight -
											lineElement.getBoundingClientRect()
												.height) /
											2 +
										widthBracket / 2;
								}
								positionTop =
									height + item.height / 2 + lineHeight;
							}
							break;
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
