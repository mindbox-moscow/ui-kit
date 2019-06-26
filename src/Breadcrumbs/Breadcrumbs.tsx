import * as React from "react";

import "./Breadcrumbs.scss"

interface IProps {
	children: any;
	text: string;
	onClick: (e: React.MouseEvent) => void;
}

interface IPropsItem {
	text: string;
}

const Item = (props: IPropsItem) => {
	const { text } = props;

	return (
		<li className="kit-breadcrumb__item">
			<button className="kit-breadcrumb__btn">{text}</button>
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
