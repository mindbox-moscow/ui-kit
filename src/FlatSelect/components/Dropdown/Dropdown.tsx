import cn from "classnames";
import * as React from "react";
import { Height, Width } from "../../../utils";
import { Panel } from "../Panel";
import { DropdownProps, DropdownState } from "./types";

// TODO: Удалить после редизайна
const HEIGHT_HEADER = 90;

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
	private static DropdownIdentifier: number = 0;

	public state = {
		dropdownId: "",
		isInBottomOfScreen: false,
		show: false
	};

	private dropdownRef = React.createRef<HTMLDivElement>();

	public componentDidMount() {
		this.positionDropDown();

		Dropdown.DropdownIdentifier++;
		this.setState({
			dropdownId: "react-dropdown-" + Dropdown.DropdownIdentifier
		});
	}

	public componentDidUpdate() {
		this.positionDropDown();
	}

	public hide = () => {
		this.changeVisibility(false);
	};

	public positionDropDown = () => {
		const dropdownRef = this.dropdownRef.current;
		const { isInBottomOfScreen } = this.state;
		const windowHeight = window.innerHeight / 2;

		if (dropdownRef) {
			const { top } = dropdownRef.getBoundingClientRect();
			const heigthTop = top - HEIGHT_HEADER;

			if (windowHeight < heigthTop && !isInBottomOfScreen) {
				this.setState({
					isInBottomOfScreen: true
				});
			} else if (windowHeight > heigthTop && isInBottomOfScreen) {
				this.setState({
					isInBottomOfScreen: false
				});
			}
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
			<div className="kit-flat-select">
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
					onClick={this.handleClick}
				>
					<span className="kit-selectR-choice">
						{placeholder}
						{this.clearSelectionSection()}
					</span>
				</div>
				{show && (
					<Panel
						onClickOutside={this.hide}
						width={width || Width.Full}
						className={cn(panelClass, {
							"kit-selectR-above": isInBottomOfScreen
						})}
					>
						{children}
					</Panel>
				)}
			</div>
		);
	}

	private handleClick = () => {
		const { show } = this.state;

		this.changeVisibility(!show);
	};

	private changeVisibility = (show: boolean) => {
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
