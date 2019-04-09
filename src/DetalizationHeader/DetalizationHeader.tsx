import * as React from "react";
import { Button } from "../Button/Button";
import { DropDown } from "../DropDown/DropDown";
import "./DetalizationHeader.scss";

import cn from "classnames";

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
                    <Button className="kit-detalizationHeader__btn" hasBorder size="medium" arrow="left" color="gray">Январь</Button>
                    {/*<Button className="kit-detalizationHeader__btn kit-detalizationHeader__btn-month" hasBorder size="medium" color="gray" >Февраль 2019</Button>*/}
                    <DropDown itemYears={list}></DropDown>
                    <Button className="kit-detalizationHeader__btn" hasBorder disabled size="medium" arrow="right" color="gray">Март</Button>
                </div>
            </div>
        );
    }
}
