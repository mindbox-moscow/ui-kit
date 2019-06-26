import * as React from "react";
import "./Item.scss";

interface Props {
    text: string;
}

export class Item extends React.Component<Props> {
    public render() {
        const { text } = this.props;
        return (
            <li className='kit-breadcrumb-item'>
                <button className="kit-breadcrumb-item__btn" >{text}</button>
            </li>
        );
    }
}
