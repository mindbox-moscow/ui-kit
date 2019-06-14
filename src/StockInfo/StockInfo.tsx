import * as React from "react";
import "./StockInfo.scss";
import { StockList } from "./StockList/StockList";
import { StockItem } from "./StockItem/StockItem";

interface Props {
    title: string;
    icon: string;
	start: string | null;
	finish: string | null;
}

export class StockInfo extends React.Component<Props> {
    public render() {
    	const {title, icon, start, finish} = this.props;
        return (
			<StockList>
				<StockItem title={title} icon={icon} start={start} finish={finish}/>
			</StockList>
        );
    }
}
