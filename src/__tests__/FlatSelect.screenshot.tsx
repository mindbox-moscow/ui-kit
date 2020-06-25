import puppeteer from "puppeteer";
import { closeBrowser, getPage, openBrowser } from "../utils/puppeteer";

describe("FlatSelect", () => {
	let page: puppeteer.Page;

	beforeAll(async () => {
		await openBrowser();
	});

	it("FlatSelect Open", async () => {
		page = await getPage("select/FlatSelectDefault.html");
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	it("FlatSelect Close", async () => {
		page = await getPage("select/FlatSelectDefault.html");
		await page.click("div.kit-selectR");
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	it("FlatSelect disabled", async () => {
		page = await getPage("select/FlatSelectDisabled.html");
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	afterAll(async () => {
		await closeBrowser();
	});
});
