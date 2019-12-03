import cn from "classnames";
import * as React from "react";
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
		this.setState({
			dropdownId: "react-dropdown-" + Dropdown.DropdownIdentifier
		});
	}

	public hide = () => {
		this.changeVisibility(false);
	};

	public handelIsBottom = (isAdaptive: boolean) => {
		const { isInBottomOfScreen } = this.state;

		if (isInBottomOfScreen !== isAdaptive) {
			this.setState(state => ({
				isInBottomOfScreen: !state.isInBottomOfScreen
			}));
		}
	};

	public render() {
		const { show, isInBottomOfScreen } = this.state;
		const {
			id,
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

		const placeholder = headerInfo ? (
			<span className="kit-selectR-chosen">{headerInfo}</span>
		) : (
			<span className="kit-selectR-chosen">{this.props.placeholder}</span>
		);

		const style = { ...this.props.style, marginLeft: "0 !important" };
		return (
			<>
				<div
					id={id}
					className={cn(
						className,
						"form-control",
						"kit-selectR",
						"kit-selectR-container",
						`${String(height && Height.getClass(height))}`,
						`${String(width && Width.getClass(width))}`,
						{
							[`${closedClassName}`]: !show && closedClassName,
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
						isAdaptive={true}
						onAdaptive={this.handelIsBottom}
					>
						<Panel
							width={width || Width.Normal}
							className={cn(panelClass, {
								"kit-selectR-above": isInBottomOfScreen
							})}
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
			<span onClick={this.onSelectionClear} />
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
