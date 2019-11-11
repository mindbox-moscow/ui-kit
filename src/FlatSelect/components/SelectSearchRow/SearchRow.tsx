import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { SelectSearchRowProps } from "./types";

export class SelectSearchRow extends React.Component<SelectSearchRowProps, {}> {
	public render() {
		const liClassesArray = ["selectR-result"];

		if (this.props.className != null) {
			liClassesArray.push(this.props.className);
		}

		if (this.props.unselectable) {
			liClassesArray.push("selectR-unselectable");
		}

		if (this.props.disabled) {
			liClassesArray.push("selectR-disabled");
		}

		if (this.props.isSelected) {
			liClassesArray.push(
				this.props.isForMultiSelect
					? "selectR-selected-multi"
					: "selectR-selected"
			);
		}

		const divClassesArray = ["selectR-label "];
		if (this.props.isLoader) {
			divClassesArray.push("selectR-request-item");
		}

		const children = (): JSX.Element | null => {
			if (this.props.hasNested) {
				liClassesArray.push("selectR-nesting");

				return (
					<ul className="selectR-results selectR-results-default">
						{this.props.children}
					</ul>
				);
			}

			return null;
		};

		const liClasses = liClassesArray.reduce(
			(curr, next) => curr + " " + next
		);
		const divClasses = divClassesArray.reduce(
			(curr, next) => curr + " " + next
		);

		const title =
			this.props.title == null || typeof this.props.title === "string"
				? (this.props.title as string)
				: renderToStaticMarkup(this.props.title);

		return (
			<li className={liClasses}>
				<div
					className={divClasses}
					onClick={this.onClick}
					title={title}
				>
					{this.props.text}
				</div>
				{children}
			</li>
		);
	}

	private onClick: React.MouseEventHandler<{}> = event => {
		const { disabled, onClickHandler } = this.props;

		if (disabled) {
			return;
		}

		// tslint:disable-next-line: no-unused-expression
		onClickHandler && onClickHandler(event);
	};
}
