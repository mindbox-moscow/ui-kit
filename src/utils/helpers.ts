import { BrowserList } from "./constants";

const userAgent = (browserName: string): boolean => {
	return navigator.userAgent.includes(browserName);
};

export const checkBrowser = (browserName: BrowserList): boolean => {
	switch (browserName) {
		case BrowserList.Safari:
			return (
				userAgent(BrowserList.Safari) &&
				!userAgent(BrowserList.Chrome) &&
				!userAgent(BrowserList.Chromium)
			);

		default:
			return false;
	}
};
