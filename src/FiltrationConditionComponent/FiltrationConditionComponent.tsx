import cn from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import * as React from "react";
import { ActionsDropdown } from "../ActionsDropdown";
import { FilterDetails } from "../FilterDetails";
import { FilterWrapperContext } from "../FilterWrapper";
import { IconSvg } from "../IconSvg";
import { FiltrationConditionComponentContext } from "./FiltrationConditionComponentContext";
import { ICallbackProps, IStateProps } from "./types";

import { useClickOutside } from "../HOOKs";
import "./FiltrationConditionComponent.scss";

type Props = IStateProps & ICallbackProps;

const FiltrationConditionComponent: React.FC<Props> = ({
	filterablePropertyName,
	filtrationMethodName,
	filtrationMethodParametersComponent,
	linkedConditionComponent,
	state,
	helpComponent,
	editorComponent,
	onConditionStateToggle,
	withAlert,
	onConditionCopy,
	onConditionRemove,
	moreConditionToggleCaption,
	moreActions
}) => {
	const refContent = React.createRef<HTMLDivElement>();
	const [popoverFilterAction, setPopoverFilterAction] = useState<
		React.ReactNode
	>(null);
	const [popoversChildren, setPopoversChildren] = useState<React.ReactNode>(
		null
	);
	const [showPopover, setShowPopover] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const context = useContext(FilterWrapperContext);
	const shouldRerenderBrackets = useRef(false);

	useEffect(
		() => {
			if (context) {
				if (shouldRerenderBrackets.current) {
					context.rerenderBrackets();
				} else {
					shouldRerenderBrackets.current = true;
				}
			}
		},
		[showPopover, filtrationMethodName]
	);

	const handleStateToggle = () => {
		if (state === "edit") {
			onConditionStateToggle();
		}
	};

	useClickOutside(refContent, handleStateToggle, state === "edit");

	const renderPopover = (
		children: React.ReactNode,
		filterAction: React.ReactNode,
		shoudShowSegment: boolean
	) => {
		setPopoverFilterAction(filterAction);
		setPopoversChildren(children);
		setShowPopover(shoudShowSegment);
	};

	const onConditionCopyClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onConditionCopy();
	};

	const onConditionRemoveClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onConditionRemove();
	};

	const editModeContent = (
		<FilterDetails
			helpCaption={filterablePropertyName}
			helpComponent={helpComponent}
			editorComponent={editorComponent}
			onClose={onConditionStateToggle}
			viewMode="edit"
		/>
	);

	return (
		<FiltrationConditionComponentContext.Provider value={renderPopover}>
			<li
				className={cn("kit-filtration-condition", {
					"kit-filtration-condition_edit": state === "edit",
					"kit-filtration-condition_show-dropdown": showDropdown
				})}
			>
				<div
					className={cn("kit-filtration-condition__item-text", {
						"kit-filtration-condition__item-text_edit":
							state === "edit",
						"kit-filtration-condition__item-text_linked-condition-edit":
							state === "linkedConditionEdit",
						"kit-filtration-condition__item-text_read-only":
							state === "readOnly",
						"kit-filtration-condition__item-text_shaded":
							state === "shaded",
						"kit-filtration-condition__item-text_view":
							state === "view"
					})}
				>
					<div className="kit-filtration-condition__drag-and-drop" />
					<div
						ref={refContent}
						className="kit-filtration-condition__content"
						onMouseDown={onConditionStateToggle}
					>
						<b>{filterablePropertyName}</b>
						{filtrationMethodName && (
							<span
								className={cn({
									"kit-filtration-condition_with-alert": withAlert
								})}
							>
								{filtrationMethodName}
							</span>
						)}
						{filtrationMethodParametersComponent}
					</div>
					<button
						type="button"
						className="kit-filtration-condition__remove"
						onClick={onConditionRemoveClick}
					>
						<IconSvg type="trash" />
					</button>
					<button
						type="button"
						className="kit-filtration-condition__copy"
						onClick={onConditionCopyClick}
					>
						<IconSvg type="duplicate" />
					</button>
					{moreActions && moreActions.length && (
						<ActionsDropdown
							className="kit-filtration-condition__more"
							onToggle={setShowDropdown}
							toggleBtnText={moreConditionToggleCaption || ""}
						>
							{moreActions.map((props, index) => (
								<ActionsDropdown.Action
									{...props}
									key={index}
								/>
							))}
						</ActionsDropdown>
					)}
					{state === "edit" && editModeContent}
				</div>
				{showPopover && (
					<div className="kit-filtration-condition__popover">
						{popoverFilterAction}
						{popoversChildren}
					</div>
				)}
				{linkedConditionComponent}
			</li>
		</FiltrationConditionComponentContext.Provider>
	);
};

export { FiltrationConditionComponent };
