import { KeysCodes } from "./constants";

export const getFocusableElements = (
	element: HTMLElement,
	withoutTabIndex: boolean = false
): HTMLElement[] => {
	const selectors = [
		"button:not(:disabled)",
		"[href]",
		"input:not(:disabled)",
		"select:not(:disabled)",
		"textarea:not(:disabled)",
		'[tabindex]:not([tabindex="-1"])'
	];

	const selectorsWithoutTabIndex = [
		"button:not(:disabled)",
		"[href]",
		"input:not(:disabled)",
		"select:not(:disabled)",
		"textarea:not(:disabled)"
	];

	const focusableElements = element.querySelectorAll(
		withoutTabIndex
			? selectorsWithoutTabIndex.join(",")
			: selectors.join(",")
	);

	return Array.from(focusableElements) as HTMLElement[];
};

export const setLoopFocusElements = (element: HTMLElement) => (
	e: KeyboardEvent
) => {
	const focusable = getFocusableElements(element);
	const lastFocusable = focusable[focusable.length - 1];

	console.log(focusable);

	if (focusable.length > 0) {
		if (
			document.activeElement === focusable[0] &&
			e.keyCode === KeysCodes.Tab &&
			e.shiftKey
		) {
			e.preventDefault();
			lastFocusable.focus();
		}

		if (
			document.activeElement === lastFocusable &&
			e.keyCode === KeysCodes.Tab &&
			!e.shiftKey
		) {
			e.preventDefault();
			focusable[0].focus();
		}
	}
};

export const setKeyDownEnterLoopFocusElements = (element: HTMLElement) => (
	e: KeyboardEvent
) => {
	const focusable = getFocusableElements(element, true);
	const focusedElement = document.activeElement;
	const currentIndex = focusable.findIndex(item => item === focusedElement);

	if (focusable.length > 0) {
		if (currentIndex === focusable.length - 1) {
			focusable[0].focus({ preventScroll: true });
		} else {
			focusable[currentIndex + 1].focus({
				preventScroll: true
			});
		}
	}
};
