import * as React from "react";
import { createRef, useEffect } from "react";

export interface WithOutsideClickProps {
	onClickOutside: () => void;
	clickOutsideRef?: React.RefObject<HTMLDivElement>;
	children?: React.ReactNode;
}

export const withOutsideClick = <T extends {}>(
	Wrapped: React.ComponentType<T>
) => {
	return (props: T & WithOutsideClickProps) => {
		const refWrapper = createRef<HTMLElement>();

		useEffect(() => {
			document.addEventListener("click", handleOutsideClick);

			return () => {
				document.removeEventListener("click", handleOutsideClick);
			};
		}, []);

		const handleOutsideClick = (e: MouseEvent) => {
			const { onClickOutside } = props;
			const target = e.target as HTMLElement;

			if (
				!(
					(refWrapper.current &&
						refWrapper.current.contains(target)) ||
					target.classList.contains(
						"kit-overflow-isnt-neutral-zone-marker"
					)
				)
			) {
				onClickOutside();
			}
		};

		return <Wrapped {...props} clickOutsideRef={refWrapper} />;
	};
};
