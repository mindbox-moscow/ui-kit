import * as React from "react";
import cn from "classnames";
import "./DateLabel.scss";

interface IProps {
	title?: string;
	date?: string;
}

export const DateLabel: React.FC<IProps> = props => {
	const { title, date, children } = props;

	return (
		<span className="kit-date-label">
			{title && (
				<span
					className={cn("kit-date-label__text", {
						"kit-date-label__text_with-point": date || children
					})}
				>
					{title}
				</span>
			)}
			{children ? (
				<span className="kit-date-label__date">{children}</span>
			) : date ? (
				<span className="kit-date-label__date">{date}</span>
			) : null}
		</span>
	);
};
