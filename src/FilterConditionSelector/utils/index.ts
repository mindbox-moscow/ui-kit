import { getFocusableElements } from "../../utils";

export const setNextFocus = () => {
	const filterDetails = document.querySelector(".kit-filter-details");

	if (filterDetails) {
		const inputText = filterDetails.querySelector(
			'input[type="text"], input[type="number"]'
		) as HTMLElement;

		if (inputText) {
			inputText.focus();
		} else {
			const elements = getFocusableElements(filterDetails as HTMLElement);

			if (elements.length > 0) {
				elements[0].focus();
			}
		}
	}
};
