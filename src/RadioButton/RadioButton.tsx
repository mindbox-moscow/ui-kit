import * as React from "react";
import { Icon, IconsTypes } from "../Icon";
import { IconSvg, IconSvgTypes } from "../IconSvg";
import "./RadioButton.scss";

import cn from "classnames";

interface IProps {
	children: string;
	checked?: boolean;
	name: string;
	onSelected?: () => void;
	icon?: IconsTypes;
	iconSvg?: IconSvgTypes;
}

export class RadioButton extends React.Component<IProps> {
	public render() {
		const {
			children,
			checked,
			name,
			onSelected = () => {},
			icon,
			iconSvg
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
				<span
					className={cn(
						"kit-radio__checkmark",
						(icon || iconSvg) && "kit-radio__checkmark_has-icon"
					)}
				>
					{icon && <Icon className="kit-radio__icon" icon={icon} />}
					{iconSvg && (
						<IconSvg
							className="kit-radio__icon kit-radio__icon_svg"
							type={iconSvg}
						/>
					)}
					{children}
				</span>
			</label>
		);
	}
}
