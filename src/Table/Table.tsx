import * as React from "react";
import "./Table.scss";
import { Icon } from '../Icon/Icon';

import cn from "classnames";

interface Props {
    className?: string;
    th1: string;
    th2: string;
    rows: any;
}

const renderSalePrice = (item: any) => {
    return (
        <div key={item.signature} className={"kit-table__slae-price"}>
            <span className={"kit-table__old-price"}>{item.secondValue}</span>
            <span className={"kit-table__new-price"}>{item.newPrice}</span>
            <p className={"kit-table__sale-signature"}>{item.signature}</p>
        </div>);
}

const renderColumn = (item: any) => {
    return (
        <tr key={item.description} className={"kit-table__row"}>
            <td>
                <div className={"kit-table__name"}>{item.name}</div>
                <div className={"kit-table__description"}>{item.description}</div>
            </td>
            <td>
                {item.firstValue}
            </td>
            <td>
                {item.newPrice ? renderSalePrice(item) : item.secondValue}
            </td>
        </tr>
    );
}

export class Table extends React.Component<Props> {
    state = {
        tableIsOpen: false,
    };

    handleToggleTable = () => {
        this.setState({ tableIsOpen: !this.state.tableIsOpen });
    }

    public render() {
        const { className, th1, th2, rows } = this.props;
        const { tableIsOpen } = this.state;
        return (
            <div className={cn("kit-table__wrapper",
                {
                    [`kit-table__wrapper_open`]: tableIsOpen
                }, className)}
            >
                <button className="kit-table__btn" onClick={this.handleToggleTable}>
                    <Icon icon="arrowDown" className={cn({
                        [`kit-table__icon`]: true,
                        [`kit-table__icon_open`]: tableIsOpen,
                    })}
                    />
                </button>
                <table className={"kit-table"}>
                    <thead>
                        <tr className="kit-table__header">
                            <th>{th1}</th>
                            <th className={cn("kit-table__th", { [`kit-table__th_visible`]: tableIsOpen, })}>{th2}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(renderColumn)}
                    </tbody>
                </table>
            </div>
        );
    }
}
