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

	let nameToBeShown = itemName;

	if (nameToBeShown.length > 50) {
		nameToBeShown = nameToBeShown.substr(0, 47) + "...";
	}

	return (
		<li className={cn("kit-selectR-choices-result", className)}>
			{children}
			<span
				className={cn("kit-selectR-choices-label", textClassName)}
				onClick={handleTextClick}
			>
				{nameToBeShown}
			</span>
			<span className="kit-selectR-clear" onClick={handleClearClick} />
		</li>
	);
};

export { SelectedItem };
