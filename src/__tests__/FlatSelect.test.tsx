import * as React from "react";
import { act } from "react-dom/test-utils";

import { mount, ReactWrapper } from "enzyme";
import { DropdownHandles, FlatSelect, SelectProps } from "../FlatSelect";
import { KeysCodes } from "../utils/constants";

class TestFlatSelect<T> extends React.Component<SelectProps<T>> {
	public ref = React.createRef<DropdownHandles>();

	public handleClose = () => {
		if (this.ref && this.ref.current) {
			this.ref.current.hide();
		}
	};

	public render() {
		return <FlatSelect {...this.props} forwardRef={this.ref} />;
	}
}

const mokeOnChange = jest.fn(value => value);

const map: any = {
	click: null
};

document.addEventListener = jest.fn((event, cb) => {
	map[event] = cb;
});

const itemFormatter = (value: any) => ({
	key: value ? "true" : "false",
	text: value ? "Да" : "Нет",
	value
});

const createDefaultProps = () => {
	return {
		items: [true, false],
		selectedValue: true,
		height: 2,
		width: 3,
		selectElementCaption: () => "Выбрать элемент",
		onChange: mokeOnChange,
		itemFormatter
	};
};

let select: ReactWrapper;
let props: SelectProps<any>;
let wrapper: HTMLElement;

beforeEach(() => {
	wrapper = document.createElement("div");
	wrapper.classList.add("kit-overflow-isnt-neutral-zone-marker");
	document.body.appendChild(wrapper);

	props = createDefaultProps();
	select = mount(<FlatSelect {...props} />, { attachTo: wrapper });
});

const getSelectElement = () => {
	return select.find("div.kit-selectR");
};

const openSelect = () => {
	getSelectElement().simulate("click");
};

const getSelectItems = () => {
	return select.find("Memo(SelectSearchRow)");
};

const getPanelElement = () => {
	return select.find("Panel");
};

const getSearchElement = () => {
	return select.find("Search");
};

const toBeSelectClosed = () => {
	expect(getPanelElement().hasClass("kit-selectR-drop_hidden")).toBeTruthy();
};

const toBeSelectOpen = () => {
	expect(getPanelElement().hasClass("kit-selectR-drop_hidden")).toBeFalsy();
};

const toBeItemIsHighlighted = (
	item: ReactWrapper,
	toBeHighlighted: boolean
) => {
	expect(item.hasClass("kit-selectR-highlighted")).toEqual(toBeHighlighted);
};

describe("FlatSelect", () => {
	describe("Render component", () => {
		it("render correctly", () => {
			const chosenText = select.find("span.kit-selectR-chosen").text();

			expect(chosenText).toEqual("Да");
		});

		it("has items in dropdown ", () => {
			openSelect();

			const items = getSelectItems();

			expect(items.first().text()).toEqual("Да");
			expect(items.last().text()).toEqual("Нет");
		});

		it("set focus on input search, after open dropdown", () => {
			openSelect();
			const panelComponent = getPanelElement();
			const input = panelComponent.find("input");
			const activeElement = document.activeElement!.tagName.toLowerCase();

			expect(input.type() === activeElement).toBeTruthy();
		});

		it("after opening dropdown, the item 'Yes' should be selected", () => {
			openSelect();

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
			openSelect();

			toBeSelectClosed();
			expect(
				select.find(".kit-selectR").hasClass("kit-selectR-disabled")
			).toEqual(true);
		});
	});

	describe("Open/Close dropdown by onClick", () => {
		beforeEach(() => openSelect());

		it("open dropdown after click", () => {
			toBeSelectOpen();
		});

		it("close after click again", () => {
			openSelect();

			toBeSelectClosed();
		});

		it("close dropdown if click outside with ignore class 'kit-overflow-isnt-neutral-zone-marker'", () => {
			act(() => {
				map.click({
					target: wrapper,
					composedPath: () => [
						wrapper,
						window.document.body,
						window.document,
						window
					],
					isTrusted: true
				});
			});
			select.update();

			toBeSelectClosed();
		});

		it("call ref with function hide, dropdown has been closed", () => {
			const customSelect = mount<TestFlatSelect<object>>(
				<TestFlatSelect {...props} />
			);

			customSelect.find("div.kit-selectR").simulate("click");
			act(() => {
				customSelect.instance().handleClose();
			});
			customSelect.update();

			expect(
				customSelect.find("Panel").hasClass("kit-selectR-drop_hidden")
			).toBeTruthy();
		});
	});

	describe("Open/Close dropdown by onKeyDown", () => {
		beforeEach(() =>
			getSelectElement().simulate("keydown", { keyCode: KeysCodes.Enter })
		);

		it("open dropdown after keydown 'Enter'", () => {
			toBeSelectOpen();
		});

		it("close after keydown 'Enter' again", () => {
			getSelectElement().simulate("keydown", {
				keyCode: KeysCodes.Enter
			});

			toBeSelectClosed();
		});
	});

	describe("Select item", () => {
		it("select item after click by item and close dropdown", () => {
			openSelect();

			const items = getSelectItems();

			items
				.last()
				.find("div.kit-selectR-label")
				.simulate("click");

			expect(mokeOnChange).toHaveBeenCalledTimes(1);
			expect(mokeOnChange.mock.calls[0][0]).toBeFalsy();
			toBeSelectClosed();
		});

		it("click arrow down selected item and close", () => {
			const mokeSelectedItem = jest.fn();
			const newProps = {
				...props,
				selectedItemFormatter: mokeSelectedItem
			};
			select.setProps(newProps);

			getSelectElement().simulate("keydown", {
				keyCode: KeysCodes.Enter
			});
			getSelectItems()
				.last()
				.simulate("keydown", { keyCode: KeysCodes.Enter });

			expect(mokeSelectedItem).toHaveBeenCalledTimes(1);
			toBeSelectClosed();
		});
	});

	describe("Searching", () => {
		it("during the search, item founded has been marked", () => {
			openSelect();

			getSearchElement().simulate("change", { target: { value: "Нет" } });

			toBeItemIsHighlighted(select.find(".kit-selectR-result"), true);
			expect(select.find(".kit-selectR-result").text()).toEqual("Нет");
		});

		it("after searching and clear search input, items hasn't been marked", () => {
			openSelect();

			getSearchElement().simulate("change", { target: { value: "Нет" } });
			getSearchElement().simulate("change", { target: { value: "" } });

			const items = getSelectItems();

			toBeItemIsHighlighted(items.last(), false);
		});

		it("close dropdown if input has focus and keydown ESC", () => {
			openSelect();

			getSearchElement().simulate("keydown", { keyCode: KeysCodes.Esc });

			toBeSelectClosed();
		});

		it("to be open dropdown if input hasn't focus and keydown ESC", () => {
			openSelect();

			getSelectItems()
				.last()
				.simulate("keydown", { keyCode: KeysCodes.Esc });

			toBeSelectOpen();
		});
	});
});
