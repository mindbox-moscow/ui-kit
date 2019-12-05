import cn from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import * as React from "react";
import { FilterWrapperContext } from "../FilterWrapper";
import { withOutsideClick, WithOutsideClickProps } from "../HOCs";
import { IconSvg } from "../IconSvg";
import { HorizontalBracket, LabelButton } from "./components";
import "./FiltrationGroupComponent.scss";
import { CallbackProps, SearchClasses, StateProps } from "./types";

type Props = StateProps & CallbackProps;

// tslint:disable-next-line:interface-name
interface ItemsRootElement {
	element: HTMLElement;
	height: number;
}

type SearchElementType = "first" | "last";

// Менять только высоту, остальные правки делать в стилях!
const MIN_HEIGHT = 31;
const BRACKET_WIDTH = 2;

const FiltrationGroupComponent: React.FC<Props & WithOutsideClickProps> = ({
	groupType,
	andLabel,
	orLabel,
	shouldShowLabel,
	children,
	onGroupTypeToggle,
	state,
	onConditionRemove,
	onConditionCopy,
	shouldShowDuplicateButton,
	addSimpleConditionButton,
	addGroupConditionButton,
	shouldShowButtons,
	onConditionStateToggle
}) => {
	const [horizontalBracket, setHorizontalBracket] = useState<
		ItemsRootElement[]
	>([]);
	const [verticalBracket, setVerticalBracket] = useState(false);
	const context = useContext(FilterWrapperContext);
	const shouldRerenderBrackets = useRef(false);

	const classes = Object.values(SearchClasses);
	const kitFiltrationRef = React.createRef<HTMLUListElement>();
	const kitFiltrationCloseRef = React.createRef<HTMLButtonElement>();
	const kitFiltrationLabelRef = React.createRef<HTMLDivElement>();
	const kitFiltrationLabelLineRef = React.createRef<HTMLDivElement>();

	useEffect(
		() => {
			moveLabelAtCenterOfBracket();
			handleCreateVerticalBrackets();
			handleCreateHorizontalBrackets();

			if (context) {
				if (shouldRerenderBrackets.current) {
					context.rerenderBrackets();
				} else {
					shouldRerenderBrackets.current = true;
				}
			}

			const labelRef = kitFiltrationLabelRef.current;
			const closeRef = kitFiltrationCloseRef.current;

			if (labelRef) {
				labelRef.addEventListener(
					"mouseover",
					handleHoverAddClassLabel
				);
			}

			if (closeRef) {
				closeRef.addEventListener(
					"mouseover",
					handleHoverAddClassLabel
				);
			}
			return () => {
				if (labelRef) {
					labelRef.removeEventListener(
						"mouseover",
						handleHoverAddClassLabel
					);
				}

				if (closeRef) {
					closeRef.removeEventListener(
						"mouseover",
						handleHoverAddClassLabel
					);
				}
			};
		},
		[horizontalBracket, verticalBracket]
	);


	useEffect(() => {
		moveLabelAtCenterOfBracket();
		handleCreateVerticalBrackets();
		handleCreateHorizontalBrackets();
	}, [context?.updateBrackets])

	const moveLabelAtCenterOfBracket = () => {
		let heightGroup = 0;
		let heightLine = 0;
		let positionTop = 0;
		const groupRef = kitFiltrationRef.current;
		const labelRef = kitFiltrationLabelRef.current;
		const labelLineRef = kitFiltrationLabelLineRef.current;

		if (groupRef && labelRef && labelLineRef) {
			const firstChildElement: HTMLElement | null = searchFirstLastElement(
				groupRef,
				classes,
				"first"
			);

			const lastChildElement: HTMLElement | null = searchFirstLastElement(
				groupRef,
				classes,
				"last"
			);

			if (firstChildElement) {
				if (
					firstChildElement.classList.contains(
						SearchClasses.KitFiltrationGroup
					)
				) {
					const firstChildElementHeight = firstChildElement.getBoundingClientRect()
						.height;

					const labelLine = firstChildElement.querySelector(
						".kit-filtration-group__label-line"
					) as HTMLDivElement;
					const labelLineMiddle = labelLine
						? labelLine.offsetTop + labelLine.offsetHeight / 2
						: 0;

					heightLine +=
						firstChildElementHeight / 2 -
						(firstChildElementHeight / 2 - labelLineMiddle);

					positionTop = labelLineMiddle;
				} else if (
					firstChildElement.classList.contains(
						SearchClasses.KitFiltrationCondition
					)
				) {
					heightLine += MIN_HEIGHT / 2;
					positionTop = MIN_HEIGHT / 2;
				} else if (
					firstChildElement.classList.contains(
						SearchClasses.KitFiltrationGroupButtons
					)
				) {
					heightLine += MIN_HEIGHT / 2;
					positionTop = MIN_HEIGHT / 2;
				}
			}

			if (lastChildElement) {
				const lastChildChildrenElements: ItemsRootElement[] = getChildElements(
					lastChildElement,
					classes
				);

				if (
					lastChildElement.classList.contains(
						SearchClasses.KitFiltrationGroup
					)
				) {
					let heightLastChild = MIN_HEIGHT;
					lastChildChildrenElements.map(
						(child: ItemsRootElement, index) => {
							if (
								index !==
								lastChildChildrenElements.length - 1
							) {
								heightLastChild += child.element.getBoundingClientRect()
									.height;
							}
						}
					);

					heightGroup +=
						lastChildElement.getBoundingClientRect().height -
						heightLastChild;

					heightLine +=
						lastChildElement.getBoundingClientRect().height -
						heightLastChild +
						heightLastChild / 2;
				} else if (
					lastChildElement.classList.contains(
						SearchClasses.KitFiltrationCondition
					)
				) {
					heightGroup +=
						lastChildElement.getBoundingClientRect().height -
						MIN_HEIGHT;

					heightLine +=
						lastChildElement.getBoundingClientRect().height -
						MIN_HEIGHT / 2;
				} else if (
					lastChildElement.classList.contains(
						SearchClasses.KitFiltrationGroupButtons
					)
				) {
					heightLine += MIN_HEIGHT / 2;
				}
			}

			labelRef.style.height = `${groupRef.getBoundingClientRect().height -
				heightGroup}px`;

			if (firstChildElement && lastChildElement) {
				labelLineRef.style.height = `${groupRef.getBoundingClientRect()
					.height -
					heightLine +
					BRACKET_WIDTH}px`;
			} else {
				labelLineRef.style.height = "0px";
			}

			if (positionTop !== 0) {
				labelLineRef.style.top = `${positionTop - BRACKET_WIDTH}px`;
			} else {
				labelLineRef.style.top = `${MIN_HEIGHT / 2 - BRACKET_WIDTH}px`;
			}
		}

		window.addEventListener("load", moveLabelAtCenterOfBracket);
		window.addEventListener("resize", moveLabelAtCenterOfBracket);
	};

	const getChildElements = (
		rootElement: HTMLElement,
		searchClasses: string[]
	): ItemsRootElement[] | [] => {
		const childrenElement = Array.from(rootElement.childNodes);

		return childrenElement
			.filter((item: HTMLElement) => {
				return searchClasses.some(className =>
					item.classList.contains(className)
				);
			})
			.map((item: HTMLElement) => {
				return {
					element: item,
					height: item.getBoundingClientRect().height
				} as ItemsRootElement;
			});
	};

	const searchFirstLastElement = (
		searchableElement: HTMLElement,
		searchClasses: string[],
		search: SearchElementType
	): HTMLElement | null => {
		const childrenElement = Array.from(
			searchableElement.children
		) as HTMLElement[];

		if (search === "last") {
			childrenElement.reverse();
		}

		return (
			childrenElement.find((item: HTMLElement) => {
				return searchClasses.some(className =>
					item.classList.contains(className)
				);
			}) || null
		);
	};

	const handleHoverAddClassLabel = () => {
		const labelRef = kitFiltrationLabelRef.current;
		const closeRef = kitFiltrationCloseRef.current;

		if (labelRef) {
			labelRef.parentElement!.classList.add("kit-filtration-group_hover");

			const parentElements = labelRef.parentElement!.parentElement!
				.children;

			Array.from(parentElements).forEach(item => {
				if (
					item.classList.contains(
						"kit-filtration-condition__item-text"
					)
				) {
					item.classList.add(
						"kit-filtration-condition__item-text_hover"
					);
				}
			});

			if (closeRef) {
				closeRef.addEventListener(
					"mouseout",
					handleHoverRemoveClassLabel
				);
			}

			labelRef.addEventListener("mouseout", handleHoverRemoveClassLabel);
		}
	};

	const handleHoverRemoveClassLabel = () => {
		const labelRef = kitFiltrationLabelRef.current;
		const closeRef = kitFiltrationCloseRef.current;

		if (labelRef) {
			labelRef.parentElement!.classList.remove(
				"kit-filtration-group_hover"
			);

			const parentElements = labelRef.parentElement!.parentElement!
				.children;

			Array.from(parentElements).forEach(item => {
				if (
					item.classList.contains(
						"kit-filtration-condition__item-text"
					)
				) {
					item.classList.remove(
						"kit-filtration-condition__item-text_hover"
					);
				}
			});

			if (closeRef) {
				closeRef.removeEventListener(
					"mouseout",
					handleHoverRemoveClassLabel
				);
			}

			labelRef.removeEventListener(
				"mouseout",
				handleHoverRemoveClassLabel
			);
		}
	};

	const handleCreateVerticalBrackets = () => {
		let isVerticalBracket = false;

		if (kitFiltrationRef && kitFiltrationRef.current) {
			const ref = kitFiltrationRef.current;
			const parentNode = ref.parentNode as HTMLElement;

			if (parentNode.classList.contains("kit-filtration-condition")) {
				isVerticalBracket = true;
			}
		}

		if (isVerticalBracket !== verticalBracket) {
			setVerticalBracket(newVerticalBracket => !newVerticalBracket);
		}
	};

	const handleCreateHorizontalBrackets = () => {
		const groupRef = kitFiltrationRef.current;
		let repeater = true;

		if (groupRef) {
			const groupItems = getChildElements(groupRef, classes);

			if (horizontalBracket.length !== groupItems.length) {
				setHorizontalBracket(groupItems);
			} else {
				horizontalBracket.map((item: ItemsRootElement, index) => {
					if (repeater) {
						if (
							item.height !== groupItems[index].height ||
							item.element !== groupItems[index].element
						) {
							setHorizontalBracket(groupItems);
							repeater = false;
						}
					}
				});
			}
		}
	};

	const renderCopyButton = () => {
		if (!shouldShowDuplicateButton) {
			return null;
		}
		return (
			<button
				key="copy"
				onClick={onConditionCopy}
				className="kit-filtration-group__copy"
				type="button"
			>
				<IconSvg type="duplicate" />
			</button>
		);
	};

	const renderVerticalBracket = () => {
		return (
			<>
				{verticalBracket && (
					<span className="kit-filtration-group__label-vertical-bracket" />
				)}
			</>
		);
	};

	const renderGroupButtons = (noChildren?: boolean) => {
		return (
			shouldShowButtons && (
				<div
					className={cn("kit-filtration-group__buttons", {
						"kit-filtration-group__buttons_no-children": noChildren
					})}
				>
					{addSimpleConditionButton}
					{addGroupConditionButton}
				</div>
			)
		);
	};

	const renderInnerComponents = () => {
		if (state === "view" || state === "shaded" || state === "readOnly") {
			if (React.Children.count(children) === 0) {
				if (!shouldShowLabel) {
					return renderGroupButtons(true);
				} else {
					return null;
				}
			}

			return (
				<>
					{children}
					{renderGroupButtons()}
				</>
			);
		}

		return (
			<>
				<button
					ref={kitFiltrationCloseRef}
					key="toggle"
					onClick={onConditionStateToggle}
					type="button"
					className="kit-filtration-group__close"
				>
					<IconSvg type="close" />
				</button>
				{children}
				{renderGroupButtons()}
			</>
		);
	};

	const handleGroupLabelClick = () => {
		if (state === "edit") {
			return;
		}

		onConditionStateToggle();
	};

	const labelMap = {
		and: andLabel,
		or: orLabel
	};

	const renderInner = renderInnerComponents();

	const anyChildren = React.Children.toArray(children).length > 0;

	return (
		<ul
			ref={kitFiltrationRef}
			className={cn("kit-filtration-group", {
				"kit-filtration-group_edit": state === "edit",
				"kit-filtration-group_shaded": state === "shaded",
				"kit-filtration-group_read-only": state === "readOnly",
				"kit-filtration-group_not-children": !anyChildren
			})}
		>
			<div
				ref={kitFiltrationLabelRef}
				className={cn(
					"kit-filtration-group__label",
					`kit-filtration-group__label_hover_${groupType}`,
					{
						[`kit-filtration-group__label_${groupType}`]: shouldShowLabel
					}
				)}
				onClick={handleGroupLabelClick}
			>
				<div
					ref={kitFiltrationLabelLineRef}
					className="kit-filtration-group__label-line"
				>
					{shouldShowLabel && (
						<span className="kit-filtration-group__label-text">
							{state === "edit" ? (
								<div
									className={cn(
										"kit-filtration-group__label-text-buttons",
										`kit-filtration-group__label-text-buttons_${groupType}`
									)}
								>
									{renderCopyButton()}
									<button
										key="remove"
										onClick={onConditionRemove}
										className="kit-filtration-group__remove"
										type="button"
									>
										<IconSvg type="trash" />
									</button>
									<LabelButton
										onToggle={onGroupTypeToggle}
										types={labelMap}
										activeType={groupType}
									/>
								</div>
							) : (
								labelMap[groupType]
							)}
						</span>
					)}
				</div>
				<HorizontalBracket
					brackets={horizontalBracket}
					minHeight={MIN_HEIGHT}
					bracketWidth={BRACKET_WIDTH}
				/>
				{renderVerticalBracket()}
			</div>
			{renderInner}
		</ul>
	);
};

const FiltrationGroupComponentWithOutsideClick = withOutsideClick(
	FiltrationGroupComponent
);

export { FiltrationGroupComponentWithOutsideClick as FiltrationGroupComponent };
