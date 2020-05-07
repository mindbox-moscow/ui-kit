import cn from "classnames";
import * as React from "react";
import { useClickOutside } from "../HOOKs";
import { IconSvg } from "../IconSvg";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import "./Tooltip.scss";

type Position = "top" | "bottom";

interface IProps {
	title: string | JSX.Element;
	position?: Position;
	showByClick?: boolean;
	className?: string;
}

export const Tooltip: React.FC<IProps> = ({
	title,
	position = "bottom",
	className,
	children,
	showByClick = false
}) => {
	const [isShow, setIsShow] = React.useState(false);
	const [
		viewPortPosition,
		setViewPortPosition
	] = React.useState<Position | null>(null);
	const refTitle = React.useRef<HTMLDivElement>(null);
	const refOverflowVisibleContainer = React.useRef<HTMLDivElement>(null);
	const refContent = React.useRef<HTMLDivElement>(null);

	const handleShowTooltip = () => {
		setIsShow(true);
	};

	const handleHideTooltip = () => {
		setIsShow(false);
	};

	React.useEffect(
		() => {
			const refContentCurrent = refContent.current;
			const viewPortWidth = document.documentElement.clientWidth;
			const viewPortHeight = window.innerHeight;

			if (viewPortHeight) {
				setViewPortPosition(null);
			}

			if (refContentCurrent) {
				const {
					left,
					width,
					top,
					height
				} = refContentCurrent.getBoundingClientRect();
				const offsetLeft = width + left;
				const offsetTopCenter = top - viewPortHeight / 2;
				let transformX = 0;

				if (left < 0) {
					transformX = left;
				} else if (viewPortWidth < offsetLeft) {
					transformX = viewPortWidth - offsetLeft;
				} else if (top < 0) {
					setViewPortPosition("bottom");
				} else if (offsetTopCenter + height > viewPortHeight / 2) {
					setViewPortPosition("top");
				}

				if (transformX !== 0) {
					refContentCurrent.style.transform = `translate(${transformX}px ,0)`;
				}
			}
		},
		[isShow]
	);

	if (!children) {
		return (
			<div className={cn("kit-tooltip", className)}>
				<div className="kit-tooltip__title">{title}</div>
			</div>
		);
	}

	const tooltipContent = (
		<>
			<div
				className={cn(
					"kit-tooltip__arrow",
					`kit-tooltip__arrow_${
						viewPortPosition ? viewPortPosition : position
					}`
				)}
			/>
			<div
				ref={refContent}
				onMouseEnter={showByClick ? undefined : handleShowTooltip}
				onMouseLeave={showByClick ? undefined : handleHideTooltip}
				className={cn(
					"kit-tooltip__content",
					`kit-tooltip__content_${
						viewPortPosition ? viewPortPosition : position
					}`
				)}
			>
				{showByClick && (
					<button
						type="button"
						onClick={handleHideTooltip}
						className="kit-tooltip__close"
					>
						<IconSvg
							type="close"
							className="kit-tooltip__close-icon"
						/>
					</button>
				)}
				{children}
			</div>
		</>
	);

	useClickOutside(
		refOverflowVisibleContainer,
		handleHideTooltip,
		isShow && showByClick
	);

	return (
		<div className={cn("kit-tooltip", className)}>
			<div
				onMouseEnter={showByClick ? undefined : handleShowTooltip}
				onMouseLeave={showByClick ? undefined : handleHideTooltip}
				onClick={showByClick ? handleShowTooltip : undefined}
				ref={refTitle}
				className={cn("kit-tooltip__title", {
					"kit-tooltip__title_pointer": showByClick
				})}
			>
				{isShow && !showByClick && (
					<span
						className={cn(
							"kit-tooltip__road",
							`kit-tooltip__road_${position}`
						)}
					/>
				)}
				{title}
			</div>
			{isShow &&
				(showByClick ? (
					<OverflowVisibleContainer
						ref={refOverflowVisibleContainer}
						parentRef={refTitle}
						className="kit-tooltip__popup"
					>
						{tooltipContent}
					</OverflowVisibleContainer>
				) : (
					<OverflowVisibleContainer
						parentRef={refTitle}
						className="kit-tooltip__popup"
					>
						{tooltipContent}
					</OverflowVisibleContainer>
				))}
		</div>
	);
};
