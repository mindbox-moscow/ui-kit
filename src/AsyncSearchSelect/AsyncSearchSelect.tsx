import * as React from "react";

import { AsyncSearchSelectBase } from "../AsyncSearchSelectBase";
import {
	SelectionMode,
	SelectPropsBase,
	makeItemsComponents
} from "../FlatSelect";

interface IProps<TEntity, TSelection>
	extends SelectPropsBase<TEntity, TSelection> {
	searchText: string;
	isLoading: boolean;
	hasMoreData: boolean;
	disabled?: boolean;
	overrideHeaderInfo?: boolean;
	placeholder?: string;
	onSearchChange: (newSearchTerm: string) => void;
	onClearFilter: () => void;
	onLoadNextPortion: () => void;
	onSelectionChange: (newSelectedValues: TSelection) => void;
	resetFilterCaption?: string;
	closeCaption?: string;
	captionSearchLoader: string;
	captionNothingFound: string;
}

const AsyncSearchSelect = <TEntity extends object>({
	searchText,
	isLoading,
	hasMoreData,
	items,
	selectedValue,
	itemFormatter,
	onSelectionChange,
	onClearFilter,
	onSearchChange,
	onLoadNextPortion,
	height,
	resetFilterCaption,
	closeCaption,
	captionSearchLoader,
	captionNothingFound
}: IProps<TEntity, TEntity> & { children?: React.ReactNode }) => {
	const selectedItemText =
		selectedValue != null ? itemFormatter(selectedValue).text : "";

	const onItemSelected = (item: TEntity) => {
		onSelectionChange(item);
	};

	return (
		<AsyncSearchSelectBase
			searchText={searchText}
			headerInfo={selectedItemText}
			showClearFilter={false}
			canLoadMoreDataRightNow={!isLoading && hasMoreData}
			onClearFilter={onClearFilter}
			onSearchChange={onSearchChange}
			onLoadNextPortion={onLoadNextPortion}
			selectionMode={SelectionMode.Single}
			height={height}
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
				onItemSelected
			)}
		</AsyncSearchSelectBase>
	);
};

export { AsyncSearchSelect, IProps as AsyncSearchSelectProps };
