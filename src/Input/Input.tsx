import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import "./Input.scss";

type SizeTypes = "small";

interface Props {
	defaultValue: string;
	type?: string;
	placeholder?: string;
	maxLength?: number;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	noShadow?: boolean;
	size?: SizeTypes;
	className?: string;
	autoFocus?: boolean;
}

interface State {
	filter?: any;
}

export class Input extends React.PureComponent<Props, State> {
	public state = { filter: "" };
	private refInput = React.createRef<HTMLInputElement>();

	public focus() {
		const node = this.refInput.current;

		if (node) {
			node.focus();
		}
	}

	public render() {
		const {
			defaultValue,
			type,
			placeholder,
			onChange,
			maxLength,
			noShadow,
			size,
			className,
			autoFocus = false
		} = this.props;

		return (
			<div className="kit-input-field-wrap">
				<input
					ref={this.refInput}
					autoFocus={autoFocus}
					onChange={onChange}
					type={type || "text"}
					className={cn(
						"kit-input-field",
						type === "search" && "kit-input-field_search",
						noShadow && "kit-input-field_no-shadow",
						size && `kit-input-field_size_${size}`,
						className
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
