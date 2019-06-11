import * as React from "react";
import "./NestedGroup.scss";
import { NestedItem } from "./components/NestedItem/NestedItem";
import { NestedList } from "./components/NestedList/NestedList";


interface Props {}

export class NestedGroup extends React.Component<Props> {
    public render() {
        return (
            <NestedList>
                <NestedItem childrenCount={5}
							title={"Бытовая техника"}
                            information={"Максимальная выгода"}
							details={{maxDiscount: 20, typeOfSales: true}}
				/>
                <NestedItem childrenCount={180}
							title={"Школьные товары, канцтовары"}
                            information={"Последовательное применение"}
							details={{typeOfSales: false}}
				/>
                <NestedItem childrenCount={12}
							title={"Видео, фото"}
                            information={"Суммирование"}
							details={{maxDiscount: 10, typeOfSales: true}}
                            >
                    <ul>
                        <NestedItem childrenCount={5}
									title={"Бытовая техника"}
                                    information={"Максимальная выгода"}
									details={{maxDiscount: 20, typeOfSales: true}}>
                            <ul>
                                <NestedItem childrenCount={5}
											details={{maxDiscount: 50, typeOfSales: true}}
											title={"Бытовая техника"}
                                            information={"Максимальная выгода"}/>
                            </ul>
                        </NestedItem>
                    </ul>
                </NestedItem>
            </NestedList>
        );
    }
}
