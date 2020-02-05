type SearchElementType = "first" | "last";

export const searchFirstLastElement = (
	searchableElement: HTMLElement,
	searchClasses: string[],
	search: SearchElementType
): HTMLElement | null => {
	const childrenElements = Array.from(
		searchableElement.children
	) as HTMLElement[];

	if (search === "last") {
		childrenElements.reverse();
	}

	return (
		childrenElements.find((item: HTMLElement) => {
			return searchClasses.some(className =>
				item.classList.contains(className)
			);
		}) || null
	);
};
