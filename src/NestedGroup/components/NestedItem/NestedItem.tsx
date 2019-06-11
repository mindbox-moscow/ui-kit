import * as React from "react";
import classnames from "classnames";

import "./NestedItem.scss";

interface Props {
	childrenCount: number;
	title: string;
    information: string;
	details: {
		maxDiscount?: number;
		typeOfSales?: boolean;
	};
}

interface State {
	isExpanded?: boolean;
}

export class NestedItem extends React.Component<Props, State> {
    public state: State = { isExpanded: true };

    private expandTree = () => {
        this.setState({ isExpanded: !this.state.isExpanded});
    };

    public render() {
        const { childrenCount, title, information, details, children } = this.props;
        const { isExpanded } = this.state;

        return (
            <React.Fragment>
            <li className={classnames('kit-nested-item', { "kit-nested-item_expand": !isExpanded })}>
                <div className="kit-nested-item__wrap" onClick={this.expandTree}>
                    <div className={classnames('kit-nested-item__title-wrap', { "kit-nested-item__title-wrap_expand": !isExpanded })}>
                        <span className="kit-nested-item__name">{title}</span>
                        <span className="kit-nested-item__number">{childrenCount}</span>
                    </div>
                    <div className={classnames('kit-nested-item__promo', { "kit-nested-item__promo_expand": !isExpanded })}>
                        <span className="kit-nested-item__promo-title">
							{information}
                        </span>
                        <span className={classnames('kit-nested-item__sale', { "kit-nested-item__sale_no-sale": !details.typeOfSales })}>
							{details.typeOfSales ? `Максимальная скидка: ${details.maxDiscount}%` : 'Без' +
								' максимальной' +
								' скидки' }
						</span>
                    </div>
                </div>
                {!isExpanded && children}
            </li>
            </React.Fragment>
        );
    }
}
