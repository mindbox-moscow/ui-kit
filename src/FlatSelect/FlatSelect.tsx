import * as React from "react";
import { Dropdown, SearchList, SearchRow } from "./components";
import {
	getClass,
	Height,
	SelectedItemKey,
	SelectItem,
	SelectProps,
	SelectState,
	Width
} from "./types";

export class FlatSelect<TValue> extends React.Component<
	SelectProps<TValue>,
	SelectState
> {
	public state = {
		searchTerm: ""
	};

	private dropdownRef = React.createRef<Dropdown>();

	public hide = () => {
		this.dropdownRef.current!.hide();
	};

	public clearSearchTerm = () => {
		this.setState({ searchTerm: "" });
	};

	public render() {
		let selectedItemKey: SelectedItemKey | null;
		let selectedItemText: string | JSX.Element | null;

		const selectedValue: TValue | TValue[] = this.props.selectedValue;

		if (selectedValue != null) {
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
			selectedItemKey = null;
			selectedItemText = null;
		}

		return (
			<Dropdown
				id={this.props.id}
				ref={this.dropdownRef}
				headerInfo={selectedItemText}
				placeholder={this.props.placeholder}
				disabled={this.props.disabled}
				className={`${getClass(this.props.width || Width.Normal)} ${
					this.props.className
				}`}
				openedClassName="form-control select2-container-active select2-dropdown-open"
				height={this.props.height || Height.Small}
				onSelectionClear={
					this.shouldRenderNullMark()
						? () => this.props.onChange(null)
						: null
				}
			>
				<SearchList
					onInputChange={this.searchTermChanged}
					searchTextValue={this.state.searchTerm}
					headerInfo={this.props.headerInfo}
				>
					{this.renderRows(selectedItemKey)}
				</SearchList>
			</Dropdown>
		);
	}

	private searchTermChanged = (newSearchTerm: string) => {
		this.setState({ searchTerm: newSearchTerm });
	};

	private onChange = (newSelectedValue: TValue) => () => {
		// Для моновыпадалки есть смысл закрывать выпадашку после выбора.
		if (!(this.props.selectedValue instanceof Array)) {
			this.hide();
		}
		this.props.onChange(newSelectedValue);
	};

	private defaultSelectedValueFormatter = (
		selectedValue: TValue | TValue[]
	): string | null => {
		if (selectedValue instanceof Array) {
			const selectedItems = selectedValue.map(value =>
				this.props.itemFormatter(value)
			);
			const selectedItemsCount = selectedItems.length;

			if (selectedItemsCount === 0) {
				return null;
			} else if (selectedItemsCount === 1) {
				return selectedItems[0].text;
			} else if (this.props.isLoading) {
				return this.props.selectElementCaption(
					{ selectedItemsCount }
				);
			}

			const itemsCount = this.props.items.length;
			return this.props.selectElementCaption(
				{ selectedItemsCount, itemsCount }
			);
		} else {
			const selectedItem = this.props.itemFormatter(selectedValue);
			return selectedItem.text;
		}
	};

	private shouldRenderNullMark = () => {
		return (
			!this.props.disabled &&
			this.props.allowNull != null &&
			this.props.allowNull &&
			this.props.selectedValue !== null
		);
	};

	private renderRows = (selectedItemKey: SelectedItemKey) => {
		if (this.props.isLoading) {
			return [
				<SearchRow
					key="_loading"
					text={this.props.loadListCaption}
					unselectable={true}
					isLoader={true}
					disabled={false}
				/>
			];
		} else {
			let filteredItems = this.props.items.map(this.props.itemFormatter);
			if (
				this.state.searchTerm !== null &&
				this.state.searchTerm !== ""
			) {
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
		r.children = undefined;
		if (
			r.text
				.toLocaleLowerCase()
				.indexOf(this.state.searchTerm.toLocaleLowerCase()) >= 0
		) {
			if (node.children != null) {
				r.children = [...node.children];
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
				r.children = [...children];
			}
		}

		return r;
	};

	private renderSelectSearchRows = (
		filteredItems: Array<SelectItem<TValue>>,
		selectedItemKey: SelectedItemKey
	) => {
		if (typeof filteredItems === "undefined") {
			return null;
		}

		return filteredItems.map(item => (
			<SearchRow
				hasNested={typeof item.children !== "undefined"}
				key={item.key}
				text={item.text}
				title={item.title}
				disabled={item.disabled || false}
				isForMultiSelect={selectedItemKey instanceof Array}
				isSelected={this.isSelected(item, selectedItemKey)}
				onClickHandler={this.onChange(item.value)}
				className={item.className}
			>
				{this.renderSelectSearchRows(
					item.children as Array<SelectItem<TValue>>,
					selectedItemKey
				)}
			</SearchRow>
		));
	};

	private shouldSortItems = (selectedItemKey: SelectedItemKey): boolean => {
		if (!(selectedItemKey instanceof Array)) {
			return false;
		}

		return this.props.items.length >= 21;
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
			?
			// tslint:disable-next-line:no-shadowed-variable
			selectedItemKey.some(selectedItemKey => item.key === selectedItemKey)
			:
			item.key === selectedItemKey;
	};

}
