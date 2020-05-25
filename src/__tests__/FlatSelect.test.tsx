import * as React from "react";

import { mount, ReactWrapper } from "enzyme";
import { FlatSelect } from "../FlatSelect";
import { KeysCodes } from "../utils/constants";

describe("FlatSelect", () => {
	const itemFormatter = (value: any) => ({
		key: value ? "true" : "false",
		text: value ? "Да" : "Нет",
		value
	});

	const mokeOnChange = jest.fn();

	const props = {
		items: [true, false],
		selectedValue: true,
		height: 2,
		width: 3,
		selectElementCaption: () => "Выбрать элемент",
		onChange: mokeOnChange,
		itemFormatter
	};

	let select: ReactWrapper;

	beforeEach(() => (select = mount(<FlatSelect {...props} />)));

	describe("Render component", () => {
		it("render correctly", () => {
			const chosenText = select.find("span.kit-selectR-chosen").text();

			expect(chosenText).toEqual("Да");
		});

		it("has items in dropdown ", () => {
			select.find("div.kit-selectR").simulate("click");

			const items = select.find("SelectSearchRow");

			expect(items.first().text()).toEqual("Да");
			expect(items.last().text()).toEqual("Нет");
		});

		it("set focus on input search, after open dropdown", () => {
			select.find("div.kit-selectR").simulate("click");
			const panelComponent = select.find("Panel");
			const input = panelComponent.find("input");
			const activeElement = document.activeElement!.tagName.toLowerCase();

			expect(input.type() === activeElement).toBeTruthy();
		});

		it("after opening dropdown, the item 'Yes' should be selected", () => {
			select.find("div.kit-selectR").simulate("click");

			const chosenTextDefualt = select.find(".kit-selectR-chosen").text();
			const selectedItemText = select
				.find(".kit-selectR-selected")
				.text();

			expect(chosenTextDefualt).toEqual(selectedItemText);
		});

		it("not show dropdown, if has props 'disabled' and has class modificator", () => {
			const newProps = {
				...props,
				disabled: true
			};

			select.setProps(newProps);
			select.find("div.kit-selectR").simulate("click");

			expect(select.find("Panel")).toHaveLength(0);
			expect(
				select.find(".kit-selectR").hasClass("kit-selectR-disabled")
			).toEqual(true);
		});
	});

	describe("Open/Close dropdown by onClick", () => {
		beforeEach(() => select.find("div.kit-selectR").simulate("click"));

		it("open dropdown after click", () => {
			expect(select.find("Panel")).toHaveLength(1);
		});

		it("close after click again", () => {
			select.find("div.kit-selectR").simulate("click");

			expect(select.find("Panel")).toHaveLength(0);
		});
	});

	describe("Open/Close dropdown by onKeyDown", () => {
		beforeEach(() =>
			select
				.find("div.kit-selectR")
				.simulate("keydown", { keyCode: KeysCodes.Enter })
		);

		it("open dropdown after click", () => {
			expect(select.find("Panel")).toHaveLength(1);
		});

		it("close after click again", () => {
			select
				.find("div.kit-selectR")
				.simulate("keydown", { keyCode: KeysCodes.Enter });

			expect(select.find("Panel")).toHaveLength(0);
		});
	});

	describe("Select item", () => {
		it("select item after click by item and close dropdown", () => {
			select.find("div.kit-selectR").simulate("click");

			const items = select.find("SelectSearchRow");

			items
				.last()
				.find("div.kit-selectR-label")
				.simulate("click");

			expect(mokeOnChange).toHaveBeenCalledTimes(1);
			expect(select.find("Panel")).toHaveLength(0);
		});

		it("click arrow down selected item and close", () => {
			const mokeSelectedItem = jest.fn();
			const newProps = {
				...props,
				selectedItemFormatter: mokeSelectedItem
			};
			select.setProps(newProps);

			select
				.find("div.kit-selectR")
				.simulate("keydown", { keyCode: KeysCodes.Enter });
			select
				.find("SelectSearchRow")
				.at(1)
				.simulate("keydown", { keyCode: KeysCodes.Enter });

			expect(mokeSelectedItem).toHaveBeenCalledTimes(1);
			expect(select.find("Panel")).toHaveLength(0);
		});
	});

	describe("Searching", () => {
		it("during the search, item founded has been marked", () => {
			select.find("div.kit-selectR").simulate("click");

			select
				.find("Search")
				.simulate("change", { target: { value: "Нет" } });

			expect(
				select
					.find(".kit-selectR-result")
					.hasClass("kit-selectR-highlighted")
			).toEqual(true);
			expect(select.find(".kit-selectR-result").text()).toEqual("Нет");
		});

		it("after searching and clear search input, items hasn't been marked", () => {
			select.find("div.kit-selectR").simulate("click");

			select
				.find("Search")
				.simulate("change", { target: { value: "Нет" } });
			select.find("Search").simulate("change", { target: { value: "" } });

			const items = select.find("SelectSearchRow");

			expect(items.last().hasClass("kit-selectR-highlighted")).toEqual(
				false
			);
		});

		it("close dropdown if input has focus and keydown ESC", () => {
			select.find("div.kit-selectR").simulate("click");

			select
				.find("Search")
				.simulate("keydown", { keyCode: KeysCodes.Esc });

			expect(select.find("Panel")).toHaveLength(0);
		});
	});
});
