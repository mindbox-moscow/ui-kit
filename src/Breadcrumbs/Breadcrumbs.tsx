import * as React from "react";

import "./Breadcrumbs.scss"

interface IProps {
	children: any;
	text: string;
}

interface IPropsItem {
	text: string;
	onClick: (e: React.MouseEvent) => void;
}

const Item = (props: IPropsItem) => {
	const { text, onClick } = props;

	return (
		<li className="kit-breadcrumb__item">
			<button className="kit-breadcrumb__btn" onClick={onClick}>{text}</button>
		</li>
	);
};

class Breadcrumbs extends React.Component<IProps> {
	public static Item: (props: IPropsItem) => JSX.Element;

	public render() {
		const { children } = this.props;
		return (
			<ul className="kit-breadcrumb">{children}</ul>
		)
	}
}

Breadcrumbs.Item = Item;

export { Breadcrumbs };
