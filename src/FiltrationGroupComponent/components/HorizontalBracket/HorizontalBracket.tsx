import * as React from "react";
import { SearchClasses } from "../../types";

type ItemsRootElement = {
	element: HTMLElement;
	height: number;
};

interface HorizontalBracketProps {
	minHeight: number;
	brackets: ItemsRootElement[];
}
export const HorizontalBracket: React.FC<HorizontalBracketProps> = ({
	brackets,
	minHeight
}) => {
	let positionTop = 0;
	let height = -2;

	const classes = Object.keys(SearchClasses).map(key => SearchClasses[key]);

	return (
		<>
			{brackets.length &&
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
								positionTop = minHeight / 2;
							}
							if (
								item.element.classList.contains(
									SearchClasses.KitFiltrationGroup
								)
							) {
								positionTop = item.height / 2;
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
							}

							if (
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
							}

							if (
								item.element.classList.contains(
									SearchClasses.KitFiltrationGroup
								)
							) {
								positionTop = height + item.height / 2;
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
