import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import { LabelButton } from "./components";
import { StateProps, CallbackProps } from "./types";

import "./FiltrationGroupComponent.scss";

type Props = StateProps & CallbackProps;

interface State {
	horizontalBracket: number[];
	verticalBracket: boolean;
}

type SERACH_ELEMENT = "first" | "last";

type ItemsRootElement = {
	element: HTMLElement;
	height: number;
};

enum SEARCH_CLASSES {
	KitFiltrationGroup = "kit-filtration-group",
	KitFiltrationCondition = "kit-filtration-condition",
	KitFiltrationGroupButtons = "kit-filtration-group__buttons"
}

// Менять только высоту, остальные правки делать в стилях!
const MIN_HEIGHT = 31;
const MARGIN_TOP = 2;

export class FiltrationGroupComponent extends React.Component<Props, State> {
	public state = {
		horizontalBracket: [],
		verticalBracket: false
	};
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

		const searchClasses = Object.keys(SEARCH_CLASSES).map(
			key => SEARCH_CLASSES[key]
		);

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

			const groupItems = this.getChildElements(groupRef, searchClasses);

			if (firstChildElement) {
				const firstChildChildrenElements = this.getChildElements(
					firstChildElement,
					searchClasses
				);

				let height = 0;
				firstChildChildrenElements.forEach(item => {
					height += item.height;
				});

				if (
					firstChildElement.classList.contains(
						SEARCH_CLASSES.KitFiltrationGroup
					)
				) {
					heightLine += firstChildChildrenElements.length
						? height / 2
						: MIN_HEIGHT / 2;

					positionTop =
						firstChildChildrenElements.length > 1 ? height / 2 : 0;
				}

				if (
					firstChildElement.classList.contains(
						SEARCH_CLASSES.KitFiltrationCondition
					)
				) {
					positionTop = MIN_HEIGHT / 2;

					heightLine += MIN_HEIGHT / 2;
				}
			}

			if (lastChildElement) {
				const lastChildChildrenElements = this.getChildElements(
					lastChildElement,
					searchClasses
				);

				if (
					lastChildElement.classList.contains(
						SEARCH_CLASSES.KitFiltrationGroup
					)
				) {
					heightLine +=
						lastChildChildrenElements.length > 1
							? (lastChildChildrenElements.length * MIN_HEIGHT) /
							  2
							: MIN_HEIGHT / 2;

					heightGroup +=
						lastChildChildrenElements.length > 1
							? lastChildElement.getBoundingClientRect().height -
							  lastChildChildrenElements.length * MIN_HEIGHT
							: MIN_HEIGHT / 2;
				}

				if (
					lastChildElement.classList.contains(
						SEARCH_CLASSES.KitFiltrationCondition
					)
				) {
					heightLine +=
						lastChildElement.getBoundingClientRect().height -
						MIN_HEIGHT / 2;
				}

				if (
					lastChildElement.classList.contains(
						SEARCH_CLASSES.KitFiltrationGroupButtons
					)
				) {
					heightLine +=
						groupItems.length > 1 ? MIN_HEIGHT / 2 : MIN_HEIGHT;
				}
			}

			labelRef.style.height = `${groupRef.getBoundingClientRect().height -
				heightGroup}px`;

			if (lastChildElement && firstChildElement) {
				labelLineRef.style.height = `${labelRef.getBoundingClientRect()
					.height - heightLine}px`;
			} else {
				labelLineRef.style.height = `${heightLine}px`;
			}

