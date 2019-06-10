import * as React from "react";
import "./NestedList.scss";

interface Props {}

export class NestedList extends React.Component<Props> {
    public render() {
        return (
            <ul className="kit-nested-list">
                {this.props.children}
            </ul>
        );
    }
}
