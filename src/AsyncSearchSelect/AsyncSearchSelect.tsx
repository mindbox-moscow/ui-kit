import * as React from "react";

import { AsyncSearchSelectBase } from "../AsyncSearchSelectBase";
import {
	AsyncSelectProps,
	makeItemsComponents,
	SelectionMode
} from "../FlatSelect";

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
}: AsyncSelectProps<TEntity, TEntity> & { children?: React.ReactNode }) => {
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

export { AsyncSearchSelect };
