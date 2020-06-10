import * as React from "react";

export const neutralZoneClass = "kit-overflow-isnt-neutral-zone-marker";
const uiDatePickerClass = "ui-datepicker";
const overflowVisibleContainerClass = "kit-overflow-visiblecontainer";
const flatSelectClass = "kit-selectR";

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

export function useClickOutside(
	ref: React.RefObject<HTMLElement>,
	handler: (e: MouseEvent) => void,
	shouldBeSubscribed = true,
	ignoreNeutralZoneClass = false
) {
	let preventHandlerCall = false;

	const listener = (e: MouseEvent) => {
		const target = e.target as HTMLElement;

		if (!preventHandlerCall) {
			const isIgnoreNeutralZoneClass = ignoreNeutralZoneClass
				? false
				: fromElementWithClassEvent(e, neutralZoneClass);
			const isIgnoreOverflowVisibleContainerClass = fromElementWithClassEvent(
				e,
				flatSelectClass
			)
				? false
				: fromElementWithClassEvent(e, overflowVisibleContainerClass);

			if (
				!(
					(ref.current && ref.current.contains(target)) ||
					isIgnoreNeutralZoneClass ||
					fromElementWithClassEvent(e, uiDatePickerClass) ||
					isIgnoreOverflowVisibleContainerClass ||
					!e.isTrusted
				)
			) {
				handler(e);
			}
		}

		preventHandlerCall = false;
	};

	const handleMouseDown = (e: MouseEvent) => {
		preventHandlerCall = true;
	};

	React.useEffect(
		() => {
			if (shouldBeSubscribed) {
				document.addEventListener("click", listener);
				// tslint:disable-next-line: no-unused-expression
				ref.current &&
					ref.current.addEventListener("mousedown", handleMouseDown);
			} else {
				document.removeEventListener("click", listener);
				// tslint:disable-next-line: no-unused-expression
				ref.current &&
					ref.current.removeEventListener(
						"mousedown",
						handleMouseDown
					);
			}

			return () => {
				document.removeEventListener("click", listener);
				// tslint:disable-next-line: no-unused-expression
				ref.current &&
					ref.current.removeEventListener(
						"mousedown",
						handleMouseDown
					);
			};
		},
		[shouldBeSubscribed]
	);
}
