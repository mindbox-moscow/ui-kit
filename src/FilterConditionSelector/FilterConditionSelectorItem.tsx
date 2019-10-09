import cn from "classnames";
import * as React from "react";

import "./FilterConditionSelector.scss";

type ElementType =
	| "filterablePropertyCategory"
	| "simpleFilterableProperty"
	| "filterablePropertyWithLinkedConditions";

interface ChildRendererProps {
	id: string;
}

interface Props {
	id: string;
	name: string;
	type: ElementType;
	isSelected: boolean;
	childIds: string[];
	isExpanded: boolean;
	searchTerm: string;
	childRenderer: React.ComponentType<ChildRendererProps>;

	onSelect: (id: string) => void;
	toggleExpand: (id: string) => void;
}

export class FilterConditionSelectorItem extends React.Component<Props> {
	public handleHighLightText = (text: string, searchText: string) => {
		const { type } = this.props;

		if (
			type === "simpleFilterableProperty" ||
			type === "filterablePropertyWithLinkedConditions"
		) {
			const parts = text.split(new RegExp(`(${searchText})`, "gi"));

			return (
				<span>
					{parts.map((part, index) => {
						if (
							part.toLocaleLowerCase() ===
							searchText.toLocaleLowerCase()
						) {
							return (
								<span
									key={index}
									className="kit-filter-condition-selector__high-light-text"
								>
									{part}
								</span>
							);
						} else {
							return part;
						}
					})}
				</span>
			);
		} else {
			return text;
		}
	};
	public render(): JSX.Element {
		const {
			isSelected,
			type,
			isExpanded,
			name,
			childIds,
			searchTerm
		} = this.props;
		const isSimpleFilterableProperty = type === "simpleFilterableProperty";

		const hasChildren = childIds.length > 0;

		const ChildItem = this.props.childRenderer;

		return (
			<li
				className={cn("kit-filter-condition-selector__hierarchy-item", {
					"kit-filter-condition-selector__hierarchy-item_expanded": isExpanded,
					"kit-filter-condition-selector__hierarchy-item_selected": isSelected,
					"kit-filter-condition-selector__hierarchy-simple-filter": isSimpleFilterableProperty
				})}
			>
				{!isSimpleFilterableProperty && (
					<button
						type="button"
						className="kit-filter-condition-selector__hierarchy-toggle"
						onClick={this.onExpand}
					/>
				)}
				<button
					type="button"
					className="kit-filter-condition-selector__hierarchy-name"
					onClick={this.onSelect}
				>
					<span
						className={cn(
							"kit-filter-condition-selector__filter-span",
							{
								"kit-filter-condition-selector__filter-span_selected": isSelected
							}
						)}
					>
						{this.handleHighLightText(name, searchTerm)}
					</span>
				</button>

				{isExpanded && hasChildren && (
					<ul className="kit-filter-condition-selector__hierarchy-children">
						{this.props.childIds.map(childId => (
							<ChildItem key={childId} id={childId} />
						))}
					</ul>
				)}
			</li>
		);
	}

	private onExpand = () => this.props.toggleExpand(this.props.id);

	private onSelect = () => {
		this.props.onSelect(this.props.id);
		this.onExpand();
	};
}
