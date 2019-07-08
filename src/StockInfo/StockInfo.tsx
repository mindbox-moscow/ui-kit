import * as React from "react";
import { StockList } from "./StockList/StockList";
import { StockItem } from "./StockItem/StockItem";

interface Props {
    title: string;
	type: string;
	start: string | null;
	finish: string | null;
	isFinished?: boolean;
	badgeTitle: string;
	stockCount: number;
	stockTitle: string;
	information: string
}

export class StockInfo extends React.Component<Props> {
    public render() {
    	const {title, type, start, finish, isFinished, badgeTitle, stockCount, stockTitle, information} = this.props;
        return (
			<StockList>
				<StockItem
					isFinished={isFinished}
					title={title}
					type={type}
					start={start}
					finish={finish}
					badgeTitle={badgeTitle}
					stockCount={stockCount}
					stockTitle={stockTitle}
					information={information}
				/>
			</StockList>
        );
    }
}
