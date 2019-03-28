import * as React from "react";
import "./DropDown.scss";
import cn from "classnames";
import {Icon} from "../Icon";

interface Props {
    // className?: string;
}

export class DropDown extends React.Component<Props> {
    state = {
        dropDownIsOpen: false,
    };

    handleToggleDropDown = () => {
        this.setState({ dropDownIsOpen: !this.state.dropDownIsOpen });
    };

    public render() {
        const {
            // className
        } = this.props;
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
                    <li className="kit-dropdown__list-item">
                        <div className={"kit-dropdown__year"}>
                            <span className={"kit-dropdown__year-value"}>2017</span>
                            <span>+</span>
                        </div>
                        <ul className={"kit-dropdown__month"}>
                            <li className={"kit-dropdown__month-item"}>Январь</li>
                            <li className={"kit-dropdown__month-item"}>Февраль</li>
                            <li className={"kit-dropdown__month-item"}>Март</li>
                        </ul>
                    </li>
                    <li className="kit-dropdown__list-item">
                        <div className={"kit-dropdown__year"}>
                            <span className={"kit-dropdown__year-value"}>2018</span>
                            <span>+</span>
                        </div>
                        <ul className={"kit-dropdown__month"}>
                            <li className={"kit-dropdown__month-item"}>Январь</li>
                            <li className={"kit-dropdown__month-item"}>Февраль</li>
                            <li className={"kit-dropdown__month-item"}>Март</li>
                        </ul>
                    </li>
                    <li className="kit-dropdown__list-item">
                        <div className={"kit-dropdown__year"}>
                            <span className={"kit-dropdown__year-value"}>2019</span>
                            <span>+</span>
                        </div>
                        <ul className={"kit-dropdown__month kit-dropdown__month_open"}>
                            <li className={"kit-dropdown__month-item"}>Январь</li>
                            <li className={"kit-dropdown__month-item kit-dropdown__month-item_active"}>Февраль</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
