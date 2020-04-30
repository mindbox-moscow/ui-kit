import * as React from "react";
import { useState } from "react";

import { AsyncSearchSelectBase } from "../AsyncSearchSelectBase";
import {
	SelectedItem,
	SelectionMode,
	SelectPropsBase,
	SelectSearchRow
} from "../FlatSelect";

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
	...props
}: IProps<TEntity, TEntity[]> & { children?: React.ReactNode }) => {
	const [, setShouldSearchTextBeSelected] = useState(false);

	const getItemsInfo = (): string => {
		const selectedItemsCount = selectedValue.length;
		const placeholder =
			props.placeholder === null ? selectCaption : props.placeholder;
		const overrideHeaderInfo =
			props.overrideHeaderInfo === null
				? false
				: props.overrideHeaderInfo;

		return selectedItemsCount === 0 || overrideHeaderInfo
			? placeholder
			: selectElementCaption({ selectedItemsCount });
	};

	const makeSelectedItemsComponents = () => {
		return selectedValue.map(itemFormatter).map((item, index) => {
			return (
				<SelectedItem
					key={index}
					itemName={item.text == null ? "" : item.text}
					itemSystemName={item.key.toString()}
					onClearClick={onItemRemoved(item.value)}
					onTextClick={onTextClick(item.text)}
				/>
			);
		});
	};

	const onSearchChange = (newSearchTerm: string) => {
		setShouldSearchTextBeSelected(false);
		onSearchChange(newSearchTerm);
	};

	const onTextClick = (itemText: string) => () => {
		setShouldSearchTextBeSelected(true);
		onSearchChange(itemText);
	};

	const onItemRemoved = (item: TEntity) => () => {
		const newSelectedItems = selectedValue.filter(value => value === item);

		onSelectionChange(newSelectedItems);
	};

	const mergeDuplicates = (...arr: any) => {
		return [...new Set([].concat(...arr))];
	};

	const onItemSelect = (item: TEntity) => () => {
		const newSelectedItems = mergeDuplicates(selectedValue, item);

		onSelectionChange(newSelectedItems);
	};

	const makeItemsComponents = () => {
		const result = items.map(itemFormatter).map(item => {
			const isSelected = selectedValue.some(
				selectedItem => selectedItem === item.value
			);

			return (
				<SelectSearchRow
					key={item.key}
					text={item.text}
					onClickHandler={
						isSelected ? undefined : onItemSelect(item.value)
					}
					isSelected={isSelected}
					isForMultiSelect={true}
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
			{makeItemsComponents()}
		</AsyncSearchSelectBase>
	);
};

export { AsyncSearchMultiSelect, IProps as AsyncSearchMultiSelectProps };
