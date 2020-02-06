export const checkBrowser = (browserName: string): boolean => {
	return navigator.userAgent.includes(browserName);
};
