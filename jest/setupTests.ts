import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { toMatchImageSnapshot } from "jest-image-snapshot";

window.HTMLElement.prototype.scrollIntoView = () => {};

configure({ adapter: new Adapter() });

expect.extend({ toMatchImageSnapshot })
