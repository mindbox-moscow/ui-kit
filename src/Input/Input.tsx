import * as React from "react";
import cn from "classnames"
import "./Input.scss";

interface Props {
    defaultValue: string;
    type?: string;
    maxLength?: number;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
	classname?: string;
}

export class Input extends React.Component<Props> {
    public render() {
        const { defaultValue, type, onChange, maxLength, classname } = this.props;

        return (
            <input
                onChange={onChange}
                type={type}
				className={cn(
					"kit-input-field",
					{
						[`kit-input-field_${classname}`]: classname
					}
				)}
                defaultValue={defaultValue}
                maxLength={maxLength}
            />
        );
    }
}
