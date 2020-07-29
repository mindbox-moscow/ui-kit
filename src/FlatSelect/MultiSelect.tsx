import React from "react";

import {
	Dropdown,
	SelectSearchList,
	SelectSearchRow,
	SelectionMode
} from ".";
import { Width, Height } from "../utils";
import { SelectProps } from "./types";

export const MultiSelect = (_: Partial<SelectProps<string>>): JSX.Element => {
	const items: Array<[string, boolean]> = [["Foo", false], ["Bar", true], ["Baz", true], ["Spam", false]];
	const selectRows = items.map(([text, selected]) => (
		<SelectSearchRow
			hasNested={false}
			key={text}
			text={text}
			title={text}
			disabled={selected}
			isForMultiSelect={true}
			isSelected={selected}
		/>));

	const nop = () => { };

	return (
		<Dropdown
			headerInfo={"Dropdown header info"}
			width={Width.Normal}
			openedClassName="form-control select2-container-active select2-dropdown-open"
			height={Height.Normal}
		>
			<SelectSearchList
				onInputChange={nop}
				searchTextValue={""}
				headerInfo={"Select header info"}
				selectionMode={SelectionMode.Multiple}
			>
				{selectRows}
			</SelectSearchList>
		</Dropdown>
	);
};
