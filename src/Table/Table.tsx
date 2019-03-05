import * as React from "react";
import "./Table.scss";

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
    public render() {
        const { className, th1, th2, rows } = this.props;
        return (
            <div className={cn("kit-table__wrapper", className)}>
                <table className={"kit-table"}>
                    <thead>
                        <tr className="kit-table__header">
                            <th>{th1}</th>
                            <th>{th2}</th>
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
