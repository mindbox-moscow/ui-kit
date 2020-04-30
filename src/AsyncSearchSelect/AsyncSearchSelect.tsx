import * as React from "react";

import { AsyncSearchSelectBase } from "../AsyncSearchSelectBase";
import { SelectionMode, SelectPropsBase, SelectSearchRow } from "../FlatSelect";

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

	const makeItemsComponents = () => {
		const result = items.map(itemFormatter).map(item => {
			const isSelected = item.value === selectedValue;

			return (
				<SelectSearchRow
					key={item.key}
					text={item.text}
					onClickHandler={
						isSelected
							? undefined
							: () => onItemSelected(item.value)
					}
					isSelected={isSelected}
					isForMultiSelect={false}
					disabled={isSelected || (isLoading && !hasMoreData)}
				/>
			);
		});

		if (isLoading) {
			result.push(
				<SelectSearchRow
					key="_loading"
					text={captionSearchLoader}
					unselectable={true}
					isLoader={true}
					disabled={false}
				/>
			);
		} else if (items.length === 0 && !hasMoreData) {
			result.push(
				<SelectSearchRow
					key="_nothingFound"
					text={captionNothingFound}
					unselectable={true}
					isLoader={false}
					disabled={true}
				/>
			);
		}

		return result;
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
			{makeItemsComponents()}
		</AsyncSearchSelectBase>
	);
};

export { AsyncSearchSelect, IProps as AsyncSearchSelectProps };
