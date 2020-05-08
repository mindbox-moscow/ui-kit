import * as React from "react";

import { AsyncSearchSelectBase } from "../AsyncSearchSelectBase";
import {
	makeItemsComponents,
	SelectedItem,
	SelectionMode,
	SelectPropsBase
} from "../FlatSelect";
import { mergeDuplicates } from "../utils/helpers";

interface IProps<TEntity, TSelection>
	extends SelectPropsBase<TEntity, TSelection> {
	searchText: string;
	isLoading: boolean;
	hasMoreData: boolean;
	disabled?: boolean;
	overrideHeaderInfo?: boolean;
	placeholder: string;
	onSearchChange: (newSearchTerm: string) => void;
	onClearFilter: () => void;
	onLoadNextPortion: () => void;
	onSelectionChange: (newSelectedValues: TSelection) => void;
	resetFilterCaption?: string;
	closeCaption?: string;
	selectCaption: string;
	captionSearchLoader: string;
	captionNothingFound: string;
}

const AsyncSearchMultiSelect = <TEntity extends object>({
	selectedValue,
	itemFormatter,
	disabled,
	searchText,
	isLoading,
	hasMoreData,
	onClearFilter,
	onLoadNextPortion,
	onSelectionChange,
	items,
	resetFilterCaption,
	closeCaption,
	selectCaption,
	selectElementCaption,
	captionSearchLoader,
	captionNothingFound,
	placeholder,
	...props
}: IProps<TEntity, TEntity[]> & { children?: React.ReactNode }) => {
	const getItemsInfo = (): string => {
		const selectedItemsCount = selectedValue.length;
		const overrideHeaderInfo = props.overrideHeaderInfo
			? false
			: props.overrideHeaderInfo;

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
