import * as React from "react";
import "./Checkbox.scss";

interface Props {
    text?: string;
    name?: string;
    checked?: boolean;
    onChange?: (newValue: boolean) => void;
}

export class Checkbox extends React.Component<Props> {
    public render() {
        const {
            text,
            checked = false,
            name,
            onChange = () => { }
        } = this.props;
        return (
            <label className="checkbox">
                <input
                    checked={checked}
                    type="checkbox"
                    className="checkbox__input"
                    name={name}
                    onChange={() => onChange(!checked)}
                />
                {text && <span className="checkbox__text">{text}</span>}
            </label>
        );
    }
}
