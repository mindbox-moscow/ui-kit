import * as React from "react";
import "./Page.scss";

interface Props extends React.Props<Header> {}

export class Header extends React.Component<Props> {
    public render() {
        const { children } = this.props;
        return (
            <header className="kit-page__header">
                <div className="kit-page__container">
                    <div className="kit-page__head-inner">{children}</div>
                </div>
            </header>
        );
    }
}
