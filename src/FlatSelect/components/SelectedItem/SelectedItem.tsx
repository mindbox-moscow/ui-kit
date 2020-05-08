import cn from "classnames";
import * as React from "react";
import { FC } from "react";

interface IProps {
	className?: string;
	itemName: string;
	itemSystemName: string;
	textClassName?: string;
	onClearClick: (systemName: string) => void;
	onTextClick?: (name: string, systemName: string) => void;
}

const SelectedItem: FC<IProps> = props => {
	const {
		onClearClick,
		itemSystemName,
		onTextClick,
		itemName,
		className,
		textClassName,
		children
	} = props;

	const handleClearClick = () => {
		onClearClick(itemSystemName);
	};

	const handleTextClick = () => {
		if (onTextClick) {
			onTextClick(itemName, itemSystemName);
		}
	};

	return (
		<li className={cn("kit-selectR-choices-result", className)}>
			{children}
			<span
				className={cn("kit-selectR-choices-label", textClassName)}
				onClick={handleTextClick}
			>
				{itemName}
			</span>
			<span className="kit-selectR-clear" onClick={handleClearClick} />
		</li>
	);
};

export { SelectedItem };
