export const formatValue = (value: number) =>
	value < 10 ? `0${value}` : `${value}`;

const WEEK_IN_DAYS = 7;

export const getNow = (): Date => new Date();

export const getWeekBeforeNow = (): Date => {
	const now = getNow();

	return new Date(now.setDate(now.getDate() - WEEK_IN_DAYS));
};

export const getMinutes = (date: Date) => ({
	hours: date.getHours(),
	minutes: date.getMinutes()
});

export const parseDateToString = (date: Date) => {
	return `${formatValue(date.getDate())}.${formatValue(
		date.getMonth() + 1
	)}.${date.getFullYear()}`;
};
