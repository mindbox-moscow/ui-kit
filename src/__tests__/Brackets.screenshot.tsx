import puppeteer from "puppeteer";
import { closeBrowser, getPage, openBrowser } from "../utils/puppeteer";

describe("Brackets", () => {
	let page: puppeteer.Page;

	beforeAll(async () => {
		await openBrowser();
		page = await getPage("/Brackets.html");
	});

	it("Render single condition without label", async () => {
		const element = await page.$('[test-id="SingleConditionWithoutLabel"]');

		const image = await element!.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("Render single condition with label and", async () => {
		const element = await page.$('[test-id="SingleConditionLableAnd"]');

		const image = await element!.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("Render single condition with label or", async () => {
		const element = await page.$('[test-id="SingleConditionLableOr"]');

		const image = await element!.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	afterAll(async () => {
		await closeBrowser();
	});
});
