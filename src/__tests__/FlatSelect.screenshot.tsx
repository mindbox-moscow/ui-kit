import puppeteer from "puppeteer";
import { closeBrowser, getPage, openBrowser } from "../utils/puppeteer";

describe("FlatSelect", () => {
	let page: puppeteer.Page;

	beforeAll(async () => {
		await openBrowser();
		page = await getPage("index.html#!/FlatSelect");
	});

	it("FlatSelect Open", async () => {
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	it("FlatSelect Close", async () => {
		await page.click("div.kit-selectR");
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	afterAll(async () => {
		await closeBrowser();
	});
});
