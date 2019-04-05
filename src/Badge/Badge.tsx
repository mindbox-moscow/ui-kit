import * as React from "react";
import "./Badge.scss";

import cn from "classnames";

interface Props {
    name: string;
    bgColor?: string;
    date?: string;
}

export class Badge extends React.Component<Props> {
    public render() {
        const { name, bgColor, date } = this.props;
        return (
            <div className={cn("kit-badge")} style={{ backgroundColor: bgColor }}>
                <span className={cn("kit-badge__text", { 'kit-badge__text_withPoint': date })}>{ name }</span>
                { date && (
                    <>
                        Запущен:<span className="kit-badge__date"> { date }</span>
                    </>
                ) }
            </div>
        );
    }
}
