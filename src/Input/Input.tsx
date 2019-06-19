import * as React from "react";
import cn from "classnames"
import "./Input.scss";
import { IconSvg } from "../IconSvg";

interface Props {
    defaultValue: string;
    type?: string;
	placeholder?: string;
    maxLength?: number;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
	noShadow?: boolean
}

interface State {
	filter?: any;
}

export class Input extends React.Component<Props, State> {

	public state: State = { filter: "" };

    public render() {
        const { defaultValue, type,placeholder, onChange, maxLength, noShadow } = this.props;

        return (
			<div className="kit-input-field-wrap">
				<input
					onChange={onChange}
					type={type}
					className={cn(
						"kit-input-field",
						{
							[`kit-input-field_no-shadow`]: noShadow,
							[`kit-input-field_search`]: type === "search"
						}
					)}
					defaultValue={defaultValue}
					maxLength={maxLength}
					placeholder={placeholder}
				/>
				{type === "search" &&
					<span className="kit-input-field__icon">
						<IconSvg type="glasses" />
					</span>
				}
			</div>
        );
    }
}
