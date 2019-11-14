import "./WindowClickListener.scss";

type Handler = () => void;

export const IsntNeutralZoneMarker: string = "kit-overflow-isnt-neutral-zone-marker";

export interface IWindowClickListener {
    stop: () => void;
}

const fromElementWithClassEvent = (event: Event, elementClass: string): boolean => {
    return event.composedPath().some(
        pathEvent => {
            const elementPath = pathEvent as HTMLElement;
            return elementPath.classList != null
                && elementPath.classList.contains(elementClass);
        }
    )
}

export const CreateWindowClickListener = function (handler: Handler, ...excludingTargetElements: HTMLElement[]): IWindowClickListener {

    const fromExcludingTargetElementsEvent = (event: Event) => {
        if (excludingTargetElements == null) {
            return false;
        }
        const targetElement = event.target as HTMLElement;

        return excludingTargetElements.some(
            exludingElement => exludingElement.contains(targetElement)
        );
    }

    const onClickInWindow = (event: Event) => {
        if (
            event.isTrusted
            && !fromElementWithClassEvent(event, IsntNeutralZoneMarker)
            // TODO: delete when unused legacy datapicker by jQuery
            && !fromElementWithClassEvent(event, "ui-datepicker")
            && !fromExcludingTargetElementsEvent(event)
        ) {
            handler();
        }
    }

    window.addEventListener("click", onClickInWindow);

    return {
        stop: function () {
            window.removeEventListener("click", onClickInWindow);
        }
    }
}