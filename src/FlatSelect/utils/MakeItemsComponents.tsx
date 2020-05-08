import * as React from "react";

import { SelectSearchRow } from "../components/SelectSearchRow";
import { SelectItem } from "../types";

export const makeItemsComponents = <TEntity extends object>(
	items: TEntity[],
	itemFormatter: (value: TEntity) => SelectItem<TEntity>,
	selectedValue: TEntity | TEntity[],
	captionSearchLoader: string,
	captionNothingFound: string,
	isLoading: boolean,
	hasMoreData: boolean,
	onItemSelected: (item: TEntity) => void
): JSX.Element[] => {
	const onSelectItem = () => (
		isSelected: boolean,
		item: SelectItem<TEntity>
	) => {
		if (isSelected) {
			onItemSelected(item.value);
		}
	};

	const itemsComponents = items.map(itemFormatter).map(item => {
		let isSelected: boolean;

		if (Array.isArray(selectedValue)) {
			isSelected = selectedValue.some(
				selectedItem => selectedItem === item.value
			);
		} else {
			isSelected = item.value === selectedValue;
		}

		return (
			<SelectSearchRow
				key={item.key}
				text={item.text}
				onClickHandler={onSelectItem}
				isSelected={isSelected}
				isForMultiSelect={false}
				disabled={isSelected || (isLoading && !hasMoreData)}
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
				disabled={false}
			/>
		);
	} else if (items.length === 0 && !hasMoreData) {
		itemsComponents.push(
			<SelectSearchRow
				key="_nothingFound"
				text={captionNothingFound}
				unselectable={true}
				isLoader={false}
				disabled={true}
			/>
		);
	}

	return itemsComponents;
};
