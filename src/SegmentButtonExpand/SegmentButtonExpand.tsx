import cn from "classnames";
import * as React from "react";
import { FiltrationConditionComponentContext } from "../FiltrationConditionComponent";
import { IconSvg } from "../IconSvg";
import { ISegmentButtonExpandProps as Props } from "./types";

import "./SegmentButtonExpand.scss";

export const SegmentButtonExpand: React.FC<Props> = ({
	onClick,
	isOpen,
	hidden,
	disabled,
	filterActionCaption,
	filterActionClick,
	filterActionShow,
	children
}) => {
	const context = React.useContext(FiltrationConditionComponentContext);

	React.useEffect(
		() => {
			if (context) {
				const renderPopover = context.renderPopover;

				if (renderPopover) {
					renderPopover(children, filterAction(), isOpen && !hidden);
				}
			}
		},
		[children, isOpen, hidden]
	);

	const filterAction = () => {
		return (
			filterActionShow && (
				<button
					className={"kit-segment-button-expand__button-filter"}
					type="button"
					onClick={handleClick(filterActionClick)}
				>
					<IconSvg
						type="filter"
						className="kit-segment-button-expand__button-filter-icon"
					/>
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
				"kit-segment-button-expand_hide": hidden,
				"kit-segment-button-expand_open": isOpen && !hidden
			})}
			type="button"
			onClick={handleClick(onClick, disabled)}
		>
			<IconSvg
				type="segment-expand"
				className="kit-segment-button-expand__icon"
			/>
		</button>
	);
};
