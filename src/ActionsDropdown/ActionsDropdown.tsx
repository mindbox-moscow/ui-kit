import * as React from "react";
import { IconSvg } from "../IconSvg";
import "./ActionsDropdown.scss";

import cn from "classnames";

interface IPropsAction {
	title: React.ReactNode;
	onClick: () => void;
}

interface IPropsGroup {
	children: React.ReactNode;
	title?: string;
}

interface IProps {
	toggleBtnText: string;
	className?: string;
}

interface IState {
	isOpen: boolean;
}

const ActionsDropdownAction = (props: IPropsAction) => {
	const { title, onClick } = props;

	return (
		<div className="kit-actions-dropdown__action" onClick={onClick}>
			{title}
		</div>
	);
};

const ActionsDropdownGroup = (props: IPropsGroup) => {
	const { title, children } = props;

	return (
		<section className="kit-actions-dropdown__group">
			{title && (
				<h6 className="kit-actions-dropdown__group-title">{title}</h6>
			)}
			{children}
		</section>
	);
};

class ActionsDropdown extends React.Component<IProps, IState> {
	public static Action: (props: IPropsAction) => JSX.Element;
	public static Group: (props: IPropsGroup) => JSX.Element;
	public state = {
		isOpen: false
	};

	public wrapRef = React.createRef<HTMLDivElement>();

	public handleClick = () =>
		this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

	public handleClickOutside = (e: MouseEvent) => {
		const dropdownWrap = this.wrapRef.current!;

		if (
			!dropdownWrap.contains(e.target as Node) ||
			(e.target as Element).classList.contains(
				"kit-actions-dropdown__action"
			)
		) {
			this.setState({ isOpen: false });
		}
	};

	public componentDidMount() {
		document.addEventListener("click", this.handleClickOutside);
	}

	public componentWillUnmount() {
		document.removeEventListener("click", this.handleClickOutside);
	}

	public render() {
		const { isOpen } = this.state;
		const { className, children, toggleBtnText } = this.props;

		return (
			<div
				className={cn("kit-actions-dropdown", className, {
					"kit-actions-dropdown_opened": isOpen
				})}
				ref={this.wrapRef}
			>
				<button
					className="kit-actions-dropdown__toggle"
					aria-label={toggleBtnText}
					onClick={this.handleClick}
				>
					<IconSvg
						className="kit-actions-dropdown__toggle-icon"
						type="dots"
					/>
				</button>
				{isOpen && (
					<div className="kit-actions-dropdown__container">
						{children}
					</div>
				)}
			</div>
		);
	}
}

ActionsDropdown.Group = ActionsDropdownGroup;
ActionsDropdown.Action = ActionsDropdownAction;

export { ActionsDropdown };
