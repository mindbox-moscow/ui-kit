import cn from "classnames";
import * as React from "react";
import { ReactNode, useState } from "react";

import { IconSvg } from "../IconSvg";
import { Action, Dropdown, Group } from "./components";
import { MethodsProvider } from "./context";

import "./ActionsDropdown.scss";

interface IProps {
	toggleBtnText: string;
	className?: string;
	children?: ReactNode;
	// getActions() используется, если нужны вычисления после открытия дропдауна
	getActions?: () => JSX.Element;
}

const ActionsDropdown = (props: IProps) => {
	const { className, children, toggleBtnText, getActions } = props;
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(curr => !curr);

	const closeDropdown = () => setIsOpen(false);

	return (
		<div
			className={cn("kit-actions-dropdown", className, {
				"kit-actions-dropdown_opened": isOpen
			})}
		>
			<button
				className="kit-actions-dropdown__toggle"
				aria-label={toggleBtnText}
				onClick={toggleDropdown}
			>
				<IconSvg
					className="kit-actions-dropdown__toggle-icon"
					type="dots"
				/>
			</button>
			{isOpen && (
				<Dropdown onClickOutside={closeDropdown}>
					<MethodsProvider value={{ closeDropdown }}>
						{getActions !== undefined ? getActions() : children}
					</MethodsProvider>
				</Dropdown>
			)}
		</div>
	);
};

ActionsDropdown.Action = Action;
ActionsDropdown.Group = Group;

export { ActionsDropdown };
