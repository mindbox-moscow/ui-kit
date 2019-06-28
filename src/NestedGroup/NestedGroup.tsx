import * as React from "react";
//import { Button } from "../Button";
import { NestedItem } from "./components/NestedItem/NestedItem";
import { NestedList } from "./components/NestedList/NestedList";
import "./NestedGroup.scss";

interface Props {
	childrenCount: number;
	title: string;
	information: string;
	maxDiscount: number | null;
	updateState: any
}

interface State {

}

export class NestedGroup extends React.Component<Props, State> {
	public render() {
		const {
			childrenCount,
			title,
			information,
			maxDiscount,
			updateState
		} = this.props;

		return (
			<>
				<NestedList>
					<NestedItem
						{...this.props}
						childrenCount={childrenCount}
						title={title}
						information={information}
						maxDiscount={maxDiscount}
						name={name}
						updateState={updateState}
					/>
				</NestedList>
			</>
		);
	}
}
