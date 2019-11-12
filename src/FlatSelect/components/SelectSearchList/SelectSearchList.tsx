import * as React from "react";
import { SelectDropMain, Textbox } from "..";
import { Utils } from "../../modules";
import {
	SelectionMode,
	SelectSearchListProps,
	SelectSearchListState
} from "./types";

export class SelectSearchList extends React.Component<
	SelectSearchListProps,
	SelectSearchListState
> {
	public state = {
		minimized: false
	};

	public render() {
		let clearFilter: JSX.Element = React.createElement("div");
		let headerAddition: JSX.Element = React.createElement("div");

		if (this.props.headerInfo) {
			if (this.props.clearFilterHandler) {
				clearFilter = (
					<span
						className="kit-selectR-module-reset link-action link-action_grey"
						onClick={this.props.clearFilterHandler}
					>
						<span className="icon_close" />
						{this.props.resetFilterCaption}
					</span>
				);
			}
			headerAddition = (
				<div className="kit-selectR-drop-module">
					<span className="kit-selectR-module-state">
						{this.props.headerInfo}
					</span>
					{clearFilter}
				</div>
			);
		}

		let selectedComponents: JSX.Element = React.createElement("div");
		let applyButton: JSX.Element = React.createElement("div");

		if (
			this.props.selectionMode === SelectionMode.Multiple &&
			this.props.makeSelectedComponents
		) {
			const selectedChildren = this.props.makeSelectedComponents();
			if (selectedChildren.length !== 0) {
				let choisesClasses = "kit-selectR-choices kit-selectR-choices-inline";
				if (this.state.minimized) {
					choisesClasses =
						choisesClasses + " kit-selectR-choices-inline-minimized";
				}
				const minimizeButtonClasses =
					"kit-selectR-horizontal-extension-image " +
					(this.state.minimized
						? "kit-selectR-horizontal-extension-image-open"
						: "kit-selectR-horizontal-extension-image-close");
				selectedComponents = (
					<div className="kit-selectR-drop-module kit-selectR-drop-module-items">
						<ul className={choisesClasses}>{selectedChildren}</ul>
						<div
							className="kit-selectR-horizontal-extension-button"
							onClick={this.onToggleChoices}
						>
							<div className={minimizeButtonClasses} />
						</div>
					</div>
				);
				applyButton = (
					<div className="kit-selectR-drop-module">
						<button
							type="button"
							className="button button_blue button_middle button_primary"
							onClick={this.onApply}
						>
							{this.props.closeCaption}
						</button>
					</div>
				);
			}
		}

		return (
			<div className={this.props.className}>
				<div className="kit-selectR-drop-header">
					<div className="kit-selectR-search">
						<span className="kit-selectR-input">
							<Textbox
								notFormControl={true}
								value={this.props.searchTextValue}
								onChange={this.props.onInputChange}
								shouldTextBeSelected={
									this.props.shouldSearchTextBeSelected
								}
							/>
						</span>
					</div>
					{headerAddition}
					{selectedComponents}
					{applyButton}
				</div>
				<SelectDropMain onScroll={this.props.onScroll}>
					{this.props.children}
				</SelectDropMain>
			</div>
		);
	}

	private onApply = () => {
		Utils.Instance.triggerEvent(document.body, "click");
	};

	private onToggleChoices = () => {
		this.setState({ minimized: !this.state.minimized });
	};
}
