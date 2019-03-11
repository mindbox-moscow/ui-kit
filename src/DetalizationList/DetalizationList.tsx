import * as React from "react";
import "./DetalizationList.scss";
import { DetalizationRow } from '../DetalizationRow/DetalizationRow';

import cn from 'classnames';

interface Props {
    className?: string;
    rows: any;
}

const renderRow = (item: any) => {
    return (
        <li key={item.name} className="kit-detalization__row">
            <DetalizationRow name={item.name} value={item.value} />
        </li>
    );
}

export class DetalizationList extends React.Component<Props> {
    public render() {
        const { className, rows } = this.props;
        return (
            <ul className={cn("kit-detalization-list", className)}>
                {rows.map(renderRow)}
            </ul>
        );
    }
}
