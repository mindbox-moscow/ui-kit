import * as React from "react";

import { SelectSearchRow } from "../components/SelectSearchRow";
import { SelectItem } from "../types";

interface IProps<TEntity> {
	items: TEntity[];
	itemFormatter: (value: TEntity) => SelectItem<TEntity>;
	selectedValue: TEntity | TEntity[];
	captionSearchLoader: string;
	captionNothingFound: string;
	isLoading: boolean;
	hasMoreData: boolean;
	onItemSelected: (item: TEntity) => void;
	isForMultiSelect?: boolean;
}
const makeItemsComponents = <TEntity extends object>(
	props: IProps<TEntity>
): JSX.Element[] => {
	const {
		items,
		itemFormatter,
		captionSearchLoader,
		captionNothingFound,
		isLoading,
		hasMoreData,
		onItemSelected,
		selectedValue,
		isForMultiSelect = false
	} = props;

	const onSelectItem = (
		isSelected: boolean,
		item: SelectItem<TEntity>
	) => () => {
		if (!isSelected) {
			onItemSelected(item.value);
		}
	};

	const itemsComponents = items.map(itemFormatter).map((item, index) => {
		let isSelected = false;

		if (Array.isArray(selectedValue)) {
			isSelected = selectedValue.some(
				selectedItem => selectedItem === item.value
			);
		} else {
			isSelected = item.value === selectedValue;
		}

		return (
			<SelectSearchRow
				key={index}
				text={item.text}
				onClickHandler={onSelectItem(isSelected, item)}
				isSelected={isSelected}
				disabled={isSelected || (isLoading && !hasMoreData)}
				isForMultiSelect={isForMultiSelect}
			/>
		);
	});

	if (isLoading) {
		itemsComponents.push(
			<SelectSearchRow
				key="_loading"
				text={captionSearchLoader}
				unselectable={true}
				isLoader={true}
			/>
		);
	} else if (items.length === 0 && !hasMoreData) {
		itemsComponents.push(
			<SelectSearchRow
				key="_nothingFound"
				text={captionNothingFound}
				unselectable={true}
				disabled={true}
			/>
		);
	}

	return itemsComponents;
};

export { makeItemsComponents, IProps as ItemsComponentsProps };
