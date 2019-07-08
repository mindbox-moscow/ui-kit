import * as React from "react";

import Nestable from "react-nestable";
import { Button } from "../Button";
import { NestedItem } from "../NestedGroup/components/NestedItem/NestedItem";
// import { NestedList } from "../NestedGroup/components/NestedList/NestedList";
// import { StockItem } from "../StockInfo/StockItem/StockItem";
// import { StockList } from "../StockInfo/StockList/StockList";

import "./ActionCatalog.scss";
import { StockItem } from "../StockInfo/StockItem/StockItem";
import { StockList } from "../StockInfo/StockList/StockList";

interface IProps {
	refNestable?: any;
}

interface IState {
	name: any;
	defaultCollapsed: any;
}

const items = [
	{
		id: 0,
		title: "Бытовая техника",
		childrenCount: 5,
		information: "Максимальная выгода",
		maxDiscount: 20
	},
	{
		id: 1,
		title: "Бытовая техника",
		childrenCount: 12,
		maxDiscount: null,
		information: "Суммирование",
		sublist: true,
	},
	{
		id: 3,
		title: "Бытовая техника",
		maxDiscount: null,
		childrenCount: 180,
		information: "Максимальная выгода"
	}
];

const subItem = [
	{
		id: 0,
		stockTitle: "Скидка 10% по промокоду",
		type: "percent-round",
		start: "22.01.14",
		finish: "24.01.15",
		badgeTitle: "Завершено",
		size: "small",
		badge: "danger",
		stockCount: 50,
		maxDiscount: 50,
		information: "Суммирование"
	}
];

export class ActionCatalog extends React.Component<IProps, IState> {
	public state = {
		defaultCollapsed: false,
		name: false
	};

	private refNestable: any;

	public render() {
		return (
			<>
				<div style={{ display: "flex" }}>
					<Button
						color="gray"
						size="medium"
						hasBorder={true}
						onClick={() => {
							return this.collapse(1);
						}}
					>
						Свернуть всё
					</Button>
					<Button
						color="gray"
						size="medium"
						hasBorder={true}
						onClick={() => this.collapse(0)}
					>
						Развернуть всё
					</Button>
				</div>
				<Nestable
					items={items}
					renderItem={this.renderItem}
					collapsed={this.state.defaultCollapsed}
					ref={(el: any) => (this.refNestable = el)}
					handler={<span className="hand" />}
					group="kit-nested-item__group"
				/>
			</>
		);
	}

	public onDefaultCollapsed = () => {
		this.setState({
			defaultCollapsed: !this.state.defaultCollapsed
		});
	};

	// @ts-ignore

	public renderSublist = ({ item }) => {
		return (
			<StockList>
				<StockItem
					title={item.title}
					stockTitle={item.stockTitle}
					information={item.information}
					type={item.type}
					start={item.start}
					finish={item.finish}
					badgeTitle={item.badgeTitle}
					size={item.size}
					stockCount={item.stockCount}
				/>
			</StockList>
		);
	};

	// @ts-ignore
	public renderItem = ({ item, handler, collapseIcon }) => {
		return (
			<>
				{handler}
				{collapseIcon}
				<NestedItem
					childrenCount={item.childrenCount}
					maxDiscount={item.maxDiscount}
					title={item.title}
					information={item.information}
					defaultCollapsed={this.state.defaultCollapsed}
				>
					{item.sublist && (
						<>
						<ul className="kit-nested-list__sublist">
							{/*{item.sublist.map(this.renderSublist)}*/}
							<Nestable
								childrenProp="kit-nested-list__sub"
								items={subItem}
								renderItem={this.renderSublist}
								group="kit-nested-list__sub"
								//defaultCollapsed={this.state.defaultCollapsed}
							/>
						</ul>
							{handler}
						</>
					)}
				</NestedItem>
			</>
		);
	};

	private collapse = (collapseCase: any) => {
		if (this.refNestable) {
			switch (collapseCase) {
				case 0:
					this.refNestable.collapse("NONE");
					break;
				case 1:
					this.refNestable.collapse("ALL");
					break;
			}
		}
	};
}
