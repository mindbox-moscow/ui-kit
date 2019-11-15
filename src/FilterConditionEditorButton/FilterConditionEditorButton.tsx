import cn from "classnames";
import * as React from "react";
import {
	FilterConditionSelector,
	Props as SelectorProps
} from "../FilterConditionSelector";
import { Context, FilterWrapperContext } from "../FilterWrapper";
import { IconSvg, IconSvgTypes } from "../IconSvg";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import "./FilterConditionEditorButton.scss";
import { Props as ButtonProps } from "./types";

type Props = ButtonProps &
	SelectorProps & {
		iconType?: IconSvgTypes;
	};

export class FilterConditionEditorButton extends React.Component<Props> {
	public headerOffsetTop: number = 0;
	private refButton = React.createRef<HTMLButtonElement>();
	private refBreackPoint = React.createRef<HTMLDivElement>();
	private observer: IntersectionObserver;

	public componentDidMount() {
		const context: Context = this.context;
		const refFilterWrapper = context.refFilterWrapper
			? context.refFilterWrapper.current
			: null;
		const refButton = this.refButton.current;
		const refBreackPoint = this.refBreackPoint.current;

		if (refButton && refBreackPoint && refFilterWrapper) {
			const { height } = refButton.getBoundingClientRect();
			const { top } = refFilterWrapper.getBoundingClientRect();

			this.headerOffsetTop = top;
			refBreackPoint.style.top = `${height}px`;
		}

		const observOptions = {
			rootMargin: `-${this.headerOffsetTop}px 0px 0px 0px`,
			threshold: 1.0
		};

		if (refBreackPoint) {
			this.observer = new IntersectionObserver(
				this.checkCollapsed,
				observOptions
			);
			this.observer.observe(refBreackPoint);
		}
	}

	public checkCollapsed = (entries: IntersectionObserverEntry[]): void => {
		const { isOpened, toggleOpen } = this.props;
		const refBreackPoint = this.refBreackPoint.current;

		const { isIntersecting } = entries.find(
			({ target }) => target === refBreackPoint
		) as IntersectionObserverEntry;

		!isIntersecting && isOpened ? toggleOpen() : null;
		console.log(isIntersecting);
	};

	public focus = () => {
		(this.refButton.current as HTMLButtonElement).focus();
	};

	public render() {
		const {
			toggleOpen,
			label,
			isOpened,
			iconType,
			autoFocus,
			...otherProps
		} = this.props;

		return (
			<div className="kit-filter-editor">
				<div
					ref={this.refBreackPoint}
					className="kit-filter-editor__breackpoint"
				/>
				<button
					autoFocus={autoFocus}
					ref={this.refButton}
					className={cn("kit-filter-editor__btn", {
						"kit-filter-editor__btn_open": isOpened
					})}
					type="button"
					onClick={toggleOpen}
				>
					{iconType && <IconSvg type={iconType} />}
					{label}
				</button>
				{isOpened && (
					<OverflowVisibleContainer
						parentRef={this.refButton}
						onNeutralZoneClick={toggleOpen}
					>
						<FilterConditionSelector
							{...otherProps}
							onConditionStateToggle={toggleOpen}
						/>
					</OverflowVisibleContainer>
				)}
			</div>
		);
	}
}

FilterConditionEditorButton.contextType = FilterWrapperContext;
