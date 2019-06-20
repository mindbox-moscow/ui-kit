import * as React from "react";
import "./StockList.scss";

export class StockList extends React.Component {
    public render() {
        return (
            <div className="kit-stock-list">
				{this.props.children}
			</div>
        );
    }
}
