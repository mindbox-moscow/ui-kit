import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import { HorizontalBracket, LabelButton } from "./components";
import { CallbackProps, SearchClasses, StateProps } from "./types";

import "./FiltrationGroupComponent.scss";

type Props = StateProps & CallbackProps;

interface ItemsRootElement {
	element: HTMLElement;
	height: number;
}

interface State {
	horizontalBracket: ItemsRootElement[];
	verticalBracket: boolean;
}

type SearchElementType = "first" | "last";

// Менять только высоту, остальные правки делать в стилях!
const MIN_HEIGHT = 31;
const WIDTH_BRACKET = 2;

export class FiltrationGroupComponent extends React.Component<Props, State> {
	public state = {
		horizontalBracket: [],
		verticalBracket: false
	};
	private classes = Object.values(SearchClasses);
	private kitFiltrationRef = React.createRef<HTMLUListElement>();
	private kitFiltrationCloseRef = React.createRef<HTMLButtonElement>();
	private kitFiltrationLabelRef = React.createRef<HTMLDivElement>();
	private kitFiltrationLabelButtonsRef = React.createRef<HTMLDivElement>();
	private kitFiltrationLabelLineRef = React.createRef<HTMLDivElement>();

	public moveLabelAtCenterOfBracket = () => {
		let heightGroup = 0;
		let heightLine = 0;
		let positionTop = 0;
		const groupRef = this.kitFiltrationRef.current;
		const labelRef = this.kitFiltrationLabelRef.current;
		const labelLineRef = this.kitFiltrationLabelLineRef.current;

		const searchClasses = this.classes;

		if (groupRef && labelRef && labelLineRef) {
			const firstChildElement: HTMLElement | null = this.searchFirstLastElement(
				groupRef,
				searchClasses,
				"first"
			);

			const lastChildElement: HTMLElement | null = this.searchFirstLastElement(
				groupRef,
				searchClasses,
				"last"
			);

			// const groupItems = this.getChildElements(groupRef, searchClasses);

			if (firstChildElement) {
				if (
					firstChildElement.classList.contains(
						SearchClasses.KitFiltrationGroup
					)
				) {
					// const countEmptyGroup = this.getCountEmptyGroup(
					// 	firstChildElement,
					// 	searchClasses
					// );
					// console.log(firstChildElement, countEmptyGroup);

					const firstChildElementHeight = firstChildElement.getBoundingClientRect()
						.height;

					const theLine = firstChildElement.querySelector(
						".kit-filtration-group__label-line"
					) as HTMLDivElement;
					const theMiddle =
						theLine.offsetTop + theLine.offsetHeight / 2;

					heightLine +=
						firstChildElementHeight / 2 -
						(firstChildElementHeight / 2 - theMiddle);

					positionTop = theMiddle;
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
				const lastChildChildrenElements: ItemsRootElement[] = this.getChildElements(
					lastChildElement,
					searchClasses
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
					WIDTH_BRACKET}px`;
			} else {
				labelLineRef.style.height = "0px";
			}

			if (positionTop !== 0) {
				labelLineRef.style.top = `${positionTop - WIDTH_BRACKET}px`;
			}
		}

		window.addEventListener("load", this.moveLabelAtCenterOfBracket);
		window.addEventListener("resize", this.moveLabelAtCenterOfBracket);
	};

	public getCountEmptyGroup: any = (
		rootElement: HTMLElement,
		searchClasses: string[],
		count: number = 0
	) => {
		const childElements = this.getChildElements(rootElement, searchClasses);

		if (
			childElements.length > 0 &&
			childElements.length <= 2 &&
			childElements[0].element.classList.contains(
				SearchClasses.KitFiltrationGroup
			)
		) {
			count++;
			return this.getCountEmptyGroup(
				childElements[0].element,
				searchClasses,
				count
			);
		} else {
			return count;
		}
	};

	public getChildElements = (
		rootElement: HTMLElement,
		searchClasses: string[]
	) => {
		const items: ItemsRootElement[] = [];
		rootElement.childNodes.forEach((item: HTMLElement) => {
			if (
				searchClasses.some(className =>
					item.classList.contains(className)
				)
			) {
				items.push({
					element: item,
					height: item.getBoundingClientRect().height
				});
			}
		});

		return items;
	};

	public searchFirstLastElement = (
		searchableElement: HTMLElement,
		searchClasses: string[],
		search: SearchElementType
	): HTMLElement | null => {
		const children = Array.from(
			searchableElement.children
		) as HTMLElement[];

		if (search === "last") {
			children.reverse();
		}

		return (
			children.find((item: HTMLElement) => {
				return searchClasses.some(className =>
					item.classList.contains(className)
				);
			}) || null
		);
	};

	public handleHoverAddClassLabel = () => {
		const labelRef = this.kitFiltrationLabelRef.current;
		const closeRef = this.kitFiltrationCloseRef.current;

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
					this.handleHoverRemoveClassLabel
				);
			}

			labelRef.addEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}
	};

	public handleHoverRemoveClassLabel = () => {
		const labelRef = this.kitFiltrationLabelRef.current;
		const closeRef = this.kitFiltrationCloseRef.current;

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
					this.handleHoverRemoveClassLabel
				);
			}

			labelRef.removeEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}
	};

	public handleCreateVerticalBrackets = () => {
		const { verticalBracket } = this.state;

		let isVerticalBracket = false;

		if (this.kitFiltrationRef && this.kitFiltrationRef.current) {
			const ref = this.kitFiltrationRef.current;
			const parentNode = ref.parentNode as HTMLElement;

			if (parentNode.classList.contains("kit-filtration-condition")) {
				isVerticalBracket = true;
			}
		}

		if (isVerticalBracket !== verticalBracket) {
			this.setState(state => ({
				verticalBracket: !state.verticalBracket
			}));
		}
	};

	public handleCreateHorizontalBrackets = () => {
		const groupRef = this.kitFiltrationRef.current;
		const { horizontalBracket } = this.state;
		let repeater = true;

		const searchClasses = this.classes;

		if (groupRef) {
			const groupItems = this.getChildElements(groupRef, searchClasses);

			if (horizontalBracket.length !== groupItems.length) {
				this.setState({
					horizontalBracket: groupItems
				});
			} else {
				horizontalBracket.map((item: ItemsRootElement, index) => {
					if (repeater) {
						if (item.height !== groupItems[index].height) {
							this.setState({
								horizontalBracket: groupItems
							});
							repeater = false;
						}
					}
				});
			}
		}
	};

	public componentDidMount() {
		this.moveLabelAtCenterOfBracket();
		this.handleCreateVerticalBrackets();
		this.handleCreateHorizontalBrackets();

		const labelRef = this.kitFiltrationLabelRef.current;
		const closeRef = this.kitFiltrationCloseRef.current;

		if (labelRef) {
			labelRef.addEventListener(
				"mouseover",
				this.handleHoverAddClassLabel
			);
		}

		if (closeRef) {
			closeRef.addEventListener(
				"mouseover",
				this.handleHoverAddClassLabel
			);
		}
	}

	public componentWillUnmount() {
		window.removeEventListener("load", this.moveLabelAtCenterOfBracket);
		window.removeEventListener("resize", this.moveLabelAtCenterOfBracket);

		const labelRef = this.kitFiltrationLabelRef.current;
		const closeRef = this.kitFiltrationCloseRef.current;

		if (labelRef) {
			labelRef.removeEventListener(
				"mouseover",
				this.handleHoverAddClassLabel
			);
			labelRef.removeEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}

		if (closeRef) {
			closeRef.removeEventListener(
				"mouseover",
				this.handleHoverAddClassLabel
			);
			closeRef.removeEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}
	}

	public componentDidUpdate() {
		this.moveLabelAtCenterOfBracket();
		this.handleCreateHorizontalBrackets();
		this.handleCreateVerticalBrackets();
	}

	public render() {
		const {
			groupType,
			andLabel,
			orLabel,
			shouldShowLabel,
			children,
			onGroupTypeToggle,
			state,
			onConditionRemove
		} = this.props;

		const { horizontalBracket } = this.state;

		const labelMap = {
			and: andLabel,
			or: orLabel
		};

		const renderInner = this.renderInnerComponents();
		const verticalBracket = this.verticalBracket();

		return (
			<ul
				ref={this.kitFiltrationRef}
				className={cn("kit-filtration-group", {
					"kit-filtration-group_edit": state === "edit",
					"kit-filtration-group_shaded": state === "shaded",
					"kit-filtration-group_read-only": state === "readOnly",
					"kit-filtration-group_not-children": children === undefined
				})}
			>
				<div
					ref={this.kitFiltrationLabelRef}
					className={cn(
						"kit-filtration-group__label",
						`kit-filtration-group__label_hover_${groupType}`,
						{
							[`kit-filtration-group__label_${groupType}`]: shouldShowLabel
						}
					)}
					onClick={this.handleGroupLabelClick}
				>
					<div
						ref={this.kitFiltrationLabelLineRef}
						className="kit-filtration-group__label-line"
					>
						{shouldShowLabel && (
							<>
								<span className="kit-filtration-group__label-text">
									{state === "edit" ? (
										<>
											<div
												ref={
													this
														.kitFiltrationLabelButtonsRef
												}
												className="kit-filtration-group__label-text-height"
											/>
											<OverflowVisibleContainer
												className={cn(
													"kit-filtration-group__label-text-buttons",
													`kit-filtration-group__label-text-buttons_${groupType}`
												)}
												parentRef={
													this
														.kitFiltrationLabelButtonsRef
												}
												onNeutralZoneClick={null}
											>
												{this.renderCopyButton()}
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
											</OverflowVisibleContainer>
										</>
									) : (
										labelMap[groupType]
									)}
								</span>
							</>
						)}
					</div>
					<HorizontalBracket
						brackets={horizontalBracket}
						minHeight={MIN_HEIGHT}
						widthBracket={WIDTH_BRACKET}
					/>
					{verticalBracket}
				</div>
				{renderInner}
			</ul>
		);
	}

	private renderCopyButton = () => {
		if (!this.props.shouldShowDuplicateButton) {
			return null;
		}
		return (
			<button
				key="copy"
				onClick={this.props.onConditionCopy}
				className="kit-filtration-group__copy"
				type="button"
			>
				<IconSvg type="duplicate" />
			</button>
		);
	};

	private verticalBracket = () => {
		const { verticalBracket } = this.state;

		return (
			<>
				{verticalBracket && (
					<span className="kit-filtration-group__label-vertical-bracket" />
				)}
			</>
		);
	};

	private renderGroupButtons = (noChildren?: boolean) => {
		const {
			addSimpleConditionButton,
			addGroupConditionButton,
			shouldShowButtons
		} = this.props;

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

	private renderInnerComponents = () => {
		const {
			state,
			children,
			onConditionStateToggle,
			shouldShowLabel
		} = this.props;

		if (state === "view" || state === "shaded" || state === "readOnly") {
			if (React.Children.count(children) === 0) {
				if (!shouldShowLabel) {
					return this.renderGroupButtons(true);
				} else {
					return null;
				}
			}

			return (
				<>
					{children}
					{this.renderGroupButtons()}
				</>
			);
		}

		return (
			<>
				<button
					ref={this.kitFiltrationCloseRef}
					key="toggle"
					onClick={onConditionStateToggle}
					type="button"
					className="kit-filtration-group__close"
				>
					<IconSvg type="close" />
				</button>
				{children}
				{this.renderGroupButtons()}
			</>
		);
	};

	private handleGroupLabelClick = () => {
		if (this.props.state === "edit") {
			return;
		}

		this.props.onConditionStateToggle();
	};
}
