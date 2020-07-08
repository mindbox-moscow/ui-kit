import React, { useState } from "react";

import {
	DropdownHandles,
	FlatSelect,
	SelectProps
} from "../../../src/FlatSelect";

export const FlatSelectTest = <TValue extends {}>(
	props: Partial<SelectProps<TValue>> & {
		children?: React.ReactNode;
		forwardRef?: React.RefObject<DropdownHandles>;
	}
) => {
	const [items] = useState([true, false]);
	const [selectedValue, setSelectedValue] = useState(true);
	const [height] = useState(2);
	const [width] = useState(3);

	const itemFormatter = (value: any) => ({
		key: value ? "true" : "false",
		text: value ? "Да" : "Нет",
		value
	});

	const selectElementCaption = () => {
		return "Выбрать элемент";
	};

	return (
		<FlatSelect
			items={items}
			selectedValue={selectedValue}
			height={height}
			width={width}
			itemFormatter={itemFormatter}
			selectElementCaption={selectElementCaption}
			loadListCaption="Загрузка..."
			onChange={setSelectedValue}
			{...props}
		/>
	);
};
