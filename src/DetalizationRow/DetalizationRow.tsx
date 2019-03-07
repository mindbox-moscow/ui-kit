import * as React from "react";
import "./DetalizationRow.scss";
import cn from 'classnames';

interface Props {
    className?: string;
    name: string;
    value: string;
}

export class DetalizationRow extends React.Component<Props> {
    public render() {
        const { name, value, className } = this.props;
        return (
            <div className={cn("kit-detalization-row", className)}>
                <span>{name}</span>
                <span>{value}</span>
            </div>
        );
    }
}
