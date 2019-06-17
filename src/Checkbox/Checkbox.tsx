import * as React from "react";

import "./Checkbox.scss";

interface Props {
    text?: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean
    onChange?: (newValue: boolean) => void;
	classname?: string;
}

export class Checkbox extends React.Component<Props> {
    public render() {
        const {
            text,
            checked = false,
            name,
			disabled,
            onChange = () => { }
        } = this.props;
        return (
			<label className="kit-checkbox">
				{text}
				<input type="checkbox"
					   className="kit-checkbox--hidden kit-checkbox--primary"
					   checked={checked}
					   disabled={disabled}
					   name={name}
					   onChange={() => onChange(!checked)}
				/>
				<div className="kit-checkbox--show"/>
			</label>
        );
    }
}
