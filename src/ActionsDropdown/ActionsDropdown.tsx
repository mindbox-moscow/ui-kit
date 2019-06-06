import * as React from "react";
import "./ActionsDropdown.scss";

import cn from "classnames";

interface IPropsActionsDropdownGroup {
	children: React.ReactNode;
	title?: string;
}

interface IPropsActionsDropdown {
	className?: string;
}

interface IStateActionsDropdown {
	isOpen: boolean;
}

const ActionsDropdownGroup = (props: IPropsActionsDropdownGroup) => {
	const { title, children } = props;

	return (
		<div className="kit-actions-dropdown__group">
			{title && <h3>{title}</h3>}
			{children}
		</div>
	);
};

class ActionsDropdown extends React.Component<
	IPropsActionsDropdown,
	IStateActionsDropdown
> {
	public static Group: (props: IPropsActionsDropdownGroup) => JSX.Element;
	// public wrapRef: HTMLElement;
	public state = {
		isOpen: false
	};

	// public handleWrapRef = (ref: HTMLDivElement) => (this.wrapRef = ref);

	public wrapRef = React.createRef<HTMLDivElement>();

	public handleClick = () =>
		this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

	public handleClickOutside = (e: MouseEvent) => {
		const dropdownWrap = this.wrapRef.current!;

		if (!dropdownWrap.contains(e.target as Node)) {
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
		const { className, children } = this.props;

		return (
			<div
				className={cn("kit-actions-dropdown", className)}
				ref={this.wrapRef}
			>
				<button
					className="kit-actions-dropdown__toggle"
					onClick={this.handleClick}
				>
					<span className="kit-actions-dropdown__toggle-label">
						Действия
					</span>
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

export { ActionsDropdown };
