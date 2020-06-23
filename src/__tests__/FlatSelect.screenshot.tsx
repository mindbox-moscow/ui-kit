import puppeteer from "puppeteer";

const url = `file://${process.cwd()}/docs/index.html#!/FlatSelect`;

describe("FlatSelect", () => {
	let browser: puppeteer.Browser;

	beforeAll(async () => {
		browser = await puppeteer.launch({
			args: ["--no-sandbox"],
			executablePath: "/usr/bin/google-chrome"
		});
	});

	it("FlatSelect Open", async () => {
		const page = await browser.newPage();
		await page.goto(url);
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	it("FlatSelect Close", async () => {
		const page = await browser.newPage();

		await page.goto(url);
		await page.click("div.kit-selectR");
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	afterAll(async () => {
		await browser.close();
	});
});
