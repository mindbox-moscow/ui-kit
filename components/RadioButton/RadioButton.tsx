import * as React from "react";
import './RadioButton.scss'

interface Props {
    children: string;
    checked?: boolean;
    name: string;
    onChange?: () => void;
}

export class RadioButton extends React.Component<Props> {
    public render() {
        const { children, checked, name, onChange = () => {} } = this.props
        return (
            <label className="radio">
                <input className="radio__input" type="radio" defaultChecked={checked} name={name} onChange={onChange} />
                <span className="radio__checkmark">{children}</span>
            </label>
        );
    }
}