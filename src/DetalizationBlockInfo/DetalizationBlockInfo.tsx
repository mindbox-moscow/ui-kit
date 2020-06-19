import * as React from "react";
import cn from "classnames";
import { Button as NewButton } from "@mindbox-moscow/ui-components";

import { Help } from "../Help/Help";

import "./DetalizationBlockInfo.scss";

interface Props {
    className?: string;
    rows: any;
    hasButton?: boolean;
    buttonText?: any;
    onClick?: any;
}

const renderDetailsRow = (item: any) => {
    return (
        <li key={item.name} className="kit-detalization-info__row">
            <span>{`${item.name}:`}</span>
            <span className="kit-detalization-info__value">{item.value}</span>
            {item.icon && <Help className="kit-detalization-info__help">{item.help}</Help>}
        </li>
    );
}

export class DetalizationBlockInfo extends React.Component<Props> {
    public render() {
        const { className, rows, hasButton, buttonText, onClick } = this.props;
        return (
            <div className={cn("kit-detalization-info", className)}>
                {rows.map(renderDetailsRow)}
                {hasButton &&
                    <div className="kit-detalization-info__row-button">
                        <NewButton
                            size="medium"
                            type="secondary"
                            onClick={onClick}
                        >
                            {buttonText}
                        </NewButton>
                    </div>
                }
            </div>
        );
    }
}
