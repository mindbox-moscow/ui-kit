export class PreloaderHelper {
	get isShown(): boolean {
		return this.counter !== 0;
	}
	private element: HTMLElement | null;
	private tableoverlay: HTMLElement | null;
	private overlay: HTMLElement | null;
	private header: HTMLElement | null;
	private speed: number;
	private delay: number;
	private timer: number | null;
	private counter: number;
	private xpos: number;
	private index: number;
	private isCssAnimation: boolean;

	constructor() {
		this.xpos = 0;
		this.delay = 0;
		this.index = 0;
		this.speed = 4;
		this.element = null;
		this.overlay = null;
		this.tableoverlay = null;
		this.counter = 0;
		this.isCssAnimation = false;

		const fragment = document.createDocumentFragment(),
			element = document.createElement("DIV"),
			overlay = document.createElement("DIV");

		element.className = "preloader";
		overlay.className = "preloader-overlay";
		overlay.addEventListener("click", e => e.stopPropagation());
		fragment.appendChild(element);
		fragment.appendChild(overlay);
		document.getElementsByTagName("body")[0].appendChild(fragment);
		this.element = element;
		this.overlay = overlay;
		this.delay = 1 / Math.round(100 / this.speed);
		if (undefined !== this.element.style.animationName) {
			this.isCssAnimation = true;
		}
	}

	public showWithMenuBlocked() {
		this.show(null, null, true);
	}

	public show(
		trigger?: HTMLElement | null,
		tableOverlay?: HTMLElement | null,
		blockMenu?: boolean | null
	) {
		if (trigger != null) {
			if (trigger.getAttribute("data-preloader-counter") === "1") {
				return;
			}

			const timerName = new Date().getTime().toString();
			const element = document.createElement("DIV");
			element.className = "preloader_trigger state-active";
			trigger.className += " trigger-preloader";
			trigger.setAttribute("data-preloader-name", timerName.toString());
			trigger.setAttribute("data-preloader-counter", "1");
			trigger.appendChild(element);
		} else {
			clearTimeout(this.timer!);
			this.counter++;
			if (this.counter !== 1) {
				return;
			}

			if (this.isCssAnimation) {
				this.element!.className += " state-active";
			} else {
				this.startAnimation(this.element!);
				this.element!.style.display = "block";
			}

			if (tableOverlay) {
				this.tableoverlay = tableOverlay;
				this.tableoverlay.style.display = "block";
			} else {
				this.overlay!.style.cssText =
					"display:block;top:" +
					(blockMenu ? "0px" : this.getOffsetHeader()) +
					";";
			}
		}
	}

	public hide(trigger?: HTMLElement) {
		if (trigger != null) {
			if (trigger.getAttribute("data-preloader-counter") !== "1") {
				return;
			}
			trigger.setAttribute("data-preloader-counter", "0");
			trigger.removeChild(trigger.lastChild!);
			trigger.className = trigger.className.replace(
				" trigger-preloader",
				""
			);
		} else {
			clearTimeout(this.timer!);
			this.counter = Math.max(--this.counter, 0);
			if (this.counter !== 0) {
				return;
			}

			this.timer = null;

			if (this.isCssAnimation) {
				this.element!.className = this.element!.className.replace(
					" state-active",
					""
				);
			} else {
				this.element!.removeAttribute("style");
			}

			this.overlay!.removeAttribute("style");
			if (this.tableoverlay != null) {
				this.tableoverlay.style.display = "none";
			}
		}
	}

	private getOffsetHeader() {
		this.header = document.getElementById("HeaderFixed");
		const isDialogOpen =
			document.querySelectorAll(".ui-dialog").length ||
			document.querySelectorAll(".dialog").length;
		if (this.header && isDialogOpen < 1) {
			return this.header.offsetHeight + "px";
		}
		return "0px";
	}

	private startAnimation(element: HTMLElement) {
		this.timer = window.setTimeout(() => {
			this.continueAnimation(element);
		}, this.delay / 1000);
	}

	private continueAnimation(element: HTMLElement) {
		this.xpos += 42;
		this.index += 1;
		if (this.index >= 24) {
			this.xpos = 0;
			this.index = 0;
		}
		element.style.backgroundPosition = -this.xpos + "px 0";
		this.timer = window.setTimeout(() => {
			this.continueAnimation(element);
		}, this.delay * 1000);
	}
}

export const Preloader = new PreloaderHelper();
