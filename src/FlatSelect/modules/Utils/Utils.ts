import {
	DirectCrmError,
	IDictionary,
	QuantityFormDto,
	TypeWithIsValid,
	UtilsEvent
} from "./types";

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

	public getQuantityFormExtended = (
		rawQuantity: string | number,
		quantityFormDto: QuantityFormDto
	) => {
		return this.getQuantityForm(
			rawQuantity,
			quantityFormDto.singularForm,
			quantityFormDto.dualForm,
			quantityFormDto.pluralForm,
			quantityFormDto.sevenEightForm
		);
	};

	public getQuantityForm = (
		rawQuantity: string | number,
		singularForm: string,
		dualForm: string,
		pluralForm: string,
		sevenEightForm?: string
	) => {
		const quantity = Number(rawQuantity);
		if (quantity !== 0 && !quantity) {
			return pluralForm;
		}

		const last2Digits = quantity % 100;
		const lastDigit = last2Digits % 10;
		const lastButOneDigit = (last2Digits - lastDigit) / 10;

		return lastButOneDigit === 1
			? pluralForm
			: lastDigit === 1
			? singularForm
			: lastDigit === 2 || lastDigit === 3 || lastDigit === 4
			? dualForm
			: sevenEightForm && (lastDigit === 7 || lastDigit === 8)
			? sevenEightForm
			: pluralForm;
	};

	public isFloat = (val: any) => {
		const floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
		if (!floatRegex.test(val)) {
			return false;
		}

		val = parseFloat(val);
		if (isNaN(val)) {
			return false;
		}
		return true;
	};

	public isInt = (val: any) => {
		const intRegex = /^-?\d+$/;
		if (!intRegex.test(val)) {
			return false;
		}

		const intVal = parseInt(val, 10);
		return parseFloat(val) === intVal && !isNaN(intVal);
	};

	public makeNullIfEmpty = (value: string) => {
		if (value === "") {
			return null;
		} else {
			return value;
		}
	};

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

	public enableScroll = () => {
		if (window.removeEventListener) {
			window.removeEventListener(
				"DOMMouseScroll",
				this.preventDefault,
				false
			);
		}
		// @ts-ignore
		window.onmousewheel = document.onmousewheel = null;
		window.onwheel = null;
		window.ontouchmove = null;
		document.onkeydown = null;

		this.enableBodyScroll();

		this.isScrollEnabled = true;
		this.scrollableElements = [];
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

	public handleAjaxError = (
		xhr: XMLHttpRequest,
		state: {},
		error: string
	) => {
		const reloginUrl = xhr.getResponseHeader("Authorization-Required");
		if (reloginUrl) {
			window.location.href =
				reloginUrl +
				"?ReturnUrl=" +
				encodeURIComponent(window.location.pathname);
		}

		if (error !== "abort" && status) {
			// tslint:disable-next-line: no-console
			console.warn(status, error);
		}
	};

	public GenerateSystemName(
		name: string | number,
		typeName: string,
		onGenerationFinished: (systemName: string) => void
	) {
		const data = {
			name,
			typeName
		};
		fetch("/system-name/generate", {
			method: "GET",
			// tslint:disable-next-line: object-literal-sort-keys
			cache: "no-cache",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then((res: { SystemName: string }) =>
				onGenerationFinished(res.SystemName)
			);
	}

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

	public alertForAjaxError = (error: DirectCrmError) => {
		const errorMessage =
			error.errorMessage == null
				? "An unknown error has occured"
				: error.errorMessage;
		alert(errorMessage);
		// tslint:disable-next-line: no-console
		console.error(this.makeErrorLink(error));
	};

	public postImageToAdministrationSite = async <T>(
		relativeUri: string,
		payload: any
	): Promise<T> => {
		const response = await fetch(relativeUri, {
			method: "POST",
			credentials: "same-origin",
			headers: {
				"X-Requested-With": "XMLHttpRequest",
				pragma: "no-cache",
				"cache-control": "no-cache"
			},
			body: payload
		});

		if (response.status < 400) {
			return response.json();
		}

		return this.getErrorPromise(response);
	};

	public fetchJsonFromAdministrationSite = async <T>(
		relativeUri: string,
		method: string = "GET",
		payload: string | object
	): Promise<T> => {
		const response = await this.fetchFromAdministrationSite(
			relativeUri,
			method,
			(payload = "")
		);

		if (response.status < 400) {
			return response.json();
		}

		return this.getErrorPromise(response);
	};

	public getResponseFromAdministrationSite = async (
		relativeUri: string,
		payload: string | object
	): Promise<string> => {
		const response = await this.fetchFromAdministrationSite(
			relativeUri,
			"GET",
			payload
		);

		if (response.status < 400) {
			return response.text();
		}

		return this.getErrorPromise(response);
	};

	public postToAdministrationSiteNoResponse = async (
		relativeUri: string,
		payload: string | object
	): Promise<any> => {
		const response = await this.fetchFromAdministrationSite(
			relativeUri,
			"POST",
			payload
		);

		if (response.status < 400) {
			return await response.text();
		}

		return this.getErrorPromise(response);
	};

	public postToAdministrationSite = async <TResponse = void>(
		relativeUri: string,
		payload: string | object
	): Promise<TResponse> => {
		const response = await this.fetchFromAdministrationSite(
			relativeUri,
			"POST",
			payload
		);

		if (response.status < 400) {
			return await response.json();
		}

		return this.getErrorPromise(response);
	};

	public postStringToAdministrationSite = async <TResponse = void>(
		relativeUri: string,
		body: string
	): Promise<TResponse> => {
		const params: RequestInit = {
			credentials: "same-origin",
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"X-Requested-With": "XMLHttpRequest",
				pragma: "no-cache",
				"cache-control": "no-cache"
			},
			body
		};

		const response = await fetch(relativeUri, params);

		if (response.status < 400) {
			return await response.json();
		}

		return this.getErrorPromise(response);
	};

	public copyTextToClipboard(text: string) {
		const textArea = document.createElement("textarea");

		textArea.style.position = "fixed";
		textArea.style.top = "0";
		textArea.style.left = "0";
		textArea.style.width = "2em";
		textArea.style.height = "2em";
		textArea.style.padding = "0";
		textArea.style.border = "none";
		textArea.style.outline = "none";
		textArea.style.boxShadow = "none";
		textArea.style.background = "transparent";

		textArea.value = text;

		document.body.appendChild(textArea);

		textArea.select();

		document.execCommand("copy");

		document.body.removeChild(textArea);
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

	// HACK: Зависит от верстки.
	private enableBodyScroll = () => {
		document.body.style.overflow = "auto";
		document.body.style.marginRight = `0`;

		const headerElement: HTMLElement | null = document.querySelector(
			".header"
		);
		// tslint:disable-next-line: no-unused-expression
		headerElement && (headerElement.style.marginRight = `0`);
	};

	private getJsonBody(payload: string | object): string {
		if (typeof payload === "string") {
			return payload;
		}
		if (payload === null) {
			return "";
		}

		return JSON.stringify(payload);
	}

	private makeErrorLink = (error: DirectCrmError) =>
		`Extended error info: https://pmon.directcrm.ru/logs/message/byguid/${
			error.errorId
		}`;

	private fetchFromAdministrationSite = async (
		relativeUri: string,
		method: string,
		payload: string | object
	): Promise<Response> => {
		const body = this.getJsonBody(payload);

		const params: RequestInit = {
			credentials: "same-origin",
			method,
			headers: {
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest",
				pragma: "no-cache",
				"cache-control": "no-cache"
			}
		};

		if (body != null) {
			params.body = body;
		}

		return await fetch(relativeUri, params);
	};

	private getErrorPromise = async (response: Response): Promise<never> => {
		const errorMessage = await response.json();

		// tslint:disable-next-line: no-console
		console.error(this.makeErrorLink(errorMessage));
		return Promise.reject(errorMessage);
	};
}

export const utils = new Utils();
