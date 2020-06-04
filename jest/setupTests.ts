import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

window.HTMLElement.prototype.scrollIntoView = () => {};

configure({ adapter: new Adapter() });
