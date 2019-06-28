import * as React from "react";

import { Button } from "../Button";
import { NestedItem } from "../NestedGroup/components/NestedItem/NestedItem";
import { NestedList } from "../NestedGroup/components/NestedList/NestedList";
import { StockItem } from "../StockInfo/StockItem/StockItem";
import { StockList } from "../StockInfo/StockList/StockList";

import "./ActionCatalog.scss";

interface IProps {

}

interface IState {
	name: any,
}

export class ActionCatalog extends React.Component<IProps, IState> {

	public state = {
		name: false,
	};

	public render() {

		// @ts-ignore
		// @ts-ignore
		return (
			<>
				<div style={{ display: "flex" }}>
					<Button
						color="gray"
						size="medium"
						hasBorder={true}
						onClick={this.expandTree}
					>
						Развернуть всё
					</Button>
					<Button
						color="gray"
						size="medium"
						hasBorder={true}
						onClick={this.collapseTree}
					>
						Свернуть всё
					</Button>
				</div>
				<NestedList>
					<NestedItem
						childrenCount={5}
						title={"Бытовая техника"}
						information={"Максимальная выгода"}
						maxDiscount={20}
						name={this.state.name}
						updateState={null}
					/>
					<NestedItem
						childrenCount={180}
						title={"Школьные товары, канцтовары"}
						information={"Последовательное применение"}
						maxDiscount={null}
						name={this.state.name}
						updateState={null}
					/>
					<NestedItem
						childrenCount={12}
						title={"Видео, фото"}
						information={"Суммирование"}
						maxDiscount={10}
						name={this.state.name}
						updateState={this.updateData}
					>
						<ul className="kit-nested-list__sublist">
							<NestedItem
								childrenCount={5}
								title={"Бытовая техника"}
								information={"Максимальная выгода"}
								maxDiscount={null}
								name={this.state.name}
								updateState={this.updateData}
							>
								<ul className="kit-nested-list__sublist">
									<NestedItem
										childrenCount={5}
										maxDiscount={50}
										title={"Бытовая техника"}
										information={"Максимальная выгода"}
										name={this.state.name}
										updateState={this.updateData}
									/>
									<StockList>
										<StockItem
											icon={"percent-round"}
											title={
												"Скидка физическим лицам по промокоду"
											}
											start={null}
											finish={"25.11.19"}
											badgeTitle="Заверешена"
											size="small"
										/>
										<StockItem
											icon={"coins"}
											title={
												"Скидка физическим лицам по промокоду"
											}
											start={"25.11.19"}
											finish={"25.11.20"}
											badgeTitle="Заверешена"
											size="small"
											mode="danger"
										/>
										<StockItem
											isFinished={true}
											icon={"percent-round"}
											title={
												"Скидка физическим лицам по промокоду"
											}
											start={null}
											finish={null}
											badgeTitle="Заверешена"
											size="small"
											mode="disabled"
										/>
									</StockList>
								</ul>
							</NestedItem>
						</ul>
					</NestedItem>
				</NestedList>
			</>
		);
	}

	private expandTree = () => {
		this.setState({name: true });
	};

	private collapseTree = () => {
		this.setState({name: false });
	};

	private updateData = () => {
		this.setState(state => ({
			...state,
			name: !state.name
		}));
	};
}
