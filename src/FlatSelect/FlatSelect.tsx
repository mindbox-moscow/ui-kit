import * as React from "react";
import { Height, Width } from "../utils";
import { Dropdown, SelectSearchList, SelectSearchRow } from "./components";
import "./FlatSelect.scss";
import { SelectedItemKey, SelectItem, SelectProps, SelectState } from "./types";

export class FlatSelect<TValue> extends React.Component<
	SelectProps<TValue>,
	SelectState
> {
	private dropdownRef: React.RefObject<Dropdown>;

	constructor(props: SelectProps<TValue>) {
		super(props);

		this.dropdownRef = React.createRef<Dropdown>();

		this.state = {
			searchTerm: ""
		};
	}

	public hide = () => {
		this.dropdownRef.current?.hide()
	};

	public clearSearchTerm = () => {
		this.setState({ searchTerm: "" });
	};

	public render(): JSX.Element {
		const { searchTerm } = this.state;

		const {
			id,
			placeholder,
			disabled,
			width,
			className,
			height,
			onChange,
			headerInfo,
			selectedValue
		} = this.props;

		let selectedItemKey: SelectedItemKey;
		let selectedItemText: string | JSX.Element;

		if (selectedValue !== null) {
			selectedItemKey =
				selectedValue instanceof Array
					? selectedValue.map(
							value => this.props.itemFormatter(value).key
					  )
					: this.props.itemFormatter(selectedValue).key;

			selectedItemText =
				this.props.selectedItemFormatter !== undefined
					? this.props.selectedItemFormatter(selectedValue)
					: this.defaultSelectedValueFormatter(selectedValue);
		} else {
			selectedItemKey = "";
			selectedItemText = "";
		}

		return (
				<Dropdown
					id={id}
					ref={this.dropdownRef}
					headerInfo={selectedItemText}
					placeholder={placeholder}
					disabled={disabled}
					className={className}
					width={width || Width.Normal}
					openedClassName="form-control select2-container-active select2-dropdown-open"
					height={height || Height.Small}
					onSelectionClear={
						this.shouldRenderNullMark()
							? () => onChange(null)
							: null
					}
				>
					<SelectSearchList
						onInputChange={this.searchTermChanged}
						searchTextValue={searchTerm}
						headerInfo={headerInfo}
					>
						{this.renderRows(selectedItemKey)}
					</SelectSearchList>
				</Dropdown>
		);
	}

	private searchTermChanged = (searchTerm: string) => {
		this.setState({ searchTerm });
	};

	private onChange = (newSelectedValue: TValue) => {
		const { selectedValue, onChange } = this.props;
		// Для моновыпадалки есть смысл закрывать выпадашку после выбора.
		if (!(selectedValue instanceof Array)) {
			this.hide();
		}
		onChange(newSelectedValue);
	};

	private defaultSelectedValueFormatter = (
		selectedValue: TValue | TValue[]
	): string => {
		const {
			itemFormatter,
			isLoading,
			selectElementCaption,
			items
		} = this.props;

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

	private shouldRenderNullMark = () => {
		const { disabled, allowNull, selectedValue } = this.props;

		return (
			!disabled &&
			allowNull !== null &&
			!!allowNull &&
			selectedValue !== null
		);
	};

	private renderRows = (selectedItemKey: SelectedItemKey) => {
		const { searchTerm } = this.state;
		const { isLoading, loadListCaption, items, itemFormatter } = this.props;

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
					.map(e => this.rebuildTreeForSearchTerm(e))
					.filter(e => !!e) as Array<SelectItem<TValue>>;
			} else if (this.shouldSortItems(selectedItemKey)) {
				filteredItems = this.sortItems(filteredItems, selectedItemKey);
			}

			return this.renderSelectSearchRows(filteredItems, selectedItemKey);
		}
	};

	private rebuildTreeForSearchTerm = (
		node: SelectItem<TValue>
	): SelectItem<TValue> | null => {
		const r = { ...node };
		const { searchTerm } = this.state;

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
				const cn = this.rebuildTreeForSearchTerm(c);
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

	private renderSelectSearchRows = (
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
				isSelected={this.isSelected(item, selectedItemKey)}
				// tslint:disable-next-line: jsx-no-lambda
				onClickHandler={this.selectSearchRowClickHandler(item.value)}
				className={item.className}
			>
				{this.renderSelectSearchRows(
					item.children || [],
					selectedItemKey
				)}
			</SelectSearchRow>
		));
	};

	private selectSearchRowClickHandler = (val: TValue) => () =>
		this.onChange(val);

	private shouldSortItems = (selectedItemKey: SelectedItemKey): boolean => {
		const { items } = this.props;

		if (!Array.isArray(selectedItemKey)) {
			return false;
		}

		if (items.length < 21) {
			return false;
		}

		return true;
	};

	private sortItems = (
		items: Array<SelectItem<TValue>>,
		selectedItemKey: SelectedItemKey
	): Array<SelectItem<TValue>> => {
		return items.sort(item => {
			return item.disabled || false
				? 3
				: this.isSelected(item, selectedItemKey)
				? 1
				: 2;
		});
	};

	private isSelected = (
		item: SelectItem<TValue>,
		selectedItemKey: SelectedItemKey
	): boolean => {
		return selectedItemKey instanceof Array
			? selectedItemKey.some(key => item.key === key)
			: item.key === selectedItemKey;
	};
}
