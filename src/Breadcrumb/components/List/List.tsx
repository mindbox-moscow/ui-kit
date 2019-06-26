import * as React from "react";

import "./List.scss";

export class List extends React.Component {
    public render() {
        return (
            <ul className='kit-breadcrumb-list'>
                {this.props.children}
            </ul>
        );
    }
}
