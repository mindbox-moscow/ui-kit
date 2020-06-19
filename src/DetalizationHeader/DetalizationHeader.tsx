import * as React from "react";
import cn from "classnames";
import { Button as NewButton } from "@mindbox-moscow/ui-components";

import { DropDown } from "../DropDown/DropDown";

import "./DetalizationHeader.scss";


const list = [{
    year: "2017",
    months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Окрябрь",
        "Ноябрь",
        "Декабрь",
    ]
},
{
    year: "2018",
    months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Окрябрь",
        "Ноябрь",
        "Декабрь",
    ]
},
{
    year: "2019",
    months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
    ]
}
];

interface Props {
    className?: string;
    title: string;
}

export class DetalizationHeader extends React.Component<Props> {
    public render() {
        const { className, title } = this.props;
        return (
            <div className={cn("kit-detalizationHeader", className)}>
                <h1 className="kit-detalizationHeader__title">{title}</h1>
                <div className="kit-detalizationHeader__controls">
                    <NewButton
                        size="medium"
                        type="secondary"
                    >
                        &larr; Январь
                    </NewButton>
                    <DropDown itemYears={list}></DropDown>
                    <NewButton
                        size="medium"
                        type="secondary"
                    >
                        Март &rarr;
                    </NewButton>
                </div>
            </div>
        );
    }
}
