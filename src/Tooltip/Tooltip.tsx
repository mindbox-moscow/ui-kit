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
		viewportOverflowCorrection,
		setViewportOverflowCorrection
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
			if (isShow) {
				const contentContainer = refContent.current;
				const viewportWidth = document.documentElement.clientWidth;
				const viewportHeight = window.innerHeight;

				if (viewportHeight) {
					setViewportOverflowCorrection(null);
				}

				if (contentContainer) {
					const {
						left,
						width,
						top,
						height
					} = contentContainer.getBoundingClientRect();
					const offsetLeft = width + left;
					const offsetTopCenter = top - viewportHeight / 2;
					let transformX = 0;

					if (left < 0) {
						transformX = Math.abs(left);
					} else if (viewportWidth < offsetLeft) {
						transformX = viewportWidth - offsetLeft;
					} else if (top < 0) {
						setViewportOverflowCorrection("bottom");
					} else if (offsetTopCenter + height > viewportHeight / 2) {
						setViewportOverflowCorrection("top");
					}

					if (transformX !== 0) {
						contentContainer.style.transform = `translate(${transformX}px ,0)`;
					}
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
					`kit-tooltip__arrow_${viewportOverflowCorrection ||
						position}`
				)}
			/>
			<div
				ref={refContent}
				onMouseEnter={showByClick ? undefined : handleShowTooltip}
				onMouseLeave={showByClick ? undefined : handleHideTooltip}
				className={cn(
					"kit-tooltip__content",
					`kit-tooltip__content_${viewportOverflowCorrection ||
						position}`
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
