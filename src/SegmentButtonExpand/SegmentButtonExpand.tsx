import cn from "classnames";
import * as React from "react";
import { FiltrationConditionComponentContext } from "../FiltrationConditionComponent/FiltrationConditionComponentContext";
import { IconSvg } from "../IconSvg";
import { SegmentButtonExpandProps as Props } from "./types";

import "./SegmentButtonExpand.scss";

export const SegmentButtonExpand: React.FC<Props> = ({
	onClick,
	isOpen,
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
				renderPopover(children, filterAction(), isOpen);
			}
		},
		[children, isOpen]
	);

	const filterAction = () => {
		return (
			filterActionShow && (
				<button
					className="kit-segment-button-expand__button-filter"
					type="button"
					onClick={handleClick(filterActionClick)}
				>
					<IconSvg type="filter" />
					{filterActionCaption}
				</button>
			)
		);
	};

	const handleClick = (onClick: () => void, disabled?: boolean) => (
		e: React.MouseEvent
	) => {
		if (!disabled) {
			e.stopPropagation();
			onClick();
		}
	};

	return (
		<button
			className={cn("kit-segment-button-expand", {
				"kit-segment-button-expand_open": isOpen
			})}
			type="button"
			onClick={handleClick(onClick, disabled)}
		>
			<IconSvg type="segment-expand" />
		</button>
	);
};

// export class SegmentButtonExpand extends React.Component<Props> {
// 	public static context:
// 		| ((children: React.ReactNode, filterAction: React.ReactNode) => void)
// 		| null;

// 	public componentDidMount() {
// 		const { isOpen, children } = this.props;
// 		const renderPopover = this.context;

// 		if (isOpen) {
// 			renderPopover(children, this.filterAction());
// 		}
// 	}

// 	public componentDidUpdate(prevProps: Props) {
// 		const { isOpen, children } = this.props;
// 		const renderPopover = this.context;

// 		if (isOpen !== prevProps.isOpen) {
// 			renderPopover(children, this.filterAction());
// 		}
// 	}

// 	public handleClick = (onClick: () => void, disabled?: boolean) => (
// 		e: React.MouseEvent
// 	) => {
// 		if (!disabled) {
// 			e.stopPropagation();
// 			onClick();
// 		}
// 	};

// 	public filterAction = () => {
// 		const {
// 			filterActionCaption,
// 			filterActionClick,
// 			filterActionShow
// 		} = this.props;

// 		return (
// 			filterActionShow && (
// 				<button
// 					className="kit-segment-button-expand__button-filter"
// 					type="button"
// 					onClick={this.handleClick(filterActionClick)}
// 				>
// 					<IconSvg type="filter" />
// 					{filterActionCaption}
// 				</button>
// 			)
// 		);
// 	};

// 	public render() {
// 		const { onClick, isOpen, disabled } = this.props;

// 		return (
// 			<>
// 				<button
// 					className={cn("kit-segment-button-expand", {
// 						"kit-segment-button-expand_open": isOpen
// 					})}
// 					type="button"
// 					onClick={this.handleClick(onClick, disabled)}
// 				>
// 					<IconSvg type="segment-expand" />
// 				</button>
// 			</>
// 		);
// 	}
// }

// SegmentButtonExpand.contextType = FiltrationConditionComponentContext;
