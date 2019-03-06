import * as React from "react";
import "./Module.scss";

import cn from "classnames";

interface Props {
    className?: string;
    name: string;
    children: string;
    signature: string;
    price: string;
    onClick?: () => void;
}

export class Module extends React.Component<Props> {
    public render() {
        const { className, name, children, signature, price, onClick = () => { } } = this.props;
        return (
            <div className={cn("kit-module", className)}>
                <h3 className={"kit-module__name"}>{name}</h3>
                <p className={"kit-module__text"}>{children}</p>
                <p className={"kit-module__signature"}>{signature}</p>
                <span className={"kit-module__price"}>{`${price} руб.`}</span>
                <button className={"kit-module__button"} onClick={onClick}>Запросить подключение</button>
            </div>
        );
    }
}
