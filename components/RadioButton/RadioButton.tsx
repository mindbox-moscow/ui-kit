import * as React from "react";
import './RadioButton.scss'

interface Props {
    children: string;
    checked: boolean;
    name: string;
    onChange?: () => void;
}

export class RadioButton extends React.Component<Props> {
    public render() {
        const { children, checked, name, onChange = () => {} } = this.props
        return (
            <label className="radio">
                <input className="input" type="radio" checked={checked} name={name} onChange={onChange} />
                <span className="checkmark">{children}</span>
            </label>
        );
    }
}