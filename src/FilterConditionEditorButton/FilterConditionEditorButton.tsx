import cn from "classnames";
import * as React from "react";
import {
	FilterConditionSelector,
	Props as SelectorProps
} from "../FilterConditionSelector";
import { FilterWrapperContext } from "../FilterWrapper";
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
	private refBreakPoint = React.createRef<HTMLDivElement>();
	private observer: IntersectionObserver;

	public componentDidMount() {
		const refFilterWrapper = this.context;
		const refButton = this.refButton.current;
		const refBreakPoint = this.refBreakPoint.current;

		if (refButton && refBreakPoint && refFilterWrapper) {
			const { height } = refButton.getBoundingClientRect();
			const { top } = refFilterWrapper.getBoundingClientRect();

			this.headerOffsetTop = top;
			refBreakPoint.style.top = `${height}px`;
		}

		const observOptions = {
			rootMargin: `-${this.headerOffsetTop}px 0px 0px 0px`,
			threshold: 1.0
		};

		if (refBreakPoint) {
			this.observer = new IntersectionObserver(
				this.checkCollapsed,
				observOptions
			);
			this.observer.observe(refBreakPoint);
		}
	}

	public componentWillUnmount() {
		this.observer.disconnect();
	}

	public checkCollapsed = (entries: IntersectionObserverEntry[]): void => {
		const { isOpened, toggleOpen } = this.props;
		const refBreackPoint = this.refBreakPoint.current;

		const entry = entries.find(
			({ target }) => target === refBreackPoint
		) as IntersectionObserverEntry;

		if (entry && !entry.isIntersecting && isOpened) {
			toggleOpen();
		}
	};

	public focus = () => {
		const refButton = this.refButton.current;
		if (refButton) {
			refButton.focus();
		}
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
					ref={this.refBreakPoint}
					className="kit-filter-editor__breakpoint"
				/>
				<button
					autoFocus={autoFocus}
					ref={this.refButton}
					className={cn("kit-filter-editor__btn", {
						"kit-filter-editor__btn_open": isOpened
					})}
					type="button"
					onMouseDown={toggleOpen}
				>
					{iconType && <IconSvg type={iconType} />}
					{label}
				</button>
				{isOpened && (
					<OverflowVisibleContainer
						parentRef={this.refButton}
						onClickOutside={toggleOpen}
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
