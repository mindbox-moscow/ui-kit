import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { CallbackProps, FilterDetailsProps, State } from "./types";

import "./FilterDetails.scss";

type Props = FilterDetailsProps & CallbackProps;

const ESC_KEY = 27;

export class FilterDetails extends React.Component<Props, State> {
	public state = {
		helpIsExpanded: false
	};

	private kitFiltrationHelperRef = React.createRef<HTMLDivElement>();
	private kitFiltrationExtendButton = React.createRef<HTMLButtonElement>();
	private kitFiltrationRef = React.createRef<HTMLDivElement>();

	public componentDidMount() {
		document.addEventListener("keydown", this.handleKeyDown);
		this.handleViewExtended();
	}

	public componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyDown);
	}

	public handleKeyDown = (e: KeyboardEvent) => {
		const { onClose } = this.props;
		if (
			document.activeElement === this.kitFiltrationRef.current &&
			e.keyCode === ESC_KEY
		) {
			e.preventDefault();
			onClose();
		}
	};

	public handleHelpExtended = () => {
		this.setState(state => ({ helpIsExpanded: !state.helpIsExpanded }));
	};

	public handleViewExtended = () => {
		const helper = this.kitFiltrationHelperRef.current;
		const buttonExtend = this.kitFiltrationExtendButton.current;

		if (helper && buttonExtend) {
			if (helper.scrollHeight <= 74) {
				buttonExtend.classList.add(
					"kit-filter-details__show-btn_no-extended"
				);
			} else {
				buttonExtend.classList.remove(
					"kit-filter-details__show-btn_no-extended"
				);
			}
		}
	};

	public componentDidUpdate(prevProps: Props, prevState: State) {
		this.handleViewExtended();

		if (prevState.helpIsExpanded === true) {
			this.setState({ helpIsExpanded: false });
		}
	}

	public render() {
		const {
			editorComponent,
			helpComponent,
			helpCaption,
			viewMode,
			onClose
		} = this.props;

		const { helpIsExpanded } = this.state;

		return (
			<div
				ref={this.kitFiltrationRef}
				tabIndex={-1}
				className={cn("kit-filter-details", {
					"kit-filter-details_editor": viewMode === "edit",
					"kit-filter-details_menu": viewMode === "menu"
				})}
			>
				<button
					onClick={onClose}
					className="kit-filter-details__close"
					type="button"
					tabIndex={-1}
				>
					<IconSvg type="close" size="large" />
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
							ref={this.kitFiltrationExtendButton}
							type="button"
							className={cn("kit-filter-details__show-btn", {
								"kit-filter-details__show-btn_extended": helpIsExpanded
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
