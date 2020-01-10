export const getFocusableElements = (element: HTMLElement): HTMLElement[] => {
	const focusableElements = element.querySelectorAll(
		'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
	);

	return Array.from(focusableElements) as HTMLElement[];
};
