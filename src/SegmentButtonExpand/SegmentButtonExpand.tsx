import cn from "classnames";
import * as React from "react";
import { FiltrationConditionComponentContext } from "../FiltrationConditionComponent/FiltrationConditionComponentContext";
import { IconSvg } from "../IconSvg";
import { SegmentButtonExpandProps as Props } from "./types";

import "./SegmentButtonExpand.scss";

export class SegmentButtonExpand extends React.Component<Props> {
	public static context: ((children: React.ReactNode) => void) | null;

	public componentDidMount() {
		const { isOpen, children } = this.props;

		if (isOpen) {
			this.context(children);
		}
	}

	public componentDidUpdate(prevProps: Props) {
		const { isOpen, children } = this.props;

		if (isOpen && isOpen !== prevProps.isOpen) {
			this.context(children);
		}
	}

	public filterAction = () => {
		const { filterActionCaption, filterActionClick } = this.props;

		return (
			<button
				className="kit-segment-button-expand__button-filter"
				type="button"
				onClick={filterActionClick}
			>
				<IconSvg type="filter" />
				{filterActionCaption}
			</button>
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
					onClick={onClick}
				>
					<IconSvg type="segment-expand" />
				</button>
			</>
		);
	}
}

SegmentButtonExpand.contextType = FiltrationConditionComponentContext;
