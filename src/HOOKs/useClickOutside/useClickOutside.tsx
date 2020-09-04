import * as React from "react";

export const neutralZoneClass = "kit-overflow-isnt-neutral-zone-marker";
const uiDatePickerClass = "ui-datepicker";
const overflowVisibleContainerClass = "kit-overflow-visiblecontainer";

export function useClickOutside(
	ref: React.RefObject<HTMLElement>,
	handler: (e: MouseEvent) => void,
	shouldBeSubscribed = true,
	ignoreNeutralZoneClass = false
) {
	React.useEffect(
		() => {
			let preventHandlerCall = false;

			const handleClick = (e: MouseEvent) => {
				if (preventHandlerCall) {
					return;
				}

				handler(e);
			};

			const handleClickStarted = (e: MouseEvent) => {
				preventHandlerCall =
					isEventWasInvokedOnCurrentElementOrChildren(e, ref) ||
					isEventWasInvokedOnElementWithNeutralZoneClass(e, ignoreNeutralZoneClass) ||
					isEventWasInvokedOnElementWithUiDatePickerClass(e) ||
					isEventWasInvokedOnElementWithOverflowVisibleContainerClass(e) ||
					isEventWasInvokedOnNotTrustedElement(e);
			};

			if (shouldBeSubscribed) {
				document.addEventListener("click", handleClick);
				document.addEventListener("mousedown", handleClickStarted);
				document.addEventListener("touchstart", handleClickStarted);
			}

			return () => {
				document.removeEventListener("click", handleClick);
				document.removeEventListener("mousedown", handleClickStarted);
				document.removeEventListener("touchstart", handleClickStarted);
			};
		},
		[shouldBeSubscribed]
	);
}

function isEventWasInvokedOnNotTrustedElement(e: MouseEvent): boolean {
	return !e.isTrusted;
}

function isEventWasInvokedOnCurrentElementOrChildren(e: MouseEvent, ref: React.RefObject<HTMLElement>): boolean {
	return ref.current != null && ref.current.contains(e.target as HTMLElement);;
}

function isEventWasInvokedOnElementWithNeutralZoneClass(e: MouseEvent, ignoreNeutralZoneClass: boolean): boolean {
	if (ignoreNeutralZoneClass) {
		return false;
	}
	return fromElementWithClassEvent(e, exports.neutralZoneClass);
}

function isEventWasInvokedOnElementWithUiDatePickerClass(e: MouseEvent): boolean {
	return fromElementWithClassEvent(e, uiDatePickerClass);
}

function isEventWasInvokedOnElementWithOverflowVisibleContainerClass(e: MouseEvent): boolean {
	return fromElementWithClassEvent(e, overflowVisibleContainerClass);
}

function fromElementWithClassEvent(
	event: Event,
	elementClass: string
): boolean {
	return event
		.composedPath()
		.some(
			(pathEvent: HTMLElement) =>
				pathEvent.classList &&
				pathEvent.classList.contains(elementClass)
		);
};