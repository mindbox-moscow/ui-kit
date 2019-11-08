import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { SearchRowProps } from './types'

export class SearchRow extends React.Component<SearchRowProps> {
	public render() {
		const liClassesArray = ["selectR-result"];

		if (this.props.className != null) {
			liClassesArray.push(this.props.className);
		} else if (this.props.unselectable) {
			liClassesArray.push("selectR-unselectable");
		} else if (this.props.disabled) {
			liClassesArray.push("selectR-disabled");
		} else if (this.props.isSelected) {
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

		const Children = () => {
			if (this.props.hasNested) {
				liClassesArray.push("selectR-nesting");
				return (
					<ul className="selectR-results selectR-results-default">
						{this.props.children}
					</ul>
				);
			} else {
				return null
			}
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
				<Children />
			</li>
		);
	}

	private onClick: React.MouseEventHandler<{}> = event => {
		if (this.props.disabled) { return; }

		this.props.onClickHandler(event);
	};
}
