import * as React from "react";
import "./DropDown.scss";
import cn from "classnames";
import {Icon} from "../Icon";

interface Props {
    className?: string;
    itemYears: any;
}

export class DropDown extends React.Component<Props> {
    state = {
        dropDownIsOpen: false,
        currentYear: null,
        currentMonth: null,
    };

    handleToggleDropDown = () => {
        this.setState({ dropDownIsOpen: !this.state.dropDownIsOpen});
    };

    handleToggleCurrentYear = (index: number) => this.setState({ currentYear: index, currentMonth: null });

    handleToggleCurrentMonth = (index: number) => this.setState({ currentMonth: index, dropDownIsOpen: false });

    renderListYears = (item: any, index: number) => (
        <li key={item.year} className="kit-dropdown__list-item">
            <button className={"kit-dropdown__year"} onClick={() => this.handleToggleCurrentYear(index)}>
                <span className={"kit-dropdown__year-value"}>{item.year}</span>
                <span>+</span>
            </button>
            <ul className={cn({
                [`kit-dropdown__month`]: true,
                [`kit-dropdown__month_open`]: this.state.currentYear === index,
            })}>
                {
                    item.months.map((month: any, monthIndex: number) =>
                        <li key={`${item.year}${month}`} onClick={() => this.handleToggleCurrentMonth(monthIndex)} className={cn({
                            [`kit-dropdown__month-item`]: true,
                            [`kit-dropdown__month-item_active`]: this.state.currentMonth === monthIndex,
                        })}>{month}</li>)
                }
            </ul>
        </li>
    );

    public render() {
        const { itemYears } = this.props;
        const { dropDownIsOpen } = this.state;
        return (
            <div className="kit-dropdown">
                <button onClick={this.handleToggleDropDown} className={cn({
                    [`kit-dropdown__btn`]: true,
                    [`kit-dropdown__btn_open`]: dropDownIsOpen
                })}>
                    Февраль 2019
                    <Icon icon="arrowDown" className={cn({
                        [`kit-dropdown__icon`]: true,
                        [`kit-dropdown__icon_open`]: dropDownIsOpen
                    })}
                    />
                </button>
                <ul className={cn({
                    [`kit-dropdown__list`]: true,
                    [`kit-dropdown__list_open`]: dropDownIsOpen
                })}>
                    {itemYears.map(this.renderListYears)}
                </ul>
            </div>
        );
    }
}
