import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { LabelButton } from "./components";
import { StateProps, CallbackProps } from "./types";

import "./FiltrationGroupComponent.scss";

type Props = StateProps & CallbackProps;

interface StateDefaultProps {
	horizontalBracket: [];
	verticalBracket: boolean;
}

export class FiltrationGroupComponent extends React.Component<Props> {
	public state: StateDefaultProps = {
		horizontalBracket: [],
		verticalBracket: false
	};
	private minHeight = 25;
	private marginTop = 2;
	private rangeOfValues = 2;
	private kitFiltrationRef = React.createRef<HTMLUListElement>();
	private kitFiltrationLabelRef = React.createRef<HTMLDivElement>();

	public moveLabelAtCenterOfBracket = () => {
		const ref = this.kitFiltrationRef.current;
		const { minHeight, rangeOfValues } = this;

		if (ref) {
			const label: HTMLElement | null = ref.querySelector(
				".kit-filtration-group__label"
			);
			if (label && ref.lastElementChild) {
				let height = 0;
				const childElement = ref.lastElementChild;
				const childElementRect = childElement.getBoundingClientRect();
				const parentElementRect = ref.getBoundingClientRect();
				const lastElement = childElement.classList.contains(
					"kit-filtration-group"
				);

				if (lastElement) {
					const childLabel = childElement.querySelector(
						".kit-filtration-group__label"
					);
					if (childLabel) {
						const childLabelRect = childLabel.getBoundingClientRect();
						height =
							parentElementRect.height -
							childElementRect.height +
							childLabelRect.height;
					}
				} else {
					height =
						parentElementRect.height -
						(childElementRect.height === 1
							? minHeight
							: childElementRect.height) +
						minHeight;
				}

				if (height < minHeight - rangeOfValues) {
					height = 0;
				}

				label.style.height = `${height}px`;
			}
		}

		window.addEventListener("load", this.moveLabelAtCenterOfBracket);
		window.addEventListener("resize", this.moveLabelAtCenterOfBracket);
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
			this.setState({
				verticalBracket: !verticalBracket
			});
		}
	};

	public handleCreateHorizontalBrackets = () => {
		const { horizontalBracket } = this.state;
		let horizontalBrackets = [] as any;
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
							horizontalBrackets = [
								...horizontalBrackets,
								this.handleHorizontalBracket(child)
							];
						}

						if (
							index === ref.childNodes.length - 1 &&
							child.classList.contains("kit-filtration-group")
						) {
							horizontalBrackets = [
								...horizontalBrackets,
								this.handleHorizontalBracket(child, true)
							];
						}

						if (!child.classList.contains("kit-filtration-group")) {
							horizontalBrackets = [
								...horizontalBrackets,
								this.handleHorizontalBracket(child)
							];
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
		const { minHeight, marginTop } = this;

		let positionTop = child.offsetTop - 2;

		if (lastChildGroup) {
			const childLabel: HTMLElement | null = child.querySelector(
				".kit-filtration-group__label"
			);
			if (childLabel) {
				positionTop =
					child.offsetTop +
					childLabel.clientHeight -
					minHeight -
					marginTop;
			}
		}

		return { positionTop };
	};

	public componentDidMount() {
		this.moveLabelAtCenterOfBracket();
		this.handleCreateVerticalBrackets();
		this.handleCreateHorizontalBrackets();

		const labelRef = this.kitFiltrationLabelRef.current;
		if (labelRef) {
			labelRef.addEventListener(
				"mouseover",
				this.handleHoverAddClassLabel
			);
		}
	}

	public componentWillUnmount() {
		window.removeEventListener("load", this.moveLabelAtCenterOfBracket);
		window.removeEventListener("resize", this.moveLabelAtCenterOfBracket);

		const labelRef = this.kitFiltrationLabelRef.current;
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
	}

	public componentDidUpdate() {
		this.moveLabelAtCenterOfBracket();
		this.handleCreateHorizontalBrackets();
		this.handleCreateVerticalBrackets();
	}

	public render() {
		const { verticalBracket, horizontalBracket } = this.state;

		const {
			groupType,
			andLabel,
			orLabel,
			shouldShowLabel,
			children,
			onGroupTypeToggle,
			state
		} = this.props;

		const labelMap = {
			and: andLabel,
			or: orLabel
		};

		const renderInner = this.renderInnerComponents();

		const VerticalBracket = () => (
			<>
				{verticalBracket && (
					<span className="kit-filtration-group__label-vertical-bracket" />
				)}
			</>
		);

		const HorizontalBracket = () => (
			<>
				{horizontalBracket.map(({ positionTop }: any, index) => (
					<span
						key={index + positionTop}
						className="kit-filtration-group__label-horizontal-bracket"
						style={{ top: positionTop }}
					/>
				))}
			</>
		);

		return (
			<ul
				ref={this.kitFiltrationRef}
				className={cn("kit-filtration-group", {
					"kit-filtration-group_edit": state === "edit",
					"kit-filtration-group_shaded": state === "shaded",
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
					<div className="kit-filtration-group__label-line" />
					{shouldShowLabel && (
						<span className="kit-filtration-group__label-text">
							{state === "edit" ? (
								<LabelButton
									onToggle={onGroupTypeToggle}
									types={labelMap}
									activeType={groupType}
								/>
							) : (
								labelMap[groupType]
							)}
						</span>
					)}
					<VerticalBracket />
					<HorizontalBracket />
				</div>
				{renderInner}
			</ul>
		);
	}

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
			onConditionRemove,
			onConditionStateToggle,
			shouldShowLabel
		} = this.props;

		if (state === "view" || state === "shaded") {
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
					key="remove"
					onClick={onConditionRemove}
					className="kit-filtration-group__remove"
					type="button"
				>
					<IconSvg type="trash" />
				</button>
				<button
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
