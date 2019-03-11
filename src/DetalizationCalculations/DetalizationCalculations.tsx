import * as React from "react";
import "./DetalizationCalculations.scss";
import { QuantityBlock } from "../QuantityBlock/QuantityBlock"
import cn from 'classnames';

interface Props {
    className?: string;
    data: any;
    title: string;
}

const renderQuanityBlock = (item: any) => {
    return (
        <li key={item.name} className="kit-detalization-calculation__item">
            <QuantityBlock value={item.value} name={item.name} />
        </li>
    );
}

export class DetalizationCalculations extends React.Component<Props> {
    public render() {
        const { className, data, title } = this.props;
        return (
            <ul className={cn("kit-detalization-calculation", className)}>
                <h3 className="kit-detalization-calculation__title">{title}</h3>
                {data.map(renderQuanityBlock)}
            </ul>
        );
    }
}
