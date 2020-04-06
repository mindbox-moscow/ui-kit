import { BrowserList, DAY_OFFSET } from "./constants";

export const getNow = (): Date => {
	const now = new Date();

	return now;
};

export const getDaysBeforeNow = (days: number): Date => {
	const now = getNow();

	return new Date(now.setDate(now.getDate() + DAY_OFFSET - days));
};

export const parseDateToString = (date: Date) => date.toLocaleDateString();

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