			if (positionTop !== 0) {
				labelLineRef.style.top = `${positionTop}px`;
			}
		}

		window.addEventListener("load", this.moveLabelAtCenterOfBracket);
		window.addEventListener("resize", this.moveLabelAtCenterOfBracket);
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
		search: SERACH_ELEMENT
	) => {
		const items: HTMLElement[] = [];
		searchableElement.childNodes.forEach((item: HTMLElement) => {
			if (
				searchClasses.some(className =>
					item.classList.contains(className)
				)
			) {
				items.push(item);
			}
		});

		if (items.length) {
			if (search === "first") {
				return items[0];
			} else {
				return items[items.length - 1];
			}
		} else {
			return null;
		}
	};

	public handleHoverAddClassLabel = () => {
		const labelRef = this.kitFiltrationLabelRef.current;
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

			labelRef.addEventListener(
				"mouseout",
				this.handleHoverRemoveClassLabel
			);
		}
	};

	public handleHoverRemoveClassLabel = () => {
		const labelRef = this.kitFiltrationLabelRef.current;
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
		const { horizontalBracket } = this.state;
		let horizontalBrackets: number[] = [];
		let countChildElement = 0;
		if (this.kitFiltrationRef && this.kitFiltrationRef.current) {
			const ref = this.kitFiltrationRef.current;

			ref.childNodes.forEach((item, index) => {
				const child = item as HTMLElement;
				const classNames = [
					"kit-filtration-group__label",
					"kit-filtration-group__remove",
					"kit-filtration-group__close"
				];
				if (
					!classNames.some(className =>
						child.classList.contains(className)
					)
				) {
					if (
						this.kitFiltrationLabelRef &&
						this.kitFiltrationLabelRef.current
					) {
						countChildElement++;
						if (
							countChildElement === 1 &&
							child.classList.contains("kit-filtration-group")
						) {
							horizontalBrackets.push(
								this.handleHorizontalBracket(child)
							);
						}

						if (
							index === ref.childNodes.length - 1 &&
							child.classList.contains("kit-filtration-group")
						) {
							horizontalBrackets.push(
								this.handleHorizontalBracket(child, true)
							);
						}

						if (!child.classList.contains("kit-filtration-group")) {
							horizontalBrackets.push(
								this.handleHorizontalBracket(child)
							);
						}
					}
				}
			});
		}

		if (horizontalBracket.length !== horizontalBrackets.length) {
			this.setState({
				horizontalBracket: horizontalBrackets
			});
		}
	};

	public handleHorizontalBracket = (
		child: HTMLElement,
		lastChildGroup?: boolean
	) => {
		let positionTop = child.offsetTop - 2;

		if (lastChildGroup) {
			const childLabel: HTMLElement | null = child.querySelector(
				".kit-filtration-group__label"
			);
			if (childLabel) {
				positionTop =
					child.offsetTop +
					childLabel.clientHeight -
					MIN_HEIGHT -
					MARGIN_TOP;
			}
		}

		return positionTop;
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
			onConditionRemove,
			onConditionCopy
		} = this.props;

		const labelMap = {
			and: andLabel,
			or: orLabel
		};

		const renderInner = this.renderInnerComponents();
		const horizontalBracket = this.horizontalBracket();
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
											>
												<button
													key="copy"
													onClick={onConditionCopy}
													className="kit-filtration-group__copy"
													type="button"
												>
													<IconSvg type="duplicate" />
												</button>
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
					{horizontalBracket}
					{verticalBracket}
				</div>
				{renderInner}
			</ul>
		);
	}

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

	private horizontalBracket = () => {
		const { horizontalBracket } = this.state;

		return (
			<>
				{horizontalBracket.map((positionTopBracket, index) => (
					<span
						key={index + positionTopBracket}
						className="kit-filtration-group__label-horizontal-bracket"
						style={{ top: positionTopBracket }}
					/>
				))}
			</>
		);
	};

	private renderGroupButtons = (noChildren?: boolean) => {
		const {
			addSimpleConditionButton,
			addGroupConditionButton
		} = this.props;

		return (
			<div
				className={cn("kit-filtration-group__buttons", {
					"kit-filtration-group__buttons_no-children": noChildren
				})}
			>
				{addSimpleConditionButton}
				{addGroupConditionButton}
			</div>
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

			return <>{children}</>;
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
