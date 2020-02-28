export const setNextFocus = () => {
	const filterDetails = document.querySelector(".kit-filter-details");

	if (filterDetails) {
		const buttonDisabled = filterDetails.querySelector(
			'button:disabled:not([tabindex="-1"])'
		);
		const inputText = filterDetails.querySelector(
			'input[type="text"]:not(:disabled), input[type="number"]:not(:disabled), button:not(:disabled):not([tabindex="-1"])'
		) as HTMLElement;

		if (inputText) {
			inputText.focus();
		} else if (buttonDisabled) {
			const selectAll = filterDetails.querySelectorAll(".kit-selectR");
			const selectLast =
				selectAll &&
				(selectAll[selectAll.length - 1] as HTMLElement | null);

			// tslint:disable-next-line: no-unused-expression
			selectLast && selectLast.focus();
		}
	}
};
