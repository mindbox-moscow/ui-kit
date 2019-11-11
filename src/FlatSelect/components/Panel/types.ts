// tslint:disable-next-line: interface-name
export interface PanelProps {
	show: boolean;
	isNested?: boolean;
	boundingRectangle: DropdownClientRect;
	className?: string;
	clickOutsideEventHandler: (event: PanelEventObject) => void;
	allowedClickTargetClasses?: string[];
}

// tslint:disable-next-line: interface-name
export interface DropdownClientRect extends ClientRect {
	widthOverride?: number;
}

// tslint:disable-next-line: interface-name
export interface PanelEventObject
	extends BasePanelEventObject,
		PanelInputEventObject,
		PanelMouseEventObject,
		PanelKeyEventObject {}

// tslint:disable-next-line: interface-name
export interface BasePanelEventObject extends Event {
	data: any;
	delegateTarget: Element;
	namespace: string;
	originalEvent: Event;
	relatedTarget: Element;
	result: any;
	target: Element;
	pageX: number;
	pageY: number;
	which: number;
	metaKey: boolean;
	isDefaultPrevented(): boolean;
	isImmediatePropagationStopped(): boolean;
	isPropagationStopped(): boolean;
	preventDefault(): any;
	stopImmediatePropagation(): void;
	stopPropagation(): void;
}

// tslint:disable-next-line: interface-name
export interface PanelInputEventObject extends BasePanelEventObject {
	altKey: boolean;
	ctrlKey: boolean;
	metaKey: boolean;
	shiftKey: boolean;
}

// tslint:disable-next-line: interface-name
export interface PanelMouseEventObject extends PanelInputEventObject {
	button: number;
	clientX: number;
	clientY: number;
	offsetX: number;
	offsetY: number;
	pageX: number;
	pageY: number;
	screenX: number;
	screenY: number;
}

// tslint:disable-next-line: interface-name
export interface PanelKeyEventObject extends PanelInputEventObject {
	char: any;
	charCode: number;
	key: any;
	keyCode: number;
}
