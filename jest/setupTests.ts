import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

window.HTMLElement.prototype.scrollIntoView = () => {};

configure({ adapter: new Adapter() });
