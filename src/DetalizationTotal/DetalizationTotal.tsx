import * as React from "react";
import "./DetalizationTotal.scss";

import cn from "classnames";

interface Props {
    className?: string;
    name: string;
    result: string;
}

export class DetalizationTotal extends React.Component<Props> {
    public render() {
        const { name, result, className } = this.props;
        return (
            <div className={cn("kit-detalization-total", className)}>
                <span>{name}</span>
                <span>{result}</span>
            </div>
        );
    }
}
