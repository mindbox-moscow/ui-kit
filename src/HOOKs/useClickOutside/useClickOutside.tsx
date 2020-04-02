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
	React.useEffect(
		() => {
			const listner = (e: MouseEvent) => {
				const target = e.target as HTMLElement;

				const isIgnoreNeutralZoneClass = ignoreNeutralZoneClass
					? false
					: fromElementWithClassEvent(e, neutralZoneClass);

				if (
					!(
						(ref.current && ref.current.contains(target)) ||
						isIgnoreNeutralZoneClass ||
						fromElementWithClassEvent(e, uiDatePickerClass) ||
						fromElementWithClassEvent(
							e,
							overflowVisibleContainerClass
						) ||
						!e.isTrusted
					)
				) {
					handler(e);
				}
			};

			if (shouldBeSubscribed) {
				document.addEventListener("click", listner);
			} else {
				document.removeEventListener("click", listner);
			}

			return () => {
				document.removeEventListener("click", listner);
			};
		},
		[shouldBeSubscribed]
	);
}
