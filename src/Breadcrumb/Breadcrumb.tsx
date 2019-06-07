import * as React from "react";
import "./Breadcrumb.scss";

interface Props {
    text: string;
}

export class Breadcrumb extends React.Component<Props> {
    public render() {
        const { text } = this.props;
        return (
            <button className='kit-breadcrumb'>
                {text}
            </button>
        );
    }
}
