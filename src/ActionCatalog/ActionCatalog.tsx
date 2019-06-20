import * as React from "react";
import "./ActionCatalog.scss";
import { NestedItem } from "../NestedGroup/components/NestedItem/NestedItem";
import { NestedList } from "../NestedGroup/components/NestedList/NestedList";
import { StockItem } from "../StockInfo/StockItem/StockItem";
import { StockList } from "../StockInfo/StockList/StockList";
//import { StockList } from "../StockInfo/StockList/StockList";

// interface Props {
//     defaultValue: string;
//     type?: string;
//     maxLength?: number;
//     onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
// }

export class ActionCatalog extends React.Component {
    public render() {
        //const { defaultValue, type, onChange, maxLength } = this.props;

        return (
			<NestedList>
				<NestedItem
					childrenCount={5}
					title={"Бытовая техника"}
					information={"Максимальная выгода"}
					maxDiscount={20}
				/>
				<NestedItem
					childrenCount={180}
					title={"Школьные товары, канцтовары"}
					information={"Последовательное применение"}
					maxDiscount={null}
				/>
				<NestedItem
					childrenCount={12}
					title={"Видео, фото"}
					information={"Суммирование"}
					maxDiscount={10}
				>
					<ul className="kit-nested-list__sublist">
						<NestedItem
							childrenCount={5}
							title={"Бытовая техника"}
							information={"Максимальная выгода"}
							maxDiscount={null}
						>
							<ul className="kit-nested-list__sublist">
								<NestedItem
									childrenCount={5}
									maxDiscount={50}
									title={"Бытовая техника"}
									information={"Максимальная выгода"}
								/>
								<StockList>
									<StockItem icon={'percent-round'}
											   title={'Скидка физическим лицам по промокоду'}
											   start={null}
											   finish={'25.11.19'}
											   badgeTitle={"Остановлена"}
									/>
									<StockItem icon={'coins'}
											   title={'Скидка физическим лицам по промокоду'}
											   start={'25.11.19'}
											   finish={'25.11.20'}
											   badgeTitle={"Завершена"}
									/>
									<StockItem isFinished={true}
											   icon={'percent-round'}
											   title={'Скидка физическим лицам по промокоду'} start={null}
											   finish={null}
											   badgeTitle={"Остановлена"}
									/>
								</StockList>
							</ul>
						</NestedItem>
					</ul>
				</NestedItem>
			</NestedList>
        );
    }
}
