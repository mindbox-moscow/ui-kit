import { BrowserList, WEEK_IN_DAYS } from "./constants";

export const getNow = (): Date => {
	const now = new Date();
	now.setSeconds(0);
	now.setMilliseconds(0);

	return now;
};

export const getWeekBeforeNow = (): Date => {
	const now = getNow();
	now.setSeconds(0);
	now.setMilliseconds(0);

	return new Date(now.setDate(now.getDate() - WEEK_IN_DAYS));
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
