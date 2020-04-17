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

	React.useEffect(
		() => {
			const listener = (e: MouseEvent) => {
				if (!preventHandlerCall) {
					const isIgnoreNeutralZoneClass = ignoreNeutralZoneClass
						? false
						: fromElementWithClassEvent(e, neutralZoneClass);

					if (
						!(
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
				}

				preventHandlerCall = false;
			};

			const handleMouseDown = (e: MouseEvent) => {
				preventHandlerCall = true;
			};

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
