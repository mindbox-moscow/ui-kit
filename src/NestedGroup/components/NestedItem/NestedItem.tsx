import * as React from "react";
import classnames from "classnames";

import "./NestedItem.scss";

interface Props {
    number: number;
    article: string;
    information: string;
    sales: string;
}

interface State {
    isChangeTree?: boolean;
}

export class NestedItem extends React.Component<Props, State> {
    public state: State = { isChangeTree: true };

    private expandTree = () => {
        console.log(this.state);
        this.setState({ isChangeTree: !this.state.isChangeTree});
    };

    public render() {
        const { number, article, information, sales, children } = this.props;
        const { isChangeTree } = this.state;

        return (
            <React.Fragment>
            <li className="kit-nested-item">
                <div className="kit-nested-item__wrap" onClick={this.expandTree}>
                    <div className={classnames('kit-nested-item__title-wrap', { "kit-nested-item__title-wrap_expand": !isChangeTree })}>
                        <span className="kit-nested-item__name">{article}</span>
                        <span className="kit-nested-item__number">{number}</span>
                    </div>
                    <div className="kit-nested-item__promo">
                        <span className="kit-nested-item__promo-title">{information}</span>
                        <span className="kit-nested-item__sale">{sales}</span>
                    </div>
                </div>
                {!isChangeTree && children}
            </li>
            </React.Fragment>
        );
    }
}
