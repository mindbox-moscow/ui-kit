import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { Panel } from "..";
import { Height, Width } from "../../modules";
import { DropdownClientRect, DropdownProps, DropdownState } from "./types";

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
	public static getOverlay() {
		if (Dropdown.DropdownOverlay == null) {
			Dropdown.DropdownOverlay = document.createElement("div");
			Dropdown.DropdownOverlay.id = "dropdown-overlay";
			document.body.appendChild(Dropdown.DropdownOverlay);
		}
		return Dropdown.DropdownOverlay;
	}

	private static DropdownOverlay: HTMLElement;
	private static DropdownIdentifier: number = 0;

	public state = {
		dropdownId: "",
		isInBottomOfScreen: false,
		show: false
	};

	private wasEventListenerAttached: boolean = false;
	private panelRef = React.createRef<Panel>();
	private dropdownRef = React.createRef<HTMLDivElement>();

	public hide = () => {
		this.changeVisibility(false);
	};

	public componentWillMount() {
		Dropdown.DropdownIdentifier++;
		this.setState(state => {
			const newState = {
				...state,
				dropdownId: "react-dropdown-" + Dropdown.DropdownIdentifier
			};

			const dropdownPanelContainer = document.createElement("div");
			dropdownPanelContainer.id = newState.dropdownId;
			const overlay = Dropdown.getOverlay();
			overlay.appendChild(dropdownPanelContainer);

			return newState;
		});
	}

	public componentWillUnmount() {
		const dropdownPanel = document.getElementById(this.state.dropdownId);

		if (dropdownPanel) {
			Dropdown.getOverlay().removeChild(dropdownPanel);
			unmountComponentAtNode(dropdownPanel);
		}
	}

	public componentDidUpdate() {
		this.renderPanel();
	}

	public componentDidMount() {
		this.renderPanel();
	}

	public render() {
		const classesArray = [
			this.props.className || "",
			"form-control",
			"kit-selectR",
			"kit-selectR-container"
		];

		if (this.state.show) {
			classesArray.push("kit-selectR-open");
			classesArray.push(this.props.openedClassName || "");

			if (this.state.isInBottomOfScreen) {
				classesArray.push("kit-selectR-above");
			}
		} else {
			classesArray.push(this.props.closedClassName || "");
		}

		if (this.props.height) {
			classesArray.push(String(Height.getClass(this.props.height)));
		}

		if (this.props.width) {
			classesArray.push(String(Width.getClass(this.props.width)));
		}

		if (!this.props.headerInfo) {
			classesArray.push("kit-selectR-placeholder");
		}

		if (this.props.disabled) {
			classesArray.push("kit-selectR-disabled");
		}

		const classes = classesArray.reduce((curr, next) => curr + " " + next);

		const placeholder = this.props.headerInfo ? (
			<span className="kit-selectR-chosen">{this.props.headerInfo}</span>
		) : (
			<span className="kit-selectR-chosen">{this.props.placeholder}</span>
		);

		const style = { ...this.props.style, marginLeft: "0 !important" };
		return (
			<div
				id={this.props.id}
				className={classes}
				onClick={() => this.changeVisibility()}
				style={style}
				ref={this.dropdownRef}
			>
				<span className="kit-selectR-choice">
					{placeholder}
					{this.clearSelectionSection()}
				</span>
			</div>
		);
	}

	private clearSelectionSection = (): JSX.Element | null => {
		return this.props.onSelectionClear == null ? null : (
			<abbr
				className="select2-search-choice-close"
				onClick={this.onSelectionClear}
			/>
		);
	};

	private onSelectionClear = (e: React.SyntheticEvent<{}>) => {
		const { onSelectionClear } = this.props;
		e.stopPropagation();

		if (onSelectionClear) {
			onSelectionClear();
		}
	};

	private changeVisibility = (show?: boolean) => {
		if (this.panelRef) {
			if (show === undefined) {
				show = !this.state.show;
			}

			if (this.props.disabled) {
				show = false;
			}

			const newState = { ...this.state, show };
			this.setState(newState, () => this.renderPanel());
		}
	};

	private renderPanel = () => {
		const show = this.state.show;
		const boundingRectangle = this.dropdownRef.current!.getBoundingClientRect() as DropdownClientRect;
		boundingRectangle.widthOverride = this.props.widthOverride;

		const isInBottomOfScreen =
			document.body.offsetHeight / 2 < boundingRectangle.top;
		let callback = () => {};
		if (this.state.isInBottomOfScreen !== isInBottomOfScreen) {
			callback = () => {
				const newState = { ...this.state, isInBottomOfScreen };
				this.setState(newState);
			};
		}

		const dropdownPanel = render<Panel>(
			<Panel
				show={show}
				isNested={this.props.isNested}
				boundingRectangle={boundingRectangle}
				className={this.props.panelClass}
				clickOutsideEventHandler={this.hide}
				ref={this.panelRef}
			>
				{this.props.children}
			</Panel>,
			document.getElementById(this.state.dropdownId),
			callback
		) as any;

		if (show) {
			if (!this.wasEventListenerAttached) {
				const inputs = this.panelRef.current!.panelRef.current!.getElementsByTagName(
					"input"
				);
				const input = inputs.length > 0 ? inputs[0] : null;

				setTimeout(function() {
					if (input) {
						input.focus();
					}
				});

				window.addEventListener(
					"click",
					dropdownPanel.clickEventHandler
				);
				this.wasEventListenerAttached = true;
			}
		} else {
			if (this.wasEventListenerAttached) {
				window.removeEventListener(
					"click",
					dropdownPanel.clickEventHandler
				);
				this.wasEventListenerAttached = false;
			}
		}

		return dropdownPanel;
	};
}
