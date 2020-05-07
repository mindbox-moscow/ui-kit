import * as React from "react";
import { DropdownContext } from "../";
import { Textbox } from "../../../Textbox";

import { KeysCodes } from "../../../utils/constants";

interface IProps {
	notFormControl: boolean;
	value: string | number;
	onChange: (changedValue: string | number) => void;
	shouldTextBeSelected?: boolean;
	className?: string;
	autoFocus?: boolean;
}

const Search = (props: IProps) => {
	const { onChange } = props;

	const context = React.useContext(DropdownContext);
	const refTextbox = React.useRef<HTMLInputElement>(null);

	const handleChange = (changedValue: string | number) => {
		onChange(changedValue);
		context.contextOnKeyDownSearch();
		context.setSearchTerm(changedValue as string);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		switch (e.keyCode) {
			case KeysCodes.ArrowDown:
			case KeysCodes.ArrowUp:
			case KeysCodes.Esc:
			case KeysCodes.Enter:
				context.contextOnKeyDownSearch(e);
		}
	};

	React.useEffect(
		() => {
			context.setSearchRef(refTextbox);
		},
		[context.setSearchRef]
	);

	return (
		<Textbox
			{...props}
			ref={refTextbox}
			onKeyDown={handleKeyDown}
			onChange={handleChange}
		/>
	);
};

export { Search };
