import * as React from "react";
import "./DetalizationBlockInfo.scss";
import { Help } from "../Help/Help";
import { Button } from "../Button/Button";
import cn from 'classnames';

interface Props {
    className?: string;
    rows: any;
    hasButton?: boolean;
    buttonText?: any;
    onClick?: any;
}

export class DetalizationBlockInfo extends React.Component<Props> {
    renderDetailsRow = (item: any) => (
        <li key={item.name} className="kit-detalization-info__row">
            <span>{`${item.name}:`}</span>
            <span className="kit-detalization-info__value">{item.value}</span>
            {item.icon && <Help className="kit-detalization-info__help">{item.help}</Help>}
        </li>
    );

    public render() {
        const { className, rows, hasButton, buttonText, onClick } = this.props;
        return (
            <div className={cn("kit-detalization-info", className)}>
                {rows.map(this.renderDetailsRow)}
                {hasButton &&
                    <Button
                        className="kit-detalization-info__button"
                        size="medium"
                        color="gray"
                        onClick={onClick}
                        hasBorder
                    >
                        {buttonText}
                    </Button>
                }
            </div>
        );
    }
}
