import * as React from "react";
import "./Input.scss";

interface Props {
    defaultValue: string;
    type?: string;
    maxLength?: number;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export class Input extends React.Component<Props> {
    public render() {
        const { defaultValue, type, onChange, maxLength } = this.props;

        return (
            <input
                onChange={onChange}
                type={type}
                className="input-field"
                defaultValue={defaultValue}
                maxLength={maxLength}
            />
        );
    }
}
