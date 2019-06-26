import * as React from "react";
import { Item } from "./components/Item/Item";
import { List } from "./components/List/List";

interface Props {
	text: string;
	onClick: (e: React.MouseEvent) => void;
}

export class Breadcrumb extends React.Component<Props> {
	public static Item = Item;
	public static List = List;

	public render() {
		const { text } = this.props;
		return (
			<Breadcrumb.List>
				<Breadcrumb.Item text={text} />
			</Breadcrumb.List>
		);
	}
}
