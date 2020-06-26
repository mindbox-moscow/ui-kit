import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configureToMatchImageSnapshot } from "jest-image-snapshot";

window.HTMLElement.prototype.scrollIntoView = () => {};

configure({ adapter: new Adapter() });

const toMatchImageSnapshot = configureToMatchImageSnapshot({
	customDiffConfig: {
		threshold: 0.15
	}
});

expect.extend({ toMatchImageSnapshot });
