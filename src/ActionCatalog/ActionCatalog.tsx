import * as React from "react";

import { Button } from "../Button";
import { NestedItem } from "../NestedGroup/components/NestedItem/NestedItem";
import { NestedList } from "../NestedGroup/components/NestedList/NestedList";
import { StockItem } from "../StockInfo/StockItem/StockItem";
import { StockList } from "../StockInfo/StockList/StockList";

import "./ActionCatalog.scss";

interface IProps {
	onClick?: any;
	updateData: any;
}

interface IState {
	defaultStatus: any;
	isExpanded: boolean
}

export class ActionCatalog extends React.Component<IProps, IState> {
	public state = {
		defaultStatus: false,
		isExpanded: false
	};

	public render() {
		const { onClick } = this.props;

		return (
			<React.Fragment>
				<div>
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
						defaultStatus={this.state.defaultStatus}
						onClick={onClick}
						updateData={this.updateData}
					/>
					<NestedItem
						childrenCount={180}
						title={"Школьные товары, канцтовары"}
						information={"Последовательное применение"}
						maxDiscount={null}
						defaultStatus={this.state.defaultStatus}
						onClick={onClick}
						updateData={this.updateData}
					/>
					<NestedItem
						childrenCount={12}
						title={"Видео, фото"}
						information={"Суммирование"}
						maxDiscount={10}
						defaultStatus={this.state.defaultStatus}
						onClick={onClick}
						updateData={this.updateData}
					>
						<ul className="kit-nested-list__sublist">
							<NestedItem
								childrenCount={5}
								title={"Бытовая техника"}
								information={"Максимальная выгода"}
								maxDiscount={null}
								defaultStatus={this.state.defaultStatus}
								onClick={onClick}
								updateData={this.updateData}
							>
								<ul className="kit-nested-list__sublist">
									<NestedItem
										childrenCount={5}
										maxDiscount={50}
										title={"Бытовая техника"}
										information={"Максимальная выгода"}
										defaultStatus={this.state.defaultStatus}
										onClick={onClick}
										updateData={this.updateData}
									/>
									<StockList>
										<StockItem
											icon={"percent-round"}
											title={
												"Скидка физическим лицам по промокоду"
											}
											start={null}
											finish={"25.11.19"}
											badgeTitle={"Остановлена"}
										/>
										<StockItem
											icon={"coins"}
											title={
												"Скидка физическим лицам по промокоду"
											}
											start={"25.11.19"}
											finish={"25.11.20"}
											badgeTitle={"Завершена"}
										/>
										<StockItem
											isFinished={true}
											icon={"percent-round"}
											title={
												"Скидка физическим лицам по промокоду"
											}
											start={null}
											finish={null}
											badgeTitle={"Остановлена"}
										/>
									</StockList>
								</ul>
							</NestedItem>
						</ul>
					</NestedItem>
				</NestedList>
			</React.Fragment>
		);
	}

	private expandTree = () => {
		this.setState(state => ({ ...state, defaultStatus: true }));
	};

	private collapseTree = () => {
		this.setState(state => ({ ...state, defaultStatus: false }));
	};

	private updateData = () => {
		this.setState(state => ({
			...state,
			defaultStatus: !this.state.defaultStatus,
			isExpanded: !this.state.isExpanded
		}));
	};
}
