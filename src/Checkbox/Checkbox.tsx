import * as React from "react";
import "./Checkbox.scss";

interface Props {
    text?: string;
    name?: string;
    checked?: boolean;
}

export class Checkbox extends React.Component<Props> {
    public render() {
        const { text, checked, name } = this.props;
        return (
            <label className="checkbox">
                <input
                    defaultChecked={checked}
                    type="checkbox"
                    className="checkbox__input"
                    name={name}
                />
                {text && <span className="checkbox__text">{text}</span>}
            </label>
        );
    }
}
