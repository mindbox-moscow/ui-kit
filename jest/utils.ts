import puppeteer from "puppeteer";

let browser: puppeteer.Browser;

export async function openBrowser() {
	browser = await puppeteer.launch({
		args: ["--no-sandbox"],
		executablePath: "/usr/bin/google-chrome"
	});
}

export async function getPage(url: string) {
	const page = await browser.newPage();
	await page.goto(`file://${process.cwd()}/docs/${url}`)

	return page
}

export async function closeBrowser() {
	await browser.close();
}

