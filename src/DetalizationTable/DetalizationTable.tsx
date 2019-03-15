import * as React from "react";
import "./DetalizationTable.scss";
import cn from 'classnames';

interface Props {
    className?: string;
    th1: string;
    th2: string;
    rows: any;
}

const renderRow = (item: any) => {
    return (
        <div key={item.name} className="kit-detalization-table__row">
            <div className="kit-detalization-table__col">
                <div className="kit-detalization-table__name">{item.name}</div>
                <div className="kit-detalization-table__signature">{item.description}</div>
            </div>
            <span className="kit-detalization-table__value">{item.value}</span>
        </div>
    );
}

export class DetalizationTable extends React.Component<Props> {
    public render() {
        const { className, th1, th2, rows } = this.props;
        return (
            <div className={cn("kit-detalization-table", className)}>
                <div className="kit-detalization-table__header">
                    <span>{th1}</span>
                    <span>{th2}</span>
                </div>
                {rows.map(renderRow)}
            </div>
        );
    }
}
