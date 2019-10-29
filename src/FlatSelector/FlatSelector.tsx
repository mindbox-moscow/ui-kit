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
	const handleSelect = (newValue: string) => {
		if (allowMultiple) {
			const values = value as string[];

			if (values.indexOf(newValue) >= 0 && values.length > 0) {
				values.splice(values.indexOf(newValue), 1);
			} else {
				if (values.indexOf(newValue) < 0) {
					values.push(newValue);
				}
			}

			onChange(values);
		} else {
			newValue === value ? onChange("") : onChange(newValue);
		}
	};

	const buttons = items.map((item: SelectorItem) => {
		let selected = false;
		if (allowMultiple) {
			selected = value.indexOf(item.key) >= 0;
		} else {
			selected = item.key === value;
		}

		return (
			<button
				key={item.key + item.text}
				onClick={() => handleSelect(item.key)}
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
