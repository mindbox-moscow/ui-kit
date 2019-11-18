import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { SelectSearchRowProps } from "./types";

export class SelectSearchRow extends React.Component<SelectSearchRowProps, {}> {
	public render() {
		const liClassesArray = ["kit-selectR-result"];

		if (this.props.className != null) {
			liClassesArray.push(this.props.className);
		}

		if (this.props.unselectable) {
			liClassesArray.push("kit-selectR-unselectable");
		}

		if (this.props.disabled) {
			liClassesArray.push("kit-selectR-disabled");
		}

		if (this.props.isSelected) {
			liClassesArray.push(
				this.props.isForMultiSelect
					? "kit-selectR-selected-multi"
					: "kit-selectR-selected"
			);
		}

		const divClassesArray = ["kit-selectR-label "];
		if (this.props.isLoader) {
			divClassesArray.push("kit-selectR-request-item");
		}

		const Сhildren = (): JSX.Element | null => {
			if (this.props.hasNested) {
				liClassesArray.push("kit-selectR-nesting");

				return (
					<ul className="kit-selectR-results kit-selectR-results-default">
						{this.props.children}
					</ul>
				);
			}

			return null;
		};

		const liClasses = liClassesArray.join(" ");
		const divClasses = divClassesArray.join(" ");

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
				<Сhildren />
			</li>
		);
	}

	private onClick = (e: React.MouseEvent) => {
		const { disabled, onClickHandler } = this.props;

		if (disabled) {
			return;
		}

		// tslint:disable-next-line: no-unused-expression
		onClickHandler && onClickHandler(e);
	};
}
