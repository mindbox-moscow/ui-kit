import puppeteer from "puppeteer";
import { closeBrowser, getPage, openBrowser } from "../utils/puppeteer";

describe("Brackets", () => {
	let page: puppeteer.Page;

	beforeAll(async () => {
		await openBrowser();
	});

	it("Render single condition without label", async () => {
		page = await getPage(
			"examples/screenshot-test/brackets/SingleConditionWithoutLabel.html"
		);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("Render single condition with label and", async () => {
		page = await getPage(
			"examples/screenshot-test/brackets/SingleConditionLableAnd.html"
		);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("Render single condition with label or", async () => {
		page = await getPage(
			"examples/screenshot-test/brackets/SingleConditionLableOr.html"
		);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("Render empty FilterWrapper", async () => {
		page = await getPage(
			"examples/screenshot-test/brackets/EmptyFIlterWrapper.html"
		);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("Render FilterWrapper with button up", async () => {
		page = await getPage(
			"examples/screenshot-test/brackets/EmptyFIlterWrapperScroller.html"
		);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("Render FilterWrapper with group 'Or' ", async () => {
		page = await getPage(
			"examples/screenshot-test/brackets/FilterWrapperWithSingleGroupOr.html"
		);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("Render FilterWrapper with group 'Or' in edit mode", async () => {
		page = await getPage(
			"examples/screenshot-test/brackets/FilterWrapperWithSingleGroupOrEditMode.html"
		);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("Render FilterWrapper editing external group", async () => {
		page = await getPage(
			"examples/screenshot-test/brackets/FilterWrapperEditingExternalGroup.html"
		);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	afterAll(async () => {
		await closeBrowser();
	});
});
