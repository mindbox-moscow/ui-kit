import * as React from "react";
import "./QuantityBlock.scss";

import cn from "classnames";

interface Props {
    className?: string;
    value: string;
    name: string;
}

export class QuantityBlock extends React.Component<Props> {
    public render() {
        const { className, value, name } = this.props;
        return (
            <div className={cn("kit-quantityBlock", className)}>
                <div className="kit-quantityBlock__value">{value}</div>
                <div className="kit-quantityBlock__name">{name}</div>
            </div>
        );
    }
}
