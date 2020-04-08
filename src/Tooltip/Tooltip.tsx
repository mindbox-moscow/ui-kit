import cn from "classnames";
import * as React from "react";
import { useClickOutside } from "../HOOKs";
import { IconSvg } from "../IconSvg";
import { OverflowVisibleContainer } from "../OverflowVisibleContainer";
import "./Tooltip.scss";

interface IProps {
	title: string | JSX.Element;
	position?: "top" | "bottom";
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
	const refTitle = React.useRef<HTMLDivElement>(null);
	const refOverflowVisibleContainer = React.useRef<HTMLDivElement>(null);

	const handleShowTooltip = () => {
		setIsShow(true);
	};

	const handleHideTooltip = () => {
		setIsShow(false);
	};

	if (!children) {
		return (
			<div className={cn("kit-tooltip", className)}>
				<div className="kit-tooltip__title">{title}</div>
			</div>
		);
	}

	const tooltipContent = (
		<div
			onMouseEnter={showByClick ? undefined : handleShowTooltip}
			onMouseLeave={showByClick ? undefined : handleHideTooltip}
			className={cn(
				"kit-tooltip__content",
				`kit-tooltip__content_${position}`,
				{
					"kit-tooltip__content_show": isShow
				}
			)}
		>
			{showByClick && (
				<button
					type="button"
					onClick={handleHideTooltip}
					className="kit-tooltip__close"
				>
					<IconSvg type="close" className="kit-tooltip__close-icon" />
				</button>
			)}
			{children}
		</div>
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
