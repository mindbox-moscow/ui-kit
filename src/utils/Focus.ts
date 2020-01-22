import { KeysCodes } from "./constants";

export const getFocusableElements = (element: HTMLElement): HTMLElement[] => {
	const selectors = [
		"button:not(:disabled)",
		"[href]",
		"input:not(:disabled)",
		"select:not(:disabled)",
		"textarea:not(:disabled)",
		'[tabindex]:not([tabindex="-1"])'
	];

	const focusableElements = element.querySelectorAll(selectors.join(","));

	return Array.from(focusableElements) as HTMLElement[];
};

export const setLoopFocusElements = (element: HTMLElement) => (
	e: KeyboardEvent
) => {
	const focusable = getFocusableElements(element);
	const lastFocusable = focusable[focusable.length - 1];

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
