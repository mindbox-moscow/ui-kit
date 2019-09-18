import * as React from "react";
import { StateProps, CallbackProps } from "./types";

import "./FiltrationConditionComponent.scss";

type Props = StateProps & CallbackProps;

export class FiltrationConditionComponent extends React.Component<Props> {
	public render() {
		const {
			filtrationObjectName,
			filtrationMethodName,
			filtrationMethodParametersComponent,
			linkedConditionComponent
		} = this.props;
		return (
			<li className="kit-filtration-condition">
				<span className="kit-filtration-condition__item-text">
					<div className="kit-filtration-condition__drag-and-drop" />
					<b>{filtrationObjectName}</b>
					{filtrationMethodName && (
						<span>{filtrationMethodName}</span>
					)}
					{filtrationMethodParametersComponent}
				</span>
				{linkedConditionComponent}
			</li>
		);
	}
}
