import * as React from "react";

import { Tooltip } from "../Tooltip";

import "./DateLabel.scss";

interface IProps {
	title: string | JSX.Element;
	date: string;
}

export const DateLabel: React.FC<IProps> = props => {
	const { title, children } = props;

	const date = <span className="kit-date-label__date">{props.date}</span>;

	return (
		<span className="kit-date-label">
			<span className="kit-date-label__text">{title}</span>
			<Tooltip title={date}>{children}</Tooltip>
		</span>
	);
};
