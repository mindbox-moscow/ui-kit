import * as React from "react";
import "./DetalizationRow.scss";
import cn from 'classnames';

interface Props {
    className?: string;
    name: string;
    value: string;
}

export class DetalizationRow extends React.Component<Props> {
    render() {
        const { name, value, className } = this.props;
        return (
            <div className={cn("kit-detalization-row", className)}>
                <span className="kit-detalization-row__name">{name}</span>
                <span className="kit-detalization-row__value">{value}</span>
            </div>
        );
    }
}
