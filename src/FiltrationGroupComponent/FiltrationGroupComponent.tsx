import cn from "classnames";
import { useContext, useEffect, useMemo, useRef } from "react";
import * as React from "react";
import { ActionsDropdown } from "../ActionsDropdown";
import { FilterWrapperContext } from "../FilterWrapper";
import { neutralZoneClass, useClickOutside } from "../HOOKs";
import { IconSvg } from "../IconSvg";
import { LabelButton } from "./components";
import "./FiltrationGroupComponent.scss";
import { ICallbackProps, IStateProps, SearchClasses } from "./types";
import { searchFirstLastElement } from "./utils";

type Props = IStateProps & ICallbackProps;

// Менять только высоту, остальные правки делать в стилях!
const MIN_HEIGHT = 32;

const FiltrationGroupComponent = ({
	groupType,
	andLabel,
	orLabel,
	shouldShowLabel,
	children,
	onGroupTypeToggle,
	state,
	onConditionRemove,
	shouldShowDuplicateButton,
	onConditionCopy,
	shouldShowButtons,
	addGroupConditionButton,
	addSimpleConditionButton,
	onConditionStateToggle,
	moreConditionToggleCaption,
	moreActions
}: Props) => {
	const context = useContext(FilterWrapperContext);
	const shouldRerenderBrackets = useRef(false);

	const classes = Object.values(SearchClasses);
	const kitFiltrationRef = React.useRef<HTMLUListElement>(null);
	const kitFiltrationCloseRef = React.useRef<HTMLButtonElement>(null);
	const kitFiltrationLabelRef = React.useRef<HTMLDivElement>(null);
	const kitFiltrationLabelLineRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		calculateMainVerticalBracket();
	});

	useMemo(
		() => {
			if (context) {
				if (shouldRerenderBrackets.current) {
					context.rerenderBrackets();
				} else {
					shouldRerenderBrackets.current = true;
				}
			}
		},
		[children, state]
	);

	const calculateMainVerticalBracket = () => {
		let heightGroup = 0;
		let heightLine = 0;
		let positionTop = 0;
		const groupRef = kitFiltrationRef.current;
		const labelRef = kitFiltrationLabelRef.current;
		const labelLineRef = kitFiltrationLabelLineRef.current;
		const searchClasses = classes;

		if (groupRef && labelRef && labelLineRef) {
			const firstChildElement: HTMLElement | null = searchFirstLastElement(
				groupRef,
				searchClasses,
				"first"
			);

			const lastChildElement: HTMLElement | null = searchFirstLastElement(
				groupRef,
				searchClasses,
				"last"
			);

			const groupRefHeight = groupRef.clientHeight;
			const firstChildElementHeight = firstChildElement
				? firstChildElement.clientHeight
				: 0;
			const lastChildElementHeight = lastChildElement
				? lastChildElement.clientHeight
				: 0;

			if (firstChildElement) {
				if (
					firstChildElement.classList.contains(
						SearchClasses.KitFiltrationGroup
					)
				) {
					const labelLine = firstChildElement.querySelector(
						".kit-filtration-group__label-line"
					) as HTMLDivElement;
					let labelLineMiddle = 0;

					if (labelLine) {
						const { offsetTop, offsetHeight } = labelLine;

						labelLineMiddle = offsetTop + offsetHeight / 2;
					}

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
				if (
					lastChildElement.classList.contains(
						SearchClasses.KitFiltrationGroup
					)
				) {
					const labelLine = lastChildElement.querySelector(
						".kit-filtration-group__label-line"
					) as HTMLDivElement;

					let withOutLine = 0;
					let labelLineMiddle = 0;

					if (labelLine) {
						const height = labelLine.clientHeight;
						const offsetTop = labelLine.offsetTop;

						withOutLine = lastChildElementHeight - height;
						labelLineMiddle = height / 2 - offsetTop;
					}

					heightLine += withOutLine + labelLineMiddle;
				} else if (
					lastChildElement.classList.contains(
						SearchClasses.KitFiltrationCondition
					)
				) {
					const itemText = lastChildElement.querySelector(
						".kit-filtration-condition__item-text"
					);
					const itemTextHeight = itemText ? itemText.clientHeight : 0;

					heightGroup += lastChildElementHeight - itemTextHeight;

					heightLine += lastChildElementHeight - MIN_HEIGHT / 2;
				} else if (
					lastChildElement.classList.contains(
						SearchClasses.KitFiltrationGroupButtons
					)
				) {
					heightLine += MIN_HEIGHT / 2;
				}
			}

			labelRef.style.height = `${groupRefHeight - heightGroup}px`;

			if (firstChildElement && lastChildElement) {
				labelLineRef.style.height = `${groupRefHeight - heightLine}px`;
			} else {
				labelLineRef.style.height = "0px";
			}

			if (positionTop !== 0) {
				labelLineRef.style.top = `${positionTop}px`;
			} else {
				labelLineRef.style.top = `${MIN_HEIGHT / 2}px`;
			}
		}
	};

	const handleHoverAddClassLabel = () => {
		const labelRef = kitFiltrationLabelRef.current;

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
		}
	};

	const handleHoverRemoveClassLabel = () => {
		const labelRef = kitFiltrationLabelRef.current;

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

	const renderGroupButtons = () => {
		const hasChildren = React.Children.count(children) === 0;

		if (
			hasChildren &&
			shouldShowLabel &&
			(state === "view" || state === "shaded" || state === "readOnly")
		) {
			return false;
		}

		return (
			shouldShowButtons && (
				<div
					className={cn("kit-filtration-group__buttons", {
						"kit-filtration-group__buttons_no-children":
							hasChildren && !shouldShowLabel
					})}
				>
					{addSimpleConditionButton}
					{addGroupConditionButton}
				</div>
			)
		);
	};

	const renderGroupClose = () => {
		if (state === "view" || state === "shaded" || state === "readOnly") {
			return false;
		}

		return (
			<button
				ref={kitFiltrationCloseRef}
				key="toggle"
				onClick={onConditionStateToggle}
				type="button"
				className="kit-filtration-group__close"
				onMouseOver={handleHoverAddClassLabel}
				onMouseOut={handleHoverRemoveClassLabel}
			>
				<IconSvg type="close" />
			</button>
		);
	};

	const renderInnerComponents = () => {
		return (
			<>
				{renderGroupClose()}
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

	const handleStateToggle = () => {
		if (state === "edit" && onConditionStateToggle) {
			onConditionStateToggle();
		}
	};

	useClickOutside(kitFiltrationRef, handleStateToggle, state === "edit");

	return (
		<ul
			ref={kitFiltrationRef}
			className={cn(
				"kit-filtration-group",
				`kit-filtration-group_${groupType}`,
				{
					"kit-filtration-group_edit": state === "edit",
					"kit-filtration-group_no-label": !shouldShowLabel,
					"kit-filtration-group_not-children": !anyChildren,
					"kit-filtration-group_read-only": state === "readOnly",
					"kit-filtration-group_shaded": state === "shaded"
				}
			)}
		>
			<div
				ref={kitFiltrationLabelRef}
				className={cn(
					"kit-filtration-group__label",
					`kit-filtration-group__label_hover_${groupType}`
				)}
				onClick={handleGroupLabelClick}
				onMouseOver={handleHoverAddClassLabel}
				onMouseOut={handleHoverRemoveClassLabel}
			/>
			<div
				ref={kitFiltrationLabelLineRef}
				className={cn("kit-filtration-group__label-line", {
					[`kit-filtration-group__label-line_${groupType}`]: shouldShowLabel
				})}
				onClick={handleGroupLabelClick}
				onMouseOver={handleHoverAddClassLabel}
				onMouseOut={handleHoverRemoveClassLabel}
			>
				<div className="kit-filtration-group__label-line-vertical">
					{shouldShowLabel && (
						<div className="kit-filtration-group__label-text">
							{state === "edit" ? (
								<div
									className={cn(
										"kit-filtration-group__label-text-buttons",
										`kit-filtration-group__label-text-buttons_${groupType}`
									)}
								>
									{moreActions && moreActions.length && (
										<ActionsDropdown
											className={cn(
												"kit-filtration-group__more",
												neutralZoneClass
											)}
											toggleBtnText={
												moreConditionToggleCaption || ""
											}
											positionDropdown="right"
										>
											{moreActions.map((props, index) => (
												<ActionsDropdown.Action
													{...props}
													key={index}
												/>
											))}
										</ActionsDropdown>
									)}
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
						</div>
					)}
				</div>
				<div className="kit-filtration-group__label-line-horizontal" />
			</div>
			{renderInner}
		</ul>
	);
};

export { FiltrationGroupComponent };
