import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";

import "./FilterConditionSelector.scss";

type ElementType =
	| "filtrationObjectCategory"
	| "simpleFiltrationObject"
	| "filtrationObjectWithLinkedConditions";

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
	childRenderer: React.ComponentType<ChildRendererProps>;

	onSelect: (id: string) => void;
	toggleExpand: (id: string) => void;
}

export class FilterConditionSelectorItem extends React.Component<Props> {
	public render(): JSX.Element {
		const { isSelected, type, isExpanded, name, childIds } = this.props;
		const isSimpleFiltrationObject = type === "simpleFiltrationObject";

		const hasChildren = childIds.length > 0;

		const ChildItem = this.props.childRenderer;

		return (
			<li
				className={cn(
					"kit-filter-condition-selector__hierarchy-item",
					`kit-filter-condition-selector__hierarchy-simple-filter_${type}`,
					{
						"kit-filter-condition-selector__hierarchy-item_expanded": isExpanded,
						"kit-filter-condition-selector__hierarchy-item_selected": isSelected,
						"kit-filter-condition-selector__hierarchy-item_not-child": !hasChildren
					}
				)}
			>
				<div
					className={cn(
						"kit-filter-condition-selector__hierarchy-button",
						{
							"kit-filter-condition-selector__hierarchy-button_selected": isSelected
						}
					)}
				>
					{!isSimpleFiltrationObject && (
						<button
							type="button"
							className="kit-filter-condition-selector__hierarchy-toggle"
							onClick={this.onExpand}
						>
							<IconSvg type="arrow-right" />
						</button>
					)}
					<button
						type="button"
						className="kit-filter-condition-selector__hierarchy-name"
						onClick={this.onSelect}
					>
						{name}
					</button>
				</div>

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
