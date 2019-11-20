import { IDictionary, TypeWithIsValid, UtilsEvent } from "./types";

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

	private scrollBarWidth: number | null = null;

	constructor() {
		if (Utils.instance == null) {
			Utils.instance = this;
		}

		return Utils.Instance;
	}

	public getIsValid(context: TypeWithIsValid) {
		if (typeof context.isValid === "undefined") {
			return true;
		}

		return context.isValid;
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

	public preventDefault = (e: Event) => {
		e = e || window.event;

		const target: IDictionary<any> | null = e.target;

		if (this.scrollableElements.length > 0) {
			if (
				this.scrollableElements.some(el =>
					this.isDescendant(el, e.target as Node)
				) ||
				(target!.attributes.class &&
					target!.attributes.class.value.indexOf(
						"select2-result-label"
					) !== -1)
			) {
				return;
			}
		}

		if (e.preventDefault) {
			e.preventDefault();
		}
		e.returnValue = false;
	};

	public preventDefaultForScrollKeys = (e: KeyboardEvent) => {
		const target: IDictionary<any> | null = e.target;

		if (target && target.tagName === "INPUT") {
			return true;
		}

		if (this.disableScrollKeys.indexOf(e.keyCode) !== -1) {
			this.preventDefault(e);
			return false;
		}

		return true;
	};

	public disableScroll = () => {
		if (window.addEventListener) {
			// older FF
			window.addEventListener(
				"DOMMouseScroll",
				this.preventDefault,
				false
			);
		}
		window.onwheel = this.preventDefault; // modern standard
		// @ts-ignore
		window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
		window.ontouchmove = this.preventDefault; // mobile
		document.onkeydown = this.preventDefaultForScrollKeys;

		this.disableBodyScroll();

		this.isScrollEnabled = false;
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

	public getScrollBarWidth() {
		if (!this.scrollBarWidth) {
			const inner = document.createElement("p");
			inner.style.width = "100%";
			inner.style.height = "200px";

			const outer = document.createElement("div");
			outer.style.position = "absolute";
			outer.style.top = "0px";
			outer.style.left = "0px";
			outer.style.visibility = "hidden";
			outer.style.width = "200px";
			outer.style.height = "150px";
			outer.style.overflow = "hidden";
			outer.appendChild(inner);

			document.body.appendChild(outer);
			const w1 = inner.offsetWidth;
			outer.style.overflow = "scroll";
			let w2 = inner.offsetWidth;
			if (w1 === w2) {
				w2 = outer.clientWidth;
			}

			document.body.removeChild(outer);

			this.scrollBarWidth = w1 - w2;
		}

		return this.scrollBarWidth;
	}

	// HACK: Зависит от верстки.
	private disableBodyScroll = () => {
		const scrollbarWidth = this.getScrollBarWidth();

		const body = document.body;
		const bodyHasScrollbar =
			body.scrollHeight > body.getBoundingClientRect().height;

		if (bodyHasScrollbar) {
			document.body.style.overflow = "hidden";
			document.body.style.marginRight = `${scrollbarWidth}px`;

			const headerElement: HTMLElement | null = document.querySelector(
				".header"
			);
			// tslint:disable-next-line: no-unused-expression
			headerElement &&
				(headerElement.style.marginRight = `${scrollbarWidth}px`);
		}
	};
}

export const utils = new Utils();
