import puppeteer from "puppeteer";

let browser: puppeteer.Browser;

async function openBrowser() {
	browser = await puppeteer.launch({
		args: ["--no-sandbox"],
		executablePath: "/usr/bin/google-chrome"
	});
}

async function getPage(url: string) {
	const page = await browser.newPage();

	await page.setViewport({
		width: 1920,
		height: 1080
	});

	await page.goto(
		`file://${process.cwd()}/docs/examples/screenshot-test/${url}`
	);

	return page;
}

async function closeBrowser() {
	await browser.close();
}

export { openBrowser, getPage, closeBrowser };
