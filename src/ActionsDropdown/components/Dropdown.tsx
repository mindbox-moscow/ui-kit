import * as React from "react";
import { FC, useRef } from "react";
import { withOutsideClick, WithOutsideClickProps } from "../../HOCs";

const Dropdown: FC<WithOutsideClickProps> = props => {
	const { children, setOutsideClickRef } = props;
	const ref = useRef<HTMLDivElement | null>(null);

	const setRef = (el: HTMLDivElement) => {
		ref.current = el;

		if (setOutsideClickRef) {
			setOutsideClickRef(el);
		}
	};

	return (
		<div ref={setRef} className="kit-actions-dropdown__container">
			{children}
		</div>
	);
};

const DropdownContainerWithClickOutside = withOutsideClick(Dropdown);

export { DropdownContainerWithClickOutside as Dropdown };
