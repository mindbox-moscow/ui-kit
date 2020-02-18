import { BrowserList, WEEK_IN_DAYS } from "./constants";

export const getNow = (): Date => {
	const now = new Date();
	now.setHours(0);
	now.setMinutes(0);
	now.setSeconds(0);
	now.setMilliseconds(0);

	return now;
};

export const getWeekBeforeNow = (): Date => {
	const now = getNow();
	return new Date(now.setDate(now.getDate() + 1 - WEEK_IN_DAYS));
};

export const getDaysBeforeNow = (days: number): Date => {
	const now = getNow();
	return new Date(now.setDate(now.getDate() + 1 - days));
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
