import * as React from "react";

import "./styles/index.scss"

interface IProps {
	text: string;
	onClick: (e: React.MouseEvent) => void;
}

interface IPropsList {
	children: any
}

interface IPropsItem {
	text: string;
}

const List = (props: IPropsList) => {
	const { children } = props;

	return (
		<ul className="kit-breadcrumb-list">{children}</ul>
	);
};

const Item = (props: IPropsItem) => {
	const { text } = props;

	return (
		<li className="kit-breadcrumb-item">
			<button className="kit-breadcrumb-item__btn">{text}</button>
		</li>
	);
};

class Breadcrumb extends React.Component<IProps> {
	public static List: (props: IPropsList) => JSX.Element;
	public static Item: (props: IPropsItem) => JSX.Element;

	public render() {
		const { text } = this.props;
		return <Breadcrumb.List>
				<Breadcrumb.Item text={text} />
			</Breadcrumb.List>;
	}
}

Breadcrumb.List = List;
Breadcrumb.Item = Item;

export { Breadcrumb };
