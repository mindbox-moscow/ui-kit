import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { FilterDetailsProps, CallbackProps, State } from "./types";

import "./FilterDetails.scss";

type Props = FilterDetailsProps & CallbackProps;

export class FilterDetails extends React.Component<Props> {
	public state: State = {
		helpIsExpanded: false,
		isExpanded: false
	};

	private kitFiltrationHelperRef = React.createRef<HTMLDivElement>();

	public handleHelpExtended = () => {
		this.setState({
			helpIsExpanded: !this.state.helpIsExpanded
		});
	};

	public handleViewExtended = () => {
		const helper = this.kitFiltrationHelperRef.current;
		if (helper && helper.scrollHeight <= 74) {
			if (this.state.isExpanded === false) {
				this.setState({
					isExpanded: !this.state.isExpanded
				});
			}
		}
	};

	public componentDidMount() {
		this.handleViewExtended();
	}

	public componentDidUpdate() {
		this.handleViewExtended();
	}

	public render() {
		const {
			editorComponent,
			helpComponent,
			helpCaption,
			viewMode,
			onClose: toggleStar
		} = this.props;

		const { helpIsExpanded, isExpanded } = this.state;

		return (
			<div
				className={cn("kit-filter-details", {
					"kit-filter-details_editor": viewMode === "edit",
					"kit-filter-details_menu": viewMode === "menu"
				})}
			>
				<button
					onClick={toggleStar}
					className="kit-filter-details__close"
					type="button"
				>
					<IconSvg type="close" />
				</button>
				<h2 className="kit-filter-details__title">{helpCaption}</h2>
				{editorComponent && (
					<div className="kit-filter-details__editor-wrapper">
						{editorComponent}
					</div>
				)}
				{helpComponent && (
					<>
						<div className="kit-filter-details__help-wrapper-text">
							<div
								ref={this.kitFiltrationHelperRef}
								className={cn("kit-filter-details__helper", {
									"kit-filter-details__helper_extended": helpIsExpanded
								})}
							>
								{helpComponent}
							</div>
						</div>
						<button
							type="button"
							className={cn("kit-filter-details__show-btn", {
								"kit-filter-details__show-btn_extended": helpIsExpanded,
								"kit-filter-details__show-btn_no-extended": isExpanded
							})}
							onClick={this.handleHelpExtended}
						>
							<IconSvg type="extended" />
						</button>
					</>
				)}
			</div>
		);
	}
}
