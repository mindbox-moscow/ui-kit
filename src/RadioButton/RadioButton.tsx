import * as React from "react";
import { Icon, IconsTypes } from "../Icon";
import "./RadioButton.scss";

import cn from "classnames";

interface IProps {
	children: string;
	checked?: boolean;
	name: string;
	onSelected?: () => void;
	icon?: IconsTypes;
}

export class RadioButton extends React.Component<IProps> {
	public render() {
		const {
			children,
			checked,
			name,
			onSelected = () => {},
			icon
		} = this.props;

		return (
			<label className={cn("kit-radio", { "kit-radio_icon": icon })}>
				<input
					className="kit-radio__input"
					type="radio"
					name={name}
					onChange={onSelected}
					checked={checked}
				/>
				<span className="kit-radio__checkmark">
					{icon && <Icon className="kit-radio__icon" icon={icon} />}
					{children}
				</span>
			</label>
		);
	}
}
