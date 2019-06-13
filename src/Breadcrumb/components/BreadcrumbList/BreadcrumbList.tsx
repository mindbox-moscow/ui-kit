import * as React from "react";

import "./BreadcrumbList.scss";

export class BreadcrumbList extends React.Component {
    public render() {
        return (
            <ul className='kit-breadcrumb-list'>
                {this.props.children}
            </ul>
        );
    }
}
