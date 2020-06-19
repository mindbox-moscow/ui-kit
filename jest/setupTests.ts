import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { toMatchImageSnapshot } from "jest-image-snapshot";

window.HTMLElement.prototype.scrollIntoView = () => {};

configure({ adapter: new Adapter() });

jest.setTimeout(10000);

expect.extend({ toMatchImageSnapshot });
