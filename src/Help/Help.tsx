import * as React from "react";
import "./Help.scss";
import { Icon } from "../Icon/Icon";

export class Help extends React.Component<{}> {
    public render() {
        const { children } = this.props;
        return (
            <div className="kit-help">
                <div className="kit-help__icon">
                    <Icon icon="help" />
                </div>
                <div className="kit-help__inner">{children}</div>
            </div>
        );
    }
}
