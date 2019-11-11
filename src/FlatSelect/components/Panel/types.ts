// tslint:disable-next-line: interface-name
export interface PanelProps {
	show: boolean;
	isNested?: boolean;
	boundingRectangle: DropdownClientRect;
	className?: string;
	clickOutsideEventHandler: (event: JQueryEventObject) => void;
	allowedClickTargetClasses?: string[];
}

// tslint:disable-next-line: interface-name
export interface DropdownClientRect extends ClientRect {
	widthOverride?: number;
}

interface JQueryEventObject
	extends BaseJQueryEventObject,
		JQueryInputEventObject,
		JQueryMouseEventObject,
		JQueryKeyEventObject {}

interface BaseJQueryEventObject extends Event {
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

interface JQueryInputEventObject extends BaseJQueryEventObject {
	altKey: boolean;
	ctrlKey: boolean;
	metaKey: boolean;
	shiftKey: boolean;
}

interface JQueryMouseEventObject extends JQueryInputEventObject {
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

interface JQueryKeyEventObject extends JQueryInputEventObject {
	char: any;
	charCode: number;
	key: any;
	keyCode: number;
}
