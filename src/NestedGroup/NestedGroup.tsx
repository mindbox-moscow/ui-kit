import * as React from "react";
import "./NestedGroup.scss";
import { NestedItem } from "./components/NestedItem/NestedItem";
import { NestedList } from "./components/NestedList/NestedList";


interface Props {}

export class NestedGroup extends React.Component<Props> {
    public render() {
        return (
            <NestedList>
                <NestedItem number={5}
                            article={"Бытовая техника"}
                            information={"Максимальная выгода"}
                            sales={"Максимальная скидка: 50%"}/>
                <NestedItem number={180}
                            article={"Школьные товары, канцтовары"}
                            information={"Последовательное применение"}
                            sales={"Без максимальной скидки"}/>
                <NestedItem number={12}
                            article={"Видео, фото"}
                            information={"Суммирование"}
                            sales={"Максимальная скидка: 10%"}>
                    <ul>
                        <NestedItem number={5}
                                    article={"Бытовая техника"}
                                    information={"Максимальная выгода"}
                                    sales={"Максимальная скидка: 50%"}>
                            <ul>
                                <NestedItem number={5}
                                            article={"Бытовая техника"}
                                            information={"Максимальная выгода"}
                                            sales={"Максимальная скидка: 50%"}/>
                            </ul>
                        </NestedItem>
                    </ul>
                </NestedItem>
            </NestedList>
        );
    }
}
