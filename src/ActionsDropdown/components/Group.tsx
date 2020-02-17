import * as React from "react";

interface IGroupProps {
	title?: string;
}

const Group: React.FC<IGroupProps> = props => {
	const { title, children } = props;

	return (
		<section className="kit-actions-dropdown__group">
			{title && (
				<h6 className="kit-actions-dropdown__group-title">{title}</h6>
			)}
			{children}
		</section>
	);
};

export { Group, IGroupProps };
