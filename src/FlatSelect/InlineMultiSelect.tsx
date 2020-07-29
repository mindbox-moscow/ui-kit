import * as React from "react";
import { Height, Width } from "../utils";
import {
	Dropdown,
	SelectSearchList,
	SelectSearchRow,
	SelectionMode
} from "./components";

import { SelectProps } from "./types";

import "./FlatSelect.scss";

export const InlineMultiSelect = (_: SelectProps<string>) => {
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
