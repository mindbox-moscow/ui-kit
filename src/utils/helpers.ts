import { BrowserList, DAY_OFFSET } from "./constants";

export const changeDateToEndOfTheDay = (date: Date) => {
	date.setHours(23);
	date.setMinutes(59);
	date.setSeconds(59);
	date.setMilliseconds(999);

	return date;
}

export const changeDateToBeginOfTheDay = (date: Date) => {
	date.setHours(0);
	date.setMinutes(0);
	date.setSeconds(0);
	date.setMilliseconds(0);

	return date;
}

export const getNow = (): Date => {
	const now = new Date();

	return changeDateToEndOfTheDay(now);
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
