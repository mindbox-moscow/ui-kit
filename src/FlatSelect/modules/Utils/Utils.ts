import { UtilsEvent } from "./types";

export class Utils {
	public static get Instance(): Utils {
		return this.instance;
	}
	private static instance: Utils;

	// left: 37, up: 38, right: 39, down: 40,
	// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	public disableScrollKeys: number[] = [37, 38, 39, 40];

	public scrollableElements: Element[] = [];
	public isScrollEnabled = true;

	constructor() {
		if (Utils.instance == null) {
			Utils.instance = this;
		}

		return Utils.Instance;
	}

	public isDescendant = (parent: Node, child: Node) => {
		let node = child.parentNode;
		while (node != null) {
			if (node === parent) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	};

	public triggerEvent = (element: HTMLElement, eventName: string) => {
		if (!element) {
			return;
		}

		let event: UtilsEvent;

		if (document.createEvent) {
			event = document.createEvent("HTMLEvents");
			event.initEvent(eventName, true, true);
		} else {
			const createEventObject: () => UtilsEvent = (document as any)
				.createEventObject;
			event = createEventObject();
			event.eventType = eventName;
		}

		event.eventName = eventName;

		if (document.createEvent) {
			element.dispatchEvent(event);
		} else {
			(element as any).fireEvent("on" + event.eventType, event);
		}
	};
}

export const utils = new Utils();
