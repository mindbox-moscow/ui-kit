import * as React from "react";
import { createRef, useEffect } from "react";

export interface WithOutsideClickProps {
	onClickOutside: () => void;
	clickOutsideRef?: React.RefObject<HTMLDivElement>;
	children?: React.ReactNode;
}

export const neitralZoneClass = "kit-overflow-isnt-neutral-zone-marker";
const uiDatePickerClass = "ui-datepicker";

const fromElementWithClassEvent = (
	event: Event,
	elementClass: string
): boolean => {
	return event.composedPath().some((pathEvent: HTMLElement) => {
		return (
			pathEvent.classList &&
			pathEvent.classList.contains(elementClass)
		);
	});
};

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
					fromElementWithClassEvent(e, neitralZoneClass) ||
					fromElementWithClassEvent(e, uiDatePickerClass)
				)
			) {
				onClickOutside();
			}
		};

		return <Wrapped {...props} clickOutsideRef={refWrapper} />;
	};
};
