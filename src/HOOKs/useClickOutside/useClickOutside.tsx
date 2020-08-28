import * as React from "react";

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

export function useClickOutside(
	ref: React.RefObject<HTMLElement>,
	handler: (e: MouseEvent) => void,
	shouldBeSubscribed = true,
	ignoreNeutralZoneClass = false
) {
	let preventHandlerCall = false;

	const listener = (e: MouseEvent) => {
		if (preventHandlerCall) {
			return;
		}

		handler(e);
	};

	const handleMouseDown = (e: MouseEvent) => {
		preventHandlerCall = false;
		preventHandlerCall = preventHandlerCall || ref.current != null && ref.current.contains(e.target as HTMLElement);
		preventHandlerCall = preventHandlerCall || ignoreNeutralZoneClass ? false : fromElementWithClassEvent(e, exports.neutralZoneClass);
		preventHandlerCall = preventHandlerCall || fromElementWithClassEvent(e, uiDatePickerClass);
		preventHandlerCall = preventHandlerCall || fromElementWithClassEvent(e, overflowVisibleContainerClass);
		preventHandlerCall = preventHandlerCall || !e.isTrusted;
	};

	React.useEffect(
		() => {
			if (shouldBeSubscribed) {
				document.addEventListener("click", listener);
				document.addEventListener("mousedown", handleMouseDown);
			} else {
				document.removeEventListener("click", listener);
				document.removeEventListener("mousedown", handleMouseDown);
			}

			return () => {
				document.removeEventListener("click", listener);
				document.removeEventListener("mousedown", handleMouseDown);
			};
		},
		[shouldBeSubscribed]
	);
}
