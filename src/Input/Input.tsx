import * as React from "react";
import cn from "classnames";
import "./Input.scss";
import { IconSvg } from "../IconSvg";

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
						noShadow && "kit-input-field_no-shadow",
						type === "search" && "kit-input-field_search-no-shadow"
					)}
					defaultValue={defaultValue}
					maxLength={maxLength}
					placeholder={placeholder}
					aria-hidden={true}
				/>
				{type === "search" && noShadow ? (
					<IconSvg
						className="kit-input-field__icon"
						type="magnifier"
					/>
				) : (
					type === "search" &&
					!noShadow && (
						<IconSvg
							className="kit-input-field__icon kit-input-field__icon_grey"
							type="magnifier"
						/>
					)
				)}
			</div>
		);
	}
}
