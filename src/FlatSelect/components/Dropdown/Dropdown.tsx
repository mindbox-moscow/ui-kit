import cn from "classnames";
import * as React from "react";
import { unmountComponentAtNode } from "react-dom";
import { OverflowVisibleContainer } from "../../../OverflowVisibleContainer";
import { Height, Width } from "../../../utils";
import { Panel } from "../Panel";
import { DropdownProps, DropdownState } from "./types";

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
	private static DropdownIdentifier: number = 0;

	public state = {
		dropdownId: "",
		isInBottomOfScreen: false,
		show: false
	};

	private dropdownRef = React.createRef<HTMLDivElement>();

	public componentDidMount() {
		Dropdown.DropdownIdentifier++;
		this.setState(state => {
			const newState = {
				dropdownId: "react-dropdown-" + Dropdown.DropdownIdentifier
			};

			const dropdownPanelContainer = document.createElement("div");
			dropdownPanelContainer.id = newState.dropdownId;

			return newState;
		});
	}

	public componentWillUnmount() {
		const dropdownPanel = document.getElementById(this.state.dropdownId);

		if (dropdownPanel) {
			unmountComponentAtNode(dropdownPanel);
		}
	}

	public hide = () => {
		this.changeVisibility(false);
	};

	public render() {
		const { show } = this.state;
		const {
			className,
			openedClassName,
			closedClassName,
			headerInfo,
			disabled,
			height,
			width,
			panelClass,
			children
		} = this.props;

		const placeholder = this.props.headerInfo ? (
			<span className="kit-selectR-chosen">{this.props.headerInfo}</span>
		) : (
			<span className="kit-selectR-chosen">{this.props.placeholder}</span>
		);

		const style = { ...this.props.style, marginLeft: "0 !important" };
		return (
			<>
				<div
					id={this.props.id}
					className={cn(
						className,
						"form-control",
						"kit-selectR",
						"kit-selectR-container",
						`${String(height && Height.getClass(height))}`,
						`${String(width && Width.getClass(width))}`,
						{
							[`${closedClassName}`]: !show,
							"kit-selectR-open": show,
							[`${openedClassName}`]: show,
							"kit-selectR-placeholder": !headerInfo,
							"kit-selectR-disabled": disabled
						}
					)}
					style={style}
					ref={this.dropdownRef}
					onClick={this.changeVisibility(!show)}
				>
					<span className="kit-selectR-choice">
						{placeholder}
						{this.clearSelectionSection()}
					</span>
				</div>
				{show && (
					<OverflowVisibleContainer
						parentRef={this.dropdownRef}
						onNeutralZoneClick={() => {}}
					>
						<Panel
							width={width || Width.Normal}
							className={panelClass}
						>
							{children}
						</Panel>
					</OverflowVisibleContainer>
				)}
			</>
		);
	}

	private changeVisibility = (show: boolean) => () => {
		this.setState({ show });
	};

	private clearSelectionSection = (): JSX.Element | null => {
		return this.props.onSelectionClear == null ? null : (
			<span
				className="select2-search-choice-close"
				onClick={this.onSelectionClear}
			/>
		);
	};

	private onSelectionClear = (e: React.MouseEvent) => {
		const { onSelectionClear } = this.props;
		e.stopPropagation();

		if (onSelectionClear) {
			onSelectionClear();
		}
	};
}
