import puppeteer from "puppeteer";

describe("FlatSelect", () => {
	let browser: puppeteer.Browser;

	beforeAll(async () => {
		browser = await puppeteer.launch({
			args: ["--no-sandbox"]
		});
	});

	it("FlatSelect Open", async () => {
		const page = await browser.newPage();
		await page.goto("file:///app/docs/index.html#!/FlatSelect");
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	it("FlatSelect Close", async () => {
		const page = await browser.newPage();

		await page.goto("file:///app/docs/index.html#!/FlatSelect");
		await page.click("div.kit-selectR");
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	afterAll(async () => {
		await browser.close();
	});
});
