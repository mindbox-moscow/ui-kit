import cn from "classnames";
import * as React from "react";
import { FiltrationConditionComponentContext } from "../FiltrationConditionComponent/FiltrationConditionComponentContext";
import { IconSvg } from "../IconSvg";
import { ISegmentButtonExpandProps as Props } from "./types";

import "./SegmentButtonExpand.scss";

export const SegmentButtonExpand: React.FC<Props> = ({
	onClick,
	isOpen,
	isHideButton,
	disabled,
	filterActionCaption,
	filterActionClick,
	filterActionShow,
	children
}) => {
	const context = React.useContext(FiltrationConditionComponentContext);

	React.useEffect(
		() => {
			const renderPopover = context;
			if (renderPopover) {
				renderPopover(children, filterAction(), isOpen && !isHideButton);
			}
		},
		[children, isOpen, context, isHideButton]
	);

	const filterAction = () => {
		return (
			filterActionShow && (
				<button
					className={"kit-segment-button-expand__button-filter"}
					type="button"
					onClick={handleClick(filterActionClick)}
				>
					<IconSvg type="filter" />
					{filterActionCaption}
				</button>
			)
		);
	};

	const handleClick = (onClickAction?: () => void, isDisabled?: boolean) => (
		e: React.MouseEvent
	) => {
		if (!isDisabled && onClickAction) {
			e.stopPropagation();
			onClickAction();
		}
	};

	return (
		<button
			className={cn("kit-segment-button-expand", {
				"kit-segment-button-expand_hide": isHideButton,
				"kit-segment-button-expand_open": isOpen && !isHideButton
			})}
			type="button"
			onClick={handleClick(onClick, disabled)}
		>
			<IconSvg type="segment-expand" />
		</button>
	);
};
