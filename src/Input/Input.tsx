import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import "./Input.scss";

interface Props {
	defaultValue: string;
	type?: string;
	placeholder?: string;
	maxLength?: number;
	onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
	noShadow?: boolean;
}

interface State {
	filter?: any;
}

export class Input extends React.Component<Props, State> {
	public state = { filter: "" };

	public render() {
		const {
			defaultValue,
			type,
			placeholder,
			onChange,
			maxLength,
			noShadow
		} = this.props;

		return (
			<div className="kit-input-field-wrap">
				<input
					onChange={onChange}
					type={type || "text"}
					className={cn(
						"kit-input-field",
						type === "search" && "kit-input-field_search",
						noShadow && "kit-input-field_no-shadow"
					)}
					defaultValue={defaultValue}
					maxLength={maxLength}
					placeholder={placeholder}
					aria-hidden={true}
				/>
				{type === "search" && (
					<IconSvg
						className="kit-input-field__icon"
						type="magnifier"
					/>
				)}
			</div>
		);
	}
}
