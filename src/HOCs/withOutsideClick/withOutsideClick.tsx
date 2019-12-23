import * as React from "react";
import { useEffect, useRef } from "react";

export interface WithOutsideClickProps {
	onClickOutside: () => void;
	setOutsideClickRef?: (el: HTMLElement) => void;
	children?: React.ReactNode;
}

export const neutralZoneClass = "kit-overflow-isnt-neutral-zone-marker";
const uiDatePickerClass = "ui-datepicker";
const overflowVisibleContainerClass = "kit-overflow-visiblecontainer";

const fromElementWithClassEvent = (
	event: Event,
	elementClass: string
): boolean => {
	return event
		.composedPath()
		.some(
			(pathEvent: HTMLElement) =>
				pathEvent.classList &&
				pathEvent.classList.contains(elementClass)
		);
};

export const withOutsideClick = <T extends {}>(
	Wrapped: React.ComponentType<T>,
	shouldBeSubscribedProvider?: (props: T) => boolean
) => {
	return (props: T & WithOutsideClickProps) => {
		const effectiveShouldBeSubscribedProvider =
			shouldBeSubscribedProvider == null
				? () => true
				: shouldBeSubscribedProvider;

		const refWrapper = useRef<HTMLElement | null>(null);
		const shouldBeSubscribed = effectiveShouldBeSubscribedProvider(props);

		useEffect(
			() => {
				if (shouldBeSubscribed) {
					document.addEventListener("click", handleOutsideClick);
				} else {
					document.removeEventListener("click", handleOutsideClick);
				}

				return () => {
					document.removeEventListener("click", handleOutsideClick);
				};
			},
			[shouldBeSubscribed]
		);

		const setRef = (el: HTMLElement) => {
			refWrapper.current = el;
		};

		const handleOutsideClick = (e: MouseEvent) => {
			const { onClickOutside } = props;
			const target = e.target as HTMLElement;

			if (
				!(
					(refWrapper.current &&
						refWrapper.current.contains(target)) ||
					fromElementWithClassEvent(e, neutralZoneClass) ||
					fromElementWithClassEvent(e, uiDatePickerClass) ||
					fromElementWithClassEvent(
						e,
						overflowVisibleContainerClass
					) ||
					!e.isTrusted
				)
			) {
				onClickOutside();
			}
		};

		return <Wrapped {...props} setOutsideClickRef={setRef} />;
	};
};
