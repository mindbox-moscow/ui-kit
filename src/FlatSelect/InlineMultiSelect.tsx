import * as React from "react";
import { Height, Width } from "../utils";
import {
	Dropdown,
	DropdownHandles,
	SelectSearchList,
	SelectSearchRow,
	SelectionMode
} from "./components";

import { SelectedItemKey, SelectItem, SelectProps } from "./types";

import "./FlatSelect.scss";

export const InlineMultiSelect = <TValue extends {}>(
	props: SelectProps<TValue> & {
		children?: React.ReactNode;
	}
) => {
	const {
		selectedValue,
		itemFormatter,
		items,
	} = props;

	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const dropdownRef = React.useRef<DropdownHandles>(null);

	const searchTermChanged = React.useCallback((newSearchTerm: string) => {
		setSearchTerm(newSearchTerm);
	}, []);

	const renderRows = (selectedItemKey: SelectedItemKey) => {
		let filteredItems = items.map(itemFormatter);
		if (searchTerm !== null && searchTerm !== "") {
			filteredItems = filteredItems
				.map(e => rebuildTreeForSearchTerm(e))
				.filter(e => !!e) as Array<SelectItem<TValue>>;
		} else if (shouldSortItems(selectedItemKey)) {
			filteredItems = sortItems(filteredItems, selectedItemKey);
		}

		return renderSelectSearchRows(filteredItems, selectedItemKey);

	};

	const rebuildTreeForSearchTerm = (
		node: SelectItem<TValue>
	): SelectItem<TValue> | null => {
		const r = { ...node };

		r.children = undefined;
		if (
			r.text.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
		) {
			if (node.children != null) {
				r.children = node.children;
			}
		} else {
			if (node.children == null) {
				return null;
			}

			const children: Array<SelectItem<TValue>> = [];
			node.children.forEach(c => {
				const cn = rebuildTreeForSearchTerm(c);
				if (cn != null) {
					children.push(cn);
				}
			});

			if (children.length === 0) {
				return null;
			} else {
				r.children = children;
			}
		}

		return r;
	};

	const renderSelectSearchRows = (
		filteredItems: Array<SelectItem<TValue>>,
		selectedItemKey: SelectedItemKey
	) => {
		const disabled = (item: SelectItem<TValue>) => {
			return typeof item.value === "string" && (item.value === "Bar" || item.value === "Baz");
		}

		return filteredItems.map(item => (
			<SelectSearchRow
				hasNested={typeof item.children !== "undefined"}
				key={item.key}
				text={item.text}
				title={item.title}
				disabled={disabled(item)}
				isForMultiSelect={selectedItemKey instanceof Array}
				isSelected={isSelected(item, selectedItemKey)}
				className={item.className}
			>
				{renderSelectSearchRows(item.children || [], selectedItemKey)}
			</SelectSearchRow>
		));
	};

	const shouldSortItems = (selectedItemKey: SelectedItemKey): boolean => {
		return Array.isArray(selectedItemKey) && items.length >= 21;
	};

	const sortItems = (
		items: Array<SelectItem<TValue>>,
		selectedItemKey: SelectedItemKey
	): Array<SelectItem<TValue>> => {
		return items.sort(item => {
			return item.disabled
				? 3
				: isSelected(item, selectedItemKey)
					? 1
					: 2;
		});
	};

	const isSelected = (
		item: SelectItem<TValue>,
		selectedItemKey: SelectedItemKey
	): boolean => {
		return selectedItemKey instanceof Array
			? selectedItemKey.some(key => item.key === key)
			: item.key === selectedItemKey;
	};

	let selectedItemKey: SelectedItemKey = "";

	if (selectedValue != null) {
		selectedItemKey =
			selectedValue instanceof Array
				? selectedValue.map(value => itemFormatter(value).key)
				: itemFormatter(selectedValue).key;
	}

	return (
		<Dropdown
			ref={dropdownRef}
			headerInfo={"Hello from MultiSelect!"}
			width={Width.Normal}
			openedClassName="form-control select2-container-active select2-dropdown-open"
			height={Height.Normal}
		>
			<SelectSearchList
				onInputChange={searchTermChanged}
				searchTextValue={searchTerm}
				headerInfo={"This is header"}
				selectionMode={SelectionMode.Multiple}
			>
				{renderRows(selectedItemKey)}
			</SelectSearchList>
		</Dropdown>
	);
};
