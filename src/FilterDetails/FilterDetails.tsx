import cn from "classnames";
import * as React from "react";
import { neutralZoneClass } from "../HOCs";
import { IconSvg } from "../IconSvg";
import { KeysCodes } from "../utils/constants";
import { setLoopFocusElements } from "../utils/Focus";
import "./FilterDetails.scss";
import { CallbackProps, FilterDetailsProps } from "./types";

type Props = FilterDetailsProps & CallbackProps;

export const FilterDetails: React.FC<Props> = ({
	onClose,
	editorComponent,
	helpComponent,
	helpCaption,
	viewMode,
	vertical,
	horizontal,
	rollBackFocus,
	onKeyDown
}) => {
	const [helpIsExpanded, setHelpIsExpanded] = React.useState(false);
	const kitFiltrationHelperRef = React.useRef<HTMLDivElement>(null);
	const kitFiltrationExtendButton = React.useRef<HTMLButtonElement>(null);
	const kitFiltrationRef = React.useRef<HTMLDivElement>(null);
	const kitEditorWrapperRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(
		() => {
			if (kitEditorWrapperRef.current) {
				kitEditorWrapperRef.current.addEventListener(
					"keydown",
					setLoopFocusElements(kitEditorWrapperRef.current)
				);
				kitEditorWrapperRef.current.addEventListener(
					"focusin",
					setLoopFocusElements(kitEditorWrapperRef.current)
				);
			}

			return () => {
				if (kitEditorWrapperRef.current) {
					kitEditorWrapperRef.current.removeEventListener(
						"keydown",
						setLoopFocusElements(kitEditorWrapperRef.current)
					);
					kitEditorWrapperRef.current.removeEventListener(
						"focusin",
						setLoopFocusElements(kitEditorWrapperRef.current)
					);
				}
			};
		},
		[editorComponent]
	);

	React.useEffect(
		() => {
			handleViewExtended();
		},
		[helpIsExpanded]
	);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (rollBackFocus) {
			switch (e.keyCode) {
				case KeysCodes.Esc:
					rollBackFocus();
					break;
				case KeysCodes.ArrowUp:
				case KeysCodes.ArrowDown:
					if (onKeyDown) {
						rollBackFocus();
						onKeyDown(e);
					}
					break;
			}
		} else {
			const wrapperRef = kitEditorWrapperRef.current;

			if (
				wrapperRef &&
				wrapperRef.contains(document.activeElement) &&
				e.keyCode === KeysCodes.Esc
			) {
				e.preventDefault();
				onClose();
			}
		}
	};

	const handleHelpExtended = () => {
		setHelpIsExpanded(prevState => !prevState);
	};

	const handleViewExtended = () => {
		const helper = kitFiltrationHelperRef.current;
		const buttonExtend = kitFiltrationExtendButton.current;

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

	return (
		<div
			onKeyDown={handleKeyDown}
			ref={kitFiltrationRef}
			tabIndex={-1}
			className={cn("kit-filter-details", neutralZoneClass, {
				"kit-filter-details_editor": viewMode === "edit",
				"kit-filter-details_menu": viewMode === "menu",
				[`kit-filter-details_vertical_${vertical}`]: vertical,
				[`kit-filter-details_horizontal_${horizontal}`]: horizontal
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
				<div
					className="kit-filter-details__editor-wrapper"
					ref={kitEditorWrapperRef}
				>
					{editorComponent}
				</div>
			)}
			{helpComponent && (
				<>
					<div className="kit-filter-details__help-wrapper-text">
						<div
							ref={kitFiltrationHelperRef}
							className={cn("kit-filter-details__helper", {
								"kit-filter-details__helper_extended": helpIsExpanded
							})}
						>
							{helpComponent}
						</div>
					</div>
					<button
						tabIndex={-1}
						ref={kitFiltrationExtendButton}
						type="button"
						className={cn("kit-filter-details__show-btn", {
							"kit-filter-details__show-btn_extended": helpIsExpanded
						})}
						onClick={handleHelpExtended}
					>
						<IconSvg type="extended" />
					</button>
				</>
			)}
		</div>
	);
};
