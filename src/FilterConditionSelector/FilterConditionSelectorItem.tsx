import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { FilterConditionSelectorContext } from "./FilterConditionSelectorContext";
import { ChildRendererProps } from "./types";

import "./FilterConditionSelector.scss";
import { setNextFocus } from "./utils";

export type ElementType =
	| "filterablePropertyCategory"
	| "simpleFilterableProperty"
	| "filterablePropertyWithLinkedConditions";

interface Props {
	id: string;
	pathFromRoot: string[];
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

export const FilterConditionSelectorItem: React.FC<Props> = ({
	id,
	isSelected,
	type,
	pathFromRoot,
	isExpanded,
	name,
	childIds,
	searchTerm,
	childRenderer,
	toggleExpand,
	onSelect
}) => {
	const refSelectorButton = React.createRef<HTMLDivElement>();
	const [markedItem, setMarkedItem] = React.useState(false);
	const context = React.useContext(FilterConditionSelectorContext);

	React.useEffect(
		() => {
			if (isSelected) {
				scrollParentOnKeyDown();
			}
		},
		[isSelected]
	);

	React.useEffect(
		() => {
			if (context) {
				context.onFocusElement(
					handleMouseEnter,
					handleMouseLeave,
					refSelectorButton
				);
			}
		},
		[searchTerm, refSelectorButton]
	);

	const scrollParentOnKeyDown = () => {
		if (refSelectorButton.current && context) {
			refSelectorButton.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest"
			});

			context.selectedElement = {
				isSelected,
				isExpanded,
				type
			};
		}
	};

	const handleHighLightText = (
		text: string,
		searchText: string
	): string | JSX.Element => {
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

	const onExpand = () => toggleExpand(id);

	const onSelectItem = () => {
		onSelect(id);
		onExpand();
		setTimeout(() => {
			setNextFocus();
		}, 1);
	};

	const handleMouseEnter = () => {
		setMarkedItem(true);
	};

	const handleMouseLeave = () => {
		setMarkedItem(false);
	};

	const isSimpleFilterableProperty = type === "simpleFilterableProperty";
	const isfilterablePropertyWithLinkedConditions =
		type === "filterablePropertyWithLinkedConditions";

	const hasChildren = childIds.length > 0;

	const ChildItem = childRenderer;

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
				ref={refSelectorButton}
				className={cn(
					"kit-filter-condition-selector__hierarchy-button",
					{
						"kit-filter-condition-selector__hierarchy-button_selected": isSelected,
						"kit-filter-condition-selector__hierarchy-button_highlighted": markedItem
					}
				)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{!isSimpleFilterableProperty &&
					!isfilterablePropertyWithLinkedConditions && (
						<div
							className="kit-filter-condition-selector__hierarchy-toggle"
							onClick={onExpand}
						>
							<IconSvg
								type="arrow-right"
								className="kit-filter-condition-selector__arrow"
							/>
						</div>
					)}
				<div
					className="kit-filter-condition-selector__hierarchy-name"
					onClick={onSelectItem}
				>
					{handleHighLightText(name, searchTerm)}
				</div>
			</div>

			{isExpanded && hasChildren && (
				<ul className="kit-filter-condition-selector__hierarchy-children">
					{childIds.map(childId => (
						<ChildItem
							key={childId}
							id={childId}
							pathFromRoot={[...pathFromRoot, childId]}
						/>
					))}
				</ul>
			)}
		</li>
	);
};
