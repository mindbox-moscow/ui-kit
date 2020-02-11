import * as React from "react";
import "./GroupRadioButtons.scss";

interface IProps {
	label?: string;
}

const GroupRadioButtons: React.FC<IProps> = ({ children, label }) => {
	return (
		<div className="kit-group-radio-buttons">
			{label && (
				<span className="kit-group-radio-buttons__label">{label}</span>
			)}
			<div className="kit-group-radio-buttons__wrapper">{children}</div>
		</div>
	);
};

export { GroupRadioButtons };
