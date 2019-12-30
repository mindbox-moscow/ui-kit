export const getFocusableElements = (element: HTMLElement): HTMLElement[] => {
	return [].map.call(
		element.querySelectorAll(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
		),
		(e: Element) => {
			return e as HTMLElement;
		}
	);
};
