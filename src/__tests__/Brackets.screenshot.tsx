import puppeteer from "puppeteer";
import { closeBrowser, getPage, openBrowser } from "../utils/puppeteer";

describe("Brackets", () => {
	let page: puppeteer.Page;

	beforeAll(async () => {
		await openBrowser();
	});

	it("render single condition without label", async () => {
		page = await getPage("brackets/SingleConditionWithoutLabel.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render single condition with label and", async () => {
		page = await getPage("brackets/SingleConditionLableAnd.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render single condition with label or", async () => {
		page = await getPage("brackets/SingleConditionLableOr.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render empty FilterWrapper", async () => {
		page = await getPage("brackets/EmptyFIlterWrapper.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FilterWrapper with button up", async () => {
		page = await getPage("brackets/EmptyFIlterWrapperScroller.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FilterWrapper with group 'Or' ", async () => {
		page = await getPage("brackets/FilterWrapperWithSingleGroupOr.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FilterWrapper with group 'Or' in edit mode", async () => {
		page = await getPage(
			"brackets/FilterWrapperWithSingleGroupOrEditMode.html"
		);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FilterWrapper editing external group", async () => {
		page = await getPage("brackets/FilterWrapperEditingExternalGroup.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FilterWrapper editing internal group", async () => {
		page = await getPage("brackets/FilterWrapperEditingInternalGroup.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("hover condition with edit mode", async () => {
		page = await getPage("brackets/FilterWrapperEditingInternalGroup.html");

		const conditions = await page.$$(
			"div.kit-filtration-condition__content"
		);
		await conditions[0].hover();

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("internal group with open menu", async () => {
		page = await getPage("brackets/FilterWrapperEditingInternalGroup.html");

		await page.click("button.kit-filter-editor__btn");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render editing linked condition", async () => {
		page = await getPage("brackets/EditingLinkedCondition.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render editing simple condition", async () => {
		page = await getPage("brackets/EditingSimpleCondition.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("editing simple condition, mouse move to validate icon", async () => {
		page = await getPage("brackets/EditingSimpleCondition.html");

		const tooltip = await page.$("span.kit-tooltip__title");
		const rect = await page.evaluate(tooltip => {
			const { x, y } = tooltip.getBoundingClientRect();

			return { x, y };
		}, tooltip);

		await page.mouse.move(rect.x, rect.y);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("editing a filter with nested display conditions with buttons", async () => {
		page = await getPage(
			"brackets/EditingFilterWithNestedConditionsButtons.html"
		);

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FiltrationGroupComponentExample1 correctly", async () => {
		page = await getPage("brackets/FiltrationGroupComponentExample1.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("hover on condition", async () => {
		page = await getPage("brackets/FiltrationGroupComponentExample1.html");

		const conditions = await page.$$(
			"div.kit-filtration-condition__content"
		);
		await conditions[0].hover();

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FiltrationGroupComponentExample2 correctly", async () => {
		page = await getPage("brackets/FiltrationGroupComponentExample2.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FiltrationGroupComponentExample3 correctly", async () => {
		page = await getPage("brackets/FiltrationGroupComponentExample3.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FiltrationGroupComponentExample4 correctly", async () => {
		page = await getPage("brackets/FiltrationGroupComponentExample4.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FiltrationGroupComponentExample5 correctly", async () => {
		page = await getPage("brackets/FiltrationGroupComponentExample5.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FiltrationGroupComponentExample6 correctly", async () => {
		page = await getPage("brackets/FiltrationGroupComponentExample6.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	it("render FilterWrapper with control date correctly", async () => {
		page = await getPage("brackets/FilterWrapperWithControlDate.html");

		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	afterAll(async () => {
		await closeBrowser();
	});
});
