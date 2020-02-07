import { BrowserList } from "./constants";

type BrowsersRegExpMap = { [key in BrowserList]: string };

const browsersRegExpMap: BrowsersRegExpMap = {
	[BrowserList.Safari]: "^(?=.*Safari)(?!.*Chrome|.*Chromium).*",
	[BrowserList.Chrome]: "^(?=.*Chrome)(?!.*Chromium).*",
	[BrowserList.Chromium]: "Chromium"
};

export const checkBrowser = (browserName: BrowserList): boolean => {
	const regExp = new RegExp(browsersRegExpMap[browserName], "gi");

	return regExp.test(window.navigator.userAgent);
};
