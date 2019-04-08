import * as React from "react";
import "./Badge.scss";
import {COLORS} from '../utils/constants'

import cn from "classnames";

interface Props {
    title: string;
    color?: COLORS;
    date?: string;
}

export class Badge extends React.Component<Props> {
    public render() {
        const {
            title,
            color,
            date
        } = this.props;

        return (
            <div className={cn("kit-badge")} style={{ backgroundColor: color }}>
                <span className={cn("kit-badge__text", { 'kit-badge__text_withPoint': date })}>{ title }</span>
                { date && (
                    <>
                        Запущен:<span className="kit-badge__date"> { date }</span>
                    </>
                ) }
            </div>
        );
    }
}
