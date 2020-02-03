import { WEEK_IN_DAYS } from "./constants";

export const formatValue = (value: number) =>
	value < 10 ? `0${value}` : `${value}`;

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
	console.log("NOW", now);

	return new Date(now.setDate(now.getDate() - WEEK_IN_DAYS));
};

export const getMinutes = (date: Date) => ({
	hours: date.getHours(),
	minutes: date.getMinutes()
});

export const parseDateToString = (date: Date) => date.toLocaleDateString();
