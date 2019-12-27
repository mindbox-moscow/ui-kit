import * as React from "react";
import { Height, Width } from "../utils";
import { Dropdown, SelectSearchList, SelectSearchRow } from "./components";
import "./FlatSelect.scss";
import { SelectedItemKey, SelectItem, SelectProps } from "./types";

export const FlatSelect = <TValue extends object>({
	id,
	placeholder,
	disabled,
	width,
	className,
	height,
	onChange,
	headerInfo,
	selectedValue,
	itemFormatter,
	isLoading,
	selectElementCaption,
	items,
	allowNull,
	loadListCaption,
	selectedItemFormatter
}: SelectProps<TValue> & { children?: React.ReactNode }) => {
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const dropdownRef = React.useRef<Dropdown>(null);

	const hide = React.useCallback(() => {
		if (dropdownRef.current) {
			dropdownRef.current.hide();
		}
	}, []);

	const searchTermChanged = React.useCallback((newSearchTerm: string) => {
		setSearchTerm(newSearchTerm);
	}, []);

	const handleOnChange = React.useCallback((newSelectedValue: TValue) => {
		if (!(selectedValue instanceof Array)) {
			hide();
		}
		onChange(newSelectedValue);
	}, []);

	const defaultSelectedValueFormatter = (
		selectedValue: TValue | TValue[]
	): string => {
		if (selectedValue instanceof Array) {
			const selectedItems = selectedValue.map(value =>
				itemFormatter(value)
			);
			const selectedItemsCount = selectedItems.length;

			if (selectedItemsCount === 0) {
				return "";
			}

			if (selectedItemsCount === 1) {
				return selectedItems[0].text;
			}

			if (isLoading) {
				return selectElementCaption({ selectedItemsCount });
			}

			const itemsCount = items.length;
			return selectElementCaption({
				selectedItemsCount,
				itemsCount
			});
		} else {
			const selectedItem = itemFormatter(selectedValue);
			return selectedItem.text;
		}
	};

	const shouldRenderNullMark = () => {
		return (
			!disabled &&
			allowNull !== null &&
			!!allowNull &&
			selectedValue !== null
		);
	};

	const renderRows = (selectedItemKey: SelectedItemKey) => {
		if (isLoading) {
			return [
				<SelectSearchRow
					key="_loading"
					text={loadListCaption}
					unselectable={true}
					isLoader={true}
					disabled={false}
				/>
			];
		} else {
			let filteredItems = items.map(itemFormatter);
			if (searchTerm !== null && searchTerm !== "") {
				filteredItems = filteredItems
					.map(e => rebuildTreeForSearchTerm(e))
					.filter(e => !!e) as Array<SelectItem<TValue>>;
			} else if (shouldSortItems(selectedItemKey)) {
				filteredItems = sortItems(filteredItems, selectedItemKey);
			}

			return renderSelectSearchRows(filteredItems, selectedItemKey);
		}
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
		return filteredItems.map(item => (
			<SelectSearchRow
				hasNested={typeof item.children !== "undefined"}
				key={item.key}
				text={item.text}
				title={item.title}
				disabled={item.disabled || false}
				isForMultiSelect={selectedItemKey instanceof Array}
				isSelected={isSelected(item, selectedItemKey)}
				onClickHandler={selectSearchRowClickHandler(item.value)}
				className={item.className}
			>
				{renderSelectSearchRows(item.children || [], selectedItemKey)}
			</SelectSearchRow>
		));
	};

	const selectSearchRowClickHandler = (val: TValue) => () =>
		handleOnChange(val);

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
	let selectedItemText: string | JSX.Element = "";

	if (selectedValue !== null) {
		selectedItemKey =
			selectedValue instanceof Array
				? selectedValue.map(value => itemFormatter(value).key)
				: itemFormatter(selectedValue).key;

		selectedItemText =
			selectedItemFormatter !== undefined
				? selectedItemFormatter(selectedValue)
				: defaultSelectedValueFormatter(selectedValue);
	}

	const handleChange = () => {
		onChange(null);
	};

	return (
		<Dropdown
			id={id}
			ref={dropdownRef}
			headerInfo={selectedItemText}
			placeholder={placeholder}
			disabled={disabled}
			className={className}
			width={width || Width.Normal}
			openedClassName="form-control select2-container-active select2-dropdown-open"
			height={height || Height.Small}
			onSelectionClear={shouldRenderNullMark() ? handleChange : null}
		>
			<SelectSearchList
				onInputChange={searchTermChanged}
				searchTextValue={searchTerm}
				headerInfo={headerInfo}
			>
				{renderRows(selectedItemKey)}
			</SelectSearchList>
		</Dropdown>
	);
};
