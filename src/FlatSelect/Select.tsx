import * as React from "react";
import { Dropdown, SelectSearchList, SelectSearchRow } from "./components";
import { Height, Width } from "./modules";
import { SelectedItemKey, SelectItem, SelectProps, SelectState } from "./types";

export class Select<TValue> extends React.Component<
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
		this.dropdownRef.current!.hide();
	};

	public clearSearchTerm = () => {
		this.setState({ searchTerm: "" });
	};

	public render(): JSX.Element {
		let selectedItemKey: SelectedItemKey;
		let selectedItemText: string | JSX.Element;

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
			selectedItemKey = "";
			selectedItemText = "";
		}

		return (
			<Dropdown
				id={this.props.id}
				ref={this.dropdownRef}
				headerInfo={selectedItemText}
				placeholder={this.props.placeholder}
				disabled={this.props.disabled}
				className={`${Width.getClass(
					this.props.width || Width.Normal
				)} ${this.props.className}`}
				openedClassName="form-control select2-container-active select2-dropdown-open"
				height={this.props.height || Height.Small}
				onSelectionClear={
					this.shouldRenderNullMark()
						? () => this.props.onChange(null)
						: null
				}
			>
				<SelectSearchList
					onInputChange={this.searchTermChanged}
					searchTextValue={this.state.searchTerm}
					headerInfo={this.props.headerInfo}
				>
					{this.renderRows(selectedItemKey)}
				</SelectSearchList>
			</Dropdown>
		);
	}

	private searchTermChanged = (newSearchTerm: string) => {
		this.setState({ searchTerm: newSearchTerm });
	};

	private onChange = (newSelectedValue: TValue) => {
		// Для моновыпадалки есть смысл закрывать выпадашку после выбора.
		if (!(this.props.selectedValue instanceof Array)) {
			this.hide();
		}
		this.props.onChange(newSelectedValue);
	};

	private defaultSelectedValueFormatter = (
		selectedValue: TValue | TValue[]
	): string => {
		if (selectedValue instanceof Array) {
			const selectedItems = selectedValue.map(value =>
				this.props.itemFormatter(value)
			);
			const selectedItemsCount = selectedItems.length;

			if (selectedItemsCount === 0) {
				return "";
			}

			if (selectedItemsCount === 1) {
				return selectedItems[0].text;
			}

			if (this.props.isLoading) {
				return this.props.selectElementCaption({ selectedItemsCount });
			}

			const itemsCount = this.props.items.length;
			return this.props.selectElementCaption({
				selectedItemsCount,
				// tslint:disable-next-line: object-literal-sort-keys
				itemsCount
			});
		} else {
			const selectedItem = this.props.itemFormatter(selectedValue);
			return selectedItem.text;
		}
	};

	private shouldRenderNullMark = () => {
		return (
			!this.props.disabled &&
			this.props.allowNull != null &&
			!!this.props.allowNull &&
			this.props.selectedValue !== null
		);
	};

	private renderRows = (selectedItemKey: SelectedItemKey) => {
		if (this.props.isLoading) {
			return [
				<SelectSearchRow
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

			const children: any = [];
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
			<SelectSearchRow
				hasNested={typeof item.children !== "undefined"}
				key={item.key}
				text={item.text}
				title={item.title}
				disabled={item.disabled || false}
				isForMultiSelect={selectedItemKey instanceof Array}
				isSelected={this.isSelected(item, selectedItemKey)}
				// tslint:disable-next-line: jsx-no-lambda
				onClickHandler={() => this.onChange(item.value)}
				className={item.className}
			>
				{this.renderSelectSearchRows(
					item.children || [],
					selectedItemKey
				)}
			</SelectSearchRow>
		));
	};

	private shouldSortItems = (selectedItemKey: SelectedItemKey): boolean => {
		if (!(selectedItemKey instanceof Array)) {
			return false;
		}

		if (this.props.items.length < 21) {
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
