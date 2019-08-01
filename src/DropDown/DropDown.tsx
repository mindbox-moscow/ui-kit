import * as React from "react";
import cn from "classnames";

import { Icon } from "../Icon";

import "./DropDown.scss";
import { IconSvg } from "../IconSvg";

interface Props {
	className?: string;
	itemYears: any;
	icon?: boolean;
	noBorder?: boolean;
	btnText?: string
}

export class DropDown extends React.Component<Props> {
	public state = {
		dropDownIsOpen: false,
		currentYear: null,
		currentMonth: null
	};

	public handleToggleDropDown = () => {
		this.setState({ dropDownIsOpen: !this.state.dropDownIsOpen });
	};

	public handleToggleCurrentYear = (index: number) =>
		this.setState({ currentYear: index, currentMonth: null });

	public handleToggleCurrentMonth = (index: number) =>
		this.setState({ currentMonth: index, dropDownIsOpen: false });

	public renderListYears = (item: any, index: number) => (
		<li key={item.year} className="kit-dropdown__list-item">
			<button
				className={"kit-dropdown__year"}
				onClick={() => this.handleToggleCurrentYear(index)}
			>
				<span className={"kit-dropdown__year-value"}>{item.year}</span>
				<span>+</span>
			</button>
			<ul
				className={cn({
					[`kit-dropdown__month`]: true,
					[`kit-dropdown__month_open`]:
						this.state.currentYear === index
				})}
			>
				{item.months.map((month: any, monthIndex: number) => (
					<li
						key={`${item.year}${month}`}
						onClick={() =>
							this.handleToggleCurrentMonth(monthIndex)
						}
						className={cn({
							[`kit-dropdown__month-item`]: true,
							[`kit-dropdown__month-item_active`]:
								this.state.currentMonth === monthIndex
						})}
					>
						{month}
					</li>
				))}
			</ul>
		</li>
	);

	public render() {
		const { itemYears, icon, noBorder, btnText } = this.props;
		const { dropDownIsOpen } = this.state;
		return <div className="kit-dropdown">
				<button onClick={this.handleToggleDropDown} className={cn(
						{
							[`kit-dropdown__btn`]: true,
							[`kit-dropdown__btn_open`]: dropDownIsOpen,
							[`kit-dropdown__btn_no-border`]: noBorder
						}
					)}>
					{icon && <IconSvg className={"kit-dropdown__svg"} type={"percent-round"} />}
					<span className="kit-dropdown__btn-text">
						{btnText}
					</span>
					<Icon icon="arrowDown" className={cn({
							[`kit-dropdown__icon`]: true,
							[`kit-dropdown__icon_open`]: dropDownIsOpen,
							[`kit-dropdown__icon_svg`]: icon
						})} />
				</button>
				<ul className={cn({
						[`kit-dropdown__list`]: true,
						[`kit-dropdown__list_open`]: dropDownIsOpen
					})}>
					{itemYears.map(this.renderListYears)}
				</ul>
			</div>;
	}
}
