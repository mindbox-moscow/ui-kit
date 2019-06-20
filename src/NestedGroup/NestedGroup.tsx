import * as React from "react";
import { NestedItem } from "./components/NestedItem/NestedItem";
import { NestedList } from "./components/NestedList/NestedList";
import "./NestedGroup.scss";

interface Props {
	childrenCount: number;
	title: string;
	information: string;
	maxDiscount: number | null
}

export class NestedGroup extends React.Component<Props> {
	public render() {
		const {childrenCount, title, information, maxDiscount} = this.props;
		return (
			<NestedList>
				<NestedItem
					childrenCount={childrenCount}
					title={title}
					information={information}
					maxDiscount={maxDiscount}
				/>
			</NestedList>
		);
	}
}
