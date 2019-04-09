import * as React from "react";
import "./DetalizationList.scss";
import { DetalizationRow } from '../DetalizationRow/DetalizationRow';

import cn from 'classnames';

interface Props {
    className?: string;
    rows: any;
}

export class DetalizationList extends React.Component<Props> {
    renderRow = (item: any) => (
        <li key={item.name} className="kit-detalization__row">
            <DetalizationRow name={item.name} value={item.value} />
        </li>
    );

    render() {
        const { className, rows } = this.props;
        return (
            <ul className={cn("kit-detalization-list", className)}>
                {rows.map(this.renderRow)}
            </ul>
        );
    }
}
