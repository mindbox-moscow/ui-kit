import * as React from "react";
import { StockList } from "./StockList/StockList";
import { StockItem } from "./StockItem/StockItem";

interface Props {
    title: string;
    icon: string;
	start: string | null;
	finish: string | null;
	isFinished?: boolean;
	badgeTitle: string;
}

export class StockInfo extends React.Component<Props> {
    public render() {
    	const {title, icon, start, finish, isFinished, badgeTitle} = this.props;
        return (
			<StockList>
				<StockItem
					isFinished={isFinished}
					title={title}
					icon={icon}
					start={start}
					finish={finish}
					badgeTitle={badgeTitle}
				/>
			</StockList>
        );
    }
}
