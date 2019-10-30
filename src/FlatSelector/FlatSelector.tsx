import cn from "classnames";
import * as React from "react";
import { FlatSelectorProps, SelectorItem } from "./types";

import "./FlatSelector.scss";

export const FlatSelector: React.FC<FlatSelectorProps> = ({
	items,
	allowMultiple,
	value,
	onChange
}) => {
	const handleSelect = (newValue: string) => () => {
		if (allowMultiple) {
			let values = value as string[];
			const index = values.indexOf(newValue);

			if (index >= 0 && values.length > 0) {
				values = [
					...values.slice(0, index),
					...values.slice(index + 1)
				];
			} else if (index < 0) {
				values = [...values, newValue];
			}

			onChange(values);
		} else {
			newValue === value ? onChange(null) : onChange(newValue);
		}
	};

	const buttons = items.map((item: SelectorItem) => {
		const selected = allowMultiple
			? value.includes(item.key)
			: item.key === value;

		return (
			<button
				key={item.key}
				onClick={handleSelect(item.key)}
				className={cn("kit-flat-selector__item", {
					"kit-flat-selector__item_selected": selected
				})}
				type="button"
			>
				{item.text}
			</button>
		);
	});

	return <div className="kit-flat-selector">{buttons}</div>;
};
