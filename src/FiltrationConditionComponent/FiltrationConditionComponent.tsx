import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { StateProps, CallbackProps } from "./types";

import "./FiltrationConditionComponent.scss";

type Props = StateProps & CallbackProps;

export class FiltrationConditionComponent extends React.Component<Props> {
	public render() {
		const {
			filtrationObjectName,
			filtrationMethodName,
			filtrationMethodParametersComponent,
			linkedConditionComponent,
			state
		} = this.props;
		return (
			<li className="kit-filtration-condition">
				<span
					className={cn("kit-filtration-condition__item-text", {
						"kit-filtration-condition__item-text_edit":
							state === "edit"
					})}
				>
					<div className="kit-filtration-condition__drag-and-drop" />
					<b>{filtrationObjectName}</b>
					{filtrationMethodName && (
						<span>{filtrationMethodName}</span>
					)}
					{filtrationMethodParametersComponent}
					{state === "edit" && (
						<div className="kit-filtration-condition__remove">
							<IconSvg type="trash" />
						</div>
					)}
				</span>
				{linkedConditionComponent}
			</li>
		);
	}
}
