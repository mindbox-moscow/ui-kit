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
		preventHandlerCall =
			isEventWasInvokedOnCurrentElementOrChildren(e) ||
			isEventWasInvokenOnElementWithNeutralZoneClass(e) ||
			isEventWasInvokedOnElementWithUiDatePickerClass(e) ||
			isEventWasInvokedOnElementWithOverflowVisibleContainerClass(e) ||
			isEventWasInvokedOnNotTrustedElement(e);
	};

	const isEventWasInvokedOnCurrentElementOrChildren = (e: MouseEvent) => ref.current != null && ref.current.contains(e.target as HTMLElement);
	const isEventWasInvokenOnElementWithNeutralZoneClass = (e: MouseEvent) => ignoreNeutralZoneClass ? false : fromElementWithClassEvent(e, exports.neutralZoneClass);
	const isEventWasInvokedOnElementWithUiDatePickerClass = (e: MouseEvent) => fromElementWithClassEvent(e, uiDatePickerClass);
	const isEventWasInvokedOnElementWithOverflowVisibleContainerClass = (e: MouseEvent) => fromElementWithClassEvent(e, overflowVisibleContainerClass);
	const isEventWasInvokedOnNotTrustedElement = (e: MouseEvent) => !e.isTrusted;

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
