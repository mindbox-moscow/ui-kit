import * as React from "react";

import { AsyncSearchSelectBase } from "../AsyncSearchSelectBase";
import {
	AsyncSelectProps,
	makeItemsComponents,
	SelectedItem,
	SelectionMode
} from "../FlatSelect";
import { mergeDuplicates } from "../utils/helpers";

interface IProps<TEntity, TSelection>
	extends AsyncSelectProps<TEntity, TSelection> {
	selectCaption: string;
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
			: selectElementCaption({ selectedItemsCount });
	};

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

	const onSearchChange = (newSearchTerm: string) => {
		onSearchChange(newSearchTerm);
	};

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

	return (
		<AsyncSearchSelectBase
			disabled={disabled}
			searchText={searchText}
			headerInfo={getItemsInfo()}
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
			{makeItemsComponents(
				items,
				itemFormatter,
				selectedValue,
				captionSearchLoader,
				captionNothingFound,
				isLoading,
				hasMoreData,
				onItemSelect
			)}
		</AsyncSearchSelectBase>
	);
};

export { AsyncSearchMultiSelect, IProps as AsyncSearchMultiSelectProps };
