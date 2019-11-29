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
			document.addEventListener("mousedown", handleOutsideClick);

			return () => {
				document.removeEventListener("mousedown", handleOutsideClick);
			};
		}, []);

		const handleOutsideClick = (e: MouseEvent) => {
			const { onClickOutside } = props;

			if (
				!(
					refWrapper.current &&
					refWrapper.current.contains(e.target as Node)
				)
			) {
				onClickOutside();
			}
		};

		return <Wrapped {...props} clickOutsideRef={refWrapper} />;
	};
};
