const url = `file://${process.cwd()}/docs/index.html#!/FlatSelect`;

describe("FlatSelect", () => {
	it("FlatSelect Open", async () => {
		await global.page.goto(url);
		const image = await global.page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	it("FlatSelect Close", async () => {
		await global.page.page.goto(url);
		await global.page.page.click("div.kit-selectR");
		const image = await global.page.page.screenshot();

		expect(image).toMatchImageSnapshot();
	});
});
