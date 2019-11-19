import cn from "classnames";
import * as React from "react";
import { FiltrationConditionComponentContext } from "../FiltrationConditionComponent/FiltrationConditionComponentContext";
import { IconSvg } from "../IconSvg";
import { SegmentButtonExpandProps as Props } from "./types";

import "./SegmentButtonExpand.scss";

export class SegmentButtonExpand extends React.Component<Props> {
	public static context:
		| ((children: React.ReactNode, filterAction: JSX.Element) => void)
		| null;

	public componentDidMount() {
		const { isOpen, children } = this.props;
		const renderPopover = this.context;

		if (isOpen) {
			renderPopover(children, this.filterAction());
		}
	}

	public componentDidUpdate(prevProps: Props) {
		const { isOpen, children } = this.props;
		const renderPopover = this.context;

		if (isOpen !== prevProps.isOpen) {
			renderPopover(children, this.filterAction());
		}
	}

	public handleClick = (onClick: () => void) => (e: React.MouseEvent) => {
		e.stopPropagation();
		onClick();
	};

	public filterAction = () => {
		const {
			filterActionCaption,
			filterActionClick,
			filterActionShow
		} = this.props;

		return (
			filterActionShow && (
				<button
					className="kit-segment-button-expand__button-filter"
					type="button"
					onClick={this.handleClick(filterActionClick)}
				>
					<IconSvg type="filter" />
					{filterActionCaption}
				</button>
			)
		);
	};

	public render() {
		const { onClick, isOpen } = this.props;

		return (
			<>
				<button
					className={cn("kit-segment-button-expand", {
						"kit-segment-button-expand_open": isOpen
					})}
					type="button"
					onClick={this.handleClick(onClick)}
				>
					<IconSvg type="segment-expand" />
				</button>
			</>
		);
	}
}

SegmentButtonExpand.contextType = FiltrationConditionComponentContext;
