import * as React from "react";
import { useCallback } from "react";

import { AsyncSearchSelectBase } from "../AsyncSearchSelectBase";
import {
	AsyncSelectProps,
	ItemsComponentsProps,
	makeItemsComponents,
	SelectedItem,
	SelectionMode
} from "../FlatSelect";
import { mergeDuplicates } from "../utils/helpers";

interface IProps<TEntity, TSelection>
	extends AsyncSelectProps<TEntity, TSelection> {
	selectCaption: string;
	placeholder: string;
}

const AsyncSearchMultiSelect = <TEntity extends object>({
	selectedValue,
	itemFormatter,
	disabled = false,
	searchText,
	isLoading = false,
	hasMoreData = false,
	onClearFilter,
	onLoadNextPortion,
	onSelectionChange,
	items,
	resetFilterCaption,
	closeCaption,
	selectElementCaption,
	captionSearchLoader,
	captionNothingFound,
	overrideHeaderInfo = false,
	placeholder
}: IProps<TEntity, TEntity[]> & { children?: React.ReactNode }) => {
	const getItemsInfo = (): string => {
		const selectedItemsCount = selectedValue.length;

		return selectedItemsCount === 0 || overrideHeaderInfo
			? placeholder
			: selectElementCaption(selectedItemsCount);
	};

	const headerInfo = getItemsInfo();

	const makeSelectedItemsComponents = () => {
		return selectedValue.map(itemFormatter).map(item => {
			return (
				<SelectedItem
					key={item.key}
					itemName={item.text}
					itemSystemName={item.key.toString()}
					onClearClick={onItemRemoved(item.value)}
					onTextClick={onTextClick(item.text)}
				/>
			);
		});
	};

	const onSearchChange = useCallback((newSearchTerm: string) => {
		onSearchChange(newSearchTerm);
	}, []);

	const onTextClick = (itemText: string) => () => {
		onSearchChange(itemText);
	};

	const onItemRemoved = (item: TEntity) => () => {
		const newSelectedItems = selectedValue.filter(value => value === item);

		onSelectionChange(newSelectedItems);
	};

	const onItemSelect = (item: TEntity) => () => {
		const newSelectedItems = mergeDuplicates(selectedValue, item);

		onSelectionChange(newSelectedItems);
	};

	const itemComponentProps: ItemsComponentsProps<TEntity> = {
		items,
		itemFormatter,
		selectedValue,
		captionSearchLoader,
		captionNothingFound,
		isLoading,
		hasMoreData,
		onItemSelected: onItemSelect
	};
	return (
		<AsyncSearchSelectBase
			disabled={disabled}
			searchText={searchText}
			headerInfo={headerInfo}
			showClearFilter={true}
			canLoadMoreDataRightNow={!isLoading && hasMoreData}
			onClearFilter={onClearFilter}
			onSearchChange={onSearchChange}
			onLoadNextPortion={onLoadNextPortion}
			makeSelectedComponents={makeSelectedItemsComponents}
			selectionMode={SelectionMode.Multiple}
			resetFilterCaption={resetFilterCaption}
			closeCaption={closeCaption}
		>
			{makeItemsComponents(itemComponentProps)}
		</AsyncSearchSelectBase>
	);
};

export { AsyncSearchMultiSelect, IProps as AsyncSearchMultiSelectProps };
